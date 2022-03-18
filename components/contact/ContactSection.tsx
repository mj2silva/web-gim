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
            <h5>Calle Monterosa 270. Of. 901</h5>
            <a
              href="https://goo.gl/maps/BhWmsWvL3rCv1Jh97"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cómo llegar →
            </a>
          </div>
          <div className={styles.ContactSectionInfoCard}>
            <h5>Cinthia</h5>
            <h5>
              Tel. <a href="tel:992613992">992 613 992</a>
            </h5>
            <h5>
              <a href="mailto:informes@gim-peru.com">informes@gim-peru.com</a>
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
