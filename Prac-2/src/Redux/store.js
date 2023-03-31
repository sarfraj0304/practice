import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./auth/auth.reducer";
import { TaskReducer } from "./task/task.reduer";
const root = combineReducers({
  auth: AuthReducer,
  task: TaskReducer,
});

// const compose_Enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(root, compose(applyMiddleware(thunk)));
