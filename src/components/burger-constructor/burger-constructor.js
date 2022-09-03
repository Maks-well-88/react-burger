import React from 'react';
import style from './burger-constructor.module.css';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const ingredientPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })
);

BurgerConstructor.propTypes = {
  data: ingredientPropTypes.isRequired,
};

function BurgerConstructor({ data }) {
  return (
    <section className={style.constructor}>
      <div className={style.burgerTopBun}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={data[0].name}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </div>
      <ul className={style.burgerItems}>
        {data.slice(1, -1).map((item) => (
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
          text={data[data.length - 1].name}
          price={data[data.length - 1].price}
          thumbnail={data[data.length - 1].image}
        />
      </div>
      <div className={style.total}>
        <p className="text text_type_digits-medium">610</p>
        <CurrencyIcon width={33} height={33} type="primary" />
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
