import * as path from 'path';
import { PolicyStatement } from '@aws-cdk/aws-iam';
import { Code, Runtime, Function } from '@aws-cdk/aws-lambda';
import { Construct as CoreConstruct, CustomResource, Stack } from '@aws-cdk/core';
import { Provider } from '@aws-cdk/custom-resources';
import * as AWS from 'aws-sdk';
import { Construct, Node } from 'constructs';

let nameGenerator: ReturnType<typeof newResourceNameGenerator>;
export class SecureParameterStore extends CoreConstruct {
  constructor(scope: Construct, id: string, props: ISecureParameterStoreProps) {
    super(scope, id);

    let { resourceNamesPrefix } = props;

    if (!resourceNamesPrefix) {
      resourceNamesPrefix = 'CDK_SPS-';
    }

    nameGenerator = newResourceNameGenerator(resourceNamesPrefix);

    const customResourceName = nameGenerator.getPrefixedName('customResource');

    new CustomResource(this, customResourceName, {
      serviceToken: SecureParameterProvider.getOrCreate(this, props),
      resourceType: 'Custom::SecureParameter',
    });
  }
}

function newResourceNameGenerator(prefix: string) {
  return {
    getPrefixedName(resourceName: string) {
      return prefix + resourceName;
    },
  };
}

class SecureParameterProvider extends CoreConstruct {
  /**
   * Returns the singleton provider.
   */
  public static getOrCreate(scope: Construct, props: ISecureParameterStoreProps) {
    const stack = Stack.of(scope);
    const id = 'cdk-secure-parameter-store.secureParameter-provider';
    const x =
      (Node.of(stack).tryFindChild(id) as SecureParameterProvider) ||
      new SecureParameterProvider(stack, id, props);
    return x.provider.serviceToken;
  }

  private readonly provider: Provider;

  constructor(scope: Construct, id: string, props: ISecureParameterStoreProps) {
    super(scope, id);

    const { name, value } = props;

    const lambdaName = nameGenerator.getPrefixedName('handler');
    const customResourceProviderName = nameGenerator.getPrefixedName('customResourceProvider');
    const handlerPath = path.join(path.dirname(__dirname), 'functions');

    const onEvent = new Function(scope, lambdaName, {
      handler: 'index.handler',
      code: Code.fromAsset(handlerPath),
      runtime: Runtime.NODEJS_14_X,
      initialPolicy: [
        new PolicyStatement({
          actions: ['ssm:*'],
          resources: [
            `arn:aws:ssm:${Stack.of(scope).region}:${Stack.of(scope).account}:parameter/${name}`,
          ],
        }),
      ],
      environment: {
        PARAMETER_NAME: name,
        PARAMETER_VALUE: value,
      },
    });

    this.provider = new Provider(this, customResourceProviderName, {
      onEventHandler: onEvent,
    });
  }
}

export interface ISecureParameterStoreProps {
  name: AWS.SSM.Types.ParameterName;
  value: string;
  resourceNamesPrefix?: string;
}
