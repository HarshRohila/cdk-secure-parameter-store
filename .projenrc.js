const { awscdk, javascript } = require('projen');

const cdkVersion = '2.133.0'; /* First release of 2023 */

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Harsh Rohila',
  authorAddress: 'rohilaharsh@gmail.com',
  cdkVersion,
  defaultReleaseBranch: 'master',
  packageManager: javascript.NodePackageManager.PNPM,
  name: 'cdk-secure-parameter-store',
  repositoryUrl: 'https://github.com/HarshRohila/cdk-secure-parameter-store.git',
  // cdkTestDependencies: undefined,  /* AWS CDK modules required for testing. */
  peerDeps: ['constructs', 'aws-cdk-lib'],
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: ['aws-cdk-lib'],
  keywords: ['cdk', 'parameter store', 'secure parameter store'],
  scripts: {
    'dev:deploy': "yarn build && npx cdk deploy --app='./lib/integ.default.js'",
  },
  gitignore: ['cdk.out'],
  devDeps: [`cdk@${cdkVersion}`, '@aws-sdk/client-ssm'],
  // packageName: undefined,          /* The "name" in package.json. */
  // release: undefined,              /* Add release management to this project. */
});
project.synth();
