import * as cdk from '@aws-cdk/core';
import { SecureParameterStore } from './index';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'MyTestStack');

new SecureParameterStore(stack, 'HarshSecureParameter', {
  name: 'harsh-secure-parameter',
  value: 'secret',
});
