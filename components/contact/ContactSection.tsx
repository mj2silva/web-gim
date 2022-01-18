import { FC } from "react";
import SectionTitle from "@components/SectionTitle";

import styles from "@styles/modules/ContactSection.module.scss";
import ContactForm from "@components/contact/ContactForm";

const ContactSection: FC = () => {
  return (
    <section className={styles.ContactSection}>
      <div className={styles.ContactSectionTitle}>
        <SectionTitle text="Construyamos tu" highlightedText="nueva sede hoy" />
      </div>
      <div className={styles.ContactSectionBody}>
        <div className={styles.ContactSectionInfo}>
          <div className={styles.ContactSectionInfoCard}>
            <h5>Dirección</h5>
            <h5>Los Robles 123, Urb. Virgen de la puerta, Trujillo.</h5>
            <a href="#" target="_blank" rel="noopener">
              Cómo llegar {"->"}
            </a>
          </div>
          <div className={styles.ContactSectionInfoCard}>
            <h5>Cinthia</h5>
            <h5>Tel. 981292644</h5>
            <h5>hola@gim-peru.com</h5>
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
