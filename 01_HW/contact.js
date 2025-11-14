document.getElementById("sendBtn").addEventListener("click", function() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  alert(
    "Message Sent Successfully!\n\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Phone: " + phone
  );
});
