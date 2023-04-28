
// export const todoListSelector = (state) => state.todoList;
//trước thì trả về tất cả, bh phải theo filter
//cách 1: 
// export const todoListSelector = (state) => {
//     const todosRemaining = state.todoList.filter((todo) => {
//         const searchText = searchTextSeletor;
//         return todo.name.includes(searchText);
//     })
//     return todosRemaining;
// };

// export const searchTextSeletor = (state) => state.filter.search;
//npm i reselect(có trong toolkit nhưng đang sử dụng core)

//cách 2 khi mà các selector phụ thuộc vào nhau
import { createSelector } from 'reselect';
export const todoListSelector = (state) => state.todoList;
export const searchTextSeletor = (state) => state.filter.search;

//createSelector(selector phụ thuộc 1,selector phụ thuộc 2, (giá trị trả về của selector1 ,2)=>{})
export const todosRemainingSelector = createSelector(
    todoListSelector, searchTextSeletor, (todoList, searchText) => {
        return todoList.filter((todo) => {
            return todo.name.includes(searchText);
        })
    })