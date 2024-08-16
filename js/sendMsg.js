const sendMsgBtn = document.querySelector(".sendMsgBtn");
const msgName = document.querySelector(".msgName");
const msgtext = document.querySelector(".msgPhoneNo");
const msgEmail = document.querySelector(".msgEmail");
const messageBox = document.querySelector(".message-box");

const HandleWhatsappMsg = (e) => {
  e.preventDefault();

  let message = `
                Hello there, \n
                My Name is ${msgName.value} \n
                My PhoneNumber is ${msgtext.value}\n
                My Email is ${msgEmail.value}\n
                My Message  ${messageBox.value}
   `;

  sendToWhatsApp(message);
};

function sendToWhatsApp(message) {
  // Encode the message to be URL-friendly
  const encodedMessage = encodeURIComponent(message);

  // Client's WhatsApp number (replace with actual number)
  const whatsappNumber = "14039660991"; // Use the full international format without '+' or '00'

  // WhatsApp URL scheme to open chat with pre-filled message
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Open the WhatsApp URL in a new tab or window
  window.open(whatsappUrl, "_blank");
}

sendMsgBtn.addEventListener("click", HandleWhatsappMsg);
