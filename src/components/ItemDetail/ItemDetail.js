import { Outlet, useLocation, useParams } from 'react-router-dom';

function ItemDetail() {
  const location = useLocation();
  const params = useParams();
  const item = location.state;

  console.log(params);

  return (
    <>
      <Outlet />
      <div className="container">
        <div className="row">
          <div className="d-flex flex-column align-items-center ">
            <p className="display-1 mx-auto">{params.title}</p>
            <div className="d-flex flex-column align-items-center w-75 " key={item.id}>
              <img src={item.img} alt="" className="detail-item-img rounded img-border" />

              <div className="border-bottom border-dark d-flex justify-content-between w-100 mt-4 ">
                <h4 className="fs-5 ff-varela fw-bold">{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</h4>
                <h4 className="ff-varela fs-5 m-0">$ {item.price}</h4>
              </div>
              <p className="fs-5">{item.desc}</p>
              <div className="mt-auto d-flex justify-content-end align-self-end"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
