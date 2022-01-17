import { FC } from "react";
import Image from "next/image";

import styles from "@styles/Footer.module.scss";
import GIMLogo from "@components/GIMLogo";

const Footer: FC = () => {
  return (
    <>
      <footer className={styles.Footer}>
        <div className={styles.FooterBody}>
          <GIMLogo className={styles.FooterLogo} />
          <div className={styles.FooterSocialMedia}>
            <div className={styles.FooterSocialMediaLogo}>f</div>
            <div className={styles.FooterSocialMediaLogo}>i</div>
          </div>
          <div className={styles.FooterCertifications}>
            <div className={styles.FooterCertification}>
              <Image
                src="/img/iso-logo.png"
                layout="fill"
                alt="Logo de la Cámara de Comercio de Lima"
                objectFit="scale-down"
              />
            </div>
            <div className={styles.FooterCertification}>
              <Image
                src="/img/logo-ccl.jpg"
                layout="fill"
                alt="Logo de la Cámara de Comercio de Lima"
                objectFit="scale-down"
              />
            </div>
          </div>
        </div>
        <div className={styles.FooterFoot}>
          <span className={styles.FooterCopy}>
            &copy;2021 GIM Gestión Inmobiliaria Municipal, Todos los derechos
            reservados.
          </span>
          <span className={styles.FooterCopy}>
            Sitio desarrollado por <a href="https://web.mapeo.pe">MAPEO.</a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
