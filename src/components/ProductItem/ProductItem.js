import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ProductItem = ({ item, onChange }) => (
  <div className="product-item">
    <div className="product-item__name">{item.name}</div>
    <div className="product-item__content">
      <img src={item.image} className="product-item__image" alt="product" />
      <div className="product-item__count">
        <div className="product-item__count-label">How Many?</div>
        <input
          type="number"
          className="product-item__count-value"
          value={item.value}
          onChange={onChange(item.name)}
        />
      </div>
    </div>
  </div>
);

ProductItem.propTypes = {
  item: PropTypes.object,
  onChange: PropTypes.func
};

ProductItem.defaultProps = {
  item: {},
  onChange: () => undefined
};

export default ProductItem;
