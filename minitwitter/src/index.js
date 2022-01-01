import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap-ower.scss';
import reportWebVitals from './reportWebVitals';
import './i18n';
import App from './container/App';
import AuthenticationContext from './shared/AuthenticationContext';


ReactDOM.render(
<AuthenticationContext>
    <App/>

</AuthenticationContext>

 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
