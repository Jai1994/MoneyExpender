import React from 'react';
import './Card.css'

let Card = (props) =>{

    const classes = 'card ' + props.className;
  return  <div className={props.abc}>{props.children}</div>
  

}

 export default Card;