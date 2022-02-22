import React, { useState } from "react";
import home from "../assets/kabousababy.png";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="bg-gradient-to-r from-[#eb79b8]  to-[#eba63f] h-24 bg-white text-white ont">
      <nav className="w-full flex md:justify-center justify-between   items-center p-4">
        <div className="md:flex-[0.5] flex-initial bg-transparent z-10 justify-between  items-center">
          <div className="flex flex-row justify-center items-center">
            <div className="w-20 h-20 rounded-full items-center">
              <img
                src={home}
                alt="home"
                className="w-20 h-20 rounded-full  object-cover"
              />
            </div>

            <h1 className="text-[28px] block  justify-center items-center text-center border-b-4 border-pink-600  ">
              <a href="/">Baby Kabosu</a>
            </h1>
          </div>
        </div>
        <div className="text-white md:flex hidden list-none flex-row justify-evenly items-center flex-initial">
          <div className="flex flex-row justify-evenly  navbar-brand items-center">
            <a
              href="about"
              className="text-lg block justify-center scroll-smooth"
            >
              <div className="justify-items-center hover:text-[#fdfd96] px-2">
                About
              </div>
            </a>
            <a href="/tokenomics" className="text-lg justify-center">
              <div className="justify-items-center hover:text-[#fdfd96] px-2">
                Tokenomics
              </div>{" "}
            </a>
            <a href="/docs" className="text-lg justify-center">
              <div className="justify-items-center hover:text-[#fdfd96] px-2">
                Documents
              </div>{" "}
            </a>
            <a href="/roadmap" className="text-lg justify-center">
              <div className="justify-items-center hover:text-[#fdfd96] px-2">
                RoadMap
              </div>{" "}
            </a>
            <a href="/join" className="text-lg justify-center">
              <div className="justify-items-center hover:text-[#fdfd96] px-2">
                Join
              </div>
            </a>
            <a href="/contact" className="text-lg justify-center">
              <div className="justify-items-center hover:text-[#fdfd96] px-2">
                Contact
              </div>{" "}
            </a>
            {/* https://pdfhost.io/edit?doc=bfced6aa-2c59-46b2-abaf-2e3e1f892821 */}
            <a
              href="https://pdfhost.io/v/MesUhEk8m_PowerPoint_Presentation"
              alt=""
              target="_blank"
              rel="noreferrer"
            >
              <div className="justify-items-center px-2 py-3">
                <h1 className="px-5 py-2 navbar-brand">Whitepaper</h1>
              </div>
            </a>
          </div>
        </div>
        <div className="flex relative">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed top-0 -right-2 p-3 w-[50vw] h-screen shadow-xl md:hidden list-none
                flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              <div className=" items-center">
                <a
                  href="about"
                  className="text-lg block justify-center scroll-smooth"
                >
                  <div className="justify-items-center  px-2">About</div>
                </a>
                <a href="/tokenomics" className="text-lg justify-center">
                  <div className="justify-items-center px-2">Tokenomics</div>{" "}
                </a>
                <a href="/roadmap" className="text-lg justify-center">
                  <div className="justify-items-center px-2">RoadMap</div>{" "}
                </a>
                <a href="/join" className="text-lg justify-center">
                  <div className="justify-items-center px-2">Join</div>
                </a>
                <a href="/contact" className="text-lg justify-center">
                  <div className="justify-items-center px-2">Contact</div>{" "}
                </a>

             
                  
                    <a
                      href="https://pdfhost.io/v/MesUhEk8m_PowerPoint_Presentation"
                      alt=""
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="justify-items-center px-2">
                        <h1 className=" text-lg">Whitepaper</h1>
                      </div>
                    </a>
                  
                
              </div>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
