import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

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
    }
    if (!validateEmail(email)) {
      setEmailError(true);
    }
    if (name !== '' && validateEmail(email)) {
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  return (
    <section id="contact">
      <div>
        <h3>Contact</h3>
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default Contact;
