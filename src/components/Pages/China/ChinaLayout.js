import { Outlet, useOutletContext } from 'react-router-dom';

function ChinaLayout() {
  const { pageValues, setPageValues } = useOutletContext();
  console.log(pageValues);

  return (
    <>
      <Outlet context={{ pageValues, setPageValues }} />
    </>
  );
}

export default ChinaLayout;
