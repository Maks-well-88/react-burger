import style from './modal-overlay.module.css';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

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
