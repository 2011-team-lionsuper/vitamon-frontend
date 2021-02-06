import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import user from "./user";
import goals from "./goal"
import friend from "./friend"

const reducer = combineReducers({
  user,
  goals,
  friend
});

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

export default store;
export * from "./user";
