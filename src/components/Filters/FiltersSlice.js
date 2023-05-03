
// const initValue = {
//     filters: {
//         search: '',
//         status: 'All',
//         priorities: []
//     }
// }
// const filtersReducer = (state = initValue, action) => {

//     /**
//      * {
//      *  type:'todoList/addTodo'
//      *  payload:   { id: 5, name: 'Learn React', completed: false, prioriry: 'High' },
//      * }
//      */
//     // console.log({ state, action });
//     switch (action.type) {

//         case 'filter/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case 'filter/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case 'filter/prioritiesFilterChange':
//             return {
//                 ...state,
//                 priorities: action.payload
//             }
//         default:
//             return state;
//     }
// }

// export default filtersReducer;


//redux toolkit

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: [],
    },
    // tạo ra action creator: fucnction statusFilterChange(){
    //  return{type: filter/statusFilterChange}
    //k cần tạo ra file actions riêng nữa

    reducers: {
        searchFilterChange: (state, action) => {
            //có thể viết mutation:(k cần phải ...spread)
            state.search = action.payload;
        },//=> { type: filter/statusFilterChange}
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },
        prioritiesFilterChange: (state, action) => {
            state.priorities = action.payload;
        },
    }
})

// export default filtersReducer;