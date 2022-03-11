import { FC } from "react";
import styles from "@styles/ImageSlider.module.scss";
import Image from "next/image";
import ModalButton from "@components/ImageSlider/ModalButton";
import ImageSlider from "@components/ImageSlider/ImageSlider";

interface Props {
  className?: string;
  images: {
    src: string;
    alt: string;
  }[];
}

const ProjectImageSlider: FC<Props> = ({ className, images }) => {
  return (
    <div className={className}>
      <ModalButton modalComponent={<ImageSlider images={images} />}>
        <div className={styles.ImageSlider}>
          <div className={styles.ImageSliderMain}>
            <Image
              src={images[0].src}
              layout="fill"
              alt="Casa Villanueva"
              objectFit="cover"
            />
          </div>
          <div className={styles.ImageSliderSecondaryGrid}>
            {images.slice(1).map((image) => (
              <div key={image.src} className={styles.ImageSliderSecondary}>
                <Image
                  src={image.src}
                  layout="fill"
                  alt="Casa Villanueva"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </ModalButton>
    </div>
  );
};

export default ProjectImageSlider;
