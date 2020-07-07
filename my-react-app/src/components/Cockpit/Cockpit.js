import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = ''
    if(props.showPerson){
      btnClass = classes.Red;
    }

    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
    return (
        <div className= {classes.Cockpit}>
        <h1 className={assignedClasses.join(' ')}>Hi,I am React developer</h1>
        <div>some text</div>
        <button className= {btnClass}
         onClick={props.clicked}>Toggle
         </button>
        </div>
    );
};

export default cockpit;