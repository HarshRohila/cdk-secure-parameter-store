const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Harsh Rohila',
  authorAddress: 'rohilaharsh@gmail.com',
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'master',
  name: 'cdk-secure-parameter-store',
  repositoryUrl: 'https://github.com/HarshRohila/cdk-secure-parameter-store.git',

  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-iam',
    '@aws-cdk/custom-resources',
    '@aws-cdk/aws-logs',
  ],
  // cdkTestDependencies: undefined,  /* AWS CDK modules required for testing. */
  deps: ['aws-sdk'],
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    '@aws-cdk/core',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-iam',
    '@aws-cdk/custom-resources',
    '@aws-cdk/aws-logs',
  ],
  keywords: ['cdk', 'parameter store', 'secure parameter store'],
  bundledDeps: ['aws-sdk'],
  scripts: {
    'dev:deploy': "yarn build && npx cdk deploy --app='./lib/integ.default.js'",
  },
  // packageName: undefined,          /* The "name" in package.json. */
  // release: undefined,              /* Add release management to this project. */
});
project.synth();
