import React from "react";
import ball from "../assets/ball.png";
import Tokenomics from "./Tokenomics";
const About = () => {
  return (
    <div>
      <div className="m-10 ">
        <div className="flex flex-row justify-center items-center   ">
          <h1 className="md:text-9xl text-5xl   text-pink-400 font-extrabold justify-center text-center opacity-10  ">
            かぼす
          </h1>
          <h1 className="md:text-4xl text-xl ont capitalize md:-ml-80 -ml-40 text-center text-cyan-800">
            who is Baby kabosu?
          </h1>
        </div>
        <div className="text-center justify-center text-[#4c5a77]">
          <div className="my-5">
            <p className="text-[#4c5a77] md:text-2xl text-lg italic font-medium">
              <strong>
                Baby Kabosu Inu is a female Shiba Inu most famously
                known as the face of Kabosu aka Doge.
              </strong>
            </p>
            <p className="md:text-lg text-sm my-5 font-normal">
            Baby Kabosu INU is a decentralized Metaverse Game token build on Binance Smart chain, aims to become a globalized decentralized<p></p> alternative for holders in the light of an ever-expanding market.
            </p>
            <p className="md:text-lg text-sm my-5 font-normal">
              The goal of Baby Kabosu is to prevent dogs of all breeds from being
              abandoned. For this reason we will be making regular donations to
              community chosen dog charities!
            </p><div className=" justify-between">
         <img
            src={ball}
            alt="ball"
            className=" my-5 object-center"
          />
        </div>
            
          </div>
          
        
            
          
        </div>
      </div>
      <Tokenomics/>
    </div>
  );
};

export default About;
