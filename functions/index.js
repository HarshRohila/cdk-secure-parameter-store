const { SSMClient, DeleteParameterCommand, PutParameterCommand } = require('@aws-sdk/client-ssm');

const PARAMETER_NAME = process.env.PARAMETER_NAME;
const PARAMETER_VALUE = process.env.PARAMETER_VALUE;

exports.handler = (event) => {
  console.log(event);
  const { RequestType: requestType } = event;

  console.log(PARAMETER_NAME, PARAMETER_VALUE);

  switch (requestType) {
    case 'Create':
      return onCreate();
    case 'Update':
      return onCreate();
    case 'Delete':
      return onDelete();
  }
};

function getSsmClient() {
  return new SSMClient();
}

async function onDelete() {
  const client = getSsmClient();

  const input = {
    Name: PARAMETER_NAME,
  };

  const command = new DeleteParameterCommand(input);
  return await client.send(command);
}

async function onCreate() {
  const client = getSsmClient();

  const input = {
    Name: PARAMETER_NAME,
    Value: PARAMETER_VALUE,
    Type: 'SecureString',
    Overwrite: true,
  };

  const command = new PutParameterCommand(input);

  return await client.send(command);
}
