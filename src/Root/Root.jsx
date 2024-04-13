import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
