import { FC } from "react";
import CarouselProvider from "@components/Caroussel/CarouselContext";
import styles from "@styles/modules/Cover.module.scss";
import Link from "next/link";
import cn from "classnames";
import CoverCarouselImage from "@components/home/Cover/CoverCarouselImage";
import CoverCarouselControl from "@components/home/Cover/CoverCarouselControl";
import { Slide } from "data/types";

type Props = {
  slides: Slide[];
  slidesMobile: Slide[];
};

const Cover: FC<Props> = ({ slides, slidesMobile }) => {
  return (
    <CarouselProvider totalPages={slides.length} autoPlay intervalTime={5000}>
      <div className={styles.Cover}>
        <div className={styles.CoverImages}>
          {slides.map((slide, index) => (
            <CoverCarouselImage
              key={slide.url}
              imagePage={index}
              src={slide.url}
              layout="fill"
              alt={slide.url}
              objectFit="cover"
              objectPosition="right"
            />
          ))}
        </div>
        <div className={styles.CoverImages_mobile}>
          {slidesMobile.map((slide, index) => (
            <>
              <CoverCarouselImage
                key={slide.url}
                imagePage={index}
                src={slide.url}
                layout="fill"
                alt={slide.url}
                objectFit="cover"
                objectPosition="right"
              />
            </>
          ))}
        </div>

        <div className={styles.CoverControls}>
          {slides.map((slide, index) => (
            <CoverCarouselControl key={slide.url} buttonPage={index} />
          ))}
        </div>
      </div>
    </CarouselProvider>
  );
};

export default Cover;
