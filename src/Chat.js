import { IconButton } from '@material-ui/core';
import MicNoneIcon from "@material-ui/icons/MicNone";
import React, { useState } from 'react';
import "./Chat.css";

function Chat() {

    const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();

    // Firebase magic...
};

    return (
        <div className="chat">
            {/* chat header */}
         <div className="chat__header">
            <h4>To: <span className="chat__name">Channel name</span>
            </h4>
            <strong>Details</strong>
         </div>
            
            {/* chat messages */}
        <div className="chat__messages">
            <h3>I am a message</h3>
        </div>

            {/* chat input */}
            <div className="chat__input">
                <form>
                    <input value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="iMessage"
                    type="text" 
                    />
                    <button onClick={sendMessage}>Send Message</button>
                </form>

                <IconButton>
                    <MicNoneIcon className="chat__mic" />
                </IconButton>
            </div>

            
        </div>
    )
}

export default Chat;
