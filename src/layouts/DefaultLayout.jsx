import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <div className="container py-4">
        {/* contenuto della pagina corrente */}
        <Outlet />
      </div>
    </>
  );
}
