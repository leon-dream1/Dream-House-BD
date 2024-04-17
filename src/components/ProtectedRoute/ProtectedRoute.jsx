import { useContext } from "react";
import { AuthContext } from "../../Provider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import { FadeLoader } from "react-spinners";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }
  if (loading) {
    return <FadeLoader color="#36d7b7" className="mx-auto mt-[50px]" />;
  }

  return <Navigate to="/login" state={location.pathname} replace></Navigate>;
};

export default ProtectedRoute;
