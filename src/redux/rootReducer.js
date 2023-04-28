//cấu hình giá trị mặc định
const initState = {
    filter: {
        search: '',
        status: 'All',
        priority: [],
    }, todoList: [
        { id: 1, name: 'Learn React', completed: false, priority: 'Medium' },
        { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
        { id: 3, name: 'Learn Js', completed: false, priority: 'Low' },
    ]
}

const rootReducer = (state = initState, action) => {

    //bước 6: check action đã được gửi qua
    console.log('state when send action', { state, action });
    //kiểm tra action type
    /**
     * {type: 'todoList/addTodo},
     * payload: { id: 5, name: 'Learn Java', completed: false, priority: 'Low' },
     */
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                //lấy state cũ
                ...state,
                todoList: [
                    //lấy list todolist và thêm 1 todo mới trong action
                    ...state.todoList,
                    action.payload
                ]
            }
        //bước 12: setting reducer
        case 'filters/searchFilterChange':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    search: action.payload
                }
            }

        default:
            return state;
    }


}

export default rootReducer;