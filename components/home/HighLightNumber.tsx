import { FC, useEffect, useState } from "react";
import { IntersectionObserverProps, InView } from "react-intersection-observer";

interface Props {
  value: number;
  startValue?: number;
  className?: string;
  timeout?: number;
}

const HighLightNumber: FC<Props> = ({
  value,
  startValue,
  className,
  timeout,
}) => {
  const [currentValue, setCurrentValue] = useState(startValue || 0);
  const [currentInterval, setCurrentInterval] = useState<number>();

  useEffect(() => {
    if (currentInterval) {
      if (currentValue >= value) window.clearInterval(currentInterval);
    }
  }, [currentValue, value, currentInterval]);

  const handleViewChange: IntersectionObserverProps["onChange"] = (inView) => {
    if (inView) {
      setCurrentInterval((iv) => {
        if (!iv) {
          return window.setInterval(() => {
            setCurrentValue((cv) => Math.min(cv + 1, value));
          }, timeout || 30);
        }
        return undefined;
      });
    }
  };
  return (
    <InView threshold={0.7} onChange={handleViewChange}>
      <div className={className}>{currentValue}</div>
    </InView>
  );
};

export default HighLightNumber;
