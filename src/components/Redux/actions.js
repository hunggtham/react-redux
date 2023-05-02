
// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: { id: 5, name: 'Learn React', completed: false, prioriry: 'High' },
// }

//action creator: 
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data,
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'filter/searchFilterChange',
        payload: text,
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filter/statusFilterChange',
        payload: status,
    }
}