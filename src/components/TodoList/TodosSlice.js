
const initValue = {

    todoList: [
        { id: 1, name: 'Learn React', completed: false, priority: 'High' },
        { id: 2, name: 'Learn Nodejs', completed: false, priority: 'Medium' },
        { id: 3, name: 'Eat', completed: true, priority: 'Low' },

    ]
}
const todoListReducer = (state = initValue, action) => {

    /**
     * {
     *  type:'todoList/addTodo'
     *  payload:   { id: 5, name: 'Learn React', completed: false, prioriry: 'High' },
     * }
     */
    // console.log({ state, action });
    switch (action.type) {

        case 'todoList/addTodo':
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}

export default todoListReducer;