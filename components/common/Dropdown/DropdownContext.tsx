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
  isClicked: false,
});

interface Props {
  defaultOpen?: number;
}

const DropDownProvider: FC<Props> = (props) => {
  const { children, defaultOpen } = props;
  const dropdownState = useDropdown({ defaultOpen });

  return (
    <DropdownContext.Provider value={dropdownState}>
      {children}
    </DropdownContext.Provider>
  );
};

export default DropDownProvider;
