import { FC } from "react";
import SectionTitle from "@components/SectionTitle";

import styles from "@styles/modules/ContactSection.module.scss";
import ContactForm from "@components/contact/ContactForm";

const ContactSection: FC = () => {
  return (
    <section className={styles.ContactSection}>
      <div className={styles.ContactSectionTitle}>
        <SectionTitle text="Iniciemos tu " highlightedText="proyecto hoy" />
      </div>
      <div className={styles.ContactSectionBody}>
        <div className={styles.ContactSectionInfo}>
          <div className={styles.ContactSectionInfoCard}>
            <h5>Dirección</h5>
            <h5>Jr. Pacaritambo 176 Int. 102</h5>
            <a
              href="https://goo.gl/maps/EA7dUs5zqXFqQe9u8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cómo llegar →
            </a>
          </div>
          <div className={styles.ContactSectionInfoCard}>
            <h5>Lys Reátegui</h5>
            <h5>
              Tel. <a href="tel:992613992">992 613 992</a>
            </h5>
            <h5>
              <a href="mailto:lys.reategui@gim-peru.com">
                lys.reategui@gim-peru.com
              </a>
            </h5>
          </div>
        </div>
        <div className={styles.ContactSectionForm}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
