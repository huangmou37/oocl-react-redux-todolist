import React from 'react';
import {connect} from 'react-redux';
import { message } from 'antd';
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import {deleteTodoAction, checkTodoAction} from '../../actions/todoActions';
import TodoService from '../../services/TodoService';

function TodoItem(props) {
    const isCompleted = props.item.status;
    const item = props.item;

    return (
        <List.Item
            actions={[
            <Tooltip
                title={isCompleted ? 'Mark as uncompleted' : 'Mark as completed'}
            >
                <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                onChange={() => toggleItem(props, item)}
                defaultChecked={item.status}
                />
            </Tooltip>,
            <Popconfirm
                title="Are you sure you want to delete?"
                onConfirm={() => {
                    removeItem(props, item.id);
                }}
            >
                <Button className="remove-todo-button" type="primary" danger>
                X
                </Button>
            </Popconfirm>,
            ]}
            className="list-item"
            key={item.id}
        >
            <div className="todo-item">
            <Tag color={item.status ? 'cyan' : 'red'} className="todo-tag">
                {item.content}
            </Tag>
            </div>
        </List.Item>);
}

function toggleItem(props, item) {
    const updatedItem = {
        ...item,
        status: !item.status
    };
    TodoService.update(updatedItem.id, updatedItem)
        .then(_ => {
            props.toggleItem(updatedItem.id);
        })
        .catch(e => {
            message.error("Failed to toggle item status");
        });
}

function removeItem(props, id) {
    TodoService.remove(id)
        .then(_ => {
            props.deleteItem(props.item.id);
            message.success('Item removed');
        })
        .catch(e => {
            message.error("Failed to remove item");
        });
}

const mapDispatchToProps = {
    deleteItem: deleteTodoAction,
    toggleItem: checkTodoAction
};

export default connect(null, mapDispatchToProps)(TodoItem);