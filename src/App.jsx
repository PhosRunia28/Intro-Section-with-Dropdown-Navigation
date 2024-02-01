/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Header from "./components/Header";
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
    </div>
  );
}
