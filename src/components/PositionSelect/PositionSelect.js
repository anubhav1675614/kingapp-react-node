import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const PositionSelect = ({ mainTitle, subTitle, value, selectedPos, onClick }) => (
  <div
    className={`position-select ${value === selectedPos ? 'selected' : undefined}`}
    onClick={onClick(value)}
  >
    <div className="position-select__circle" />
    <div className="position-select__title">
      <div className="position-select__maintitle">{mainTitle}</div>
      <div className="position-select__subtitle">{subTitle}</div>
    </div>
    <div className={`position-select__icon ${value === selectedPos ? 'selected' : undefined}`}>
      <i
        className={`fa fa-check position-select__checkmark ${
          value === selectedPos ? 'selected' : undefined
        }`}
      />
    </div>
  </div>
);

PositionSelect.propTypes = {
  mainTitle: PropTypes.string,
  subTitle: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func
};

PositionSelect.defaultProps = {
  mainTitle: '',
  subTitle: '',
  value: '',
  onClick: () => undefined
};

export default PositionSelect;
