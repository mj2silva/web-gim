import { FC, useEffect, useState } from "react";
import GIMLogo from "@components/GIMLogo";

import styles from "@styles/Header.module.scss";
import { useRouter } from "next/router";
import HeaderNav from "@components/Layout/Header/HeaderNav";
import cn from "classnames";

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const headerClassName = cn(styles.Header, {
    [styles.Header_Transparent]: router.pathname === "/" && !isScrolled,
  });

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={headerClassName}>
      <div className={styles.HeaderTitle}>
        <GIMLogo className={styles.HeaderLogo} />
        {router.pathname.toUpperCase().slice(1) && (
          <div className={styles.HeaderPageName}>
            {router.pathname.toUpperCase().slice(1)}
          </div>
        )}
      </div>
      <HeaderNav
        className={styles.HeaderMenu}
        backDropClassName={styles.HeaderBackDrop}
        navClassName={styles.HeaderNav}
        buttonClassName={styles.HeaderNavButton}
        openClassName={styles.HeaderNav_open}
        closedClassName={styles.HeaderNav_closed}
      />
    </header>
  );
};

export default Header;
