import { FC } from "react";
import styles from "@styles/Header.module.scss";
import { useRouter } from "next/router";
// import Link from "next/link";

const formatPathName = (path: string): string => {
  return path
    .toUpperCase()
    .split("/")
    .map((item) => item.replace("-", " "))
    .slice(1)
    .join(" > ");
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
