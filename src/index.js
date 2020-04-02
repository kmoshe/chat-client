import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare,
    faInfoCircle,
    faVideo,
    faPhone,
    faCamera,
    faImage,
    faMicrophone,
    faCreditCard,
    faGamepad,
    faSmile,
    faPlusCircle,
    faUserPlus,
    faUserMinus,
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import './assets/index.css';
library.add(
    fab,
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare,
    faInfoCircle,
    faVideo,
    faPhone,
    faCamera,
    faImage,
    faMicrophone,
    faCreditCard,
    faGamepad,
    faSmile,
    faPlusCircle,
    faUserPlus,
    faUserMinus,
    faPaperPlane
)

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
