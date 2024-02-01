import iconMenu from "../../images/icon-menu.svg";
import logo from "../../images/logo.svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header({
  selectedDropdown,
  setSelectedDropdown,
  setOpenNavMenu,
  openNavMenu,
}) {
  return (
    <header className="relative flex items-center justify-between gap-10 px-6 py-6 font-epilogue md:justify-normal lg:px-10">
      <img src={logo} alt="logo icon" className="bg-cover bg-center" />
      <img
        src={iconMenu}
        alt="menu icon"
        className="relative z-30 cursor-pointer bg-cover bg-center md:hidden"
        onClick={() => setOpenNavMenu(true)}
      />
      <DesktopNav
        setSelectedDropdown={setSelectedDropdown}
        selectedDropdown={selectedDropdown}
      />
      {openNavMenu && (
        <MobileNav
          selectedDropdown={selectedDropdown}
          setSelectedDropdown={setSelectedDropdown}
          setOpenNavMenu={setOpenNavMenu}
        />
      )}
    </header>
  );
}
