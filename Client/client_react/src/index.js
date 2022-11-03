import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SimpleSlider from "./SimpleSlider";
import reportWebVitals from './reportWebVitals';
import ClockContainer from './header';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Counter from "./counter";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Counter/>
      <ClockContainer/>
      <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
      <SimpleSlider/>
      <Link>
          <button>BOARD</button>
      </Link>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();