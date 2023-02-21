import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import IncreaseDecreaseButtons from '../../AddBasket/AddBasket';
import MenuItem from '../../MenuItem';
import { PacmanLoader } from 'react-spinners';

// import allMenuItems from '../../../data/data';

function Home() {
  //outlet componentde geçilen proplerı useOutletCOntext olarak alıyoruz
  const { pageValues, setPageValues } = useOutletContext();
  console.log(pageValues);

  useEffect(() => {
    setTimeout(() => {
      setPageValues({ ...pageValues, loading: false });
    }, 1000);
  }, []);

  return (
    <>
      {pageValues.loading ? (
        <div className="container">
            <div className="row">
              <div className="col-12 ">
              <div className='d-flex justify-content-center align-items-center' style={{height:'200px'}}>
                  <PacmanLoader />
                </div>
              </div>
            </div>
          </div>
      ) : (
        <> 
         
          <div className="container">
            <div className="row">
              <div className="col-lg-12  d-flex flex-wrap">
                {pageValues.allMenuItems.map(item => (
                  <MenuItem item={item} pageValues={pageValues} setPageValues={setPageValues} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
