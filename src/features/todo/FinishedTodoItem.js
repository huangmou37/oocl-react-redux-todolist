import React from 'react';
import {connect} from 'react-redux';
// import {deleteTodoAction} from '../todo/Actions';

function FinishTodoItem(props) {
    return (
        <div>
            <label>{props.item.content}</label>
            {/* <button onClick={props.deleteItem(props.item)}>X</button> */}
        </div>
    );
}

// const mapDispatchToProps = {
//     deleteItem: deleteTodoAction
// };

// export default connect(null, mapDispatchToProps)(FinishTodoItem);

export default FinishTodoItem;