// const initValue = {
//     filters: {
//         search: '',
//         status: 'All',
//         priority: []
//     },
//     todoList: [
//         { id: 1, name: 'Learn React', completed: false, priority: 'High' },
//         { id: 2, name: 'Learn Nodejs', completed: false, priority: 'Medium' },
//         { id: 3, name: 'Eat', completed: true, priority: 'Low' },
//     ]
// }
// const rootReducer = (state = initValue, action) => {

//     /**
//      * {
//      *  type:'todoList/addTodo'
//      *  payload:   { id: 5, name: 'Learn React', completed: false, prioriry: 'High' },
//      * }
//      */
//     // console.log({ state, action });
//     switch (action.type) {

//         case 'todoList/addTodo':
//             return {
//                 ...state,
//                 todoList: [
//                     ...state.todoList,
//                     action.payload
//                 ]
//             }
//         case 'filter/searchFilterChange':
//             return {
//                 ...state,
//                 filters: {
//                     ...state.filters,
//                     search: action.payload
//                 }
//             }
//         default:
//             return state;
//     }
// }

// export default rootReducer;



//after slice to TodosSlice, FiltersSlice:( split reducer method)
import filtersReducer from "../Filters/FiltersSlice";
import todoListReducer from "../TodoList/TodosSlice";

// import { combineReducers } from 'redux';

//1. trước khi sử dụng combineReducer
const initValue = {
    filters: {
        search: '',
        status: 'All',
        priorities: []
    },
    todoList: [
        { id: 1, name: 'Learn React', completed: false, priority: 'High' },
        { id: 2, name: 'Learn Nodejs', completed: false, priority: 'Medium' },
        { id: 3, name: 'Eat', completed: true, priority: 'Low' },
    ]
}

const rootReducer = (state = initValue, action) => {
    return {
        filters: filtersReducer(state.filters, action),
        todoList: todoListReducer(state.todoList, action),
    }
}
//2. sử dụng combineReducers: trả về giống hệt nhau nhưng gọn hơn

// const rootReducer = combineReducers({
//     filters: filtersReducer,
//     todoList: todoListReducer,
// })

export default rootReducer;