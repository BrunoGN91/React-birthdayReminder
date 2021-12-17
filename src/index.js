import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './data.js'
import css from "./App.css"

function Greetings () {
  return  <>
  <App/>
  </>
}



ReactDOM.render(<Greetings/>,document.getElementById('root')
);


