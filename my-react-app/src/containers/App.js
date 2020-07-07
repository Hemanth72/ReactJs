import React, { Component } from 'react';
import classes from './App.css';
// import Radium , { StyleRoot } from 'radium';
import Persons from '../components/Person/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import Demo from './demo';
// import styled from 'styled-components';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

// const StyledButton = styled.button`
// background-color: ${props=>props.alt?'red':'green'};
// color:white;
// font:inherit;
// border: 1px solid black;
// padding: 8px;
// cursor: pointer;
// marginLeft:8px;
// &:hover {
//   background-color:lightgreen;
//   color:black
// }
// `;
class App extends Component {
state = {
  Persons : [
    {id:'1',name:'Chandler',age:20},
    {id:'2',name:'Ross',age:20},
    {id:'3',name:'Joey',age:20} 
  ],
  showPerson : false,
  changeNames : false
}
togglePersonHandler = () => { 
 const doesShow =   this.state.showPerson ;
 this.setState({showPerson: !doesShow});   
}
deletePersonHandler = (personIndex) => {
  // const persons = this.state.Persons;
  const persons =[...this.state.Persons];
   persons.splice(personIndex,1);
   this.setState({Persons : persons});
}
   switchNameHandler = () => {
     const nameShow = this.state.changeNames;
     nameShow ?
      this.setState({
        Persons : [
          {name:'Chandler',age:20},
          {name:'Ross',age:20},
           {name:'Joey',age:20} 
        ],
        changeNames: !nameShow
      }):this.setState({
        
        Persons : [
          {name:'Monica',age:20},
          {name:'Rachel',age:20},
           {name:'Phebe',age:20} 
        ],
        changeNames: !nameShow
      })     
    }
    nameChangeHandler = (event, id) => {
       const personIndex = this.state.Persons.findIndex(p => {
          return p.id === id;
       });
       const person = {
        ...this.state.Persons[personIndex]
      }  
         person.name = event.target.value;
         const persons = [...this.state.Persons]
         persons[personIndex] = person; 
         this.setState({Persons:persons})
    };
    render(){
      // const style ={
      //   backgroundColor:'green',
      //   color:'white',
      //   font:'inherit',
      //   border: '1px solid black',
      //   padding:'8px',
      //   cursor: 'pointer',
      //   marginLeft:'8px',
      //   ':hover': {
      //     backgroundColor:'lightgreen',
      //     color:'black'
      //   }
      // }
   
      let persons = null;
     
      if(this.state.showPerson){
          persons = (
          <div>
            <Persons
            persons = {this.state.Persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler}
            />
           
            {/* <Person 
            name={this.state.Persons[0].name} 
            age={this.state.Persons[0].age} 
            click = {this.switchNameHandler.bind(this,'Binding')} />
            
           <Person 
            name={this.state.Persons[1].name} 
            age={this.state.Persons[1].age}
            changed={this.nameChangeHandler} />
              <Person 
            name={this.state.Persons[2].name}
            age={this.state.Persons[2].age} /> */}
            </div>
             );
            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //   backgroundColor:'lightred',
            //   color:'black'
            // }

      }
      
    return (
      // <StyleRoot>
      <React.Fragment>
      <div className={classes.App}>
          {/* <Demo name ={this.state.Persons[0].name} />
          <Demo name ={this.state.Persons[1].name} />
          <Demo name ={this.state.Persons[2].name} /> */}
            <Cockpit
             showPerson={this.state.showPerson}
             persons={this.state.Persons}
             clicked = {this.togglePersonHandler} />
               {persons} 
      </div>
      </React.Fragment>
    //  </StyleRoot>
    )
}
}

export default App;