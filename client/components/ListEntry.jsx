import React from 'react';

const ListEntry = (props) => {
  return (
    <li className="item" onClick={() => props.deleteItem(props.index)}>
        {props.todo}
    </li>
  );
};

export default ListEntry;