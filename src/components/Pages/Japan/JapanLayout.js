import { Outlet, useOutletContext } from 'react-router-dom';

function JapanLayout() {
  const { pageValues, setPageValues } = useOutletContext();
  console.log(pageValues);

  return (
    <>
      <Outlet context={{ pageValues, setPageValues }} />
    </>
  );
}

export default JapanLayout;
