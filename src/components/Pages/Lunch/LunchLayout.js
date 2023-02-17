import { Outlet, useOutletContext } from 'react-router-dom';

function LunchLayout() {
  const { pageValues, setPageValues } = useOutletContext();
  console.log(pageValues);

  return (
    <>
      <Outlet context={{ pageValues, setPageValues }} />
    </>
  );
}

export default LunchLayout;
