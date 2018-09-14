import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const getCurrentDate = function() {
    const date = new Date();
    return date.toDateString() + ' hello there';
}

const greeting = <h1>{getCurrentDate()}</h1>;
// const greeting = <h1>Hello world!</h1>;
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(greeting, document.getElementById('root'));
registerServiceWorker();
