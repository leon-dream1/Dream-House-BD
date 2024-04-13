import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <div className="w-[30%] mx-auto mt-[100px] p-[60px] border rounded-lg">
      <h1 className="text-center text-[40px] font-montserrat font-medium mb-[40px]">
        Register Here
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-[20px]">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
            {...register("name")}
          />
        </div>
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
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            {...register("photoURL")}
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
        <div>
          <input
            type="submit"
            value="Register"
            className="input input-bordered w-full bg-[#425CEC] text-white text-[22px] font-semibold font-merriweather"
          />
        </div>
      </form>
      <div className="space-x-5 text-center">
        <span className="text-[16px] text-[#131313] font-inter">
          Already Have an Account?{" "}
        </span>
        <span
          onClick={() => navigate("/login")}
          className="text-[18px] text-blue-600 font-semibold underline font-montserrat cursor-pointer"
        >
          Log in
        </span>
      </div>
    </div>
  );
};

export default Register;
