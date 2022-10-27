import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Menu from './Menu/Menu';
// import App from './App';
// import App from './Tour2/App';
// import App from './Reviews/App'
// import App from './Accordion/App';
// import App from './Menu/App'
import App from './Tabs/App'
// import App from './Slide/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
