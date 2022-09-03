import React from 'react';
import style from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsGroup from '../ingredients-group/ingredients-group.js';
import PropTypes from 'prop-types';

const ingredientPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })
);

BurgerIngredients.propTypes = {
  data: ingredientPropTypes.isRequired,
};

function BurgerIngredients({ data }) {
  const [current, setCurrent] = React.useState('one');
  const state = {
    data: data,
    group: ['bun', 'sauce', 'main'],
  };

  return (
    <section className={style.ingredients}>
      <h1 className={style.heading}>Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
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
        <IngredientsGroup data={state.data} group={state.group[0]} />
        <h2 className={style.ingredientsGroupTitle}>Соусы</h2>
        <IngredientsGroup data={data} group={state.group[1]} />
        <h2 className={style.ingredientsGroupTitle}>Начинки</h2>
        <IngredientsGroup data={data} group={state.group[2]} />
      </div>
    </section>
  );
}

export default BurgerIngredients;
