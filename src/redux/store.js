import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
//có 3 tham số: enhancer( thunk hoặc redux saga)
// const store = createStore(rootReducer, initValue, enhancers);

// const store = createStore(rootReducer);

//bước 7 :sử dụng enhancer với devtool, npm i redux-devtools-extension
const composedEnhancer = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancer);


export default store