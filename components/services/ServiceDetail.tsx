import { Service } from "@components/services/types";
import { FC } from "react";
import DropdownItem from "@components/Dropdown/DropdownItem";
import DropdownHeader from "@components/Dropdown/DropdownHeader";

import styles from "@styles/ServiceDetail.module.scss";
import DropdownBody from "@components/Dropdown/DropdownBody";
import DropdownButton from "@components/Dropdown/DropdownButton";
import Dropdown from "@components/Dropdown/Dropdown";

interface Props {
  serviceDetail: Service["detail"];
}

const ServiceDetail: FC<Props> = ({ serviceDetail }) => {
  return (
    <Dropdown className={styles.ServiceDetail}>
      {serviceDetail?.map((item, index) => (
        <DropdownItem
          id={index + 1}
          key={item.title}
          className={styles.ServiceDetailDropdownItem}
          closedClassName={styles.ServiceDetailDropdownItem_close}
        >
          <DropdownHeader
            className={styles.ServiceDetailDropdownHeader}
            closeClassName={styles.ServiceDetailDropdownHeader_close}
            openClassName={styles.ServiceDetailDropdownHeader_open}
          >
            <div className={styles.ServiceDetailDropdownTitle}>
              {item.title}
            </div>
            <DropdownButton
              closedClassName={styles.ServiceDetailDropdownButton_close}
              className={styles.ServiceDetailDropdownButton}
            >
              {">"}
            </DropdownButton>
          </DropdownHeader>
          <DropdownBody
            className={styles.ServiceDetailDropdownBody}
            closedClassName={styles.ServiceDetailDropdownBody_close}
            openClassName={styles.ServiceDetailDropdownBody_open}
          >
            <ol>
              {item.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ol>
          </DropdownBody>
        </DropdownItem>
      ))}
    </Dropdown>
  );
};

export default ServiceDetail;
