import { FC } from "react";
import Image from "next/image";

interface Props {
  className: string;
}

const GIMLogo: FC<Props> = ({ className }) => {
  return (
    <div className={className + " image logo"}>
      <Image src="/img/logo.png" alt="GIM Logo" layout="fill" />
    </div>
  );
};

export default GIMLogo;
