const AWS = require('aws-sdk');

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

async function onDelete() {
  const params = {
    Name: PARAMETER_NAME,
  };

  const ssm = new AWS.SSM();

  return ssm.deleteParameter(params).promise();
}

async function onCreate() {
  const ssm = new AWS.SSM();
  const params = {
    Name: PARAMETER_NAME,
    Value: PARAMETER_VALUE,
    Overwrite: true,
    Type: 'SecureString',
  };

  return ssm.putParameter(params).promise();
}
