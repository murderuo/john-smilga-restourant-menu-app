import { Link } from 'react-router-dom';
import { BsBasket } from 'react-icons/bs';

function Header({ pageValues }) {
  // console.log(pageValues);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 ">
            <h1 className="ff-varela d-flex justify-content-center ">Wlcome to XX Restourant</h1>
          </div>
          <div className="container-bg d-flex align-items-center justify-content-center flex-wrap p-2 mt-3">
            {pageValues?.menu.map((item, index) => (
              <Link to={`menu/${item}`} className="text-decoration-none" key={index}>
                <div className="m-3 ff-varela ms-4 fs-4 btn text-light ">{item.charAt(0).toUpperCase() + item.slice(1)}</div>
              </Link>
            ))}
            <div className="m-3 ff-varela fs-4 btn text-light d-flex align-items-center">
              <Link to="menu/basket" className="text-decoration-none text-light">
                <span className="me-2">Basket</span>
                <div className="basket-parent">
                  <div className="basket-icon d-flex align-items-center justify-content-center">{pageValues?.basket?.length}</div>
                  <BsBasket />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
