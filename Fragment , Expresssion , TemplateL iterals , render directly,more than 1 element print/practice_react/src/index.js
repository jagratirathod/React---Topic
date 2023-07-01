import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

// react -
// ReactDOM.render(<h1>hii indore!!</h1>,document.getElementById("root"));

// more than 1 Element -
// ReactDOM.render(
//     <div>
//         <h1>hii indore!!</h1>
//         <p>Thapa subscribe</p>
//         <h2>LAST ...</h2>
//     </div> ,
// document.getElementById("root"));


// In React v16 it's possible for render() to return an array of Element -
// ReactDOM.render(
//     [
//         <h1>hii indore!!</h1> ,
//         <p>Thapa subscribe</p> ,
//         <h2>LAST ...</h2> ,
//     ],
// document.getElementById("root"));

// Fragment -Remove the extra <div> , Fragment is faster than div :-
// ReactDOM.render(
//     <React.Fragment>
//         <h1>hii indore!!</h1> 
//         <p>Thapa subscribe</p> 
//         <h2>LAST ...</h2> 
//     </React.Fragment>,document.getElementById("root")
//     );

// we can write fragment like this also -
// ReactDOM.render(
//     <>
//         <h1>hii indore!!</h1> 
//         <p>Thapa subscribe</p> 
//         <h2>LAST ...</h2> 
//     </>,document.getElementById("root")
//     );


// Expression - Is a combination of operands and operator
// const flname = "vinod thapa"

// ReactDOM.render(
// <>
//     <h1>my name is {flname}</h1> 
//     <h2>my favorate number {3+1}</h2> 
// </>
//     ,document.getElementById("root")
//     );

// Concatenate -
// const fname = "aarti"
// const flname = "thapa"


// ReactDOM.render(
// <>
//     <h1>my name is {fname + "  " + flname} </h1> 
// </>
//     ,document.getElementById("root")
//     );

// Template Literals -
const fname = "aarti"
const flname = "thapa"


ReactDOM.render(
<>
    {/* <h1>my name is {`${fname} ${flname}`}</h1>  */}
    <h1>{` my first name is ${fname} and last name is ${flname}`}</h1>
</>
    ,document.getElementById("root")
    );






// Babel -
// ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "hii indore!!"), 
// document.getElementById("root"));


// Javascript -
// var h1 = document.createElement("h1");
// h1.innerHTML = "Thapa subscribe" ;
// document.getElementById("root").appendChild(h1);