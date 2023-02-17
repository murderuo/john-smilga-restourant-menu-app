import { Outlet, useOutletContext } from 'react-router-dom';

function ShakesLayout() {
  const { pageValues, setPageValues } = useOutletContext();
  console.log(pageValues);

  return (
    <>
      <Outlet context={{ pageValues, setPageValues }} />
    </>
  );
}

export default ShakesLayout;
