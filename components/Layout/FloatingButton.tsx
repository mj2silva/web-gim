import { FC } from "react";
import Image from "next/image";

const FloatingButton: FC = () => {
  return (
    <div className="whatsapp">
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=+51992613992&text=Hola%20GIM,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.%20%F0%9F%98%89"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="/img/whatsapp.png"
            layout="fill"
            alt="whatsapp"
            objectFit="scale-down"
          />
        </a>
      </div>
    </div>
  );
};

export default FloatingButton;
