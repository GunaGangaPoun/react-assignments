import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username:"GunaPoun"
  };
  updateUserName =(event)=>{
    this.setState(
      {username:event.target.value
      }
      );
  }
  render() {
    const style={
      boxShadow:"0 2px 3px",
      margin:"10px",
      padding:"20px"
    }
    return (
      <div className="App">
        <p style={style}>Hello Everyone!</p>
        <UserInput changed={this.updateUserName} currentName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="PradeshRamar"/>
        <UserOutput userName="Jelly"/>
      </div>
    );
  }
}

export default App;
