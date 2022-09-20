import { BroadcastChannel } from "broadcast-channel";
import React, { useEffect, useMemo, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [sentMessages, setSentMessages] = useState([]);
  const channel = useMemo(() => new BroadcastChannel("chatroom"),[]);
  const location = useLocation();
  const navigate = useNavigate();

  const broadCastMessage = () =>{    
    channel.addEventListener("message" ,(e) => {
      const newLol = JSON.parse(localStorage.getItem("chats"))
        console.log({newLol})
      // console.log("New Data", JSON.parse(localStorage.getItem("chats")))
      setChats(newLol)
        // console.log(e);
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = location.state;
    let localStorageData = JSON.parse(localStorage.getItem("chats") || "[]");
    const storedUsername = String(username).toLowerCase();
    const allChats = [...localStorageData];

    if (
      localStorage.getItem("users").includes(storedUsername.toLowerCase()) &&
      message !== ""
    ) {
      const newChat = {
        username: username,
        message: message,
        date: new Date().toLocaleString(),
      };
      channel.postMessage(newChat);
      allChats.push(newChat);
      setChats([...allChats]);
      setMessage("");
      localStorage.setItem("chats", JSON.stringify(allChats));
      
    } else if(message === ""){
        alert("Empty Message")
    }
    else {
      alert("No User");
      navigate("/");
    }
  };

  useEffect(() => {
    // store();
    broadCastMessage();
  }, [chats]);
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
