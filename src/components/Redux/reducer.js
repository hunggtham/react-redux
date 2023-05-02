
const initValue = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        // { id: 1, name: 'Learn React', completed: false, prioriry: 'High' },
        // { id: 2, name: 'Learn React1', completed: false, prioriry: 'High' },
        // { id: 3, name: 'Learn React2', completed: true, prioriry: 'Low' },

    ]
}
const rootReducer = (state = initValue, action) => {

    /**
     * {
     *  type:'todoList/addTodo'
     *  payload:   { id: 5, name: 'Learn React', completed: false, prioriry: 'High' },
     * }
     */
    // console.log({ state, action });
    switch (action.type) {

        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'filter/searchFilterChange':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload
                }
            }
        default:
            return state;
    }
}

export default rootReducer;