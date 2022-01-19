import { useState } from "react";

interface Props {
  defaultOpen?: number;
}

const useDropdown = ({ defaultOpen = -1 }: Props) => {
  const [activeId, setActiveId] = useState(defaultOpen);
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
