import { FC } from "react";
import CarouselProvider from "@components/Caroussel/CarouselContext";
import styles from "@styles/modules/Cover.module.scss";
import CoverCarouselControl from "@components/home/Cover/CoverCarouselControl";
import { Slide } from "data/types";
import CoverCarouselItem from "@components/home/Cover/CoverCarouselItem";

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
            <CoverCarouselItem
              key={slide.url + "desk"}
              imagePage={index}
              text={slide.text}
              src={slide.url}
              layout="fill"
              alt={slide.url}
              objectFit="cover"
              objectPosition="right"
              priority
            />
          ))}
        </div>
        <div className={styles.CoverImages_mobile}>
          {slidesMobile.map((slide, index) => (
            <CoverCarouselItem
              key={"mob" + slide.url}
              imagePage={index}
              src={slide.url}
              text={slide.text}
              layout="fill"
              alt={slide.url}
              objectFit="cover"
              objectPosition="right"
              priority
            />
          ))}
        </div>

        <div className={styles.CoverControls}>
          {slides.map((slide, index) => (
            <CoverCarouselControl key={"ctrl" + slide.url} buttonPage={index} />
          ))}
        </div>
      </div>
    </CarouselProvider>
  );
};

export default Cover;
