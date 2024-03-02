"use client";

import Text from "./Text";
import picture from "../../../assets/Me.png";

const Home = () => {
  return (
    <div className=" bg-slate-800 w-full h-full flex items-center justify-around">
      <Text />
      <img src={picture} alt="picture" className=" rounded-full" />
      
    </div>
  );
};

export default Home;
