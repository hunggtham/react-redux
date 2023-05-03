import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { prioritiesFilterChange, searchFilterChange, statusFilterChange } from '../Redux/actions';
const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState('');
  const [status, setStatus] = useState('All');
  const [filterPriorities, setFilterPriorities] = useState([]);

  const dispath = useDispatch();
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
    console.log(searchText)
    dispath(searchFilterChange(e.target.value))
  }

  const handleStatusChange = (e) => {
    console.log(e);
    setStatus(e.target.value);

    dispath(statusFilterChange(e.target.value))

  }
  const handlePrioritiesChange = (value) => {
    // console.log({ e })
    setFilterPriorities(value);
    dispath(prioritiesFilterChange(value));
  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={handleSearchTextChange} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleStatusChange} >
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={filterPriorities}
          onChange={handlePrioritiesChange}
        >
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
      </Col>
    </Row>
  );
}
