import { useOutletContext } from 'react-router-dom';

function Adress() {
  const { pageValues, setPageValues } = useOutletContext();
  const adress = pageValues?.adress;

  console.log(adress);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="d-flex flex-wrap justify-content-center ">
              {adress.map(item => (
                <div className="title p-3  m-1 w-25 d-flex border rounded">
                  <div className=" me-1">
                    <input type="radio" name="" id="" />
                  </div>
                  <div className="ff-varela">{item.addressName}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adress;
