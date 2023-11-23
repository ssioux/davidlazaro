import "./contact.scss";

import { useRef } from "react";

import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const refForm = useRef();
  // SubmitForm sending Email
  // Email Library - https://www.emailjs.com/docs/examples/reactjs/
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID, // service ID
        import.meta.env.VITE_TEMPLATE_ID, // template ID
        refForm.current,
        import.meta.env.VITE_PUBLIC_KEY // Public_KEY
      );
      alert("Message successfully sent!");
      window.location.reload(false);
    } catch (error) {
      alert("Failed to send the message, please try again");
    }
  };
  return (
    <>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#D13636"
            d="M0,32L48,64C96,96,192,160,288,160C384,160,480,96,576,101.3C672,107,768,181,864,208C960,235,1056,213,1152,176C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <section className="contact-page" id="contact">
        <div className="contact-text-zone">
          <h1>Contact me</h1>
          <p>
            I am interested in companies that can give me the opportunity to
            improve my skills. However, if you have any other requests or
            questions, do not hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          David Lázaro,
          <br />
          Spain,
          <br />
          Calle Vitoria 178, 09007 <br />
          Burgos <br />
          <span>dlazaro7@gmail.com</span>
        </div>
        <div className="map-wrap">
         {/* Map library - https://react-leaflet.js.org/ */}
          <MapContainer
            center={[42.35165648088065, -3.6716139533494894]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[42.35165648088065, -3.6716139533494894]}>
              <Popup>
                David Lázaro lives here, come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer></div>
          
   
      </section>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#D13636"
            d="M0,32L48,64C96,96,192,160,288,160C384,160,480,96,576,101.3C672,107,768,181,864,208C960,235,1056,213,1152,176C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Contact;
