import Logo from "../../assets/socializeLogo.png";
import InputField from "../../components/InputField";
import PrimaryBtn from "../../components/PrimaryBtn";
import FirstImage from "../../assets/signup/1.jpg";
import SecondImage from "../../assets/signup/2.jpg";
import ThirdImage from "../../assets/signup/3.jpg";
import FourthImage from "../../assets/signup/4.jpg";
import { useEffect, useState } from "react";

const SignUp = () => {
  const arrOfImage = [FirstImage, SecondImage, ThirdImage, FourthImage];
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveImageIndex((prev) => (prev + 1) % arrOfImage.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [activeImageIndex]);

  return (
    <div className="w-[100vw] h-[100vh] grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 overflow-x-hidden">
      <div className="flex items-center justify-center flex-col gap-4">
        <img src={Logo} alt="logo" className=" w-32" />
        <div className="flex items-center justify-center flex-col gap-4 w-[75%] p-5">
          <h3 className="text-2xl font-semibold font-josefin">Get Started</h3>
          <p className="text-md font-semibold font-josefin text-center">
            Join Socialize now to unlock the secrets of 'Know Your Network' and
            dive into the world of your favorite platform!
          </p>
          <InputField
            type="text"
            label="Username"
            placeholder="mahi7781"
            id="userName"
            isRequired
          />
          <InputField
            type="email"
            label="Email"
            placeholder="john.doe@company.com"
            id="email"
            isRequired
          />
          <InputField
            type="password"
            label="Password"
            placeholder="•••••••••"
            id="password"
            isRequired
          />
          <InputField
            type="password"
            label="Confirm Password"
            placeholder="•••••••••"
            id="confirmPassword"
            isRequired
          />
          <PrimaryBtn label="Sign up" className="w-[100%]" />
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
  );
};

export default SignUp;
