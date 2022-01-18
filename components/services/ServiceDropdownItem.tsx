import { FC } from "react";

import DropdownHeader from "@components/Dropdown/DropdownHeader";
import SectionSubtitle from "@components/SectionSubtitle";
import DropdownButton from "@components/Dropdown/DropdownButton";
import DropdownBody from "@components/Dropdown/DropdownBody";
import DropdownItem from "@components/Dropdown/DropdownItem";
import { Service } from "@components/services/types";

import styles from "@styles/Services.module.scss";

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
          <div className={styles.ServicesDropdownIcon}>{service.icon}</div>
          <div className={styles.ServicesDropdownName}>
            <SectionSubtitle title={service.title} />
          </div>
        </div>
        <DropdownButton
          className={styles.ServicesDropdownButton}
          closedClassName={styles.ServicesDropdownButton_close}
        >
          X
        </DropdownButton>
      </DropdownHeader>
      <DropdownBody
        className={styles.ServicesDropdownBody}
        closedClassName={styles.ServicesDropdownBody_close}
        openClassName={styles.ServicesDropdownBody_open}
      >
        <div className={styles.ServiceDescription}>{service.description}</div>
      </DropdownBody>
    </DropdownItem>
  );
};

export default ServiceDropdownItem;
