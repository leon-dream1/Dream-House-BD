import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/ContextProvider";

const Navbar = () => {
  const navigate = useNavigate(null);

  const { user, logOut, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        setUser("");
      })
      .catch((error) => console.log(error));
  };

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
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="dropdown dropdown-end">
                <div>
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full" title={user.displayName}>
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={
                          user.photoURL
                            ? user.photoURL
                            : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        }
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>{user.displayName}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-[#ee4040] text-white text-[18px] font-merriweather font-semibold px-[35px] py-[10px] rounded-lg"
              >
                Log out
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-[#425CEC] text-white text-[18px] font-merriweather font-semibold px-[35px] py-[10px] rounded-lg"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
