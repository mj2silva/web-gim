import { FC } from "react";
import DropdownItemProvider from "@components/Dropdown/DropdownItemContext";
import DropDownItemContainer from "@components/Dropdown/DropDownItemContainer";

interface Props {
  id: number;
  className?: string;
  openClassName?: string;
  closedClassName?: string;
}

const DropdownItem: FC<Props> = ({
  children,
  className,
  id,
  openClassName,
  closedClassName,
}) => {
  return (
    <DropdownItemProvider id={id}>
      <DropDownItemContainer
        className={className}
        openClassName={openClassName}
        closedClassName={closedClassName}
      >
        {children}
      </DropDownItemContainer>
    </DropdownItemProvider>
  );
};

export default DropdownItem;
