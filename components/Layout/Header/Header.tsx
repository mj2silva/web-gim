import { FC, useEffect, useState } from "react";
import GIMLogo from "@components/GIMLogo";

import styles from "@styles/modules/Header.module.scss";
import { useRouter } from "next/router";
import HeaderNav from "@components/Layout/Header/HeaderNav";
import cn from "classnames";
import HeaderBreadCrumb from "@components/Layout/Header/HeaderBreadCrumb";
import Link from "next/link";

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
        <Link href="/" passHref>
          <a>
            <GIMLogo className={styles.HeaderLogo} />
          </a>
        </Link>
        <HeaderBreadCrumb />
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
