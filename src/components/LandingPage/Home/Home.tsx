"use client";

import Text from "./Text";
import picture from "../../../assets/Me.png";

const Home = () => {
  return (
    <div className="
    bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-400 to-purple-900
    relative w-full h-full flex items-center justify-around">
      <Text />
      <img src={picture} alt="picture" className=" z-20 rounded-full" />
    </div>
  );
};

export default Home;
