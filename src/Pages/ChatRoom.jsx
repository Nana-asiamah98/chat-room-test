import { BroadcastChannel } from "broadcast-channel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";
import SendMessageTextArea from "../Components/SendMessageTextArea";
import MessageBubble from "../Components/MessageBubble";


const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [sentMessages, setSentMessages] = useState([]);
  const channel = useMemo(() => new BroadcastChannel("chatroom"), []);
  const location = useLocation();
  const navigate = useNavigate();

  const broadCastMessage = () => {
    channel.addEventListener("message", (e) => {
      const newLol = JSON.parse(localStorage.getItem("chats"));
      setChats(newLol);
    });
  };

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
    } else if (message === "") {
      alert("Empty Message");
    } else {
      alert("No User");
      navigate("/");
    }
  };

  const content = (username) => {
    const isUser = username === location.state;
    const res = isUser ? "end" : "start";
    return res;
  };

  useEffect(() => {
    broadCastMessage();
  }, [chats]);
  
  
  return (
    <Container fluid="md">
      <Row className="m-auto align=self-center mt-5">
        <Col md={{ span: 10, offset: 2 }}>
          <Card>
            <Card.Header data-testid="card-header" as={"h3"}>Hello,{location.state}</Card.Header>
            <Card.Body>
              <div className="overflow-auto main-chat">
                {chats && chats.length > 0 ? (
                  chats.map((chat, index) => (
                    <MessageBubble
                    index={index}
                    chat={chat}
                    content={content}/>
                  ))
                ) : (
                  <>
                    <span>No Messages</span>
                  </>
                )}
              </div>

              <SendMessageTextArea handleSubmit={handleSubmit} message={message} setMessage={setMessage}/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatRoom;
