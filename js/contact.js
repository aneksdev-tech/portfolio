// ==========================
// WHATSAPP CONTACT
// ==========================

const contactForm = document.getElementById("contact-form");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

function showToast(message, isError = false) {

    toastMessage.textContent = message;

    toast.classList.remove("error");

    if (isError) {
        toast.classList.add("error");
    }

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

}

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const phone = contactForm.phone.value.trim();
    const subject = contactForm.subject.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !subject || !message) {
        showToast("Please fill in all required fields.", true);
        return;
    }

    const submitBtn = contactForm.querySelector(".whatsapp-btn");

    submitBtn.disabled = true;
    submitBtn.innerHTML = "<i class='bx bxl-whatsapp'></i> Opening WhatsApp...";

    const whatsappMessage =
`Hello AneksDev,

I visited your portfolio website and I'm interested in discussing a project with you.

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone || "Not provided"}
*Subject:* ${subject}

*Message:*
${message}`;

    const whatsappURL =
`https://wa.me/2349067627242?text=${encodeURIComponent(whatsappMessage)}`;

    showToast("Opening WhatsApp...");

    setTimeout(() => {

        window.open(whatsappURL, "_blank");

        contactForm.reset();

        submitBtn.disabled = false;
        submitBtn.innerHTML = "<i class='bx bxl-whatsapp'></i> Send via WhatsApp";

    }, 700);

});

// ==========================
// EMAIL (GMAIL COMPOSE)
// ==========================

const emailBtn = document.querySelector(".email-btn");

emailBtn.addEventListener("click", () => {

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const phone = contactForm.phone.value.trim();
    const subject = contactForm.subject.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !subject || !message) {
        showToast("Please fill in all required fields.", true);
        return;
    }

    showToast("Opening Gmail...");

    const body =
`Hello AneksDev,

I visited your portfolio website and I'm interested in discussing a project with you.

--------------------------------

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

--------------------------------

${message}`;

    const gmailURL =
`https://mail.google.com/mail/?view=cm&fs=1&to=aneksdev@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {

    window.open(gmailURL, "_blank");

    contactForm.reset();

    emailBtn.disabled = false;
    emailBtn.innerHTML = "<i class='bx bxs-envelope'></i> Email Me";

}, 700);

});