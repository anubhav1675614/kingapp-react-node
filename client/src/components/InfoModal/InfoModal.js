import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './style.scss';

// @NOTE this is uncontrolled modal by intention
// @TODO add variety to icon class for color
class InfoModal extends Component {
  onClick = () => {
    this.props.onClick();
  };

  render() {
    const { show, icon, title, children, buttonText } = this.props;
    return (
      <Modal show={show} onHide={this.handleHide} dialogClassName="info-modal">
        <Modal.Header>
          <Modal.Body>
            <div className="info-modal__content">
              <div className="info-modal__icon">
                <i className={icon} />
              </div>
              <div className="info-modal__title">{title}</div>
              <div className="info-modal__desc">{children}</div>
              <div className="info-modal__button">
                <Button variant="success" onClick={this.onClick}>
                  {buttonText}
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    );
  }
}

InfoModal.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  handleHide: PropTypes.func,
  buttonText: PropTypes.node,
  show: PropTypes.bool
};

InfoModal.defaultProps = {
  title: '',
  icon: 'icon_check_alt',
  onClick: () => undefined,
  handleHide: () => undefined,
  buttonText: 'OK',
  show: false
};

export default InfoModal;
