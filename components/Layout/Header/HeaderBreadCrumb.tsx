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
        <Link href={`/${item.toLowerCase()}`} passHref>
          <a>{item.replace("-", " ")}</a>
        </Link>
      ) : (
        <>
          {" > "}
          <Link
            href={`/${path
              .split("/")
              .slice(0, index + 2)
              .join("/")}`}
            passHref
          >
            <a>{item.replace("-", " ")}</a>
          </Link>
        </>
      );
    });
};

const HeaderBreadCrumb: FC = () => {
  const { asPath } = useRouter();
  return (
    <>
      {asPath.toUpperCase().slice(1) && (
        <div className={styles.HeaderPageName}>{formatPathName(asPath)}</div>
      )}
    </>
  );
};

export default HeaderBreadCrumb;
