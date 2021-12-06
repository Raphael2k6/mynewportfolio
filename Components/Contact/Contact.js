import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { userId, templateId, serviceId } from '../../constants';
import styles from './Contact.module.css';
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillInstagram,
    AiFillFacebook,
} from 'react-icons/ai';
import Spinner from '../Spinner/Spinner';

export const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const [thanks, setThanks] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
      if(form.current === null){
          console.log("hjkhj")
          return
      }
      setLoading(true);
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
          setLoading(false);
          setThanks(true);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const style = {
    paddingRight: "10px",
    fontSize: "35px"
};

  return (
    <section className={styles.container} id="contact">
        <div className={styles.formHolder}>
        <p>You can reach out to me for projects and collaborations</p>
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <label>Name</label><br /><br />
                <input type="text" name="user_name" /> <br />
                <label>Email</label><br /> <br />
                <input type="email" name="user_email" /> <br />
                <label>Message</label><br /><br />
                <textarea name="message" /><br />
                <button 
                    type="submit"
                    disabled={loading}
                >
                    Send
                </button>
                {loading && <Spinner /> }
                {thanks && <p>Thank you for contacting me.</p>}
            </form>
            <div className={styles.social}>
                <a href="https://linkedin.com/in/raphael-donanu" target="_blank" rel="noopener noreferrer"><AiFillLinkedin style={style} /></a>
                <a href="https://github.com/Raphael2k6" target="_blank" rel="noopener noreferrer"><AiFillGithub style={style} /></a>
                <a href="https://www.facebook.com/raphael.donanu" target="_blank" rel="noopener noreferrer"><AiFillFacebook style={style} /></a>
                <a href="https://www.instagram.com/tonubarii/?hl=en" target="_blank" rel="noopener noreferrer"> <AiFillInstagram style={style} /></a>
            </div>
        </div>
    </section>
  );
};

export default ContactUs;