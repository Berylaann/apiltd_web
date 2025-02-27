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
function Contact() {
 
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2759b30e-21b5-4a46-9a96-00b96ce964ca");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Form Submitted Successfully", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };
  return (
    <section id="contact-us">
      <Title subTitle="CONTACT US" title="Get in touch" />
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a message <img src={msg_icon} alt="message envelop" />
          </h3>
          <p>
            Our mission is to create a business model that empowers healthcare
            professionals and pharmacists to reach their full potential. We are
            an innovative company dedicated to developing sustainable systems
            that enhance the quality of healthcare delivery.
          </p>
          <ul>
            <li>
              <img src={mail_icon} alt="open mail" />
              contact@apiltd.co
            </li>
            <li>
              <img src={phone_icon} alt="phone" />
              +237 690 803 594
            </li>
            <li>
              <img src={location_icon} alt="location point" />
              Valle Commissariat 12eme Bonamoussadi <br /> P.O Box (BP) 15125
              Akwa, Douala, Cameroon
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />
            <label>Write your message here</label>
            <textarea
              type="tel"
              name="message"
              row="6"
              placeholder="Enter your message"
              required
            ></textarea>
            <button type="submit" className="btn dark-btn">
              Submit
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </section>
  );
}
