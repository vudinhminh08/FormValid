// function Validator(options) {
//     var formElement = document.querySelector(options.form);
//     console.log(options.rules);
//     if(formElement) {
//         options.rules.forEach(function(rules) {
//             var inputElement = formElement.querySelector(rule.selector);
//             if(inputElement) {
//                 inputElement.onblur = function() {
                    
//                 }
//             }
//         });
//     }

// }
// Validator.isName = function(selector) {
//     return {
//         selector: selector,
//         test: function() {

//         }
//     };

// }
// Validator.isEmail = function(selector) {
//     return {
//         selector: selector,
//         test: function() {
            
//         }
//     };
// }
const form = document.getElementById('form');
const password1El = document.getElementById('password');
const password2El = document.getElementById('repassword');
const messageContainer = document.querySelector('.message-auth-form_form');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity();
  // Style main message for an error
  if (!isValid) {
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
  // Check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  }
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}
