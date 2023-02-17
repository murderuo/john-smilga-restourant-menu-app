import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';

function ItemDetail() {
  const location = useLocation();

  console.log(location);

  return (
    <>
    <Outlet/>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center">
            <p className="display-1">Details</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
