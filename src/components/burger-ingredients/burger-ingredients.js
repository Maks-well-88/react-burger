import React from 'react';
import style from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientsGroup } from '../ingredients-group/ingredients-group';
import { ingredientType } from '../../utils/types.js';
import PropTypes from 'prop-types';

BurgerIngredients.propTypes = {
  data: ingredientType.isRequired,
  openModal: PropTypes.func.isRequired,
};

export function BurgerIngredients({ data, openModal }) {
  const [current, setCurrent] = React.useState('one');
  const group = ['bun', 'sauce', 'main'];

  return (
    <section className={style.ingredients}>
      <h1 className={style.heading}>Соберите бургер</h1>
      <div className={style.tabs}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={style.ingredientsContainer}>
        <h2 className={style.ingredientsGroupTitle}>Булки</h2>
        <IngredientsGroup data={data} group={group[0]} openModal={openModal} />
        <h2 className={style.ingredientsGroupTitle}>Соусы</h2>
        <IngredientsGroup data={data} group={group[1]} openModal={openModal} />
        <h2 className={style.ingredientsGroupTitle}>Начинки</h2>
        <IngredientsGroup data={data} group={group[2]} openModal={openModal} />
      </div>
    </section>
  );
}
