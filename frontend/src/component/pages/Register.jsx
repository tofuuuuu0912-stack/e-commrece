import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { MdOutlineKey } from "react-icons/md";
const Register = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen  ">
      <div className=" p-6 bg-gray-200 h-120 w-100  space-y-6   rounded-2xl">
        <h1 className="text-4xl  text-center  text-blue-500 font-semibold ">
          Register Account{" "}
        </h1>
        <div className=" mt-10 space-y-4">
          <div className="relative ">
            <CgProfile className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Enter Your Username"
              className="border p-4 w-full bg-gray-300 rounded-4xl pl-10 "
            />
          </div>
          <div className="relative">
            <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl " />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border p-4 w-full pl-10 bg-gray-300 rounded-4xl"
            />
          </div>
          <div className="relative">
            <MdOutlineKey className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl " />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="border w-full p-4 pl-10 bg-gray-300 rounded-4xl"
            />
          </div>
        </div>
        <div>
          <button className="bg-blue-500 w-full p-4 cursor-pointer rounded-4xl text-white  text-center ">
            Login
          </button>
          <p className="justify-end flex cursor-pointer  text-blue-500 font-semibold">
            Forgot password?
          </p>
          <div className="flex gap-1">
            <p className=""> Already have an account? </p>
            <Link className=" text-blue-500 font-semibold " to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
