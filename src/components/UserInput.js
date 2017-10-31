import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: "",
    hometown: ""
  }
  UNHandler = event => {
    this.setState({
      username: event.target.value
    })
  }
  HTHandler = event => {
    this.setState({
      hometown: event.target.value
    })
  }
  submitHandler = event => {
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_USER",
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <p>Username:</p>
          <input type="text" value={this.state.username} onChange={this.UNHandler}/>
          <p>Hometown:</p>
          <input type="text" value={this.state.hometown} onChange={this.HTHandler}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
