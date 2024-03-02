/* eslint-disable @typescript-eslint/no-explicit-any */
import Lottie from "lottie-react";
import scroller from "./Scroll.json";

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <div className="h-full flex justify-center relative ">
        <div className="absolute top-16 w-full h-[48rem] p-5">
          <div className="h-full bg-neutral-100">
          {children}
          </div>
        </div>
        <div className=" size-10 absolute bottom-12">
          <Lottie animationData={scroller}/>
        </div>
      </div>
    </>
  );
};

export default Container;
