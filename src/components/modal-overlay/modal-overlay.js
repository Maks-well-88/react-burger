import style from './modal-overlay.module.css';
import PropTypes from 'prop-types';

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export function ModalOverlay(props) {
  const handleCloseClick = (e) => e.target === e.currentTarget && props.closeModal();

  return (
    <div className={style.overlay} onClick={handleCloseClick}>
      {props.children}
    </div>
  );
}
