import React from 'react';
import style from './app.module.css';
import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { dataIngredients } from '../../utils/data.js';

export function App() {
  const state = { data: dataIngredients };

  return (
    <React.Fragment>
      <AppHeader />
      <main className={style.container}>
        <BurgerIngredients data={state.data} />
        <BurgerConstructor data={state.data} />
      </main>
    </React.Fragment>
  );
}
