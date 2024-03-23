import * as path from 'path';
import type { Parameter } from '@aws-sdk/client-ssm';
import { CustomResource, Stack } from 'aws-cdk-lib';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Code, Runtime, Function } from 'aws-cdk-lib/aws-lambda';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

let nameGenerator: ReturnType<typeof newResourceNameGenerator>;
export class SecureParameterStore extends Construct {
  constructor(scope: Construct, id: string, props: ISecureParameterStoreProps) {
    super(scope, id);

    let { resourceNamesPrefix } = props;

    if (!resourceNamesPrefix) {
      resourceNamesPrefix = 'CDK_SPS-';
    }

    nameGenerator = newResourceNameGenerator(resourceNamesPrefix);

    const customResourceName = nameGenerator.getPrefixedName('customResource');

    new CustomResource(this, customResourceName, {
      serviceToken: SecureParameterProvider.create(this, props),
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

class SecureParameterProvider extends Construct {
  /**
   * Returns the singleton provider.
   */
  public static create(scope: Construct, props: ISecureParameterStoreProps) {
    const id = 'cdk-secure-parameter-store.secureParameter-provider';
    const x = new SecureParameterProvider(scope, id, props);
    return x.provider.serviceToken;
  }

  private readonly provider: Provider;

  constructor(scope: Construct, id: string, props: ISecureParameterStoreProps) {
    super(scope, id);

    const { name, value } = props;

    const lambdaName = nameGenerator.getPrefixedName('handler');
    const customResourceProviderName = nameGenerator.getPrefixedName('customResourceProvider');
    const handlerPath = path.join(path.dirname(__dirname), 'functions');
    const iamResourceName = name.startsWith("/") ? name.substring(1) : name;

    const onEvent = new Function(scope, lambdaName, {
      handler: 'index.handler',
      code: Code.fromAsset(handlerPath),
      runtime: Runtime.NODEJS_18_X,
      initialPolicy: [
        new PolicyStatement({
          actions: ['ssm:*'],
          resources: [
            `arn:aws:ssm:${Stack.of(scope).region}:${Stack.of(scope).account}:parameter/${iamResourceName}`,
          ],
        }),
      ],
      environment: {
        PARAMETER_NAME: name!,
        PARAMETER_VALUE: value,
      },
    });

    this.provider = new Provider(this, customResourceProviderName, {
      onEventHandler: onEvent,
    });
  }
}

export interface ISecureParameterStoreProps {
  name: Parameter['Name'];
  value: string;
  resourceNamesPrefix?: string;
}
