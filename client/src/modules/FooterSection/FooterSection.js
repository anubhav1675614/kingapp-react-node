import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import './style.scss';

class FooterSection extends Component {
  render() {
    const { isPrev, isNext, onPrev, onNext, isDisabled } = this.props;

    return (
      <div className="footer-section mt-4">
        <Button className={`footer-btn footer-prev ${isPrev ? 'show' : 'hide'}`} onClick={onPrev}>
          Back
        </Button>
        <Button
          className={`footer-btn footer-next ${isNext ? 'show' : 'hide'}`}
          onClick={onNext}
          disabled={isDisabled}
        >
          Next
        </Button>
      </div>
    );
  }
}

FooterSection.propTypes = {
  isPrev: PropTypes.bool,
  isNext: PropTypes.bool,
  onPrev: PropTypes.func,
  onNext: PropTypes.func
};

FooterSection.defaultProps = {
  isPrev: true,
  isNext: true,
  onPrev: () => undefined,
  onNext: () => undefined
};

export default FooterSection;
