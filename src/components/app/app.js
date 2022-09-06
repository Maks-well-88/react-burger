import React from 'react';
import style from './app.module.css';
import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';

const INGREDIENTS_DATA_API = 'https://norma.nomoreparties.space/api/ingredients';

export function App() {
  const [ingredientsData, setIngredientsData] = React.useState([]);

  React.useEffect(() => {
    fetch(INGREDIENTS_DATA_API)
      .then((response) => response.json())
      .then((data) => setIngredientsData({ ...data, isError: false }))
      .catch((error) => setIngredientsData({ isError: true }));
  }, []);

  return (
    <React.Fragment>
      <AppHeader />
      {ingredientsData.data && (
        <main className={style.container}>
          <BurgerIngredients data={ingredientsData.data} />
          <BurgerConstructor data={ingredientsData.data} />
        </main>
      )}
    </React.Fragment>
  );
}
