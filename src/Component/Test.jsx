import { Component } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../actions/Counter";

class Test extends Component {
  constructor(props) {
    super(props);
  }
  handleAdd() {
    this.props.add();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>ADD WITH PAYLOAD VALUE {this.props.payloadVal}</h2>
        <button onClick={this.handleAdd.bind(this)}>ADD</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
