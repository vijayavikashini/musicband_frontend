import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/signup";

      const res = await axios.post(url, formData, { withCredentials: true });
      alert(res.data.msg);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>{isLogin ? "Login" : "Signup"}</h2>
        <form onSubmit={handleAuth} style={styles.form}>
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              style={styles.input}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <p style={styles.toggle}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)} style={styles.toggleButton}>
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#000000", // pure black background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "#4b0082", // deep purple
    padding: "40px 30px",
    borderRadius: "12px",
    width: "360px",
    boxShadow: "0 0 15px rgba(139, 0, 139, 0.7)", // purple glow
  },
  heading: {
    color: "#ffffff",
    textAlign: "center",
    marginBottom: "25px",
    fontWeight: "700",
    fontSize: "28px",
    letterSpacing: "1.2px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1.5px solid #ddd",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    backgroundColor: "#9b59b6", // lighter purple
    color: "#fff",
    padding: "14px",
    fontSize: "18px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.3s",
  },
  toggle: {
    textAlign: "center",
    marginTop: "20px",
    color: "#fff",
    fontSize: "14px",
  },
  toggleButton: {
    background: "none",
    border: "none",
    color: "#d8bfd8", // pale purple
    cursor: "pointer",
    fontWeight: "700",
    textDecoration: "underline",
  },
};

export default Auth;
