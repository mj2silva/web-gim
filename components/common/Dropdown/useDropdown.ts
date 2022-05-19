import { useState } from "react";

interface Props {
  defaultOpen?: number;
}

const useDropdown = ({ defaultOpen = -1 }: Props) => {
  const [activeId, setActiveId] = useState(defaultOpen);
  const [isClicked, setIsClicked] = useState(false);

  const click = () => {
    if (!isClicked) setIsClicked(true);
  };

  const openDropdown = (id: number) => {
    click();
    setActiveId(id);
  };

  const closeDropdown = () => {
    click();
    setActiveId(-1);
  };

  return {
    activeId,
    openDropdown,
    closeDropdown,
    isClicked,
  };
};

export default useDropdown;
