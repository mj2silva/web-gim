import { FC, useContext } from "react";
import cn from "classnames";
import { DropdownItemContext } from "@components/Dropdown/DropdownItemContext";

interface Props {
  className: string;
  openClassName?: string;
  closedClassName?: string;
}

const DropdownBody: FC<Props> = ({
  children,
  className,
  openClassName,
  closedClassName,
}) => {
  const { isOpen, isClicked } = useContext(DropdownItemContext);

  const bodyClassName = cn(className, {
    [openClassName || ""]: isOpen,
    [closedClassName || ""]: !isOpen,
  });

  return (
    <div
      style={{
        animation: isClicked ? "initial" : "none",
        transitionDuration: isClicked ? "500ms" : "0ms",
      }}
      className={bodyClassName}
    >
      {children}
    </div>
  );
};

export default DropdownBody;
