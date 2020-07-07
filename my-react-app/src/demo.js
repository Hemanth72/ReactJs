import React, { Component } from 'react';
import './App.css';


class Demo extends Component {
render(){
    return(

        <div className="person">
        <h1>{this.props.name}</h1>
         <p>{this.props.subname}</p>
        </div>

        
      );
    }
}


export default Demo;
