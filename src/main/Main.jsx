import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";
// import Footer from "../Pages/Footer";

const Main = () => {
  return (
    <div className="max-w-1200px">
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
