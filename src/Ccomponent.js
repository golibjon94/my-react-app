import React, { Component } from "react";
import Menu from "./Menu";
import './stylesNew.css';
import { Button } from '@material-ui/core';

export default class Ccomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }
  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div>
        {/* <Menu /> */}
        <button className="hello" onClick={this.increment}>increment</button>
        <button className="hello"  onClick={this.decrement}>decrement</button>
        <button className="hello" onClick={this.reset}>reset</button>
        <h1 className="hello">Current:{this.state.count}</h1>

<Button variant="contained">Default</Button>
<Button variant="contained" color="primary">
//   Primary
// </Button>
// <Button variant="contained" color="secondary">
//   Secondary
// </Button>

// <Button variant="contained" color="primary" disableElevation>
//   Disable elevation
// </Button>
//       </div>
    );
  }
}