import { FC, useContext, useEffect } from "react";
import styles from "@styles/BrandsCarousel.module.scss";
import Image from "next/image";
import { Brand } from "../types";
import cn from "classnames";
import { CarouselContext } from "@components/Caroussel/CarouselContext";

type Props = {
  brand: Brand;
  page: number;
};

const BrandImage: FC<Props> = (props) => {
  const { brand, page } = props;
  const { currentPage, totalPages } = useContext(CarouselContext);
  useEffect(() => {
    console.log({ currentPage, totalPages });
    console.log();
  }, [currentPage, totalPages]);
  const className = cn(styles.BrandsCarouselBrand, {
    [styles.BrandsCarouselBrand_0]:
      (currentPage - 3 >= 0 && currentPage - 3 === page) ||
      (currentPage - 3 < 0 && totalPages + (currentPage - 3) === page),
    [styles.BrandsCarouselBrand_1]:
      (currentPage - 2 >= 0 && currentPage - 2 === page) ||
      (currentPage - 2 < 0 && totalPages + (currentPage - 2) === page),
    [styles.BrandsCarouselBrand_2]:
      (currentPage - 1 >= 0 && currentPage - 1 === page) ||
      (currentPage - 1 < 0 && totalPages + (currentPage - 1) === page),
    [styles.BrandsCarouselBrand_active]: currentPage === page,
    [styles.BrandsCarouselBrand_4]:
      (currentPage + 1 < totalPages && currentPage + 1 === page) ||
      (currentPage + 1 >= totalPages && currentPage + 1 - totalPages === page),
    [styles.BrandsCarouselBrand_5]:
      (currentPage + 2 < totalPages && currentPage + 2 === page) ||
      (currentPage + 2 >= totalPages && currentPage + 2 - totalPages === page),
    [styles.BrandsCarouselBrand_6]:
      (currentPage + 3 < totalPages && currentPage + 3 === page) ||
      (currentPage + 3 >= totalPages && currentPage + 3 - totalPages === page),
  });
  return (
    <div key={brand.name} className={className}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minWidth: "20rem",
        }}
      >
        <Image
          src={brand.url}
          alt={brand.name}
          layout="fill"
          objectFit="scale-down"
        />
      </div>
    </div>
  );
};

export default BrandImage;
