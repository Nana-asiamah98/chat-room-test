import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const store = () => {
    console.log("All Chats" , chats)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = location.state;
    const storedUsername = String(username).toLowerCase();
    console.log("State -> ", username);
    console.log("Username -> ", String(username).toLowerCase());
    console.log("Exists -> ", localStorage.getItem(String(username).toLowerCase()));

    const allChats = [...chats];

    if (localStorage.getItem("username") === storedUsername.toLowerCase()  && message !== "") {
      const newChat = {
        username: username,
        message: message,
      };
      allChats.push(newChat);
      setChats([...allChats]);
      setMessage("");
    }else{
        alert("No User");
        navigate("/");
    }
  };

  useEffect(() => {
    console.log("state", location.state);
  });
  return (
    <>
      <div>
        {chats && chats.length > 0 ? (
          chats.map((chat, index) => (
            <div key={index}>
              <span>Chat : {chat.message} </span>
              <span>From :{chat.username} </span>
            </div>
          ))
        ) : (
          <>
            <span>No Messages</span>
          </>
        )}
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label>Message</label>
          <input
            type={"text"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </>
  );
};

export default ChatRoom;
