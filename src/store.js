import {createStore, applyMiddleware,compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducers/productReducers";

const initialState = {};
const composeEnhanser = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store =createStore(
  combineReducers({
  products: productReducer,
}),
initialState,
composeEnhanser(applyMiddleware(thunk))
);

export default store;