import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pt-[80px] bg-base-200 mt-[100px]">
      <div className="container mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center mb-6 text-center md:text-start p-0 md:p-10 lg:p-0">
        <div className="">
          <p className="text-[28px] font-merriweather font-medium">
            Dream House BD
          </p>
          <p className="text-[20px] font-inter mt-2">
            Providing reliable House For You
          </p>
          <p className="text-[14px] font-raleway text-blue-500 mt-2">
            With a legacy of excellence in real estate services, we specialize
            in connecting clients with their perfect homes. Whether you are
            buying, selling, or investing, our experienced team is dedicated to
            guiding you through every step of the process. Discover your next
            chapter with us today
          </p>
        </div>
        <div className="flex flex-col space-y-4 text-[18px] lg:pl-10">
          <h6 className="footer-title">Services</h6>
          <NavLink to={"/"} className="link link-hover">
            Home
          </NavLink>
          <NavLink to={"/login"} className="link link-hover">
            Login
          </NavLink>
          <NavLink to={"/register"} className="link link-hover">
            Register
          </NavLink>
          <NavLink to={"/blog"} className="link link-hover">
            Blog
          </NavLink>
        </div>
        <div className="flex flex-col space-y-4 text-[18px]">
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Github</a>
        </div>
        <div className="space-y-4 text-[18px]">
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control">
            <label className="">
              <span className="text-center font-merriweather">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </div>
      </div>
      <footer className="footer footer-center py-6 bg-base-200 text-base-content text-[16px]">
        <aside>
          <p>Copyright © 2024 - All right reserved by DreamHouseBD</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
