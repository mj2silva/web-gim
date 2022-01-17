import { FC } from "react";
import CarouselProvider from "@components/Caroussel/CarouselContext";
import styles from "@styles/Cover.module.scss";
import Link from "next/link";
import cn from "classnames";
import CoverCarouselImage from "@components/home/Cover/CoverCarouselImage";
import CoverCarouselControl from "@components/home/Cover/CoverCarouselControl";

const images = [
  {
    url: "/img/portada.jpg",
  },
];

const Cover: FC = () => {
  return (
    <CarouselProvider totalPages={images.length} autoPlay intervalTime={5000}>
      <div className={styles.Cover}>
        <div className={styles.CoverImages}>
          {images.map((image, index) => (
            <CoverCarouselImage
              key={image.url}
              imagePage={index}
              src={image.url}
              layout="fill"
              alt={image.url}
            />
          ))}
        </div>
        <div className={styles.CoverIntro}>
          <h1>ESPECIALISTAS EN CONSTRUCCIÓN RETAIL</h1>
          <Link href="/servicios" passHref>
            <a className={cn("button", styles.CoverButton)}>Conoce más</a>
          </Link>
        </div>
        <div className={styles.CoverControls}>
          {images.map((_, index) => (
            <CoverCarouselControl key={_.url} buttonPage={index} />
          ))}
        </div>
      </div>
    </CarouselProvider>
  );
};

export default Cover;
