import React from 'react';
import style from './app.module.css';
import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { OrderDetails } from '../order-details/order-details';

const INGREDIENTS_DATA_API = 'https://norma.nomoreparties.space/api/ingredients';

export function App() {
  const [modalData, setModalData] = React.useState([]);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [ingredientInfo, setIngredientInfo] = React.useState();

  React.useEffect(() => {
    fetch(INGREDIENTS_DATA_API)
      .then((response) => response.json())
      .then((data) => setModalData({ ...data, isError: false }))
      .catch((error) => setModalData({ isError: true }));
  }, []);

  const handleOpenClick = (params) => {
    setIngredientInfo(params);
    setModalIsOpen(true);
  };

  const handleCloseClick = () => setModalIsOpen(false);

  return (
    <React.Fragment>
      <AppHeader />
      {modalData.data && (
        <main className={style.container}>
          <BurgerIngredients data={modalData.data} openModal={handleOpenClick} />
          <BurgerConstructor data={modalData.data} openModal={handleOpenClick} />
        </main>
      )}
      <div style={{ overflow: 'hidden' }}>
        {modalIsOpen && (
          <ModalOverlay closeModal={handleCloseClick}>
            <Modal selector={ingredientInfo.type} closeModal={handleCloseClick}>
              {ingredientInfo.type === 'ingridient' ? (
                <IngredientDetails data={ingredientInfo.item} />
              ) : (
                <OrderDetails />
              )}
            </Modal>
          </ModalOverlay>
        )}
      </div>
    </React.Fragment>
  );
}
