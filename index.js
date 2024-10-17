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
 
console.log("Hello Everyone!");

let username;
