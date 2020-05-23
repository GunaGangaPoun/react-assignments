import React, { Component } from 'react';
import './App.css';

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
      </div>
    );
  }
}

export default App;
