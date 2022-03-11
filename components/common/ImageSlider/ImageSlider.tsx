import { FC } from "react";
import CarouselProvider from "@components/Caroussel/CarouselContext";
import styles from "@styles/modules/Cover.module.scss";
import CoverCarouselImage from "@components/home/Cover/CoverCarouselImage";
import SliderImageControl from "@components/ImageSlider/SliderImageControl";

interface Props {
  images: { src: string; alt: string }[];
}

const ImageSlider: FC<Props> = ({ images }) => {
  return (
    <CarouselProvider totalPages={images.length}>
      <div className={styles.Cover + " " + styles.CoverSlider}>
        <div className={styles.CoverImagesSlider}>
          {images.map((image, index) => (
            <CoverCarouselImage
              key={image.src}
              imagePage={index}
              src={image.src}
              layout="fill"
              alt={image.src}
              objectFit="contain"
              objectPosition="center"
            />
          ))}
        </div>
        <SliderImageControl type="next" />
        <SliderImageControl type="prev" />
      </div>
    </CarouselProvider>
  );
};

export default ImageSlider;
