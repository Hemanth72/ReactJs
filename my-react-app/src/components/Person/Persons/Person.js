import React from 'react';
 import classes from './Person.css';
// import Radium from 'radium';



const Person = (props) =>  {

  // const style = {
  //   '@media(min-width:500px)' : {
  //     width:'450px'
  //   }
  // };
      return (
      
          // <div className="Person" style={style}>
            <div className= {classes.Person}>
            <p onClick={props.click}>I'm a {props.name} ,I am {props.age} old</p>
               <p>{props.children}</p>
               <input type="text" onChange={props.changed} value={props.name}/>
      {/* </div> */}
      </div>
      );
    }

export default Person;