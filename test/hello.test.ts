import * as cdk from '@aws-cdk/core';
import { SecureParameterStore } from '../src';
import '@aws-cdk/assert/jest';

test('create app', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app);
  new SecureParameterStore(stack, 'TestStack', { name: 'test', value: 'value' });
  expect(stack).toHaveResource('AWS::Lambda::Function');
});
