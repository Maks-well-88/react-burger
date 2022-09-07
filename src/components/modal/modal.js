import React from 'react';
import style from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

Modal.propTypes = {
  selector: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export function Modal({ selector, closeModal, children }) {
  React.useEffect(() => {
    document.addEventListener('keydown', handleCloseEsc);
    return () => document.removeEventListener('keydown', handleCloseEsc);
  }, []);

  const handleCloseEsc = (e) => e.key === 'Escape' && closeModal();

  return (
    <div className={style.modal}>
      <div className={style.headingWrap}>
        {selector === 'ingridient' ? (
          <p className={style.ingridient}>Детали ингредиента</p>
        ) : (
          <p className={style.order}>Детали ингредиента</p>
        )}
        <span onClick={closeModal}>
          <CloseIcon type="primary" />
        </span>
      </div>
      {children}
    </div>
  );
}
