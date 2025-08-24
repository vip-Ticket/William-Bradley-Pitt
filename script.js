    // Save selected plan
function selectPlan(plan) {
  localStorage.setItem("selectedPlan", plan);
  window.location.href = "benefits.html";
}

// Benefits page logic
if (window.location.pathname.includes("benefits.html")) {
  const plan = localStorage.getItem("selectedPlan");
  const title = document.getElementById("plan-title");
  const benefits = document.getElementById("plan-benefits");

  const plans = {
    Regular: "✔ Basic access ✔ Fan newsletter",
    Premium: "✔ VIP updates ✔ Exclusive merch ✔ Fan newsletter",
    VIP: "✔ Backstage pass ✔ Meet & greet ✔ Exclusive merch ✔ VIP updates"
  };

  title.textContent = `${plan} Membership Benefits`;
  benefits.textContent = plans[plan];
}

function proceedToPayment() {
  window.location.href = "payment.html";
}

// Payment form → Go to payment method page
if (window.location.pathname.includes("payment.html")) {
  document.getElementById("paymentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    localStorage.setItem("userName", document.getElementById("name").value);
    localStorage.setItem("userEmail", document.getElementById("email").value);
    localStorage.setItem("userPhone", document.getElementById("phone").value);
    window.location.href = "payment-method.html";
  });
}

// Payment method selection → Open Gmail with full message
function selectPaymentMethod(method) {
  const plan = localStorage.getItem("selectedPlan");
  const name = localStorage.getItem("userName");
  const email = localStorage.getItem("userEmail");
  const phone = localStorage.getItem("userPhone");

  const subject = `Payment Request for ${plan} Plan via ${method}`;
  const body = `Hello William Bradley Pitt Management,%0D%0A%0D%0A
I would like to subscribe to the ${plan} Fan Card plan.%0D%0A
Name: ${name}%0D%0A
Email: ${email}%0D%0A
Phone: ${phone}%0D%0A
Preferred Payment Method: ${method}%0D%0A
Please send me the payment details.%0D%0A%0D%0A
Thank you.`;
`
  window.location.href = https://mail.google.com/mail/?view=cm&fs=1&to=management@gmail.com&su=${subject}&body=${body}`;
}
