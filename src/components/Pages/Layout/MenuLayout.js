import { Outlet, useOutletContext } from 'react-router-dom';

function MenuLayout() {
  const { pageValues, setPageValues } = useOutletContext();

  return (
    <>
      <Outlet context={{ pageValues, setPageValues }} />
    </>
  );
}

export default MenuLayout;
