import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/about-us" Component={AboutUsPage}></Route>
        <Route path="/products" Component={ProductsPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}
