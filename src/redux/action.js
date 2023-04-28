
//action Creator: là function để tạo ra các action( khi sửa thì sẽ aplly tới các nơi gọi tới action hiện tại)
//sau khi tạo ra action create thì sẽ tạo ra action dựa vào actionCreator

export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

//chỉ sử dụng actioncreator luôn
// export const addTodoAction = {
//     //mô tả xem nó là hành động gì
//     //đặt tên với todoList/ do mình đang có thao tác với tính năng todoList trong kho chung( initialState)
//     type: 'todoList/addTodo',
//     payload:
//         { id: 5, name: 'Learn Java', completed: false, priority: 'Low' }

// }

//bước 10: tạo action cho dispath
export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text,
    }
}
