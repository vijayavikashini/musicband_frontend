import { useState } from "react";

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form after success
      } else {
        alert(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again.");
    }
  };

  // CSS styles
  const contactStyle = {
    textAlign: "center",
    padding: "1rem",
    backgroundImage: "url('https://wallpapers.com/images/hd/bts-black-white-desktop-wallpaper-zz63g871nd3o1ktf.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const inputStyle = {
    padding: "1rem",
    margin: "1rem 0",
    borderRadius: "12px",
    border: "1px solid black", //  Fixed extra semicolon
    backgroundColor: "rgba(192, 192, 192, 0.8)",
    color: "#000",
    width: "70%",
    maxWidth: "300px",
  };

  const buttonStyle = {
    background: "#060885",
    color: "#fff",
    padding: "0.8rem 1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "1rem",
  };

  const iconStyle = {
    margin: "1rem",
    color: "#fff",
    fontSize: "3rem",
    textDecoration: "none",
    transition: "transform 0.3s",
  };

  return (
    <div style={contactStyle}>
      <h1>Contact Us</h1>
      <p style={{ fontWeight: "bold" }}>Get in touch for bookings or collaborations!</p>

      {/*  Added onSubmit to form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <br />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, height: "100px" }}
          required
        ></textarea>
        <br />
        <button type="submit" style={buttonStyle}>Send</button>
      </form>

      <div>
        <a
          href="https://www.instagram.com/bts.bighitofficial/"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/@BTS"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
