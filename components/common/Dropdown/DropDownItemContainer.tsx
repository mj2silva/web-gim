import { FC, useContext } from "react";
import cn from "classnames";
import { DropdownItemContext } from "@components/Dropdown/DropdownItemContext";

interface Props {
  className?: string;
  openClassName?: string;
  closedClassName?: string;
}

const DropdownItemContainer: FC<Props> = ({
  children,
  className,
  openClassName,
  closedClassName,
}) => {
  const { isOpen } = useContext(DropdownItemContext);

  const bodyClassName = cn(className, {
    [openClassName || ""]: isOpen,
    [closedClassName || ""]: !isOpen,
  });

  return <div className={bodyClassName}>{children}</div>;
};

export default DropdownItemContainer;
