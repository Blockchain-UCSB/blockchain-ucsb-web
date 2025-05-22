# Officer Application Email Setup

This API endpoint handles sending officer application form submissions to blockchainatucsb@gmail.com.

## Functionality

When users submit the officer application form, this endpoint:
1. Validates the required fields (name, email, year, major, motivation)
2. Sends an email to blockchainatucsb@gmail.com with the application details
3. Returns a success or error response

## Setup

This endpoint uses the same email configuration as the contact form:

1. Make sure the `.env.local` file in the root of the project has these variables:
```
# Email configuration
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASSWORD=your-app-password
```

2. If you haven't already set up an App Password for Gmail, follow the instructions in the contact form README.

## Email Format

The email sent to blockchainatucsb@gmail.com includes:
- Subject: "Officer Application: [Applicant Name]"
- All application fields (name, email, year, major, motivation)
- Reply-to set to the applicant's email for easy responses

## Testing

After setting up the environment variables, test the functionality by submitting the officer application form with test data.

If issues occur, check the server logs for error messages. 