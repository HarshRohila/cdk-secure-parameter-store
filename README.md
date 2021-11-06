# Secure Parameter Store

## Why

AWS CDK not having a way to create secure parameter store, and it recommends secret manager, which is costly.
This construct provides a way to create secure parameter store using CDK Custom Resource

## Usage

Similar to how other CDK constructs are used

```typescript
new SecureParameterStore(stack, 'MySecureParameterStore', {
  name: 'Parameter Name',
  value: 'Parameter Value',
});
```

## How it works

This construt creates a [Lambda backed Custom Resource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources-lambda.html), the lambda is using aws-sdk to create and delete parameter store, whenever Custom Resource is created and destroyed

For more info refer aws [docs](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html)

## For Contributors

### Deploy

- `yarn dev:deploy`

### Destroy

- `npx cdk destroy --app='./lib/integ.default.js'`
