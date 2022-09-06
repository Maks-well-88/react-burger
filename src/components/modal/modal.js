import React from 'react';
import style from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function Modal({ data, closeModal }) {
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
      <img className={style.image} src={data[0].image_large} alt="" />
      <p className={style.name}>{data[0].name}</p>
      <div className={style.nutritionValues}>
        <div className={style.info}>
          <span className={style.infoTitle}>Калории,ккал</span>
          <p className="text text_type_digits-default">{data[0].calories}</p>
        </div>
        <div className={style.info}>
          <span className={style.infoTitle}>Белки, г</span>
          <p className="text text_type_digits-default">{data[0].proteins}</p>
        </div>
        <div className={style.info}>
          <span className={style.infoTitle}>Жиры, г</span>
          <p className="text text_type_digits-default">{data[0].fat}</p>
        </div>
        <div className={style.info}>
          <span className={style.infoTitle}>Углеводы, г</span>
          <p className="text text_type_digits-default">{data[0].carbohydrates}</p>
        </div>
      </div>
    </div>
  );
}
