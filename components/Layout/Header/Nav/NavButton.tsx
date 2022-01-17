import { ButtonHTMLAttributes, FC } from "react";
import cn from "classnames";

import styles from "@styles/MenuButton.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  open?: boolean;
}

const NavButton: FC<Props> = ({ open = false, className, ...rest }) => {
  const headerClassName = cn(
    styles.Menu,
    {
      [styles.open]: open,
    },
    className
  );
  return (
    <button id="nav-icon" className={headerClassName} {...rest}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default NavButton;
