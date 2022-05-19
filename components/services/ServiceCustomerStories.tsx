import { Service } from "@components/services/types";
import { FC } from "react";
import DropdownItem from "@components/Dropdown/DropdownItem";
import DropdownHeader from "@components/Dropdown/DropdownHeader";

import styles from "@styles/ServiceDetail.module.scss";
import DropdownBody from "@components/Dropdown/DropdownBody";
import DropdownButton from "@components/Dropdown/DropdownButton";
import Dropdown from "@components/Dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  customerStories: Service["stories"];
}

const customerStoriesTitle = "Leer testimonios";

const ServiceCustomerStories: FC<Props> = ({ customerStories }) => {
  return (
    <Dropdown className={styles.ServiceDetail}>
      <DropdownItem
        id={1}
        className={styles.ServiceDetailDropdownItem}
        closedClassName={styles.ServiceDetailDropdownItem_close}
      >
        <DropdownHeader
          className={styles.ServiceDetailDropdownHeader}
          closeClassName={styles.ServiceDetailDropdownHeader_close}
          openClassName={styles.ServiceDetailDropdownHeader_open}
        >
          <DropdownButton
            closedClassName={styles.ServiceDetailDropdownButton_close}
            className={styles.ServiceDetailDropdownButton}
          >
            <div className={styles.ServiceDetailDropdownTitle}>
              {customerStoriesTitle}
            </div>
            <div className={styles.ServiceDetailDropdownButton_icon}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </DropdownButton>
        </DropdownHeader>
        <DropdownBody
          className={styles.ServiceDetailDropdownBody}
          closedClassName={styles.ServiceDetailDropdownBody_close}
          openClassName={styles.ServiceDetailDropdownBody_open}
        >
          <div>
            {customerStories?.map((i) => (
              <div style={{ padding: "0 1rem" }} key={i.name.replace(" ", "-")}>
                <h3 style={{ marginBottom: "0.2rem" }}>{i.name}</h3>
                <p
                  style={{
                    marginTop: "0",
                    marginBottom: "0.8rem",
                    fontSize: "0.9rem",
                  }}
                >
                  {i.position}
                </p>
                <p>
                  {'"'}
                  {i.text}
                  {'"'}
                </p>
              </div>
            ))}
          </div>
        </DropdownBody>
      </DropdownItem>
    </Dropdown>
  );
};

export default ServiceCustomerStories;
