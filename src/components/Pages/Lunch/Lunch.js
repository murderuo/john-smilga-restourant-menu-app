import { useOutletContext } from 'react-router-dom';
import MenuItem from '../../MenuItem/';

function Lunch() {
  const { pageValues, setPageValues } = useOutletContext();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12  d-flex flex-wrap">
            {pageValues.allMenuItems.map(item => {
              if (item?.category === 'lunch') {
                return <MenuItem item={item} pageValues={pageValues} setPageValues={setPageValues} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Lunch;
