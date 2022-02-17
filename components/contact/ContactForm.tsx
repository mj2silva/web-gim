import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";

import styles from "@styles/modules/ContactForm.module.scss";
import { ContactData } from "../../data/types";
import { sendContactForm } from "../../data/contactFormRepository";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const validateForm = (formValues: Partial<ContactData>) => {
  const errors: { [key: string]: string } = {};
  if (!formValues.name) errors.name = "El nombre es obligatorio";
  if (!formValues.email) errors.email = "Debe ingresar su correo";
  if (!formValues.message) errors.message = "Debe ingresar un mensaje";
  return errors;
};

const ContactForm: FC = () => {
  const [formValues, setFormValues] = useState<ContactData>({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const errors = validateForm(formValues);
    setIsLoading(true);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      await sendContactForm(formValues);
      setIsLoading(false);
      setIsSuccess(true);
    } else {
      setIsLoading(false);
    }
  };

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setFormValues((fv) => ({
      ...fv,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form className={styles.ContactForm} onSubmit={handleSubmit}>
      {isLoading && (
        <div className={styles.ContactFormSpinnerContainer}>
          <div className="spinner" />
        </div>
      )}
      {isSuccess && (
        <div className={styles.ContactFormSuccess}>
          <FontAwesomeIcon icon={faCheckCircle} />
          <div>
            Tu mensaje ha sido recibido, pronto nos pondremos en contacto
            contigo, gracias
          </div>
        </div>
      )}
      {!isLoading && !isSuccess && (
        <>
          <div className={styles.ContactFormElement}>
            <label>Nombre</label>
            <input
              onChange={handleChange}
              className={styles.input_name}
              placeholder="Nombre"
              name="name"
            />
            {errors.name && (
              <div className={styles.input_error}>{errors.name}</div>
            )}
          </div>
          <div className={styles.ContactFormElement}>
            <label>Email</label>
            <input
              onChange={handleChange}
              className={styles.input_email}
              placeholder="Email"
              name="email"
            />
            {errors.email && (
              <div className={styles.input_error}>{errors.email}</div>
            )}
          </div>
          <div className={styles.ContactFormElement}>
            <label>Teléfono</label>
            <input
              onChange={handleChange}
              className={styles.input_phone}
              placeholder="Teléfono"
              name="phoneNumber"
            />
            {errors.phoneNumber && (
              <div className={styles.input_error}>{errors.phoneNumber}</div>
            )}
          </div>
          <div className={styles.ContactFormElement}>
            <label>Mensaje</label>
            <textarea
              onChange={handleChange}
              rows={8}
              placeholder="Me interesa el servicio de..."
              name="message"
            />
            {errors.message && (
              <div className={styles.input_error}>{errors.message}</div>
            )}
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className={styles.ContactFormButton + " button"}
          >
            Contactar
          </button>
        </>
      )}
    </form>
  );
};

export default ContactForm;
