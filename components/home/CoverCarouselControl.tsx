import { FC, useContext } from "react";
import styles from "@styles/Cover.module.scss";
import { CarouselContext } from "@components/Caroussel/CarouselContext";
import cn from "classnames";

interface Props {
  buttonPage: number;
}

const CoverCarouselControl: FC<Props> = ({ buttonPage }) => {
  const { currentPage, handleGoToPage } = useContext(CarouselContext);
  const buttonClassName = cn(styles.CoverCarouselControl, {
    [styles.CoverCarouselControlCurrent]: currentPage === buttonPage,
  });

  return (
    <button
      className={buttonClassName}
      onClick={() => handleGoToPage(buttonPage)}
    />
  );
};

export default CoverCarouselControl;
