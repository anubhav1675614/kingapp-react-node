import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

const Container = ({ children, className }) => (
  <div className={cx('container-wrap', className)}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Container;
