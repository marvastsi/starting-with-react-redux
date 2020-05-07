import React, { useState } from 'react';
import './App.css';

const Hello = () => {
    const [msg, setMsg] = useState('');

    const handleClickBtn = () => {
        setMsg('Hello world');
    };

    return (
        <div className="App">
            <button onClick={() => handleClickBtn()}>Click to Hello</button>
            <p>{msg}</p>
        </div>
    );
}

export default Hello;