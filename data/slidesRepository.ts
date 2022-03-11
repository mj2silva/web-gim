import {
    collection,
    getDocs,
    query
} from "firebase/firestore";
import { firestore } from "./firebase";
import {Slide} from "./types";
const slidesHomeCollection = "sliders-home";

export const getSlidesHome = async (): Promise<Slide[]> => {
    const slidesRef = collection(firestore, slidesHomeCollection);
    const q = query(slidesRef);
    const slideSnapshot = await getDocs(q);
    const slides: Slide[] = [];
    slideSnapshot.forEach((slideDocument) => {
        const slideData = slideDocument.data();
        slides.push({
            id: slideDocument.id,
            url: slideData.url,
        });
    });
    return slides;
}
