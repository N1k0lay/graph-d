import React from 'react'
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './redux/reducers'
import loggerMiddleware from './middleware/logger'
import monitorReducerEnhancer from './enhancers/monitorReducer'
import App from './App'

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)

const store = createStore(rootReducer, undefined, composedEnhancers);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<Provider store={store}>
    <App/>
</Provider>);