import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Pages/Home';
import BreakFast from '../Pages/BreakFast';
import Lunch from '../Pages/Lunch';
import Shakes from '../Pages/Shakes';
import Korea from '../Pages/Korea';
import Japan from '../Pages/Japan';
import China from '../Pages/China';
import Basket from '../Pages/Basket/';

import RestourantLayout from '../Pages/Layout/RestourantLayout';
import allMenuItems from '../../data/data';
import { useState } from 'react';
import MenuLayout from '../Pages/Layout/MenuLayout';
import ItemDetail from '../ItemDetail/ItemDetail';

function MainRoutes() {
  // const [basket, setBasket] = useState([]);
  const [pageValues, setPageValues] = useState({
    allMenuItems,
    loading: true,
    menu: allMenuItems.reduce((acc, item) => (!acc.includes(item.category) ? [...acc, item.category] : [...acc]), ['all']),
    basket: [],
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<RestourantLayout pageValues={pageValues} setPageValues={setPageValues} />}>
          <Route index={true} element={<Home />} />
          <Route path="menu" element={<MenuLayout />}>
            <Route index={true} element={<Home />} />
            <Route path="all" element={<Home />} />
            <Route path="breakfast" element={<BreakFast />}>
              <Route path="details" element={<ItemDetail />} />
            </Route>
            <Route path="lunch" element={<Lunch />} />
            <Route path="shakes" element={<Shakes />} />
            <Route path="Korea" element={<Korea />} />
            <Route path="Japan" element={<Japan />} />
            <Route path="China" element={<China />} />
            <Route path="basket" element={<Basket />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default MainRoutes;
