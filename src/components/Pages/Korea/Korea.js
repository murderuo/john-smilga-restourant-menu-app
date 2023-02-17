import { useOutletContext } from 'react-router-dom';
import IncreaseDecreaseButtons from '../../AddBasket/AddBasket';
import MenuItem from '../../MenuItem';

function Korea() {
  const { pageValues,setPageValues } = useOutletContext();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12  d-flex flex-wrap">
            {pageValues.allMenuItems.map(item => {
              if (item?.category === 'Korea') {
                return <MenuItem item={item} pageValues={pageValues} setPageValues={setPageValues} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Korea;
