import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import graphReducer from "./graph-reducer";



let reducers = combineReducers({
    graph: graphReducer,
});

//Подключение Redux WebTool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));

window.store = store;

export default store;