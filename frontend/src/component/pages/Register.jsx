import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen  ">
      <div className=" p-6 bg-gray-200 h-100 w-100  space-y-6   rounded-2xl">
        <h1 className="text-4xl  text-center ">Register Account </h1>
        <div className=" mt-10 space-y-4">
            <div>
                <label className="font-semibold text-" >Username</label>
                <input
              type="text"
              placeholder="Enter Your Username"
              className="border p-2 w-full"
            />
            </div>
          <div>
            <label className="text-xl font-semibold">Email</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label className="text-xl font-semibold">Password </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="border w-full p-2"
            />
          </div>
        </div>
        <div>
          <button className="bg-blue-500 w-full p-2 cursor-pointer rounded-xl  text-center ">
            Login
          </button>
          <p className="justify-end flex cursor-pointer">Forgot password?</p>
          <div className="flex gap-1"> 
          <p> Don't have a account?</p>
          <Link to="/register">Register</Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
