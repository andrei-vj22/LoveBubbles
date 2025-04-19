document.querySelector('.next-page').addEventListener('click', () => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US');
    const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    const dateTimeString = `${formattedDate} - ${formattedTime}`;

    localStorage.setItem('dateTime', dateTimeString);
    localStorage.setItem('fname', document.getElementById('Fname').value);
    localStorage.setItem('lname', document.getElementById('Lname').value);
    localStorage.setItem('mobile', document.getElementById('mobile').value);
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('method', document.getElementById('method').value);
    localStorage.setItem('address', document.getElementById('address').value);

    window.location.href = 'Checkout3.html';
});

const patterns = {
    name: /^[A-Za-z]+$/,
    mobile: /^09\d{9}$/, 
    email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, 
    address: /^.+$/ 
};

function validateField(id, pattern) {
    const input = document.getElementById(id);
    const value = input.value.trim();

    if (pattern.test(value)) {
        input.style.border = ''; 
        return true;
    } else {
        input.style.border = '1px solid red';
        return false;
    }
}

valid(); 
function valid() {
    const isFnameValid = validateField('Fname', patterns.name);
    const isLnameValid = validateField('Lname', patterns.name);
    const isMobileValid = validateField('mobile', patterns.mobile);
    const isEmailValid = validateField('email', patterns.email);
    const isAddressValid = validateField('address', patterns.address);

    const nextButton = document.querySelector('.next-page');
    nextButton.disabled = !(isFnameValid && isLnameValid && isMobileValid && isEmailValid && isAddressValid);
}

document.getElementById('Fname').addEventListener('input', () => valid());
document.getElementById('Lname').addEventListener('input', () => valid());
document.getElementById('mobile').addEventListener('input', () => valid());
document.getElementById('email').addEventListener('input', () => valid());
document.getElementById('address').addEventListener('input', () => valid());
