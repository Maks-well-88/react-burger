import React from 'react';
import ReactDOM from 'react-dom';
import style from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { ModalOverlay } from '../modal-overlay/modal-overlay';

Modal.propTypes = {
  title: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

const modalRoot = document.getElementById('modals');

export function Modal({ title, closeModal, children }) {
  React.useEffect(() => {
    document.addEventListener('keydown', handleCloseEsc);
    return () => document.removeEventListener('keydown', handleCloseEsc);
  }, []);

  const handleCloseEsc = (e) => e.key === 'Escape' && closeModal();

  return ReactDOM.createPortal(
    <ModalOverlay closeModal={closeModal}>
      <div className={style.modal}>
        <div className={style.headingWrap}>
          <p className={style.title}>{title}</p>
          <span onClick={closeModal}>
            <CloseIcon type="primary" />
          </span>
        </div>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
}
