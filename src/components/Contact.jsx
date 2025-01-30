import {useState} from "react";

const Contact = () => {

  //INTEGRATING
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending the data to the backend
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again.");
    }
  };

  //CSS
  const contactStyle = {
    textAlign: "center",
    padding: "1rem 1rem",
    backgroundImage: "url('https://wallpapers.com/images/hd/bts-black-white-desktop-wallpaper-zz63g871nd3o1ktf.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    color: "#000000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const inputStyle = {
    padding: "1rem",
    margin: "2rem 0",
    borderRadius: "12px",
    border: " 1px solid black;", // Border with mild purple
    backgroundColor: "rgba(192, 192, 192, 0.8)", // Transparent input box
    color: "#000000",
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
    marginTop: "1.5rem",
  };

  const iconStyle = {
    margin: "1rem",
    color: "#000",
    fontSize: "3rem",
    textDecoration: "none",
    transition: "transform 0.3s",
  };

  return (
    <div style={contactStyle}>
      <h1 style={{ color: "#fff" }}>Contact Us</h1>
      <p style={{ fontWeight: "bold", color: "#ffffff" }}>
        Get in touch for bookings or collaborations!
      </p>
      <form>
        <input type="text" placeholder="Your Name" style={inputStyle} />
        <br />
        <input type="email" placeholder="Your Email" style={inputStyle} />
        <br />
        <textarea
          placeholder="Your Message"
          style={{ ...inputStyle, height: "100px" }}
        ></textarea>
        <br />
        <button type="submit" style={buttonStyle}>
          Send
        </button>
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
//contact.jsx
//FETCHING API
// const handleSubmit = (e) => {
//   e.preventDefault();
//   const name = e.target[0].value;
//   const email = e.target[1].value;
//   const message = e.target[2].value;

//   fetch("http://localhost:5000/api/contact", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ name, email, message }),
//   })
//     .then((res) => res.json())
//     .then((data) => alert(data.message))
//     .catch((err) => alert("Error submitting form."));
// };