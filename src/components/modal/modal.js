import React from 'react';
import style from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function Modal({ closeModal, children }) {
  React.useEffect(() => {
    document.addEventListener('keydown', handleCloseEsc);
    return () => document.removeEventListener('keydown', handleCloseEsc);
  }, []);

  const handleCloseEsc = (e) => e.key === 'Escape' && closeModal();

  return (
    <div className={style.modal}>
      <div className={style.heading}>
        <p className="text text_type_main-large">Детали ингредиента</p>
        <span onClick={closeModal}>
          <CloseIcon type="primary" />
        </span>
      </div>
      {children}
    </div>
  );
}
