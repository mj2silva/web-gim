import { FC } from "react";
import DropDownProvider from "@components/Dropdown/DropdownContext";

interface Props {
  className?: string;
  defaultOpen?: number;
}

const Dropdown: FC<Props> = ({ children, defaultOpen, className }) => {
  return (
    <DropDownProvider defaultOpen={defaultOpen}>
      <div className={className}>{children}</div>
    </DropDownProvider>
  );
};

export default Dropdown;
