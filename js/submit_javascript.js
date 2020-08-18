function sendMail() {
  let email = document.getElementById("exampleEmailInput").value;
  let phone = document.getElementById("phoneInput").value;
  let reasonToContact = document.getElementById("exampleRecipientInput").value;
  let Message = document.getElementById("exampleMessage").value;

  var link =
    "mailto:vijay.sangale@integliatech.com" +
    "?cc=vijay.sangale234@gmail.com" +
    "&subject=" +
    encodeURIComponent("Integlia , contact form ") +
    "&body=" +
    encodeURIComponent(document.getElementById("exampleMessage").value);
  window.location.href = link;
}
