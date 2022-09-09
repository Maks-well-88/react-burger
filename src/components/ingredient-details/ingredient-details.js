import style from './ingredient-details.module.css';
import { ingredientType } from '../../utils/types';

IngredientDetails.propTypes = {
  data: ingredientType.isRequired,
};

export function IngredientDetails({ data }) {
  return (
    <>
      <img className={style.image} src={data.image_large} alt="" />
      <p className={style.name}>{data.name}</p>
      <div className={style.nutritionValues}>
        <div className={style.info}>
          <span className={style.infoTitle}>Калории,ккал</span>
          <p className="text text_type_digits-default">{data.calories}</p>
        </div>
        <div className={style.info}>
          <span className={style.infoTitle}>Белки, г</span>
          <p className="text text_type_digits-default">{data.proteins}</p>
        </div>
        <div className={style.info}>
          <span className={style.infoTitle}>Жиры, г</span>
          <p className="text text_type_digits-default">{data.fat}</p>
        </div>
        <div className={style.info}>
          <span className={style.infoTitle}>Углеводы, г</span>
          <p className="text text_type_digits-default">{data.carbohydrates}</p>
        </div>
      </div>
    </>
  );
}
