import React from 'react';
import style from './order-details.module.css';
import Done from '../../images/done.png';

export function OrderDetails() {
  return (
    <>
      <p className="text text_type_digits-large mt-4">034536</p>
      <p className={style.title}>идентификатор заказа</p>
      <img className={style.image} src={Done} alt="Заказ создан" />
      <p className={style.info}>Ваш заказ начали готовить</p>
      <p className={(style.info, style.waitText)}>Дождитесь готовности на орбитальной станции</p>
    </>
  );
}
