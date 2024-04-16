import { useContext } from "react";
import { AuthContext } from "../../Provider/ContextProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updateInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    updateInfo(data.name, data.photoURL)
      .then(() => {
        toast.success("Update is saved");
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user);
  return (
    <div className="container mx-auto mt-[100px] w-[100%] lg:w-[50%] p-[10px] md:p-[60px] border rounded-lg">
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <h2 className="text-[30px] md:text-[40px] text-center text-blue-600 font-merriweather mb-6">
        Welcome,{user.displayName}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-[20px]">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
            defaultValue={user.displayName}
            {...register("name")}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            defaultValue={user.email}
            readOnly
            {...register("email")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Photo URL"
            defaultValue={user.photoURL}
            className="input input-bordered w-full"
            {...register("photoURL")}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Update Profile"
            className="input input-bordered w-full bg-[#425CEC] text-white text-[22px] font-semibold font-merriweather cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
