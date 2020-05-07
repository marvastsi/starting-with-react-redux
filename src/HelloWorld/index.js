import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import AppReducer from './AppReducer';

const store = createStore(AppReducer);

const renderApp = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App msg={store.getState()} sayHello={() => store.dispatch({ type: 'SAY_HELLO' })}></App>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderApp();

store.subscribe(renderApp);