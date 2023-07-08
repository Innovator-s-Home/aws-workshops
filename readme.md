# AWS workshops

## Installation Guide

- AWS Account: Make sure you have an AWS account. If you don't have one, you can create a free account at https://aws.amazon.com/.

- AWS CLI: Install the AWS Command Line Interface (CLI) on your machine by following the instructions provided in the AWS CLI documentation: https://aws.amazon.com/cli/.

- AWS IAM User: Create an IAM user in your AWS account with the necessary permissions for deploying your Serverless project. To create an IAM user, follow these steps:

    - Log in to the AWS Management Console.
    - Open the IAM service.
    - Click on "Users" in the left-hand navigation pane.
    - Click on "Add user" to create a new IAM user.
    - Provide a username and choose "Programmatic access" as the access type.
    - Proceed to set permissions for the user. Depending on your project requirements, you can either assign an existing policy or create a custom policy with the necessary permissions for your Serverless project. At a minimum, the user should have permissions for AWS Lambda, API Gateway, and any other AWS services your project relies on.
    - Complete the user creation process and make note of the access key ID and secret access key generated for the user.
- Configure AWS CLI: Open a command prompt or terminal and run the following command:

```bash
aws configure
```

This command will prompt you to enter your AWS Access Key ID, AWS Secret Access Key, default region name, and default output format. Provide the access key ID and secret access key obtained in the previous step, choose a region that matches the AWS region you want to deploy to (in this case, ap-south-1), and choose an output format (e.g., json).

- Verify Credentials: To verify that your AWS credentials are set up correctly, run the following command:
  
```bash
aws sts get-caller-identity
```

If the command returns the details of your AWS account, it means that the credentials are configured correctly.


Once you have set up and verified your AWS credentials, try deploying your Serverless project again using the serverless deploy command. It should now be able to authenticate with AWS and proceed with the deployment process.