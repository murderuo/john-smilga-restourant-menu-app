import { Outlet } from 'react-router-dom';
import Header from '../../Header';

function RestourantLayout({ pageValues, setPageValues }) {
  // const [basket, setBasket] = basketState;

  return (
    <>
      <Header pageValues={pageValues}  />
      {/* <Outlet  pageValues={pageValues} setPageValue={setPageValue}/> */}
      <Outlet context={{ pageValues, setPageValues }} />
    </>
  );
}

export default RestourantLayout;
