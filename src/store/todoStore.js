import { createStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoReducer';

export const todoStore = createStore(todoReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
