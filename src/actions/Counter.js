const mapStateToProps = (state) => {
  return {
    count: state.count,
    payloadVal: state.payloadVal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    add: () => dispatch({ type: "ADD", payload: 50 }),
  };
};

export { mapStateToProps, mapDispatchToProps };
