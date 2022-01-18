import { FC } from "react";
import DropDownProvider from "@components/Dropdown/DropdownContext";

interface Props {
  className?: string;
}

const Dropdown: FC<Props> = ({ children, className }) => {
  return (
    <DropDownProvider>
      <div className={className}>{children}</div>
    </DropDownProvider>
  );
};

export default Dropdown;
