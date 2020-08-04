import React from 'react';
import { connect } from 'react-redux';
import FinishedTodoItem from './FinishedTodoItem';

function FinishedTodoList(props) {
    return (
        <div>
            <label>Done items: </label>
            {
                props.finishedTodoList.map(item => (
                    <FinishedTodoItem item={item} key={item.id}/>
                ))
            }
        </div>
    );
}

const mapStateToProps = state => {
    const finishedTodoList = state.finishedTodoList
    return { finishedTodoList }
  };
  
export default connect(mapStateToProps, null)(FinishedTodoList);