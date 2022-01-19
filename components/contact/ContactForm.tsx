import { FC, FormEventHandler } from "react";

import styles from "@styles/modules/ContactForm.module.scss";

const ContactForm: FC = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };
  return (
    <form className={styles.ContactForm} onSubmit={handleSubmit}>
      <div className={styles.ContactFormElement}>
        <label>Nombre</label>
        <input className={styles.input_name} placeholder="Nombre" />
      </div>
      <div className={styles.ContactFormElement}>
        <label>Email</label>
        <input className={styles.input_email} placeholder="Email" />
      </div>
      <div className={styles.ContactFormElement}>
        <label>Teléfono</label>
        <input className={styles.input_phone} placeholder="Teléfono" />
      </div>
      <div className={styles.ContactFormElement}>
        <label>Mensaje</label>
        <textarea rows={8} placeholder="Me interesa el servicio de..." />
      </div>
      <button type="submit" className={styles.ContactFormButton + " button"}>
        Contactar
      </button>
    </form>
  );
};

export default ContactForm;
