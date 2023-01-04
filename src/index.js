import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./root/App";
import "./index.css";
import { cartSlice } from "./features/redux/cartSlice";
import { productSlice } from "./features/redux/productsSlice";
import { BrowserRouter } from "react-router-dom";
import { categorySlice } from "./features/redux/categorySlice";
import { newsSlice } from "./features/redux/newsSlice";
import { sessionSlice } from "./features/redux/shopSessionSlice";
const container = document.getElementById("root");
const root = createRoot(container);

store.dispatch(productSlice.endpoints.getProducts.initiate());
store.dispatch(categorySlice.endpoints.getCategories.initiate());
store.dispatch(newsSlice.endpoints.getNews.initiate());
store.dispatch(cartSlice.endpoints.getCart.initiate());
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
