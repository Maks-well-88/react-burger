import React from 'react';
import style from './app.module.css';
import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { OrderDetails } from '../order-details/order-details';

const INGREDIENTS_DATA_API = 'https://norma.nomoreparties.space/api/ingredients';

export function App() {
  const [ingredientsData, setIngredientsData] = React.useState([]);
  const [modalData, setModalData] = React.useState({ open: false });

  React.useEffect(() => {
    fetch(INGREDIENTS_DATA_API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(`Ошибка! Код ответа: ${response.status}.`);
        }
      })
      .then((data) => setIngredientsData({ ...data, isError: false }))
      .catch((error) => {
        setIngredientsData({ isError: true });
        console.error(error);
      });
  }, []);

  const handleOpenClick = (params) => setModalData({ params, open: true });
  const handleCloseClick = () => setModalData({ open: false });

  return (
    <React.Fragment>
      <AppHeader />
      {ingredientsData.data && (
        <main className={style.container}>
          <BurgerIngredients data={ingredientsData.data} openModal={handleOpenClick} />
          <BurgerConstructor data={ingredientsData.data} openModal={handleOpenClick} />
        </main>
      )}
      {modalData.open && (
        <Modal title={modalData.params.title} closeModal={handleCloseClick}>
          {modalData.params.hasTitle ? <IngredientDetails data={modalData.params.item} /> : <OrderDetails />}
        </Modal>
      )}
    </React.Fragment>
  );
}
