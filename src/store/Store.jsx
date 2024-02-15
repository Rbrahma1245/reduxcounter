import { createStore, applyMiddleware } from "redux";

import CounterReducer from "../reducer/Counter";
import { thunk } from "redux-thunk";

const store = createStore(CounterReducer, applyMiddleware(thunk));

export default store;