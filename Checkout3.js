document.addEventListener('DOMContentLoaded', () => {
    const fname = localStorage.getItem('fname');
    const lname = localStorage.getItem('lname');
    const fullName = `${fname} ${lname}`;
    const mobile = localStorage.getItem('mobile');
    const email = localStorage.getItem('email');
    const method = localStorage.getItem('method');
    const address = localStorage.getItem('address');
    const dateTime = localStorage.getItem('dateTime');

    const orderData = JSON.parse(localStorage.getItem("orderData")) || [];

    let orderDetails = [];
    let totalAmount = 0;

    const servicePrices = {
        "Full-Service": 220, 
        "Self-Service": 220,  
        "Drop-Off Service": 255,
        "Delivery Charge": 180,
        "Pickup Charge": 50
    };

    orderData.forEach(item => {
        const service = item.service;
        const quantity = item.quantity;

        if (quantity > 0) {
            orderDetails.push(`${quantity} - ${service}`);
            totalAmount += quantity * (servicePrices[service] || 0);
        }

    });

    document.querySelector('.datas-date').textContent = dateTime;
    document.querySelector('.datas-name').textContent = fullName;
    document.querySelector('.datas-email').textContent = email;
    document.querySelector('.datas-method').textContent = method;
    document.querySelector('.datas-address').textContent = address;
    document.querySelector('.datas-phone').textContent = mobile;
    document.querySelector('.datas-order').textContent = orderDetails.join(', ') || 'N/A';
    document.querySelector('.datas-total').textContent = `P ${totalAmount.toFixed(2)}`; 
});