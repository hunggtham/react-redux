
//file lấy dữ liệu từ kho chung
export const todoListSelector = (state) => state.todoList;
// export const todoListSelector = (state) => {
//     const todosRemaining = state.todoList.filters((todo) => {
//         // return true;
//         return todo.name.includes(state.filters.search);
//     })
//     // state.todoList;
//     return todosRemaining;
// }

export const searchTextSelector = (state) => state.filters.search;
