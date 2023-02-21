import { Outlet, useOutletContext } from 'react-router-dom';

function BasketLayout() {
  const { pageValues, setPageValues } = useOutletContext();

  return (
    <>
      <Outlet context={{ pageValues, setPageValues }} />
    </>
  );
}

export default BasketLayout;
