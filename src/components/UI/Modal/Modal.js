import React from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return(<div className={ classes.backdrop } onClick={ props.onClose } />);
};

const ModalOverlay = (props) => {
  return(
    <div className={ classes.modal }>
      <div className={ classes.content }>{ props.children }</div>
    </div>);
};

const PortalElement = document.getElementById('overlay')

const Modal = (props) => {
  return(
    <React.Fragment>
      { ReactDom.createPortal(<Backdrop onClose={ props.onClose }/>, PortalElement) }
      { ReactDom.createPortal(<ModalOverlay>{ props.children }</ModalOverlay>, PortalElement) }
    </React.Fragment>
  );
};

export default Modal;
