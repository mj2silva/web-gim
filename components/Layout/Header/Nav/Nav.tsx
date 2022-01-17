import { FC } from "react";
import cn from "classnames";

import styles from "@styles/Nav.module.scss";

interface Props {
  className?: string;
}

const Nav: FC<Props> = ({ children, className }) => {
  const navClassName = cn(styles.Nav, className);

  return (
    <nav className={navClassName}>
      <ul>{children}</ul>
    </nav>
  );
};

export default Nav;
