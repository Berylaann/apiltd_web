const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();





function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "berylaann@gmail.com",
        Password : "#",
        To : 'contact@apiltd.co',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
 
let video = document.getElementById("myVideo");
let btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

