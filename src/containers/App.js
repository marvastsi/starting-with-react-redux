import React from 'react';
import Counter from '../components/Counter';
import SimpleCounter from '../components/SimpleCounter';

const App = (props) => {
    return (
        <div>
            <h1>Hello Redux!</h1>
            <Counter />
            <hr/>
            <SimpleCounter />
        </div>
    );
}

export default App;