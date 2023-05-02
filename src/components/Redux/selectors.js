
//file lấy dữ liệu từ kho chung
// export const todoListSelector = (state) => state.todoList;
//cách 1
// export const todoListSelector = (state) => {


//     const searchText = searchTextSelector(state);
//     const todosRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(searchText);
//     })
//     // state.todoList;

//     return todosRemaining;
// }

// export const searchTextSelector = (state) => state.filters.search;

//cách 2: dùng reselect(có trong toolkit)
import { createSelector } from 'reselect';

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;

//todoList, searchText là giá trị trả về của todoListSelector,searchTextSelector
export const todosRemainingSelector = createSelector(todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    (todoList, status, searchText) => {
        return todoList.filter((todo) => {
            //check all
            if (status === 'All') {
                return todo.name.includes(searchText);
            }
            //check completed và todo( k phải compeleted)
            return todo.name.includes(searchText) &&
                status === '"Completed"' ? todo.completed : !todo.completed;
        });
    }
)
//https://youtu.be/g_K1w8e0lLo?t=6411