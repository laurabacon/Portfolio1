import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/css/contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(!validateEmail(e.target.value));
  };

  const handleBlur = (field) => {
    if (field === 'name') {
      setNameError(name === '');
    }
    if (field === 'email') {
      setEmailError(email === '');
    }
    if (field === 'message') { 
      setMessageError(message === ''); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      setNameError(true);
      return;
    }
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }

    // Send email using Email.js
    emailjs.sendForm('service_wxncm0e', 'template_qky706h', e.target, 'k5WvR7D4m0eQs2mz-')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Optionally, display a success message to the user
        setSubmissionStatus('success');
        // Clear form fields after successful submission
        setName('');
        setEmail('');
        setMessage('');
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
        // Reset submission status after a few seconds
        setTimeout(() => {
          setSubmissionStatus(null);
        }, 5000);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        // Optionally, display an error message to the user
        setSubmissionStatus('error');
      });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <section id="contact">
      <div className='contactColor'>
        <h3>Contact</h3>
        {submissionStatus === 'success' && <div className="submission-success">Your submission has been sent!</div>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Your Name" 
              value={name} 
              onChange={handleNameChange} 
              onBlur={() => handleBlur('name')} 
              isInvalid={nameError} 
            />
            <Form.Control.Feedback type="invalid">
              Name is required.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="name@example.com" 
              value={email} 
              onChange={handleEmailChange} 
              onBlur={() => handleBlur('email')} 
              isInvalid={emailError} 
            />
            <Form.Control.Feedback type="invalid">
              {emailError ? 'Invalid email address.' : 'Email is required.'}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              placeholder="Your Message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              onBlur={() => handleBlur('message')} // Add this line
              isInvalid={messageError} 
            />
            <Form.Control.Feedback type="invalid">
              {messageError ? 'Invalid message.' : 'Message is required.'}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
