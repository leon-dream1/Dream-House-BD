import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(null);
  return (
    <div className="container mx-auto mt-2">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-x-6"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-700 font-extrabold text-[18px] font-merriweather"
                    : "text-[18px] font-merriweather font-semibold text-[#131313]"
                }
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-700 font-extrabold text-[18px] font-merriweather"
                    : "text-[18px] font-merriweather font-semibold text-[#131313]"
                }
                to={"/updateProfile"}
              >
                Update Profile
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-700 font-extrabold text-[18px] font-merriweather"
                    : "text-[18px] font-merriweather font-semibold text-[#131313]"
                }
                to={"/register"}
              >
                Register
              </NavLink>
            </ul>
          </div>
          <button className="text-[22px] font-merriweather text-[#131313] font-extrabold">
            DreamHouse
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 font-extrabold text-[18px] font-merriweather"
                  : "text-[18px] font-merriweather font-semibold text-[#131313]"
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 font-extrabold text-[18px] font-merriweather"
                  : "text-[18px] font-merriweather font-semibold text-[#131313]"
              }
              to={"/updateProfile"}
            >
              Update Profile
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 font-extrabold text-[18px] font-merriweather"
                  : "text-[18px] font-merriweather font-semibold text-[#131313]"
              }
              to={"/register"}
            >
              Register
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={() => navigate("/login")}
            className="bg-[#425CEC] text-white text-[18px] font-merriweather font-semibold px-[35px] py-[10px] rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
