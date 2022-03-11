import {
    collection,
    getDocs,
    limit,
    QueryConstraint,
    query
} from "firebase/firestore";
import { firestore } from "./firebase";
import {Project} from "@components/projects/types";
const projectsCollection = "proyectos";

type QueryParams = {
    limit?: number;
}

export const getProjects = async ( queryParams: QueryParams = {}): Promise<Project[]> => {
    const projectsRef = collection(firestore, projectsCollection);
    const queryConstraints: QueryConstraint[] = [];
    if (queryParams.limit) queryConstraints.push(limit(queryParams.limit));
    const q = query(projectsRef, ...queryConstraints);
    const projectSnapshot = await getDocs(q);
    const projects: Project[] = [];
    projectSnapshot.forEach((projectDocument) => {
        const projectData = projectDocument.data();
        projects.push({
            id: projectDocument.id,
            title: projectData.titulo,
            text: projectData.texto || null,
            images: projectData.fotos || null,
            coverImage: projectData.imagenPortada,
            slug: projectData.slug
        });
    });
    return projects;
}
