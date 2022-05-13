import { FC, ReactNode } from "react";
import styles from "@styles/Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const formatPathName = (path: string): ReactNode[] => {
  return path
    .toUpperCase()
    .split("/")
    .slice(1)
    .map((item, index) => {
      return index === 0 ? (
        <Link
          key={item.toLowerCase() + index}
          href={`/${item.toLowerCase()}`}
          passHref
        >
          <a>{item.split("#")[0].replace("-", " ")}</a>
        </Link>
      ) : (
        <span key={item.toLowerCase() + index}>
          {" > "}
          <Link
            href={`${path
              .split("/")
              .slice(0, index + 2)
              .join("/")}`}
            passHref
          >
            <a>{item.split("#")[0].replace("-", " ")}</a>
          </Link>
        </span>
      );
    });
};

const HeaderBreadCrumb: FC = () => {
  const { pathname, asPath } = useRouter();
  return (
    <>
      {pathname.toUpperCase().slice(1) && (
        <div className={styles.HeaderPageName}>{formatPathName(asPath)}</div>
      )}
    </>
  );
};

export default HeaderBreadCrumb;
