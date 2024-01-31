import { useState } from "react";
import arrowUp from "../images/icon-arrow-up.svg";
import iconClose from "../images/icon-close-menu.svg";
import iconMenu from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import { navLinks } from "./js/navLink";
export default function App() {
  const [selectedDropdown, setSelectedDropdown] = useState("");
  const [openNavMenu, setOpenNavMenu] = useState(false);
  return (
    <div className="">
      <header className="relative flex items-center justify-between px-6 py-6 font-epilogue">
        <img src={logo} alt="logo icon" className="bg-cover bg-center" />
        <img
          src={iconMenu}
          alt="menu icon"
          className="relative z-30 cursor-pointer bg-cover bg-center"
          onClick={() => setOpenNavMenu(true)}
        />
        {openNavMenu && (
          <>
            <div
              className="fixed right-0 top-0 z-20 h-screen w-full bg-black/60 md:hidden"
              onClick={() => setOpenNavMenu(false)}
            ></div>
            <div className="absolute right-0 top-0 z-30 w-[70%] bg-white px-6 py-20 md:hidden">
              <img
                src={iconClose}
                alt="close icon"
                className="absolute right-6 top-6 cursor-pointer"
                onClick={() => setOpenNavMenu(false)}
              />
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  return (
                    <li
                      className="relative text-lg font-semibold text-mediumGray"
                      key={link.menu}
                    >
                      {link.dropdownMenu && (
                        <>
                          <div
                            className="flex cursor-pointer items-center gap-3"
                            onClick={() => setSelectedDropdown(link.menu)}
                          >
                            <h3 className="">{link.menu}</h3>
                            <img
                              src={arrowUp}
                              alt="arrow icon up"
                              className="mt-[4px] h-2 w-3 bg-cover bg-center"
                            />
                          </div>
                          {/* dropdown */}
                          {selectedDropdown === link.menu &&
                            link.dropdownMenu.map((dropdown) => {
                              return (
                                <div
                                  className="my-4 flex-col gap-2 pl-4 peer-checked:flex"
                                  key={dropdown.menu}
                                >
                                  <a
                                    href={dropdown.link}
                                    className="flex cursor-pointer items-center gap-3"
                                  >
                                    {dropdown.img && (
                                      <img
                                        src={dropdown.img}
                                        alt="list icon"
                                        className="bg-cover bg-center"
                                      />
                                    )}

                                    <h3 className="font-medium">
                                      {dropdown.menu}
                                    </h3>
                                  </a>
                                </div>
                              );
                            })}
                        </>
                      )}
                      {/* link without dropdown */}
                      {!link.dropdownMenu && (
                        <a href="#" className="">
                          {link.menu}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-10 flex w-full flex-col gap-3 text-center text-mediumGray">
                <a href="#" className="w-full">
                  Login
                </a>
                <a
                  href="#"
                  className="w-full rounded-2xl border-2 border-mediumGray px-8 py-2"
                >
                  Register
                </a>
              </div>
            </div>
          </>
        )}
      </header>
    </div>
  );
}
