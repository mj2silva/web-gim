import { createContext, FC } from "react";
import useCarousel from "@components/Caroussel/useCarousel";

export const CarouselContext = createContext<ReturnType<typeof useCarousel>>({
  handlePrev: () => {
    return;
  },
  handleNext: () => {
    return;
  },
  handleGoToPage: () => {
    return;
  },
  reStartInterval: () => {
    return;
  },
  stopInterval: () => {
    return;
  },
  currentPage: 0,
});

interface Props {
  totalPages: number;
  autoPlay?: boolean;
  intervalTime?: number;
}

const CarouselProvider: FC<Props> = ({
  children,
  totalPages,
  intervalTime,
  autoPlay,
}) => {
  const carouselValues = useCarousel({ totalPages, autoPlay, intervalTime });

  return (
    <CarouselContext.Provider value={carouselValues}>
      {children}
    </CarouselContext.Provider>
  );
};

export default CarouselProvider;
