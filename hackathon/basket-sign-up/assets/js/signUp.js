import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByuuiw5kVc0pw9H8YQPe9OIxNDsvJ-dKY",
    authDomain: "vadodara-hackathon-5.firebaseapp.com",
    projectId: "vadodara-hackathon-5",
    storageBucket: "vadodara-hackathon-5.appspot.com",
    messagingSenderId: "182242098845",
    appId: "1:182242098845:web:d201e2be653fb11b3ede74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// DOM elements
const submitBtn = document.querySelector('.submit-btn'),
    phone = document.querySelector('#phone'),
    password = document.querySelector('#user-password'),
    passwordConfirm = document.querySelector('#user-password-confirm'),
    email = document.querySelector('#mail'),
    errorDisplayers = document.getElementsByClassName('error'),
    inputFields = document.querySelectorAll('input'),
    cardContainer = document.querySelector('.card-container'),
    outroOverlay = document.querySelector('.outro-overlay');

let count = 0; // Initialize count to 0 for validation

// Function to handle validation
function onValidation(current, messageString, isValid) {
    current.textContent = messageString;
    if (isValid) {
        count++;
    }
}

// Add event listeners for input fields to validate on keyup
for (let i = 0; i < inputFields.length; i++) {
    let currentInputField = inputFields[i];
    let currentErrorDisplayer = errorDisplayers[i];

    currentInputField.addEventListener('keyup', (e) => {
        if (e.target.value !== "") {
            onValidation(currentErrorDisplayer, '', true);
        } else {
            onValidation(currentErrorDisplayer, '*This field is Required', false);
        }
    });
}

// Phone number validation
phone.addEventListener('keyup', (e) => {
    let message = errorDisplayers[3];
    if (e.target.value === e.target.value.replace(/\D/g, '')) {
        onValidation(message, '', true);
    } else {
        onValidation(message, '*Please enter a valid number', false);
    }
});

// Email validation
email.addEventListener('keyup', (e) => {
    let message = errorDisplayers[2];
    if (email.value.includes('@') && email.value.includes('.com')) {
        onValidation(message, '', true);
    } else {
        onValidation(message, '*Please provide a valid Email', false);
    }
});

// Password length validation
password.addEventListener('keyup', (e) => {
    let message = errorDisplayers[4];
    if (password.value.length >= 8) {
        onValidation(message, '', true);
    } else {
        onValidation(message, 'Password requires a minimum of 8 characters', false);
    }
});

// Password confirmation validation
passwordConfirm.addEventListener('keyup', (e) => {
    let message = errorDisplayers[5];
    if (password.value === e.target.value) {
        onValidation(message, '', true);
    } else {
        onValidation(message, '*Password did not match', false);
    }
});

// Submit button click event listener
submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form from submitting

    // Reset count to check all validations again
    count = 0;
    for (let i = 0; i < inputFields.length; i++) {
        let currentErrorDisplayer = errorDisplayers[i];
        let currentInputField = inputFields[i];

        // Re-check each field validation
        if (currentInputField.value === '') {
            currentErrorDisplayer.textContent = '*This field is Required';
        } else {
            currentErrorDisplayer.textContent = '';
            count++;
        }
    }

    // Check if all validations passed
    if (count === inputFields.length) {
        cardContainer.style.display = 'none';
        outroOverlay.classList.remove('disabled');

        // Firebase authentication
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                window.location.href = "./login.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    } else {
        for (let i = 0; i < errorDisplayers.length; i++) {
            if (inputFields[i].value === '') {
                errorDisplayers[i].textContent = '*This field is Required';
            }
        }
    }
});
