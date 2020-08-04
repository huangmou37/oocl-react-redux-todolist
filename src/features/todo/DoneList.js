import React from 'react';
import { connect } from 'react-redux';
import DoneItem from './DoneItem';

function DoneList(props) {
    return (
        <div>
            <h1>Done items</h1>
            {
                props.doneList.map(item => (
                    <DoneItem item={item} key={item.id}/>
                ))
            }
        </div>
    );
}

const mapStateToProps = state => {
    const doneList = state.doneList
    return { doneList: doneList }
  };
  
export default connect(mapStateToProps, null)(DoneList);