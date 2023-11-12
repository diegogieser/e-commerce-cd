import React from 'react';
import PropTypes from 'prop-types';

const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="item-list-container">
      <h2>Productos Destacados</h2>
      <p>{mensaje}</p>
    </div>
  );
};

ItemListContainer.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default ItemListContainer;