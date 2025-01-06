import "./contact.css"
import Walmart from "../assets/walmart.png";
import Adobe from "../assets/adobe.png";
import Microsoft from "../assets/microsoft.png";
import Facebook from "../assets/facebook.png";
import Facebookicon from "../assets/facebook-icon.png"
import Instagramicon from "../assets/instagram.png"
import Twittericon from "../assets/twitter.png"
import Youtubeicon from "../assets/youtube.png"
import emailjs from '@emailjs/browser';
import { useRef } from "react";



export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6veihwj', 'template_c68dzzd', 'n30xORM10HOhXK8AV',)
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email Sent !");
          // e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <section id="contactPage">
        <div className="Clients">
            <h1 className="ContagePageTitle">My Clients</h1>
            <p className="clientDesc">
                I have had the opportunity to work in a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="" className="clientImg" />
                <img src={Adobe} alt="" className="clientImg" />
                <img src={Microsoft} alt="" className="clientImg" />
                <img src={Facebook} alt="" className="clientImg" />
            </div>
        </div>


        <div id="contact">
          <h1 className="ContagePageTitle">Contact Me</h1>
          <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your Name" name="your_name"/>
            <input type="email" className="email" placeholder="Your Email" name = "your_email"/>
            <textarea name='message' className="msg" rows= "5" placeholder="Your message"></textarea>
            <button type="submit" value="send" className="submitBtn">Submit</button>

            <div className="links">
              <img src={Facebookicon} alt="facebook" className="link"/>
              <img src={Instagramicon} alt="facebook" className="link"/>
              <img src={Twittericon} alt="facebook" className="link"/>
              <img src={Youtubeicon} alt="facebook" className="link"/>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}


