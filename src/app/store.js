import { createStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/Reducers';

// export default configureStore({
//   reducer: {
//     // counter: counterReducer,
//     todo: todoReducer
//   },
// });

export default createStore(todoReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
