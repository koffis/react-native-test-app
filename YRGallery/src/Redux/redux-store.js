import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import appReducer from "./app-reducer";
import userReducer from "./user-reducer";

let reducers = combineReducers({
    app: appReducer,
    user: userReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
