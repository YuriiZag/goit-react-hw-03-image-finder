import { Backdrop, Modal } from './modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };


  onClickHandle = e => {
    this.props.onClose()
  }

  render() {
    return createPortal(
      <Backdrop onClick={this.onClickHandle}>
        <Modal>{this.props.children}</Modal>
      </Backdrop>,
      modalRoot
    );
  }
}

ModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired
}