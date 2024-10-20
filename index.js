function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "berylaann@gmail.com",
        Password : "",
        To : 'contact@apiltd.co',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
 

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

let username;
