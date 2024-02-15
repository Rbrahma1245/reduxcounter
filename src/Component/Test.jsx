import { Component } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../actions/Counter";

class Test extends Component {
  render() {
    console.log(this.props);
    return <div>Test</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
