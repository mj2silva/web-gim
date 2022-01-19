import { FC } from "react";
import Image from "next/image";

import DropdownHeader from "@components/Dropdown/DropdownHeader";
import SectionSubtitle from "@components/SectionSubtitle";
import DropdownButton from "@components/Dropdown/DropdownButton";
import DropdownBody from "@components/Dropdown/DropdownBody";
import DropdownItem from "@components/Dropdown/DropdownItem";
import { Service } from "@components/services/types";

import styles from "@styles/Services.module.scss";
import ServiceDetail from "@components/services/ServiceDetail";

interface Props {
  service: Service;
  order: number;
}

const ServiceDropdownItem: FC<Props> = ({ service, order }) => {
  return (
    <DropdownItem
      id={service.id}
      className={styles.ServicesDropdownItem}
      closedClassName={styles.ServicesDropdownItem_close}
    >
      <DropdownHeader
        className={styles.ServicesDropdownHeader}
        closeClassName={styles.ServicesDropdownHeader_close}
      >
        <div className={styles.ServicesDropdownTitle}>
          <div className={styles.ServicesDropdownNumber}>{order}</div>
          <div className={styles.ServicesDropdownIcon}>
            <Image
              src={service.icon}
              alt={service.title}
              layout="fill"
              objectFit="scale-down"
            />
          </div>
          <div className={styles.ServicesDropdownName}>
            <SectionSubtitle title={service.title} />
          </div>
        </div>
        <DropdownButton
          className={styles.ServicesDropdownButton}
          closedClassName={styles.ServicesDropdownButton_close}
        >
          <Image
            src="/img/flechas-grandes.png"
            layout="fill"
            objectFit="scale-down"
            alt="icono-flechas"
          />
        </DropdownButton>
      </DropdownHeader>
      <DropdownBody
        className={styles.ServicesDropdownBody}
        closedClassName={styles.ServicesDropdownBody_close}
        openClassName={styles.ServicesDropdownBody_open}
      >
        <div className={styles.ServiceDescription}>
          <p>{service.description}</p>
        </div>
        <ServiceDetail serviceDetail={service.detail} />
        <div className={styles.ServicesCallToAction}>
          <h2 className={styles.ServicesCallToActionQuestion}>
            ¿DESEAS COTIZAR UN SERVICIO DE {service.title}?
          </h2>
          <button className={"button " + styles.ServicesCallToActionButton}>
            Contactar
          </button>
        </div>
      </DropdownBody>
    </DropdownItem>
  );
};

export default ServiceDropdownItem;
