import React from 'react';
import {connect} from 'react-redux';
import { message } from 'antd';
import { Form, Row, Col, Button, Input } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import {addTodoAction} from '../../actions/todoActions';
import TodoService from '../../services/TodoService';

function TodoForm(props) {
    const [form] = Form.useForm();

    const onFinish = (props) => {
        const inputContent = form.getFieldValue('content')
        addNewItem(props, inputContent);
        form.resetFields();
      };

    return (
        <Form form={form} onFinish={() => onFinish(props)} layout="horizontal" className="todo-form">
        <Row gutter={20}>
            <Col xs={24} sm={24} md={17} lg={19} xl={20}>
            <Form.Item
                name={'content'}
                rules={[{ required: true, message: 'This field is required' }]}
            >
                <Input placeholder="What needs to be done?" />
            </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={7} lg={5} xl={4}>
            <Button type="primary" htmlType="submit" block>
                <PlusCircleFilled />
                Add todo
            </Button>
            </Col>
        </Row>
        </Form>
    );
}

function addNewItem(props, content) {
    const newItem = {
        content: content,
        status: false
    };
    TodoService.create(newItem)
        .then(response => {
            console.log(`New item added: ${JSON.stringify(response.data)}`);
            props.addItem(response.data);
            message.success("Item added");
        })
        .catch(e => {
            console.error(e);
            message.error("Failed to add item");
        });
}

const mapDispatchToProps = {
    addItem: addTodoAction
};

export default connect(null, mapDispatchToProps)(TodoForm);

