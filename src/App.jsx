/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
export default function App() {
  const [selectedDropdown, setSelectedDropdown] = useState("");
  const [openNavMenu, setOpenNavMenu] = useState(false);
  return (
    <div className="">
      <Header
        selectedDropdown={selectedDropdown}
        setSelectedDropdown={setSelectedDropdown}
        openNavMenu={openNavMenu}
        setOpenNavMenu={setOpenNavMenu}
      />
      <Main />
    </div>
  );
}
