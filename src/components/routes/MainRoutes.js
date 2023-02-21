import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { adress } from '../../data/adress';
import Home from '../Pages/Home';
import BreakFast from '../Pages/BreakFast';
import Lunch from '../Pages/Lunch';
import Shakes from '../Pages/Shakes';
import Korea from '../Pages/Korea';
import Japan from '../Pages/Japan';
import China from '../Pages/China';
import Basket from '../Pages/Basket/';
import Adress from '../Pages/AddAdress/';
import RestourantLayout from '../Pages/Layout/RestourantLayout';
import allMenuItems from '../../data/data';
import MenuLayout from '../Pages/Layout/MenuLayout';
import ItemDetail from '../ItemDetail/ItemDetail';
import BreakFastLayout from '../Pages/BreakFast/BreakfastLayout';
import LunchLayout from '../Pages/Lunch/LunchLayout';
import ShakesLayout from '../Pages/Shakes/ShakesLayout';
import KoreaLayout from '../Pages/Korea/ShakesLayout';
import JapanLayout from '../Pages/Japan/JapanLayout';
import ChinaLayout from '../Pages/China/ChinaLayout';
import BasketLayout from '../Pages/Layout/BasketLayout';

function MainRoutes() {
  // const [basket, setBasket] = useState([]);
  const [pageValues, setPageValues] = useState({
    allMenuItems,
    loading: true,
    menu: allMenuItems.reduce((acc, item) => (!acc.includes(item.category) ? [...acc, item.category] : [...acc]), ['all']),
    basket: [],
    adress,
    // uniqueBasketItems :[...new Set(this.basket)]
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<RestourantLayout pageValues={pageValues} setPageValues={setPageValues} />}>
          <Route index={true} element={<Home />} />
          <Route path="menu" element={<MenuLayout />}>
            <Route index={true} element={<Home />} />
            <Route path="all" element={<Home />} />
            <Route path="breakfast" element={<BreakFastLayout />}>
              <Route index={true} element={<BreakFast />} />
              <Route path=":title" element={<ItemDetail />} />
            </Route>
            <Route path="lunch" element={<LunchLayout />}>
              <Route index={true} element={<Lunch />} />
              <Route path=":title" element={<ItemDetail />} />
            </Route>
            <Route path="shakes" element={<ShakesLayout />}>
              <Route index={true} element={<Shakes />} />
              <Route path=":title" element={<ItemDetail />} />
            </Route>
            <Route path="Korea" element={<KoreaLayout />}>
              <Route index={true} element={<Korea />} />
              <Route path=":title" element={<ItemDetail />} />
            </Route>
            <Route path="Japan" element={<JapanLayout />}>
              <Route index={true} element={<Japan />} />
              <Route path=":title" element={<ItemDetail />} />
            </Route>
            <Route path="China" element={<ChinaLayout />}>
              <Route index={true} element={<China />} />
              <Route path=":title" element={<ItemDetail />} />
            </Route>
            <Route path="basket" element={<BasketLayout />}>
              <Route index={true} element={<Basket />} />
              <Route path="choose-adress" element={<Adress />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default MainRoutes;
