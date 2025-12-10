import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/email.png'
import mail_icon from '../../assets/mail_icon.png'
import location_icon from '../../assets/location_icon.png'
import call_icon from '../../assets/call_icon.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f59f3057-db31-4dbf-bae8-3cde3c2f3b10");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Leave us a DM <img src={msg_icon} alt="" className='msg-icon'/></h3>
            <p>Feel free to hit us up through our contact form or find
                our details below. Your feedback, questions and suggestions
                are important to us as we strive to provide exceptional
                service to the academy. Stay geeked.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />jodieszn@gmail.com</li>
                <li><img src={call_icon} alt="" />+234-905-048-1320</li>
                <li><img src={location_icon} alt="" />1, Geek Town, Benin City, Edo State, Nigeria.</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit} className='contact-form'>
            <label>Your Name</label>
            <input type="text" name="name" placeholder='Enter your name' required/>
            <label>Phone</label>
            <input type="tel" name="phone" placeholder='Enter your number'required/>
            <label>Write Your Message</label>
            <textarea name="message" rows={10} placeholder='Enter your message here' required></textarea>
            <button type='submit' className='black-btn submit'>SUBMIT</button>
          </form>
          <span className='result-msg'>{result}</span>
        </div>
    </div>
  )
}

export default Contact