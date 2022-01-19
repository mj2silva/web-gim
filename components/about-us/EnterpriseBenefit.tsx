import { FC } from "react";
import { Benefit } from "@components/about-us/types";

import styles from "@styles/EnterpriseBenefits.module.scss";
import Image from "next/image";

interface Props {
  benefit: Benefit;
}

const EnterpriseBenefit: FC<Props> = ({ benefit }) => {
  return (
    <div className={styles.EnterpriseBenefitCard}>
      <div className={styles.EnterpriseBenefitCardTitle}>
        <div className={styles.EnterpriseBenefitCardIcon}>
          {benefit.icon && (
            <Image
              src={benefit.icon}
              layout="fill"
              alt={benefit.icon}
              objectFit="scale-down"
            />
          )}
        </div>
      </div>
      <div className={styles.EnterpriseBenefitCardDescription}>
        <p>{benefit.description}</p>
      </div>
    </div>
  );
};

export default EnterpriseBenefit;
