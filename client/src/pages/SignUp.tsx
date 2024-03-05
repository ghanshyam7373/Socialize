import Logo from "../assets/socializeLogo.png";
import InputField from "../components/InputField";
import PrimaryBtn from "../components/PrimaryBtn";
import FirstImage from "../assets/signup/1.jpg";
import SecondImage from "../assets/signup/2.jpg";
import ThirdImage from "../assets/signup/3.jpg";
import FourthImage from "../assets/signup/4.jpg";
import { ChangeEvent, useEffect, useState } from "react";
import { checkUserName, signUpService } from "../services/SignUpService";
import Loader from "../components/Loader";
import { validateEmail, validatePassword } from "../helpers/methods";
import { Link } from "react-router-dom";

const SignUp = () => {
  const arrOfImage = [FirstImage, SecondImage, ThirdImage, FourthImage];
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [userData, setUserData] = useState<signUpData>({
    userName: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    confirm_password: { value: "", error: "" },
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveImageIndex((prev) => (prev + 1) % arrOfImage.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [activeImageIndex]);

  const signUpRequest = async () => {
    try {
      setIsLoading(true);
      const data = {
        userName: userData.userName.value,
        email: userData.email.value,
        password: userData.password.value,
      };
      const response = await signUpService(data);
      setUserData({
        userName: { value: "", error: "" },
        email: { value: "", error: "" },
        password: { value: "", error: "" },
        confirm_password: { value: "", error: "" },
      });
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  useEffect(() => console.log(userData), [userData]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData((prev: any) => ({
      ...prev,
      [event.target.name]: { value: event.target.value, error: "" },
    }));
  };

  const handleBlurEmail = () => {
    if (userData.email.value !== "" && !validateEmail(userData.email.value)) {
      setUserData((prev: signUpData) => ({
        ...prev,
        email: {
          ...prev.email,
          error: "Email is not valid",
        },
      }));
    }
  };

  const handleBlurPassword = () => {
    if (
      userData.password.value !== "" &&
      !validatePassword(userData.password.value)
    ) {
      setUserData((prev: signUpData) => ({
        ...prev,
        password: {
          ...prev.password,
          error:
            "Password must contain at least one digit, special character & length should be atleast 8",
        },
      }));
    }
  };

  const handleBlurConfirmPassword = () => {
    if (userData.confirm_password.value !== userData.password.value) {
      setUserData((prev: signUpData) => ({
        ...prev,
        confirm_password: {
          ...prev.confirm_password,
          error: "Confirm password doesn't match with password",
        },
      }));
    }
  };

  const handleBlurUserName = async () => {
    try {
      const response = await checkUserName(userData.userName.value);
      console.log(response);
      if (!response.available) {
        setUserData((prev: signUpData) => ({
          ...prev,
          userName: { ...prev.userName, error: "Username is already taken" },
        }));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 overflow-x-hidden bg-gradient-to-b from-white to-light-orange">
        <div className="flex items-center justify-center flex-col gap-4">
          <img src={Logo} alt="logo" className=" w-32" />
          <div className="flex items-center justify-center flex-col gap-4 w-[75%] p-5">
            <h3 className="text-2xl font-semibold font-josefin">Get Started</h3>
            <p className="text-md font-semibold font-josefin text-center">
              Join Socialize now to unlock the secrets of 'Know Your Network'
              and dive into the world of your favorite platform!
            </p>
            <InputField
              type="text"
              label="Username"
              value={userData.userName.value}
              placeholder="mahi7781"
              id="userName"
              onChange={handleChange}
              onBlur={handleBlurUserName}
              error={userData.userName.error}
              isRequired
            />
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
              onBlur={handleBlurPassword}
              error={userData.password.error}
              isRequired
            />
            <InputField
              type="password"
              label="Confirm Password"
              value={userData.confirm_password.value}
              placeholder="•••••••••"
              id="confirm_password"
              onChange={handleChange}
              onBlur={handleBlurConfirmPassword}
              error={userData.confirm_password.error}
              isRequired
            />
            <PrimaryBtn
              label="Sign up"
              className="w-[100%]"
              onClick={signUpRequest}
            />
            <p className="text-sm">
              Already have account?{" "}
              <Link to="/login" className="text-primary font-bold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <div className="w-[80%] h-[85vh] rounded-md overflow-hidden">
            {arrOfImage.map((el, index) => {
              return (
                <img
                  key={index}
                  src={el}
                  alt="courselImage"
                  className={
                    activeImageIndex === index ? "block object-cover" : "hidden"
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
      <Loader isLoading={isLoading} />
    </>
  );
};

export default SignUp;
