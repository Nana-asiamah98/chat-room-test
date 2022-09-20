import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

const UserLogin = () => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    navigate("chatRoom",{state: username});
    setUsername("");
  }



  return (
    <>
      
      <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label>Username</label>
                <input name="username" type={"text"} value={username} onChange={(e) => {setUsername(e.target.value)}}/>
            </div>

            <div>
                <button type="submit">Login</button>
            </div>
      </form>
    </>
  );
};

export default UserLogin;
