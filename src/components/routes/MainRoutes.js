import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Pages/Home';
import BreakFast from '../Pages/BreakFast';
import Lunch from '../Pages/Lunch';
import Shakes from '../Pages/Shakes';
import Korea from '../Pages/Korea';
import Japan from '../Pages/Japan';
import China from '../Pages/China';

import RestourantLayout from '../Pages/Layout/RestourantLayout';
import allMenuItems from '../../data/data';
import { useState } from 'react';

function MainRoutes() {
  const [basket, setBasket] = useState([]);
  const [pageValues, setPageValue] = useState({
    allMenuItems,
    loading: true,
    menu: allMenuItems.reduce((acc, item) => (!acc.includes(item.category) ? [...acc, item.category] : [...acc]), ['all']),
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<RestourantLayout pageValues={pageValues} setPageValue={setPageValue} basketState={[basket, setBasket]} />}>
          <Route index={true} element={<Home />} />
          <Route path="all" element={<Navigate to="/" />} />
          <Route path="breakfast" element={<BreakFast />} />
          <Route path="lunch" element={<Lunch />} />
          <Route path="shakes" element={<Shakes />} />
          <Route path="Korea" element={<Korea />} />
          <Route path="Japan" element={<Japan />} />
          <Route path="China" element={<China />} />
        </Route>
      </Routes>
    </>
  );
}

export default MainRoutes;
