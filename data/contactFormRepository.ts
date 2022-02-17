import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ContactData } from "./types";
import { firestore } from "./firebase";
import { FirebaseError } from "@firebase/app";

const contactFormCollection = "Contacto";

export const sendContactForm = async (
  contactData: ContactData
): Promise<void> => {
  try {
    const collectionRef = collection(firestore, contactFormCollection);
    await addDoc(collectionRef, {
      nombre: contactData.name,
      telefono: contactData.phoneNumber,
      email: contactData.email,
      mensaje: contactData.message,
      fecha: serverTimestamp(),
    });
  } catch (err: unknown) {
    if (err instanceof FirebaseError) {
      console.error(err.message);
    }
  }
};
