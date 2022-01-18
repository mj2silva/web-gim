import { FC, useContext } from "react";
import cn from "classnames";
import { DropdownItemContext } from "@components/Dropdown/DropdownItemContext";

interface Props {
  className: string;
  openClassName?: string;
  closeClassName?: string;
}

const DropdownHeader: FC<Props> = (props) => {
  const { className, openClassName, closeClassName, children } = props;
  const { isOpen } = useContext(DropdownItemContext);
  const headerClassName = cn(className, {
    [openClassName || ""]: isOpen,
    [closeClassName || ""]: !isOpen,
  });
  return <div className={headerClassName}>{children}</div>;
};

export default DropdownHeader;
