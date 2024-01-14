const submitBtn = document.getElementById('submit');
const emailInput = document.getElementById('email'); // Get the input element, not the value
const errorMessage = document.getElementById('error-message'); // Get the error message element

submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from being submitted
    const emailValue = emailInput.value;
    if(validateEmail(emailValue)) {
        suscribePage(emailValue);
    } else {
        errorMessage.textContent = 'Valid email required'; // Set the error message
        errorMessage.style = `
        display: flex;
        justify-content: end;
        margin-right: 10px;
        margin-top: -27px;
        color: hsl(4, 100%, 67%);;
        `; // Show the error message
        emailInput.classList.add('error'); // Add the error class
    }
});

const suscribePage = (email) => { // Accept the email as a parameter
    document.body.innerHTML = `
    <div id="suscribe-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
    <h1>Thanks for subscribing!</h1>
    <p>A confirmation link has been sent to <span class="email-sp">${email}</span>. Please open it and click the button inside to confirm your subscription.</p>
    <button id="dismiss-btn"><a href="index.html">Dismiss message</a></button>
    </div>
    `
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



