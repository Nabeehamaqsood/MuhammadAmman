// components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form 
      className="contact-form" 
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto'
      }}
    >
      <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: '15px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '16px',
            width: '100%',
            boxSizing: 'border-box'
          }}
        />
      </div>
      <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: '15px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '16px',
            width: '100%',
            boxSizing: 'border-box'
          }}
        />
      </div>
      <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            padding: '15px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '16px',
            width: '100%',
            boxSizing: 'border-box',
            fontFamily: 'inherit',
            resize: 'vertical',
            minHeight: '120px'
          }}
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="btn btn-primary"
        style={{
          padding: '15px 30px',
          backgroundColor: '#5e5dbe',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s',
          width: '100%',
          maxWidth: '200px',
          margin: '0 auto'
        }}
      >
        Send Message
      </button>

      <style jsx>{`
        .btn-primary:hover {
          background: #4a49a0;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .contact-form {
            gap: 15px;
          }
          
          input, textarea {
            padding: 12px !important;
            font-size: 14px !important;
          }
          
          button {
            padding: 12px 25px !important;
            font-size: 14px !important;
            max-width: 100% !important;
          }
        }

        @media (max-width: 480px) {
          .contact-form {
            gap: 12px;
          }
          
          input, textarea {
            padding: 10px !important;
          }
        }
      `}</style>
    </form>
  );
};

export default ContactForm;