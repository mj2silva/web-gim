import { FC, useContext } from "react";
import { CarouselContext } from "@components/Caroussel/CarouselContext";
import cn from "classnames";
import styles from "@styles/modules/Cover.module.scss";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

interface Props extends ImageProps {
  imagePage: number;
}

const CoverCarouselImage: FC<Props> = ({ imagePage, alt, ...rest }) => {
  const { currentPage } = useContext(CarouselContext);
  const imageClassName = cn(styles.CoverImage, {
    [styles.CoverImageCurrent]: currentPage === imagePage,
    [styles.CoverImageHidden]: currentPage !== imagePage,
  });
  return (
    <>
      <div className={imageClassName}>
        <Image alt={alt} {...rest} />
      </div>
      <div className={styles.CoverIntro}>
        <h1>ESPECIALISTAS EN MANTENIMIENTO RETAIL</h1>
        <Link href="/servicios" passHref>
          <a className={cn("button", styles.CoverButton)}>Conoce más</a>
        </Link>
      </div>
    </>
  );
};

export default CoverCarouselImage;
