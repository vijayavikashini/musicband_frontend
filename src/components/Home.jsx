import React from "react";

const Home = () => {
  const homeStyle = {
    height: "100vh", // Full viewport height
    width: "100%", // Full width of the page
    margin: "0", // Remove any margin
    padding: "0", // Remove any padding
    backgroundImage: "url('https://www.hindustantimes.com/ht-img/img/2024/11/07/1600x900/bts_1730949138919_1730949154876.jpg')", // Use your desired image URL
    backgroundSize: "cover", // Ensure the image covers the entire page
    backgroundPosition: "top center", // Center the background image
    backgroundAttachment: "fixed", // Fix the background while scrolling
    backgroundRepeat: "no-repeat", // Don't repeat the background
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Center the box vertically and horizontally
    color: "#fff", // Set text color to white
  };

  const textBoxStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background for the text box
    padding: "2rem 3rem", // Add some padding inside the box
    borderRadius: "10px", // Rounded corners
    textAlign: "center", // Center the text inside the box
    maxWidth: "80%", // Prevent the box from becoming too wide
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Optional: Adds a shadow effect to make the box pop
  };

  return (
    <div style={homeStyle}>
      <div style={textBoxStyle}>
        <h1 style={{ color: "#e6e8fa" }}>Welcome to Our Music Band [BTS]Bangtan Sonyeondan</h1>
        <p style={{ color: "#e6e8fa" }}>Explore our music, events, and more!</p>
      </div>
    </div>
  );
};

export default Home;
