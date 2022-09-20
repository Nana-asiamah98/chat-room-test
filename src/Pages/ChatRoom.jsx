import React, { useEffect, useState } from 'react';
import {useNavigate,useLocation} from 'react-router-dom';


const ChatRoom = () => {

    const [message, setMessage] = useState("");
    const location = useLocation();

    handleSubmit (e) {
        e.preventDefault();

        console.log(e.target.value);
    }

    useEffect(() => {
        console.log(location.state);
    })
    return(<>
        <form onSubmit={(e) => {}}>

        </form>
    </>)
}

export default ChatRoom;