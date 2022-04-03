import { FC, useContext } from "react";
import { CarouselContext } from "@components/Caroussel/CarouselContext";
import cn from "classnames";
import styles from "@styles/modules/Cover.module.scss";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

interface Props extends ImageProps {
  imagePage: number;
  text: string;
}

const CoverCarouselImage: FC<Props> = ({ imagePage, alt, text, ...rest }) => {
  const { currentPage } = useContext(CarouselContext);
  const imageClassName = cn(styles.CoverImage, {
    [styles.CoverImageCurrent]: currentPage === imagePage,
    [styles.CoverImageHidden]: currentPage !== imagePage,
  });
  const contentClassName = cn(styles.CoverContent, {
    [styles.CoverContentCurrent]: currentPage === imagePage,
    [styles.CoverContentHidden]: currentPage !== imagePage,
  });
  return (
    <>
      <div className={imageClassName}>
        <Image alt={alt} {...rest} />
      </div>
      <div className={contentClassName}>
        <div className={styles.CoverIntro}>
          <h1>{text}</h1>
          <Link href="/servicios" passHref>
            <a className={cn("button", styles.CoverButton)}>Conoce más</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CoverCarouselImage;
