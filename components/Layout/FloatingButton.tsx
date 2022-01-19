import { FC } from "react";
import Image from "next/image";

const FloatingButton: FC = () => {
  return (
    <div className="whatsapp">
      <div>
        <Image src="/img/whatsapp.png" layout="fill" alt="whatsapp" />
      </div>
    </div>
  );
};

export default FloatingButton;
