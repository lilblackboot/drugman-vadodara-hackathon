import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

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
    password = document.querySelector('#user-password'),
    email = document.querySelector('#mail'),
    errorDisplayers = document.getElementsByClassName('error'),
    inputFields = document.querySelectorAll('input')

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
        // Firebase authentication
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                // Signed in
                alert("Login successful");
<<<<<<< HEAD
                window.location.href = "../inventory-management-dashboard/index.html";
=======
                window.location.href = "/hackathon/web loader/again.html";
>>>>>>> cde66b85713f1bc67456fb9489b310d80e3f84aa
            })
            .catch((error) => {
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
