import { Fragment } from "react";
import caretUp from "../../images/icon-arrow-up.svg";
import { navLinks } from "../js/navLink";

export default function DesktopNav({ setSelectedDropdown, selectedDropdown }) {
  return (
    <>
      <ul className="hidden items-center gap-8 text-mediumGray md:flex">
        {navLinks.map((link, index) => {
          return (
            <Fragment key={index}>
              {link.dropdownMenu && (
                <li className="relative">
                  <button
                    type="button"
                    className="flex items-center gap-2"
                    onMouseEnter={() => setSelectedDropdown(link.menu)}
                  >
                    <h3 className="hover:text-black">{link.menu}</h3>
                    <img
                      src={caretUp}
                      alt="icon arrow up"
                      className="h-2 w-3 bg-cover bg-center"
                    />
                  </button>
                  {/* dropdown */}
                  {selectedDropdown === link.menu && (
                    <div
                      className="absolute right-0 top-[125%] w-[12rem] max-w-xs rounded-xl bg-white py-5 shadow-2xl"
                      onMouseLeave={() => setSelectedDropdown("")}
                    >
                      <div className="flex flex-col gap-4 px-10">
                        {link.dropdownMenu.map((dropdown, index) => {
                          return (
                            <a
                              href={dropdown.link}
                              className="flex items-center gap-4"
                              key={index}
                            >
                              {dropdown.img && (
                                <img
                                  src={dropdown.img}
                                  alt="icon"
                                  className="h-5 w-5 bg-cover bg-center"
                                />
                              )}
                              <h4 className="">{dropdown.menu}</h4>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </li>
              )}
              {!link.dropdownMenu && (
                <li className="">
                  <a
                    href="#"
                    className="font-medium text-mediumGray hover:text-black"
                  >
                    {link.menu}
                  </a>
                </li>
              )}
            </Fragment>
          );
        })}
      </ul>
      <div className="ml-auto hidden items-center gap-6 md:flex">
        <a href="#" className="text-mediumGray hover:text-black">
          Login
        </a>
        <a
          href="#"
          className="w-full max-w-fit rounded-xl border-2 border-mediumGray px-6 py-2 text-mediumGray hover:text-black"
        >
          Register
        </a>
      </div>
    </>
  );
}
