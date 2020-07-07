import React, { useState } from 'react';
import './App.css';
import Person from './components/Person/Persons/Person';
import Demo from './demo';

const app = props => {

 const [personState , setPersonState] = useState({
  Persons : [
    {name:'Chandler',age:20},{name:'Ross',age:20},{name:'Joey',age:20} 
  ]
 });
  const [otherState] = useState('some other value')

    console.log(`personstate: ${JSON.stringify(personState,otherState)}`);


   const switchNameHandler = () => {
      console.log("Was Clicked!"); 
      setPersonState({
        Persons : [
          {name:'Monica',age:20},{name:'Rachel',age:20},{name:'Phebe',age:20} 
        ]
      });     
    }
    return (
      <React.Fragment>
  
      <div className="App">
            <Demo name ={personState.Persons[0].name} />
          <Demo name ={personState.Persons[1].name} />
          <Demo name ={personState.Persons[2].name} />
            <h1>Hi,I am React developer</h1>
            <button onClick={switchNameHandler}>Click Me!</button>
            <Person 
                 name={personState.Persons[0].name} 
                 age={personState.Persons[0].age} 
                 click = {this.switchNameHandler} />
                 
            <Person 
                 name={personState.Persons[1].name} 
                 age={personState.Persons[1].age} />
            <Person 
                 name={personState.Persons[2].name}
                 age={personState.Persons[2].age} />
      </div>
      </React.Fragment>
    );
}

export default app;

