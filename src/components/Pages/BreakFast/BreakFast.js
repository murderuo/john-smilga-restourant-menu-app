import { useOutletContext } from 'react-router-dom';
import MenuItem from '../../MenuItem/MenuItem';

function BreakFast() {
  const { pageValues, setPageValues } = useOutletContext();
  console.log(pageValues.basket);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12  d-flex flex-wrap">
            {pageValues.allMenuItems.map(item => {
              if (item?.category === 'breakfast') {
                return <MenuItem item={item} pageValues={pageValues} setPageValues={setPageValues} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BreakFast;
