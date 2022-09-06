import React from 'react';
import style from './app.module.css';
import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { Modal } from '../modal/modal';

const INGREDIENTS_DATA_API = 'https://norma.nomoreparties.space/api/ingredients';

export function App() {
  const [ingredientsData, setIngredientsData] = React.useState([]);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  React.useEffect(() => {
    fetch(INGREDIENTS_DATA_API)
      .then((response) => response.json())
      .then((data) => setIngredientsData({ ...data, isError: false }))
      .catch((error) => setIngredientsData({ isError: true }));
  }, []);

  const handleOpenClick = () => setModalIsOpen(true);
  const handleCloseClick = () => setModalIsOpen(false);

  return (
    <React.Fragment>
      <AppHeader />
      {console.log(ingredientsData.data)}
      {ingredientsData.data && (
        <main className={style.container}>
          <BurgerIngredients data={ingredientsData.data} openModal={handleOpenClick} />
          <BurgerConstructor data={ingredientsData.data} />
        </main>
      )}
      <div style={{ overflow: 'hidden' }}>
        {modalIsOpen && (
          <ModalOverlay closeModal={handleCloseClick}>
            <Modal data={ingredientsData.data} closeModal={handleCloseClick} />
          </ModalOverlay>
        )}
      </div>
    </React.Fragment>
  );
}
