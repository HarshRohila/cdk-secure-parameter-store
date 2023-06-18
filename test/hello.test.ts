import { Template } from 'aws-cdk-lib/assertions';
import * as cdk from 'aws-cdk-lib/core';
import { SecureParameterStore } from '../src';

test('create app', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app);
  new SecureParameterStore(stack, 'TestStack', { name: 'test', value: 'value' });
  const template = Template.fromStack(stack);
  template.hasResource('AWS::Lambda::Function', {});
});
