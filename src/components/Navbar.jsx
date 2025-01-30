import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  
  

  return (
    <div>
      <style>
        {`
          nav {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 1rem;
            background: #060885;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            position: sticky;
            top: 0;
            z-index: 1000;
          }
          nav a, nav button {
            font-size: 1.2rem;
            color: #fff; 
            padding: 0.5rem 1rem;
            border-radius: 5px;
            transition: background 0.3s ease-in-out;
            border: none;
            cursor: pointer;
            text-decoration: none;
            background: none;
          }
          nav a:hover, nav button:hover {
            background: #df3f8b;
            color: #000000;
          }
        `}
      </style>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/discography">Discography</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
        
      
      </nav>
    </div>
  );
};

export default Navbar;
