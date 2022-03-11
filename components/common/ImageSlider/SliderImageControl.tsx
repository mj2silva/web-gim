import { FC, useContext } from "react";
import styles from "@styles/modules/Cover.module.scss";
import { CarouselContext } from "@components/Caroussel/CarouselContext";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  type: "next" | "prev";
}

const SliderImageControl: FC<Props> = (props) => {
  const { handleNext, handlePrev } = useContext(CarouselContext);
  const { type } = props;
  const buttonClassName = cn(styles.CoverCarouselControl, {
    [styles.CoverCarouselControlNext]: type === "next",
    [styles.CoverCarouselControlPrev]: type === "prev",
  });

  return (
    <button
      className={buttonClassName}
      onClick={() => {
        if (type === "next") handleNext();
        else if (type === "prev") handlePrev();
      }}
    >
      <FontAwesomeIcon
        icon={type === "prev" ? faChevronRight : faChevronLeft}
      />
    </button>
  );
};

export default SliderImageControl;
