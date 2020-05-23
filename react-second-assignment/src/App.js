import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput:''
  }
  changedInputHandler = (event) =>{
    const userInput = event.target.value;
    this.setState({userInput:userInput});
  }
  render() {
    return (
      <div className="App">
        <p>UserInput</p>
        <input type="text" 
            onChange={this.changedInputHandler.bind(this)} 
            value={this.state.userInput}
            />
        <p>{this.state.userInput.length}</p>
        <Validation textLength={this.state.userInput.length}/>
        {this.state.userInput.split('').map((inputText,index)=>{
            return <Char
                       inputText={inputText} 
                       key={index}/>
          })
        }
      </div>
    );
  }
}

export default App;
