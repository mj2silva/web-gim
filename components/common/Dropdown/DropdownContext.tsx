import { createContext, FC } from "react";
import useDropdown from "@components/Dropdown/useDropdown";

export type DropdownContextProps = ReturnType<typeof useDropdown>;

export const DropdownContext = createContext<DropdownContextProps>({
  closeDropdown: () => {
    return;
  },
  openDropdown: () => {
    return;
  },
  activeId: -1,
});

const DropDownProvider: FC = (props) => {
  const { children } = props;
  const dropdownState = useDropdown();

  return (
    <DropdownContext.Provider value={dropdownState}>
      {children}
    </DropdownContext.Provider>
  );
};

export default DropDownProvider;
