import { FC } from "react";
import CarouselProvider from "@components/Caroussel/CarouselContext";
import styles from "@styles/modules/Cover.module.scss";
import CoverCarouselImage from "@components/home/Cover/CoverCarouselImage";
import CoverCarouselControl from "@components/home/Cover/CoverCarouselControl";

interface Props {
  images: { src: string; alt: string }[];
}

const ImageSlider: FC<Props> = ({ images }) => {
  return (
    <CarouselProvider totalPages={images.length}>
      <div className={styles.Cover}>
        <div className={styles.CoverImages}>
          {images.map((image, index) => (
            <CoverCarouselImage
              key={image.src}
              imagePage={index}
              src={image.src}
              layout="fill"
              alt={image.src}
              objectFit="cover"
              objectPosition="right"
            />
          ))}
        </div>
        <div className={styles.CoverControls}>
          {images.map((_, index) => (
            <CoverCarouselControl key={_.src} buttonPage={index} />
          ))}
        </div>
      </div>
    </CarouselProvider>
  );
};

export default ImageSlider;
