import { Link } from 'react-router-dom';
import IncreaseDecreaseButtons from '../AddBasket';

function MenuItem({ item, pageValues, setPageValues }) {
  return (
    <>
      <div className="d-flex item-card  p-3 card-border-bottom " key={item.id}>
        <div className="img">
          <img src={item.img} alt="" className="item-img rounded img-border" />
        </div>
        <div className="d-flex flex-column ms-2 w-75 mt-2">
          <div className="border-bottom border-dark d-flex justify-content-between ">
            {/* <h4 className="fs-5 ff-varela fw-bold m-0">{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</h4> */}
            <h4 className="fs-5 ff-varela fw-bold m-0 ">
              <Link to={item.title.charAt(0).toUpperCase() + item.title.slice(1)} state={{ ...item }} className="text-decoration-none text-dark">
                {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
              </Link>
            </h4>
            <h4 className="ff-varela fs-5 m-0">$ {item.price.toFixed(2)}</h4>
          </div>
          <p className="fs-5">{item.desc.substring(0, 50)}...</p>
          <div className="mt-auto d-flex justify-content-end align-self-end">
            <IncreaseDecreaseButtons item={item} pageValues={pageValues} setPageValues={setPageValues} />
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setPageValues({ ...pageValues, basket: [...pageValues.basket, item] })}
              disabled={pageValues?.basket?.includes(item)}
            >
              {pageValues?.basket?.includes(item) ? 'Added' : 'Add Basket'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuItem;
