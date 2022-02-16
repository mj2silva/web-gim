import { FC } from "react";

import styles from "@styles/Services.module.scss";
import Dropdown from "@components/Dropdown/Dropdown";
import { Service } from "@components/services/types";
import ServiceDropdownItem from "@components/services/ServiceDropdownItem";

const services: Service[] = [
  {
    id: 1,
    title: "CONSTRUCCIÓN RETAIL",
    description:
      "Ejecutamos la construcción, remodelación e implementación de locales comerciales integralmente. Mediante procesos de mejora continua, logramos cubrir las necesidades de nuestros clientes de manera rápida y eficaz a través de los siguientes servicios",
    icon: "/img/icon5.png",
    detail: [
      {
        title: "Ver nuestros servicios",
        items: [
          "Elaboración de proyectos arquitectónicos, civiles y medio ambiente.",
          "Obras civiles y construcción de estructuras metálicas.",
          "Gerencia de proyectos.",
          "Gestión de calidad de proyectos.",
          "Trabajos de publicidad y acabados en general.",
          "Acondicionamientos, remodelaciones e implementaciones integrales de locales comerciales, farmacias, viviendas, etc.",
          "Instalación de climatización y aire acondicionado.",
          "Instalaciones de sistemas y redes (Cableado estructurado y fibra óptica).",
          "Instalaciones eléctricas",
          "Instalaciones sanitarias",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "MANTENIMIENTO RETAIL",
    description:
      "Gestionamos el Mantenimiento Correctivo y Preventivo a través de un servicio personalizado. Planificamos los mantenimientos para asegurar la continuidad operacional de nuestros clientes, ya sea de manera preventiva o correctiva en todas las especialidades.",
    icon: "/img/icon6.png",
    detail: [
      {
        title: "Ver nuestros servicios",
        items: [
          "Mantenimiento y reparación de equipos de aire acondicionado.",
          "Pintura, resanes de muros y techos.",
          "Preparación de FCR y tabiques de DRYWALL.",
          "Cambios e instalación de aparatos de iluminación.",
          "Mantenimiento de tableros y circuitos eléctricos.",
          "Tratamientos de muros y techos con humedad y salitre.",
          "Cambio de vidrios templados y reparación de sistemas para mamparas y ventanas.",
          "Reparación de puertas, muebles de melamine y madera (pintura, acabados, visagras, cerraduras, etc.)",
          "Mantenimiento y reparación de sistemas contra incendios.",
          "Reparación de pisos y cambio de enchapes.",
          "Refuerzos estructurales",
          "Suministro e instalación de racks, góndolas, ángulos, ranurados, lockers, estanterías y más.",
          "Mantenimiento de pozo a tierra.",
          "Mantenimiento en las instalaciones eléctricas (iluminación, circuitos, etc.)",
          "Trabajos de mantenimiento en elementos metálicos (góndolas, coches retail, estructuras, etc.).",
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
