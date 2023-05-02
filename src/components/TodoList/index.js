import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../Redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todosRemainingSelector } from '../Redux/selectors';


export default function TodoList() {

  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium');
  const dispath = useDispatch();
  //lấy dữ liệu từ kho chung
  const todoList = useSelector(todosRemainingSelector);
  // const searchText = useSelector(searchTextSelector);
  // console.log({ todoList, searchText });

  const handleAddButtonClick = () => {
    dispath(addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false,
    }))
    setTodoName('');
    setPriority('Medium');
  }
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setTodoName(e.target.value);
  }

  const handlePriorityChange = (value) => {

    // setPriority(e);
    // console.log('check', { value });
    setPriority(value);
    //https://youtu.be/g_K1w8e0lLo?t=3666
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' priority='High' />
        <Todo name='Learn Redux' priority='Medium' /> */}
        {todoList.map(todo => <Todo key={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact >
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange} >
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
