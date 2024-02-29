import React, { Component } from "react";

export default class DestructuringInClassComponent extends Component {
  // Destructuring in class component state
  state = {
    user: { id: 1, name: "John Doe" },
  };

  render() {
    // Destructuring in class component props
    const { id, name } = this.props;

    return (
      <div>
        <p>State User ID: {this.state.user.id}</p>
        <p>State User Name: {this.state.user.name}</p>
        <p>Props ID: {id}</p>
        <p>Props Name: {name}</p>
      </div>
    );
  }
}
