# Email Subscription Form

This project is a simple email subscription form. It allows users to enter their email address and subscribe to a mailing list.

## Features

- Email input field: Users can enter their email address in this field.
- Submit button: Users can click this button to submit their email address.
- Email validation: The email address entered by the user is validated to ensure it's in the correct format.
- Error message: If the email address is not valid, an error message is displayed.

## How to Use

1. Open the `index.html` file in a web browser.
2. Enter your email address in the email input field.
3. Click the submit button to subscribe.

## Code Overview

The main JavaScript code is in the `script.js` file. It includes the following:

- `submitBtn`: This is the submit button element. An event listener is added to this button to handle the form submission.
- `emailInput`: This is the email input element. The value of this element is fetched when the submit button is clicked.
- `errorMessage`: This is the error message element. It is used to display an error message if the email address is not valid.

## Future Improvements

- Add a backend to store the email addresses of subscribers.
- Send a confirmation email to the user after they subscribe.