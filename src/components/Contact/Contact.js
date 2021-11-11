import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper } from "./ContactElements";


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qn7fv8v', 'template_ogjheq7', form.current, 'user_SJoh2Ho4sFOa9x6XrYkX8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
    alert("Mensaje enviado");
  };


  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">¿Conversamos?</div>
        <small>Formulario funcional gracias a EmailJS, recomendada</small>

        <div className="row mt-5">
          <div className="col-md-6">
            <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea className="form-control" id="message" rows="3" name="message" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary mt-3">Enviar</button>
            </form>
          </div>
          <div className="col-md-6 mt-5 mt-md-0 text-center">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63458.35960865503!2d-75.61623098184971!3d6.24428761571646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1636563676507!5m2!1ses!2sco" 
          width="400" height="300" style={{border:0}} allowFullScreen="" loading="lazy">
          </iframe>
          </div>
          
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
