import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import numbersReducer from "../Reducers/numbersReducer";
import usersReducer from "../Reducers/usersReducer";
import loaderReducer from "../Reducers/loaderReducer";

const configStore = () => {
  const store = createStore(
    combineReducers({
      numbers: numbersReducer,
      users: usersReducer,
      loader: loaderReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configStore;
