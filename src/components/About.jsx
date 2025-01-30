import React from "react";

const About = () => {
  return (
    <div>
      <style>
        {`
          .about-container {
            text-align: center;
            padding: 1rem 1rem; /* Adjust padding for proper spacing */
            background: #FFCE1B; /* Dark blue background */
            color: #000000;
            font-family: 'Arial', sans-serif; /* Clean font for text */
          }
          .about-container h1 {
            font-size: 5.5rem;
            color: #000000; /* Light blue heading */
            margin-bottom: 1rem; /* Space below heading */
          }
          .about-container p {
            font-size: 1.3rem;
            margin: 0 auto 2rem; /* Center and space below paragraph */
            max-width: px; /* Restrict paragraph width */
            line-height: 1.6; /* Improve text readability */
          }
          .about-container img {
            max-width: 80%; /* Ensure the image scales responsively */
            height: auto; /* Maintain the aspect ratio */
            border-radius: 10px; /* Add slight rounded corners */
            box-shadow: 0 10px 8px rgba(0, 0, 0, 0.3); /* Add a subtle shadow */
          }
        `}
      </style>
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          We are BTS, which stands for "Bangtan Sonyeondan" meaning "Bulletproof Boy Scouts" in Korean,
            a K-pop group known for our powerful music, meaningful lyrics, and dedicated fanbase called ARMY. 
            we are the 7 Souls are connected with you through our Love called Music💜!
        </p>
        <img
          src="https://www.bollywoodhungama.com/wp-content/uploads/2023/05/BTS_Group.jpeg" // Replace with an actual image URL
          alt="Band Members"
        />
      </div>
    </div>
  );
};

export default About;
