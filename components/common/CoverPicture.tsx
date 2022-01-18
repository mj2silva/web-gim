import { FC } from "react";
import Image, { ImageProps } from "next/image";

import styles from "@styles/CoverPicture.module.scss";

interface Props extends ImageProps {}

const CoverPicture: FC<Props> = ({ src, alt, ...rest }) => {
  return (
    <div className={styles.CoverPicture}>
      <Image layout="fill" src={src} alt={alt} {...rest} />
    </div>
  );
};

export default CoverPicture;
