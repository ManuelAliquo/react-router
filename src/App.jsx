import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductsPage from "./pages/ProductsPage";

import ProductDetailPage from "./pages/ProductDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about-us" element={<AboutUsPage />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/products/:id" element={<ProductDetailPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
