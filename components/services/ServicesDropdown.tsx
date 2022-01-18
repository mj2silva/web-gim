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
  },
  {
    id: 2,
    title: "CONSTRUCCIÓN RETAIL",
    description:
      "Se ocupa de guiar u orientar la detección y satisfacción de las necesidades de locales para su óptimo funcionamiento. El saneamiento  fisico legal de predios es la gestión destinada a la regularización de la documentación de la propiedad  del terreno en primer lugar, y luego de la construcción que se haya edificado sobre el predio (de ser el caso) con el objeto de obtener la titulación  o acreditación idonea.",
    icon: "X",
  },
];

const ServicesDropdown: FC = () => {
  return (
    <section className={styles.Services}>
      <Dropdown className={styles.ServicesDropdown}>
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
