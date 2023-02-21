import { Link, useOutletContext } from 'react-router-dom';
import { showCount } from '../../../utils/utils';
import IncreaseDecreaseButtons from '../../AddBasket/AddBasket';
import { useEffect, useRef, useState } from 'react';
import autoAnimate from '@formkit/auto-animate';

function Basket() {
  const { pageValues, setPageValues } = useOutletContext();
  const uniqueBasketItems = [...new Set(pageValues.basket)];

  // const [animationParent] = useAutoAnimate(); // simple way of the animation
  // then need to add parent element ref={animationParent} thats  all !

  const basketDivRef = useRef();
  const [basketDiv, setBasketDiv] = useState(false);

  const handleDeleteItem = id => {
    const filteredItems = pageValues.basket.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
    setPageValues({ ...pageValues, basket: filteredItems });
  };

  const checkDivHeight = () => {
    const basketDivHeight = basketDivRef.current.offsetHeight;
    console.log(basketDivHeight);
    if (basketDivHeight > 465) {
      setBasketDiv(true);
    } else if (uniqueBasketItems.length < 3) {
      setBasketDiv(false);
    }
  };

  useEffect(() => {
    checkDivHeight();
  }, [uniqueBasketItems]);

  useEffect(() => {
    basketDivRef.current && autoAnimate(basketDivRef.current);
  }, [basketDivRef]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto" ref={basketDivRef}>
            {uniqueBasketItems.length > 0 ? (
              uniqueBasketItems.map(item => (
                <>
                  <div className="d-flex p-3" key={item.id}>
                    <div className="img">
                      <img src={item.img} alt="" className={basketDiv ? `item-img-sm  rounded img-border` : `item-img rounded img-border`} />
                    </div>
                    <div className="d-flex flex-column ms-2 w-75 mt-2">
                      <div className="border-bottom d-flex justify-content-between ">
                        <h4 className={!basketDiv ? `fs-5 ff-varela fw-bold m-0` : `fs-5 ff-varela fw-bold m-0`}>
                          {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                        </h4>
                        <h4 className="ff-varela fs-5 m-0">$ {(showCount(pageValues.basket, item) * item.price).toFixed(2)}</h4>
                      </div>
                      <p className={basketDiv ? `d-none` : `fs-5`}>{item.desc.substring(0, 50)}...</p>
                      <div
                        className={
                          basketDiv ? `mt-1 height-40  d-flex justify-content-end align-self-end` : `mt-auto d-flex justify-content-end align-self-end`
                        }
                      >
                        <IncreaseDecreaseButtons item={item} pageValues={pageValues} setPageValues={setPageValues} />
                        <button
                          className={basketDiv ? 'btn-sm-cancel-xsm align-self-end' : 'btn-sm-cancel align-self-end'}
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ))
            ) : (
              <>
                <div className="ff-varela fs-1 fw-light d-flex justify-content-center mt-5">Your Basket is Empty !!</div>
              </>
            )}
            {uniqueBasketItems.length > 0 && (
              <>
                <div className="d-flex justify-content-end ff-varela fs-4 fw-bold">
                  <div className="me-3">Total: </div>
                  <div className="">${pageValues.basket.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</div>
                </div>
                <div className="col-12">
                  <div className="d-flex justify-content-center">
                    <Link to={'choose-adress'} className="text-decoration-none mx-auto ff-varela fs-4 btn text-light ">
                      Complete An Order
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;
