# Boilerplate Typescript LambdaFunction

## First edit thee templatee.yaml
You need edit the `arn:aws:iam::<ID>:role/service-role/<ROLE>` with the correct URI of role.

This function will be triggered by a shedule event `cron(1 3 * * ? *)`.

```yaml
 AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31
Description: >
  LAMBDAS
  RESMED

# More info about Globals: https://github.com/awslabs/serverless-application-model/blob/master/docs/globals.rst
Globals:
  Function:
    Timeout: 10

Resources:
  lambdaFunctionBoillerplate:
    Type: AWS::Serverless::Function # More info about Function Resource: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlessfunction
    Properties:
      CodeUri: .
      Handler: src/app.lambdaHandler
      Runtime: nodejs12.x
      Description: 'Boillerplate lambda function by Almerindo Rehem'
      MemorySize: 128
      Timeout: 10
      Role: >-
        arn:aws:iam::<ID>:role/service-role/<ROLE>
      Events:
        Schedule1:
          Type: Schedule
          Properties:
            Schedule: cron(1 3 * * ? *)
```
# Requirements
You need the `AWS SAM`!

https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install-linux.html
