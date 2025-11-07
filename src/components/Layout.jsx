import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="py-4">
        <Outlet /> {/* Page content will render here */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
