import { useCallback, useEffect, useState } from "react";

type CarouselProps = {
  totalPages: number;
  autoPlay?: boolean;
  intervalTime?: number;
};

const useCarousel = (props: CarouselProps) => {
  const { totalPages, autoPlay = false, intervalTime } = props;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentInterval, setCurrentInterval] = useState<number>();

  const stopInterval = useCallback(() => {
    setCurrentInterval((ci) => {
      window.clearInterval(ci);
      return undefined;
    });
  }, []);

  const goNext = useCallback(() => {
    setCurrentPage((cp) => (cp + 1) % totalPages);
  }, [totalPages]);

  const goPrev = useCallback(() => {
    setCurrentPage((cp) => (totalPages + (cp - 1)) % totalPages);
  }, [totalPages]);

  const goToPage = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  const reStartInterval = useCallback(() => {
    if (autoPlay) {
      setCurrentInterval((ci) => {
        if (!ci) {
          return window.setInterval(() => {
            goNext();
          }, intervalTime);
        }
        return undefined;
      });
    }
  }, [autoPlay, goNext, intervalTime]);

  const handleNext = useCallback(() => {
    stopInterval();
    goNext();
    reStartInterval();
  }, [goNext, stopInterval, reStartInterval]);

  const handlePrev = useCallback(() => {
    stopInterval();
    goPrev();
    reStartInterval();
  }, [goPrev, stopInterval, reStartInterval]);

  const handleGoToPage = useCallback(
    (pageNumber: number) => {
      stopInterval();
      goToPage(pageNumber);
      reStartInterval();
    },
    [goToPage, stopInterval, reStartInterval]
  );

  useEffect(() => {
    reStartInterval();
  }, [reStartInterval]);

  useEffect(() => {
    return () => window.clearInterval(currentInterval);
  }, [currentInterval]);

  return {
    handleGoToPage,
    handleNext,
    handlePrev,
    currentPage,
    stopInterval,
    reStartInterval,
    totalPages,
  };
};

export default useCarousel;
