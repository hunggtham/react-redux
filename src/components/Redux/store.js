//reduxcore
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducer';
//3 paramater rootReducer, initValue, enhancers(middleware: saga, thunk)
// const store = createStore(rootReducer);
// const composedEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composedEnhancers);
// export default store;

//redux toolkit

import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../Filters/filtersSlice";
import todosSlice from "../TodoList/todosSlice";


const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todosSlice.reducer,
    }
});

export default store;