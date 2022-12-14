import React from 'react';
import style from './burger-constructor.module.css';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientsArrayType } from '../../utils/types.js';
import PropTypes from 'prop-types';

BurgerConstructor.propTypes = {
  data: ingredientsArrayType.isRequired,
  openModal: PropTypes.func.isRequired,
};

export function BurgerConstructor({ data, openModal }) {
  return (
    <section className={style.constructor}>
      <div className={style.burgerTopBun}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={data[0].name + ' (верх)'}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </div>
      <ul className={style.burgerItems}>
        {data.slice(2).map((item) => (
          <li key={item._id} className={style.burgerItem}>
            <DragIcon type="primary" />
            <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
          </li>
        ))}
      </ul>
      <div className={style.burgerBottomBun}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={data[0].name + ' (низ)'}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </div>
      <div className={style.total}>
        <p className="text text_type_digits-medium">610</p>
        <CurrencyIcon width={33} height={33} type="primary" />
        <Button type="primary" size="large" onClick={() => openModal({ hasTitle: false })}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}
