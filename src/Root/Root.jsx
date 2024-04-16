import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
