import Logo from "../assets/socializeLogo.png";
import InputField from "../components/InputField";
import PrimaryBtn from "../components/PrimaryBtn";
import { ChangeEvent, useState } from "react";
import Loader from "../components/Loader";
import Image from "../assets/login/logoAttract.png";
import { validateEmail } from "../helpers/methods";
import { Link } from "react-router-dom";
import { loginUser } from "../services/LoginService";

const Login = () => {
  const [userData, setUserData] = useState<loginData>({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUpRequest = async () => {
    try {
      setIsLoading(true);
      const data = {
        email: userData.email.value,
        password: userData.password.value,
      };
      const response = await loginUser(data);
      setUserData({
        email: { value: "", error: "" },
        password: { value: "", error: "" },
      });
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData((prev: any) => ({
      ...prev,
      [event.target.name]: { value: event.target.value, error: "" },
    }));
  };

  const handleBlurEmail = () => {
    if (userData.email.value !== "" && !validateEmail(userData.email.value)) {
      setUserData((prev: loginData) => ({
        ...prev,
        email: {
          ...prev.email,
          error: "Email is not valid",
        },
      }));
    }
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 overflow-x-hidden bg-gradient-to-b from-white to-light-orange">
        <div className="hidden lg:flex items-center justify-center">
          <div className="w-[80%] h-[85vh] rounded-md flex justify-center items-center">
            <img
              src={Image}
              alt="courselImage"
              className="block object-contain"
            />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col gap-4">
          <img src={Logo} alt="logo" className=" w-32" />
          <div className="flex items-center justify-center flex-col gap-4 w-[75%] p-5">
            <h3 className="text-2xl font-semibold font-josefin">
              Welcome Back!
            </h3>
            <p className="text-md font-semibold font-josefin text-center">
              Welcome back to Socialize! Sign in now to explore your network,
              connect with friends, and stay updated with the latest happenings.
            </p>
            <InputField
              type="email"
              label="Email"
              value={userData.email.value}
              placeholder="john.doe@company.com"
              id="email"
              onChange={handleChange}
              onBlur={handleBlurEmail}
              error={userData.email.error}
              isRequired
            />
            <InputField
              type="password"
              label="Password"
              value={userData.password.value}
              placeholder="•••••••••"
              id="password"
              onChange={handleChange}
              error={userData.password.error}
              isRequired
            />
            <PrimaryBtn
              label="Login"
              className="w-[100%]"
              onClick={signUpRequest}
            />
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Loader isLoading={isLoading} />
    </>
  );
};

export default Login;
