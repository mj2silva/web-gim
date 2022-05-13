import { FC } from "react";

import styles from "@styles/Services.module.scss";
import Dropdown from "@components/Dropdown/Dropdown";
import { Service } from "@components/services/types";
import ServiceDropdownItem from "@components/services/ServiceDropdownItem";
import { useRouter } from "next/router";

const services: Service[] = [
  {
    id: 1,
    title: "GESTIÓN MUNICIPAL Y SANEAMIENTO FÍSICO LEGAL",
    description:
      "Se ocupa de guiar u orientar la detección y satisfacción de las necesidades de locales para su óptimo funcionamiento. El saneamiento  fisico legal de predios es la gestión destinada a la regularización de la documentación de la propiedad  del terreno en primer lugar, y luego de la construcción que se haya edificado sobre el predio (de ser el caso) con el objeto de obtener la titulación  o acreditación idonea.",
    icon: "/img/icon4.png",
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
    stories: [
      {
        name: "Rosalyn Fernandez de Castro Tudela",
        position: "Relaciones Institucionales Lindcorp - TAMBO y ARUMA",
        text:
          "Estamos muy satisfechos con los servicios prestados por GIM, siempre comprometidos con lo encomendado, muchas" +
          "veces antes de los plazos determinados, cuidando los intereses de sus clientes, brindando así una experiencia excelente.",
      },
      {
        name: "Patricio Lazarte Palao",
        position:
          "Gerente de Desarrollo Inmobiliario, Infraestructura y Mantenimiento - OXXO PERÚ",
        text:
          "GIM es una empresa con excelentes profesionales, con personas de gran calidad y sobre todo muy efectivas en " +
          "tiempo y forma. Nos ayudaron en el saneamiento de nuestra oficina principal, así como también en la obtención" +
          " de muchas licencias complicadas de nuestros locales, lo que nos permitió mantener la continuidad operativa " +
          "de nuestro negocio.",
      },
    ],
  },
  {
    id: 2,
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
    id: 3,
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
  const { asPath } = useRouter();
  const hash = asPath.split("#")[1];
  return (
    <section className={styles.Services}>
      <Dropdown
        className={styles.ServicesDropdown}
        defaultOpen={hash ? Number.parseInt(hash) : 1}
      >
        {services.map((service, index) => (
          <div key={service.id} style={{ position: "relative" }}>
            <div className={styles.target} id={service.id.toString()} />
            <ServiceDropdownItem service={service} order={index + 1} />
          </div>
        ))}
      </Dropdown>
    </section>
  );
};

export default ServicesDropdown;
