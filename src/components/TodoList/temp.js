//reducer là 1 function

const initValue = { value: 0 }

//quy tắc ràng buộc: giá trị state mới phải được tính toán trên gái trị state trước đó
// phải sử dụng ...state: phải tạo ra phiên bản copy và không được thao tác trực tiếp( state.value = state.value +1)
// k được sử dụng các function không đồng bộ: math.random(), date.now, request tới server(side affect) gọi api: 
//bởi mỗi thần thực thi sẽ tạo ra 1 kq khác, k thể dự đoán dược kết quả=> vi phạm pattern của react
//=> quy tắc này là PURE FUNTION: redux giúp có thể dự doán được kết quả trả về chị dựa vào giá trị nhập vào(init value),k phải kq từ api, hay math.random() thay đổi liên tục
// UI k hiện thị được state mới nhất nếu không sử dung ...
// có thể debug ở phía UI: time-travel debuging
const rootReducer = (state = initValue, action) => {

    //action sẽ có 
    // type: 'todoList/imcrement',
    // payload: 10,
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            }
        case 'todoList/imcrement':
            return {
                ...state,
                value: state.value + action.payload
            }
        default:
            return state;
    }
}

//ACTION

const INCREMENT = {
    type: 'todoList/imcrement',
    payload: 10,
}
//action creator là function tạo ra action: data động thay cho payload
const incrementCreator = (data) => {
    return {
        type: 'todoLIst/increment',
        payload: data,
    };
}
//khi thay đổi 1 thì sẽ thay đổi các action 
incrementCreator(10);

//DISPATCH: là 1 function
//sử dụng function này để : nhận vào action(object) : giống như bắn đi 1 action từ phía UI:
//bắn dữ liệu từ action vào store, reducer trong store nhân được dữ liệu này( currenstate, action thực hiện từ dispath)


//https://youtu.be/g_K1w8e0lLo?t=2250
