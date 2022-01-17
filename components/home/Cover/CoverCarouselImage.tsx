import { FC, useContext } from "react";
import { CarouselContext } from "@components/Caroussel/CarouselContext";
import cn from "classnames";
import styles from "@styles/Cover.module.scss";
import Image, { ImageProps } from "next/image";

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
    <div className={imageClassName}>
      <Image alt={alt} {...rest} />
    </div>
  );
};

export default CoverCarouselImage;
