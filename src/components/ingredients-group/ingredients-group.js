import React from 'react';
import style from './ingredients-group.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types.js';

IngredientsGroup.propTypes = {
  data: ingredientType.isRequired,
  group: PropTypes.string.isRequired,
};

export function IngredientsGroup({ data, group, openModal }) {
  const groupData = data.filter((item) => {
    return item.type === group;
  });

  return (
    <ul className={style.ingredientsGroupList}>
      {groupData.map((item) => (
        <li key={item._id} className={style.ingredientsElement} onClick={() => openModal(item)}>
          <Counter count={1} size="default" />
          <img className={style.image} src={item.image_large} alt={item.name} />
          <div className={style.price}>
            <p className="text text_type_digits-default">{item.price}</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className={style.title}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}
