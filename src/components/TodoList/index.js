import React, { useState } from 'react';
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/action';
import { v4 as uuidv4 } from 'uuid';
import { todosRemainingSelector } from '../../redux/selector';
export default function TodoList() {

  //5.4-2-1
  const [todoName, setTodoName] = useState('');

  // 5.4 - 2 - 2
  const [prioriry, setPrioriry] = useState('Medium');

  //bước 8 -1:
  //useSeletor là functon lấy ra từng dữ liệu trong kho chung(filter, todoList)
  // const todoList = useSeletor((state) => state.todoList);// cách viết tường minh nhưng phải lặp lại nhiều lần
  // console.log({ todoList })
  // thay vì thế thì sẽ viết thêm file redux/seletor.js và import vào
  //cách 1(13-1)
  //const todoList = useSelector(todoListSelector);

  // 13-1: lấy search text đã nhập ở trong kho
  // const searchText = useSelector(searchTextSeletor);
  // console.log({ todoList, searchText });

  //cách 2: 
  const todoList = useSelector(todosRemainingSelector);


  //5.3.gọi dispath với nội dung là nội dung đã ghi(name) và độ ưu tiên(prioty) được chọn trên UI, đưa thông tin đó vào dispath
  const dispath = useDispatch();

  //5.2.trong event handler này chúng ta khi ấn nút add, sử dụng dispath để bắn đi action,
  const handleAddButtonClick = () => {
    //5.4. lấy ra function dispath: thay vì viết thủ công action thì chỉ cần gọi lại action đã tạo trước đó (bước4)
    //nhận dữ liệu data: cần truyền data với cùng field với thông tin chung

    //5.5: đã viết event handler đã dispath action có tên là addTodo thì bên rootReducer sẽ được gọi
    dispath(
      addTodo({
        //5.4-1using unique id with uuid library: npm i uuid
        id: uuidv4(),
        //tạo state để lấy name nhập vào 
        name: todoName,
        priority: prioriry,
        completed: false
      }))

    //8-3
    setTodoName('');
    setPrioriry('Medium');

  }
  // 5.4-1-2
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
    // console.log(e.target.value)
  }
  //  5.4-2-2
  const handlePriorityChange = (value) => {
    // console.log({ value });
    setPrioriry(value);
  }

  return (
    // 5.1.trong đây cần viết eventHandler cho sự kiện click cho nút Add
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {/* 8.2: lấy được dữ liệu rồi ở 8.1 thì sẽ render ra màn hình */}
        {todoList.map((todo) => <Todo key={todo.id} name={todo.name} prioriry={todo.priority} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          {/* 5.4-1-1 */}
          <Input value={todoName} onChange={handleInputChange} />
          {/* 5.4-2-1 */}
          <Select defaultValue="Medium" value={prioriry} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
