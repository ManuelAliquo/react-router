import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductsPage from "./pages/ProductsPage";
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/about-us" Component={AboutUsPage}></Route>
          <Route path="/products" Component={ProductsPage}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
