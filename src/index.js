import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter basename="/view/react-complete-guide">
        <App appTitle="Person Manager" />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
