import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import DropdownHeader from "@components/Dropdown/DropdownHeader";
import SectionSubtitle from "@components/SectionSubtitle";
import DropdownButton from "@components/Dropdown/DropdownButton";
import DropdownBody from "@components/Dropdown/DropdownBody";
import DropdownItem from "@components/Dropdown/DropdownItem";
import { Service } from "@components/services/types";

import styles from "@styles/Services.module.scss";
import ServiceDetail from "@components/services/ServiceDetail";
import ServiceCustomerStories from "@components/services/ServiceCustomerStories";

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
        <DropdownButton
          className={styles.ServicesDropdownButton}
          closedClassName={styles.ServicesDropdownButton_close}
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
          <div className={styles.ServicesDropdownButton_icon}>
            <Image
              src="/img/flechas-grandes.png"
              layout="fill"
              objectFit="scale-down"
              alt="icono-flechas"
            />
          </div>
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
        {service.stories && (
          <ServiceCustomerStories customerStories={service.stories} />
        )}
        <div className={styles.ServicesCallToAction}>
          <h2 className={styles.ServicesCallToActionQuestion}>
            ¿DESEAS COTIZAR UN SERVICIO DE {service.title}?
          </h2>
          <Link href="/contacto" passHref>
            <a className={"button " + styles.ServicesCallToActionButton}>
              Cotizar
            </a>
          </Link>
        </div>
      </DropdownBody>
    </DropdownItem>
  );
};

export default ServiceDropdownItem;
