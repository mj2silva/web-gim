import { FC, FormEventHandler } from "react";

import styles from "@styles/ContactForm.module.scss";

const ContactForm: FC = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };
  return (
    <form className={styles.ContactForm} onSubmit={handleSubmit}>
      <div className={styles.ContactFormElement}>
        <label>Nombre</label>
        <input placeholder="Nombre" />
      </div>
      <div className={styles.ContactFormElement}>
        <label>Email</label>
        <input placeholder="Email" />
      </div>
      <div className={styles.ContactFormElement}>
        <label>Teléfono</label>
        <input placeholder="Teléfono" />
      </div>
      <div className={styles.ContactFormElement}>
        <label>Mensaje</label>
        <textarea rows={6} placeholder="Mensaje" />
      </div>
      <button type="submit" className={styles.ContactFormButton + " button"}>
        Contactar
      </button>
    </form>
  );
};

export default ContactForm;