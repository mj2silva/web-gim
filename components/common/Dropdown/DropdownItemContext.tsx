import { createContext, FC, useContext, useEffect, useState } from "react";
import { DropdownContext } from "@components/Dropdown/DropdownContext";

type DropdownItemContextProps = {
  id: number;
  open: () => void;
  close: () => void;
  isOpen: boolean;
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
});

interface Props {
  id: number;
}

const DropdownItemProvider: FC<Props> = ({ children, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeId, closeDropdown, openDropdown } = useContext(DropdownContext);

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
    <DropdownItemContext.Provider value={{ id, isOpen, close, open }}>
      {children}
    </DropdownItemContext.Provider>
  );
};

export default DropdownItemProvider;
