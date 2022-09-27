import React from "react";

const MessageBubble = ({index, chat, content, currentUser}) => 
  <div
    key={index}
    className={`d-flex flex-row chat-box justify-content-${content(
      chat.username
    )}`}
  >
    <div className={`p-3 ms-3 main-message-${content(chat.username)}`}>
      <p className="sub-message">{chat.message}</p>
      <div>
        <span>
          <strong className="fs-12">{content(chat.username) === "end" ? "You" : chat.username}</strong>{" "}
        </span>
        <span className="fs-12">
          <em>{chat.date}</em>
        </span>
      </div>
    </div>
  </div>
;

export default MessageBubble;
