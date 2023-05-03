
const initValue = {
    filters: {
        search: '',
        status: 'All',
        priorities: []
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
        case 'filter/prioritiesFilterChange':
            return {
                ...state,
                priorities: action.payload
            }
        default:
            return state;
    }
}

export default filtersReducer;