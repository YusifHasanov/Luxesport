import React from "react";
import Home from "../features/layouts/startup/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "../features/layouts/navigation/Navigation";
import SingleNews from "../features/layouts/news/SingleNews";
import Shop from "../features/layouts/shop/Shop";
import Footer from "./../features/layouts/Footer/Footer";
import SingleShopPage from "../features/layouts/shop/SingleShopPage";
import NewsList from "../features/layouts/news/NewsList";
import Cart from "./../features/layouts/cart/Cart";
import { useLocation } from "react-router-dom";
const Dashboard = () => {
  const location = useLocation();
  //scroll to top on page change
  React.useEffect(() => {
    window.scrollTo(0, 0);

  }, [location.pathname])
  
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="news/:newsId" element={<SingleNews />} />
        <Route path="shop/:productId" element={<SingleShopPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Dashboard;
