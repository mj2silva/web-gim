import { useState } from "react";

const useDropdown = () => {
  const [activeId, setActiveId] = useState(-1);
  const openDropdown = (id: number) => {
    setActiveId(id);
  };

  const closeDropdown = () => {
    setActiveId(-1);
  };

  return {
    activeId,
    openDropdown,
    closeDropdown,
  };
};

export default useDropdown;
