import { FC } from "react";
import { Value } from "@components/about-us/types";

import styles from "@styles/EnterpriseValues.module.scss";

interface Props {
  value: Value;
}

const EnterpriseValueCard: FC<Props> = ({ value }) => {
  return (
    <div className={styles.EnterpriseValueCard}>
      <div className={styles.EnterpriseValueCardTitle}>
        <div className={styles.EnterpriseValueCardIcon}>
          {value.icon || "X"}
        </div>
        <h3 className={styles.EnterpriseValueCardName}>{value.name}</h3>
      </div>
      <div className={styles.EnterpriseValueCardDescription}>
        <p>{value.description}</p>
      </div>
    </div>
  );
};

export default EnterpriseValueCard;
