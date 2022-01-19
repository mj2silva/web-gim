import { FC } from "react";
import Image from "next/image";

const FloatingButton: FC = () => {
  return (
    <div className="whatsapp">
      <div>
        <Image
          src="/img/whatsapp.png"
          layout="fill"
          alt="whatsapp"
          objectFit="scale-down"
        />
      </div>
    </div>
  );
};

export default FloatingButton;
