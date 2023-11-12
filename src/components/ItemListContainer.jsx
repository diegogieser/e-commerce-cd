import React from 'react';


const ItemListContainer = (props) => {
  return (
    <div className="item-list-container">
      <h2>Homepage</h2>
      <p>{props.message}</p>
    </div>
  );
};

export default ItemListContainer;
