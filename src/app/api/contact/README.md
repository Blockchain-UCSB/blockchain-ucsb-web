# Contact Form Email Setup

This API endpoint handles sending contact form submissions to blockchainatucsb@gmail.com.

## Setup Instructions

1. Create a `.env.local` file in the root of the project
2. Add the following environment variables:

```
# Email configuration
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASSWORD=your-app-password
```

### Creating a Gmail App Password

For security reasons, Gmail requires you to use an "App Password" rather than your regular account password.

To create an App Password:

1. Go to your Google Account settings
2. Enable 2-Step Verification if not already enabled
3. Go to [App passwords](https://myaccount.google.com/apppasswords)
4. Select "Mail" as the app and "Other" as the device
5. Enter a name (e.g., "UCSB Blockchain Website")
6. Google will generate a 16-character password - use this for `EMAIL_PASSWORD`

## Testing

Test your setup by submitting the contact form with valid data. Check your email to ensure you receive the submission.

If there are issues, check the server logs for error messages. 