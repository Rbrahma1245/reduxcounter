const initialState = {
  count: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("Correct");
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return { ...state, count: 0 };
  }
};

export default CounterReducer;
