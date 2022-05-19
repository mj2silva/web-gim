import { createContext, FC, useContext, useEffect, useState } from "react";
import { DropdownContext } from "@components/Dropdown/DropdownContext";

type DropdownItemContextProps = {
  id: number;
  open: () => void;
  close: () => void;
  isOpen: boolean;
  isClicked: boolean;
};

export const DropdownItemContext = createContext<DropdownItemContextProps>({
  id: -1,
  open: () => {
    return;
  },
  close: () => {
    return;
  },
  isOpen: false,
  isClicked: false,
});

interface Props {
  id: number;
}

const DropdownItemProvider: FC<Props> = ({ children, id }) => {
  const { activeId, closeDropdown, openDropdown, isClicked } =
    useContext(DropdownContext);
  const [isOpen, setIsOpen] = useState(activeId === id);

  useEffect(() => {
    setIsOpen(activeId === id);
  }, [activeId, id]);

  const open = () => {
    openDropdown(id);
  };

  const close = () => {
    closeDropdown();
  };

  return (
    <DropdownItemContext.Provider
      value={{ id, isOpen, close, open, isClicked }}
    >
      {children}
    </DropdownItemContext.Provider>
  );
};

export default DropdownItemProvider;
