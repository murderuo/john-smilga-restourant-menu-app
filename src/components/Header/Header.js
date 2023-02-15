import { Link } from 'react-router-dom';
import { BsBasket } from 'react-icons/bs';

function Header({ menu ,basket}) {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 ">
            <h1 className="ff-varela d-flex justify-content-center ">Wlcome to XX Restourant</h1>
          </div>
          <div className="container-bg d-flex align-items-center flex-wrap p-2 mt-3">
            {menu?.map(item => (
              <Link to={item} className="text-decoration-none">
                <div className="m-3 ff-varela ms-4 fs-4 btn text-light ">{item.charAt(0).toUpperCase() + item.slice(1)}</div>
              </Link>
            ))}
            <div className="m-3 ff-varela ms-auto fs-4 btn text-light d-flex align-items-center">
              <span className='mx-2'>Basket {basket?.length}</span> <BsBasket />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
