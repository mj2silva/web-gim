import { FC } from "react";
import styles from "@styles/modules/BrandsCarousel.module.scss";
import SectionTitle from "@components/SectionTitle";
import BrandImage from "@components/home/Brands/BrandImage";
import CarouselProvider from "@components/Caroussel/CarouselContext";

const brands = [
  {
    name: "Coolbox",
    url: "/img/clientes/8b19dcb0e036055267f38cfa8f3a499d.jpg",
  },
  {
    name: "CHR HANSEN",
    url: "/img/clientes/1200px-ChrHansen.svg.png",
  },
  {
    name: "OXXO",
    url: "/img/clientes/23-238868_oxxo-logotipo-hd-png-download.png",
  },
  {
    name: "Aruma",
    url: "/img/clientes/descarga.png",
  },
  {
    name: "College",
    url: "/img/clientes/college-lima.png",
  },
  {
    name: "Sodimac",
    url: "/img/clientes/descarga (1).png",
  },
  {
    name: "Supermercados Peruanos SA",
    url: "/img/clientes/f521ba8701b47419932a2b97cca848fd.jpg",
  },
  {
    name: "Grupo EFE",
    url: "/img/clientes/logo-grupo-alta.png",
  },
  {
    name: "Vivanda",
    url: "/img/clientes/logo-vivanda.png",
  },
  {
    name: "Mi Farma",
    url: "/img/clientes/mifarma-web-2.png",
  },
  {
    name: "Plaza vea",
    url: "/img/clientes/Plaza_Vea_nuevo_logo.svg.png",
  },
  {
    name: "Tambo",
    url: "/img/clientes/TAMBO.png",
  },
];

const BrandsCarousel: FC = () => {
  return (
    <CarouselProvider totalPages={brands.length} autoPlay intervalTime={2000}>
      <section className={styles.BrandsCarousel}>
        <div className={styles.BrandsCarouselTitle}>
          <SectionTitle text="Conoce a" highlightedText="nuestros clientes" />
        </div>
        <div className={styles.BrandsCarouselBrands}>
          {brands.map((brand, index) => (
            <BrandImage key={brand.name} brand={brand} page={index} />
          ))}
        </div>
      </section>
    </CarouselProvider>
  );
};

export default BrandsCarousel;
