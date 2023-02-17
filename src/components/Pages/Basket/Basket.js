import { Link, useOutletContext } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { showCount } from '../../../utils/utils';
import IncreaseDecreaseButtons from '../../AddBasket/AddBasket';

function Basket() {
  const { pageValues, setPageValues } = useOutletContext();

  const [animationParent] = useAutoAnimate();

  const uniqueBasketItems = [...new Set(pageValues.basket)];

  const handleDeleteItem = id => {
    const filteredItems = pageValues.basket.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
    setPageValues({ ...pageValues, basket: filteredItems });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto" ref={animationParent}>
            {uniqueBasketItems.map(item => (
              <div className="d-flex p-3" key={item.id}>
                <div className="img">
                  <img src={item.img} alt="" className="item-img rounded img-border" />
                </div>
                <div className="d-flex flex-column ms-2 w-75 mt-2">
                  <div className="border-bottom d-flex justify-content-between ">
                    <h4 className="fs-5 ff-varela fw-bold m-0">{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</h4>
                    <h4 className="ff-varela fs-5 m-0">$ {showCount(pageValues.basket, item) * item.price}</h4>
                  </div>
                  <p className="fs-5">{item.desc.substring(0, 50)}...</p>
                  <div className="mt-auto d-flex justify-content-end align-self-end">
                    <IncreaseDecreaseButtons item={item} pageValues={pageValues} setPageValues={setPageValues} />
                    <button className="cancel-button btn-sm align-self-end" onClick={() => handleDeleteItem(item.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-end ff-varela fs-4 fw-bold">
              <div className="me-3">Total: </div>
              <div className="">${pageValues.basket.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</div>
            </div>
            <Link to="/" className="text-decoration-none text-light ">
              Make Order
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;
