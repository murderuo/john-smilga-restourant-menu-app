import { Outlet, useOutletContext } from 'react-router-dom';
import MenuItem from '../../MenuItem/MenuItem';

function BreakFastLayout() {
  const { pageValues, setPageValues } = useOutletContext();
  console.log(pageValues);


  return (

    <>
    <Outlet context={{ pageValues, setPageValues }}/>
      {/* <div className="container">
        <div className="row">
          <div className="col-lg-12  d-flex flex-wrap">
            {pageValues?.allMenuItems?.map(item => {
              if (item?.category === 'breakfast') {
                return <MenuItem item={item} pageValues={pageValues} setPageValues={setPageValues} />;
              }
            })}
          </div>
        </div>
      </div> */}
    </>
  );
}

export default BreakFastLayout;
