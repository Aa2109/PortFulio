import "./FormStyles.css";
import emailjs from '@emailjs/browser';
import React, { useState, useEffect } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    let timer;
    if (successMessage) {
      timer = setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [successMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // email js service id
    const serviceId = 'service_x4aeri2';
    const templateId = 'template_1dqowld';
    const publicKey = 'rCdmHFrSmoaXF-goU';

    // create objects that contain dynamic template name;
    const templateParams = {
      from_name: name,
      from_email: email,
      from_subject: subject,
      to_name: 'Aashif',
      message: message,
    };

    // send email using emailjs
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent Successfully: ", response);
        setName('');
        setEmail('');
        setMessage('');
        setSubject('');
        setLoading(false);
        setSuccessMessage('Email sent successfully!');
      })
      .catch((error) => {
        console.log("Error sending email: ", error);
        setLoading(false);
        setSuccessMessage('Error sending email. Please try again later.');
      });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="emailform">
        <label>Your Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Subject</label>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />

        <label>Message</label>
        <textarea rows="6" placeholder="Type Your message here"
          value={message} onChange={(e) => setMessage(e.target.value)} required>
        </textarea>

        {loading ? (
          <div className="loader" style={{ color: '#fff' }}>Loading...</div>
        ) : (
          <button className="btn" >Submit</button>
        )}
        {successMessage && <div className="success-message" style={{ color: 'green' }}>{successMessage}</div>}
      </form>
    </div>
  );
};

export default Form;
