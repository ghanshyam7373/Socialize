import { ThreeDots } from "react-loader-spinner";

interface CustomProps {
  isLoading: boolean;
}

const Loader = (props: CustomProps) => {
  return (
    <>
      {props.isLoading && (
        <div className="absolute w-[100vw] h-[100vh] top-0 flex items-center justify-center bg-opacity-65 bg-gray-700">
          <ThreeDots
            visible={props.isLoading}
            height="80"
            width="80"
            color="#FFA250"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </>
  );
};

export default Loader;
