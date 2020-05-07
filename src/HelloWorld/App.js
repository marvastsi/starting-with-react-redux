import React from 'react';
import './App.css';

const App = (props) => {
    const { msg } = props;
    const handleClickBtn = () => {
        props.sayHello();
    };

    return (
        <div>
            <button onClick={() => handleClickBtn()}>Click to Hello</button>
            <p>{msg.data}</p>
        </div>
    );
}

export default App;