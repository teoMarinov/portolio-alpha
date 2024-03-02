import Lottie from "lottie-react";
import scroller from "./Scroll.json";
const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-full bg-gray-800 flex justify-center relative ">
        <div className=" absolute top-16 w-full h-[48rem] p-6 bg-neutral-100">
          {children}
        </div>
        <div className=" size-10 absolute bottom-12">
          <Lottie animationData={scroller}/>
        </div>
      </div>
    </>
  );
};

export default Container;
