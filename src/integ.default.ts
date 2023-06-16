import * as cdk from 'aws-cdk-lib';
import { SecureParameterStore } from './index';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'TestSecureParameterStoreStack');

new SecureParameterStore(stack, 'TestSecureParameterStoreA', {
  name: 'cdk-secure-parameter-store-ParameterNameA',
  value: 'Secret Parameter Value A',
});

new SecureParameterStore(stack, 'TestSecureParameterStoreB', {
  name: 'cdk-secure-parameter-store-ParameterNameB',
  value: 'Secret Parameter Value B',
});
