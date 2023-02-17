import { showCount, removeBasket as decreaseButton } from '../../utils/utils';

function AddBasket({ item, pageValues, setPageValues }) {
  return (
    <>
      <button className="btn btn-sm text-light" onClick={() => setPageValues({ ...pageValues, basket: decreaseButton(pageValues.basket, item) })}>
        -
      </button>
      <input type="text" value={showCount(pageValues.basket, item)} className="w-25 text-center mx-1 rounded" />
      <button className="btn btn-sm me-4 text-light" onClick={() => setPageValues({ ...pageValues, basket: [...pageValues.basket, item] })}>
        +
      </button>
    </>
  );
}

export default AddBasket;
