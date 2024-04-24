import "./FormStyles.css";
import emailjs from '@emailjs/browser';

import React, { useState } from 'react'

const Form = () => {

const [name, setName] =useState('');
const [email, setEmail] =useState('');
const [message, setMessage] =useState('');
const [subject, setSubject] =useState('');

const handleSubmit = (e)=>{
  e.preventDefault();

// email js service id
const serviceId = 'service_x4aeri2';
const templateId='template_1dqowld'
const publicKey ='rCdmHFrSmoaXF-goU';

// create objects that contains dyanamic tmplate name;

const templateParams={
  from_name:name,
  from_email:email,
  from_subject:subject,
  to_name: 'Aashif',
  message:message,

};

// send email using emailjs
emailjs.send(serviceId,templateId, templateParams,publicKey)
.then((response)=>{
  console.log("Email sent Sucessfully: ", response);
  setName('');
  setEmail('');
  setMessage('');
  setSubject('');
})
.catch((error)=>{
  console.log("Error sending email: ", error)
})

}

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="emailform">
        <label >Your Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <label >Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label >Subject</label>
        <input type="text" value={subject} onChange={(e)=>setSubject(e.target.value)}/>

        <label >Message</label>
        <textarea  rows="6" placeholder="Type Your message here"
         value={message} onChange={(e)=>setMessage(e.target.value)}>
         </textarea>

        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form;