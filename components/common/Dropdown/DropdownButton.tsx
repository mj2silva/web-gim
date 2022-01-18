import { FC, useContext } from "react";
import cn from "classnames";
import { DropdownItemContext } from "@components/Dropdown/DropdownItemContext";

interface Props {
  className: string;
  openClassName?: string;
  closedClassName?: string;
}

const DropdownButton: FC<Props> = ({
  children,
  className,
  openClassName,
  closedClassName,
}) => {
  const { isOpen, open, close } = useContext(DropdownItemContext);

  const buttonClassName = cn(className, {
    [openClassName || ""]: isOpen,
    [closedClassName || ""]: !isOpen,
  });

  const handleClick = () => {
    if (isOpen) close();
    else open();
  };

  return (
    <button className={buttonClassName} onClick={handleClick}>
      {children}
    </button>
  );
};

export default DropdownButton;
