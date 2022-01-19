import { FC } from "react";

import styles from "@styles/Services.module.scss";
import Dropdown from "@components/Dropdown/Dropdown";
import { Service } from "@components/services/types";
import ServiceDropdownItem from "@components/services/ServiceDropdownItem";

const services: Service[] = [
  {
    id: 1,
    title: "GESTIÓN MUNICIPAL Y SANEAMIENTO FÍSICO LEGAL",
    description:
      "Se ocupa de guiar u orientar la detección y satisfacción de las necesidades de locales para su óptimo funcionamiento. El saneamiento  fisico legal de predios es la gestión destinada a la regularización de la documentación de la propiedad  del terreno en primer lugar, y luego de la construcción que se haya edificado sobre el predio (de ser el caso) con el objeto de obtener la titulación  o acreditación idonea.",
    icon: "X",
    detail: [
      {
        title: "Ver nuestros servicios",
        items: [
          "Cambio de razón social en licencia de funcionamiento y/o licencia de Anuncio de publicidad.",
          "Certificados  de defensa civil (riesgo bajo. medio. alto y muy alto).",
          "Licencias de funcionamiento o de cesionarios  de locales.",
          "Obtenci6n de licencia de funcionamiento a consecuencia de renovación  de certificado de defensa civil (riesgo medio, alto y muy alto).",
          "Autorizaciones  de anunicios de locales.",
          "Bajas de licencias de funcionamiento de locales.",
          "Gestiones de defensa civil por VISES y fiscalizaciones municipales.",
          "Gestiones de ampliacion de giro de licencia de funcionamiento.",
          "Licencias de demolición, remodelación, ampliación, edificación  nueva y cartas de acondicionamiento de edificaciones.",
          "Conformidad de Obra.",
          "Saneamientos Declaratorias de Fábrica. (segun ley N° 29090 y ley N° 27157).",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "CONSTRUCCIÓN RETAIL",
    description:
      "Se ocupa de guiar u orientar la detección y satisfacción de las necesidades de locales para su óptimo funcionamiento. El saneamiento  fisico legal de predios es la gestión destinada a la regularización de la documentación de la propiedad  del terreno en primer lugar, y luego de la construcción que se haya edificado sobre el predio (de ser el caso) con el objeto de obtener la titulación  o acreditación idonea.",
    icon: "X",
    detail: [
      {
        title: "Ver nuestros servicios",
        items: [
          "Cambio de razón social en licencia de funcionamiento y/o licencia de Anuncio de publicidad.",
          "Certificados  de defensa civil (riesgo bajo. medio. alto y muy alto).",
          "Licencias de funcionamiento o de cesionarios  de locales.",
          "Obtenci6n de licencia de funcionamiento a consecuencia de renovación  de certificado de defensa civil (riesgo medio, alto y muy alto).",
          "Autorizaciones  de anunicios de locales.",
          "Bajas de licencias de funcionamiento de locales.",
          "Gestiones de defensa civil por VISES y fiscalizaciones municipales.",
          "Gestiones de ampliacion de giro de licencia de funcionamiento.",
          "Licencias de demolición, remodelación, ampliación, edificación  nueva y cartas de acondicionamiento de edificaciones.",
          "Conformidad de Obra.",
          "Saneamientos Declaratorias de Fábrica. (segun ley N° 29090 y ley N° 27157).",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "MANTENIMIENTO RETAIL",
    description:
      "Se ocupa de guiar u orientar la detección y satisfacción de las necesidades de locales para su óptimo funcionamiento. El saneamiento  fisico legal de predios es la gestión destinada a la regularización de la documentación de la propiedad  del terreno en primer lugar, y luego de la construcción que se haya edificado sobre el predio (de ser el caso) con el objeto de obtener la titulación  o acreditación idonea.",
    icon: "X",
    detail: [
      {
        title: "Ver nuestros servicios",
        items: [
          "Cambio de razón social en licencia de funcionamiento y/o licencia de Anuncio de publicidad.",
          "Certificados  de defensa civil (riesgo bajo. medio. alto y muy alto).",
          "Licencias de funcionamiento o de cesionarios  de locales.",
          "Obtenci6n de licencia de funcionamiento a consecuencia de renovación  de certificado de defensa civil (riesgo medio, alto y muy alto).",
          "Autorizaciones  de anunicios de locales.",
          "Bajas de licencias de funcionamiento de locales.",
          "Gestiones de defensa civil por VISES y fiscalizaciones municipales.",
          "Gestiones de ampliacion de giro de licencia de funcionamiento.",
          "Licencias de demolición, remodelación, ampliación, edificación  nueva y cartas de acondicionamiento de edificaciones.",
          "Conformidad de Obra.",
          "Saneamientos Declaratorias de Fábrica. (segun ley N° 29090 y ley N° 27157).",
        ],
      },
    ],
  },
];

const ServicesDropdown: FC = () => {
  return (
    <section className={styles.Services}>
      <Dropdown className={styles.ServicesDropdown} defaultOpen={1}>
        {services.map((service, index) => (
          <ServiceDropdownItem
            key={service.id}
            service={service}
            order={index + 1}
          />
        ))}
      </Dropdown>
    </section>
  );
};

export default ServicesDropdown;
