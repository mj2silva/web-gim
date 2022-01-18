import { FC } from "react";
import styles from "@styles/Header.module.scss";
import { useRouter } from "next/router";

const formatPathName = (path: string): string => {
  return path
    .toUpperCase()
    .split("/")
    .map((item) => item.replace("-", " "))
    .slice(1)
    .join(" > ");
};

const HeaderBreadCrumb: FC = () => {
  const { pathname } = useRouter();

  return (
    <>
      {pathname.toUpperCase().slice(1) && (
        <div className={styles.HeaderPageName}>{formatPathName(pathname)}</div>
      )}
    </>
  );
};

export default HeaderBreadCrumb;
