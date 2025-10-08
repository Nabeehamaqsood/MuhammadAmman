// pages/Contact.jsx
import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    message: "",
    securityCode: "",
  });

  const [captchaText, setCaptchaText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const canvasRef = useRef(null);

  const countries = [
    "Country",
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "China",
    "India",
    "Pakistan",
    "Brazil",
    "Mexico",
    "Russia",
    "South Africa",
    "United Arab Emirates",
  ];

  const generateCaptcha = () => {
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ123456789";
    let out = "";
    for (let i = 0; i < 6; i++) {
      out += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptchaText(out);
    return out;
  };

  const drawCaptcha = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "#333";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let i = 0; i < captchaText.length; i++) {
      const x = 15 + i * 15;
      const y = 15 + Math.random() * 6 - 3;
      const rotation = Math.random() * 0.4 - 0.2;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.fillText(captchaText[i], 0, 0);
      ctx.restore();
    }
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    if (captchaText) {
      drawCaptcha();
    }
  }, [captchaText]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.securityCode !== captchaText) {
      setError("Security code incorrect. Try again.");
      generateCaptcha();
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      country: "",
      message: "",
      securityCode: "",
    });
    generateCaptcha();
    setIsSubmitted(false);
    setError("");
  };

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <section className="contact-banner">
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>CONTACT ME</h1>
            <h2>Let's Build Something Amazing Together</h2>
            <p>
              If you have any query, please feel free to contact me any time for
              my services.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="breadcrumb">Home / Contact me</div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in touch With me</h3>
            <p>
              If you have any suggestion or question for my website services,
              please write your query to me. I would like to answer you ASAP.
            </p>

            <div className="divider"></div>

            <div className="simple-contact-details">
              <h4>My Emails</h4>
              <p>ammanm0789@gmail.com</p>
              <p>apexium.space@gmail.com</p>

              <div className="divider"></div>

              <h4>Need a Quick Response?</h4>
              <p>You can call me on my Phone Number:</p>
              <p><strong>+923405542097</strong></p>
            </div>
          </div>

          <div className="contact-form">
            {isSubmitted ? (
              <div className="success-message">
                <h3>Thank You!</h3>
                <p>
                  Your message has been sent successfully. We will get back to
                  you ASAP.
                </p>
                <button onClick={handleReset} className="reset-btn">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && <div className="error-message">{error}</div>}
                
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      {countries.map((c, i) => (
                        <option key={i} value={c} disabled={i === 0}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="security-section">
                  <div className="security-display">
                    <span>Security Code :</span>
                    <canvas ref={canvasRef} width="100" height="30"></canvas>
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="refresh-btn"
                    >
                      ↻
                    </button>
                  </div>
                  <div className="security-input">
                    <input
                      type="text"
                      name="securityCode"
                      placeholder="Security Code"
                      value={formData.securityCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn-send"
                  disabled={isLoading}
                >
                  {isLoading ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-page {
          font-family: "Arial", sans-serif;
          color: #333;
          background-color: #f9f9f9;
          min-height: 100vh;
        }

        /* ✅ Banner fix */
        .contact-banner {
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
            url("https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: white;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          padding: 40px 20px;
        }

        .banner-overlay {
          position: relative;
          z-index: 2;
        }

        .banner-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .contact-banner h1 {
          font-size: 3rem;
          margin-bottom: 15px;
          letter-spacing: 4px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .contact-banner h2 {
          font-size: 2rem;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .contact-banner p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .breadcrumb {
          font-size: 14px;
          color: #666;
          margin-bottom: 30px;
        }

        .contact-content {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }

        .contact-info {
          flex: 1;
          min-width: 300px;
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .contact-info h3 {
          font-size: 1.2rem;
          color: #2c3e50;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 10px;
        }

        .contact-info h3:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: #3498db;
        }

        .contact-info p {
          line-height: 1.6;
          margin-bottom: 20px;
          color: #555;
        }

        .divider {
          height: 1px;
          background: #eaeaea;
          margin: 25px 0;
        }

        .simple-contact-details h4 {
          font-size: 1.2rem;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .simple-contact-details p {
          margin-bottom: 8px;
          color: #555;
        }

        .contact-form {
          flex: 1.5;
          min-width: 300px;
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }

        .form-group {
          flex: 1;
          min-width: 200px;
        }

        input,
        select,
        textarea {
          width: 100%;
          padding: 14px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 16px;
          transition: all 0.3s ease;
          color: #555;
        }

        select option:first-child {
          color: #888;
        }

        input:focus,
        select:focus,
        textarea:focus {
          border-color: #3498db;
          outline: none;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
        }

        textarea {
          min-height: 120px;
          resize: vertical;
        }

        .security-section {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          align-items: center;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 6px;
        }

        .security-display {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .security-display span {
          font-weight: 600;
          color: #2c3e50;
        }

        .security-input {
          flex: 1;
          min-width: 200px;
        }

        .refresh-btn {
          padding: 8px 12px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background 0.3s ease;
        }

        .refresh-btn:hover {
          background: #2980b9;
        }

        .btn-send {
          padding: 16px 35px;
          background: #0e8d99;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: background 0.3s ease;
        }

        .btn-send:hover:not(:disabled) {
          background: #0e8d99;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .btn-send:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .success-message {
          text-align: center;
          padding: 40px 20px;
        }

        .success-message h3 {
          color: #0e8d99;
          margin-bottom: 15px;
          font-size: 1.8rem;
        }

        .success-message p {
          margin-bottom: 20px;
          color: #555;
        }

        .reset-btn {
          padding: 12px 25px;
          background: #0e8d99;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .reset-btn:hover {
          background: #2980b9;
        }

        .error-message {
          background-color: #ffe6e6;
          color: #d8000c;
          padding: 12px;
          border-radius: 5px;
          border: 1px solid #ffb3b3;
          margin-bottom: 15px;
        }

        @media (max-width: 768px) {
          .contact-content {
            flex-direction: column;
          }

          .form-row {
            flex-direction: column;
          }

          .security-section {
            flex-direction: column;
            align-items: flex-start;
          }

          .contact-banner h1 {
            font-size: 2.5rem;
          }

          .contact-banner h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;