import * as cdk from 'aws-cdk-lib';
import { SecureParameterStore } from './index';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'TestSecureParameterStoreStack');

new SecureParameterStore(stack, 'TestSecureParameterStore', {
  name: 'cdk-secure-parameter-store-ParameterName',
  value: 'Secret Parameter Value',
});
