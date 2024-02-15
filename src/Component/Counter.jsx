import { Component } from "react";
import { mapDispatchToProps, mapStateToProps } from "../actions/Counter";
import { connect } from "react-redux";

export class Counter extends Component {
  constructor(props) {
    super(props);
  }

  handleIncrement() {
    this.props.increment();
  }
  handleDecrement() {
    this.props.decrement();
  }
  render() {
    return (
      <div>
        <h3>Count: {this.props.count}</h3>
        <button onClick={this.handleIncrement.bind(this)}>Increment</button>
        <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
