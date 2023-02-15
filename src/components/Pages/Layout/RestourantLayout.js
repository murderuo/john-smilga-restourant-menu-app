import { Outlet } from 'react-router-dom';
import Header from '../../Header';

function RestourantLayout({ pageValues, setPageValue, basketState }) {
  const [basket, setBasket] = basketState;

  return (
    <>
      <Header menu={pageValues?.menu} basket={basket} />
      {/* <Outlet  pageValues={pageValues} setPageValue={setPageValue}/> */}
      <Outlet context={{ pageValues, setPageValue, setBasket }} />
    </>
  );
}

export default RestourantLayout;
