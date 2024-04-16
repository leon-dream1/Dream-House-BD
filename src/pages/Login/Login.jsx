import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/ContextProvider";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, googleLogin, facebookLogin } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const { register, handleSubmit, reset } = useForm();
  console.log(location);

  const onSubmit = (data) => {
    setError("");
    console.log(data);
    const { email, password } = data;
    signIn(email, password)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        toast.success("Log in successfully.........");
        reset({
          email: "",
          password: "",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.code);
        setError("Password is Not matching");
        toast.error("password is incorrect");
      });
  };

  const handleGoogleLogIn = () => {
    googleLogin()
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        toast.success("Log in successfully.........");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFacebookLogIn = () => {
    facebookLogin()
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        toast.success("Log in successfully.........");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-[100%] lg:w-[30%] md:mx-auto mt-[50px] md:mt-[100px] p-[20px] md:p-[60px] border rounded-lg">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h1 className="text-center text-[40px] font-montserrat font-medium mb-[40px]">
        Login Here
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-[20px]">
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            {...register("email")}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Type Your Password"
            className="input input-bordered w-full"
            required
            {...register("password")}
          />
        </div>
        {error ? <span className="text-red-700">{error}</span> : ""}
        <div>
          <input
            type="submit"
            value="Log in"
            className="input input-bordered w-full bg-[#425CEC] text-white text-[22px] font-semibold font-merriweather cursor-pointer"
          />
        </div>
      </form>
      <div className="space-x-5 text-center mt-2">
        <span className="text-[16px] text-[#131313] font-inter">
          Do not have an Account?{" "}
        </span>
        <span
          onClick={() => navigate("/register")}
          className="text-[18px] text-blue-600 font-semibold underline font-montserrat cursor-pointer"
        >
          Register
        </span>
      </div>
      <div
        onClick={handleGoogleLogIn}
        className="mt-10 flex items-center bg-[#425CEC] text-white text-[18px] font-semibold font-merriweather cursor-pointer space-x-4  lg:space-x-10 py-2 rounded-lg justify-start md:justify-center lg:justify-start"
      >
        <FaGoogle size={24} className="ml-[30px] lg:ml-[70px]" />
        <button>Continue With Google</button>
      </div>
      <div
        onClick={handleFacebookLogIn}
        className="mt-5 flex items-center bg-[#425CEC] text-white text-[18px] font-semibold font-merriweather cursor-pointer space-x-4 lg:space-x-10 py-2 rounded-lg justify-start md:justify-center lg:justify-start"
      >
        <FaFacebook size={24} className="ml-[30px] lg:ml-[70px]" />
        <button>Continue With FaceBook</button>
      </div>
    </div>
  );
};

export default Login;
