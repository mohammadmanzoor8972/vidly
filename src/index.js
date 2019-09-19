import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import Raven from 'raven-js'

Raven.config("https://307ff70825d14c06a35d5c5d5feb7b1b@sentry.io/1454900", {
    release: "0-0-0",
    environment: 'development-test'}).install();
    
ReactDOM.render(<BrowserRouter getUserConfirmation={()=>alert("hi ia m fine")}><App /></BrowserRouter>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


