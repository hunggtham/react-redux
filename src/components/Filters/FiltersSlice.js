
const initValue = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    }
}
const filtersReducer = (state = initValue, action) => {

    /**
     * {
     *  type:'todoList/addTodo'
     *  payload:   { id: 5, name: 'Learn React', completed: false, prioriry: 'High' },
     * }
     */
    // console.log({ state, action });
    switch (action.type) {

        case 'filter/searchFilterChange':
            return {
                ...state,
                search: action.payload
            }
        case 'filter/statusFilterChange':
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}

export default filtersReducer;