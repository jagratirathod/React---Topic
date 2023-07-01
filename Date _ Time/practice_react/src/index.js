import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

// const currDate = new Date().getDate();
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

const both = new Date().toLocaleString();


ReactDOM.render(
    <>
        <h1>hii indore!!</h1> 
        <p>Currrent Date = {currDate}</p> 
        <p>Currrent time and date = {both}</p> 
        <p>Currrent time  = {currTime}</p> 
    </>,
document.getElementById("root"));










// Javascript -
// var h1 = document.createElement("h1");
// h1.innerHTML = "Thapa subscribe" ;
// document.getElementById("root").appendChild(h1);