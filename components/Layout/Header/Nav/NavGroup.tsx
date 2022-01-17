import { FC, useState } from "react";
import styles from "@styles/Nav.module.scss";

interface Props {
  title?: string;
}

const NavGroup: FC<Props> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((io) => !io);

  return (
    <li className={styles.NavGroup}>
      <button onClick={toggleOpen}>{title}</button>
      <ul hidden={!isOpen}>{children}</ul>
    </li>
  );
};

export default NavGroup;
