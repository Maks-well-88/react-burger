import style from './modal-overlay.module.css';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modals');

export function ModalOverlay(props) {
  const handleCloseClick = (e) => e.target === e.currentTarget && props.closeModal();

  return ReactDOM.createPortal(
    <div className={style.overlay} onClick={handleCloseClick}>
      {props.children}
    </div>,
    modalRoot
  );
}
