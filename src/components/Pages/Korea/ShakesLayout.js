import { Outlet, useOutletContext } from 'react-router-dom';

function KoreaLayout() {
  const { pageValues, setPageValues } = useOutletContext();
  console.log(pageValues);

  return (
    <>
      <Outlet context={{ pageValues, setPageValues }} />
    </>
  );
}

export default KoreaLayout;
