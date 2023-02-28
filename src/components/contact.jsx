import React from 'react'
import {AiOutlineMail} from 'react-icons/ai';
import {AiFillPhone} from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jwf8xzr', 'template_c19dk46', form.current, 'xRyIG0DOR0cdHGtVt')
          .then((result) => {
              console.log(result.text);
              alert("Message was successfully sent - I will get back to you as soon as possible :-)")
          }, (error) => {
              console.log(error.text);
              alert("An error occured: " + error.text)
          });
          e.target.reset()
      };

  return (
    <section id="contact" >
      <h2>Contact me</h2>
        <div className='container contact_container'>
            <div className="contact_options">
                <article className='contact_option'>
                    <AiOutlineMail className='contact_option_image'/>
                    <h4>Email</h4>
                    <h5>evanskaps@gmail.com</h5>
                    {/* <a href="maito:evanskaps@gmail.com">Send a message</a> */}
                </article>
                <article className='contact_option'>
                    <AiFillPhone className='contact_option_image' />
                    <h4>Mobile phone</h4>
                    <h5>+30 6983616172</h5>
                    {/* <a href="https://api.whatsapp.com/send?phone=+306983616172" rel="noreferrer" target='_blank'>Send a message</a> */}
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="email" name="email" placeholder='Your email' required/>
                <input type="text" name="subject" placeholder='Email subject' required/>
                <textarea name="message" rows='7' placeholder='Your message' required/>
                <button type='submit' className='btn'>Send message</button>
            </form>
        </div>

    </section>
  )
}
