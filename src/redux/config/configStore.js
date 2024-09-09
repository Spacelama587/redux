import { createStore } from "redux";
import { combineReducers } from "redux";
import todosReducer from "../modules/todosReducer";  
const rootReducer = combineReducers({
  todos: todosReducer
});

const store = createStore(rootReducer);

export default store;