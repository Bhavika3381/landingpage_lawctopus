import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />

      {/* Page Content */}
      <div className="pt-20">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default Layout;