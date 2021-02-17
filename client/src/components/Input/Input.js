import React from 'react';
import './Input.css';

const Input = ({message, setMessage, sendMessage}) => (
    <form className="form">
        <input value={message} onChange={e => setMessage(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
                className="input"
                type="text"
                placeholder="Type a message..."
            />
        <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
    </form>
);

export default Input;
