import React from "react";
// import {AiFillPlayCircle} from 'react-icons/ai'
import paper from "../assets/whitepaper.png";
import cov1 from "../assets/whitecover.png";
import cov2 from "../assets/auditcover.png";
import Roadmap from "./Roadmap";
const Doucument = () => {
  return (
    <div className="">
      <hr/>
      <div className="py-20 bg-gradient-to-r from-[#eb79b8]  to-[#eba63f] text-white ont justify-center">
        <div className="flex md:flex-row flex-col text-center md:px-20 px-5">
          <div className="justify-center   md:p-10 p-3 animate-none">
            
            <div className="cover  transition delay-150 duration-300 ease-in-out  ">
               <a
              href="https://babykabosuinu.com"
              className="justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={paper} className="animate-pulse  " alt="cover" />                            
            </a>
            </div>
           
          </div>
          <div>
            <h1 className="md:text-5xl text-3xl mx-10">Baby Kabosu Swap</h1>
            <div className="border-b-8 border-pink-400 md:mx-64 mx-32 mt-5 w-32  justify-center"></div>
            <p className="my-10 font-medium mx-14">
            The Inu Ecosystem will entail a DEX, a wallet, an NFT Marketplace, a token bridge, a staking protocol, a pet adoption platform tired to charitable work, and finally, our own Centralized Exchange, all tied to the token Baby KABOSU.
            </p>
            <p className="my-10 font-medium mx-14">
            Starting with the release of Baby Kabosu and continuing with the release of INU in the near future.</p>
            <div className="flex md:flex-row flex-col justify-evenly p-5 mt-5 capitalize">
              <div className="flex flex-row px-5 ">
                <div className="mt-4 -mr-14 z-10 w-20 h-32">
                  <img src={cov1} alt="" className="" />
                </div>
                <div className="flex flex-col white-glassmorphism  w-56 h-28 z-0">
                  <h1 className="m-5 ">Whitepaper</h1>
                  <a
                    href="https://babykabosuinu.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="hover:text-pink-500 font-semibold border border-pink-500 mx-14">
                      Read Now
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex flex-row px-5">
                <div className="mt-4 -mr-14 z-10 w-20 h-32">
                  <img src={cov2} alt="" className="" />
                </div>
                <div className="flex flex-col white-glassmorphism  w-56 h-28 z-0">
                  <h1 className="m-5 ">Audit</h1>
                  <a
                    href="https://babykabosuinu.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="hover:text-pink-500 font-semibold border border-pink-500 mx-14">
                      Read Now
                    </button>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Roadmap />
    </div>
  );
};

export default Doucument;
