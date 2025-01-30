import { useEffect, useState } from "react";

const Admin = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const deleteMessage = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/messages/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        setMessages(messages.filter((msg) => msg._id !== id));
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div>
      <h2>Admin Panel - Messages</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg._id}>
            <strong>{msg.name} ({msg.email})</strong>: {msg.message}
            <button onClick={() => deleteMessage(msg._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
