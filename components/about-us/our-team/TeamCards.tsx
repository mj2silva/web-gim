import { FC } from "react";

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Cynthia Zegarra",
    description:
      "Arquitecta colegiada, egresada de la Universidad Ricardo Palma, con especialización en gerencia de proyectos y gestión de manejo del riesgo con 15 años de experiencia en el sector retail, gestión municipal y control operacional del área inmobiliaria.",
    email: "cynthia.zegarra@gim-peru.com",
    title: "Conozca nuestro equipo",
    pictureUrl: "/img/g1.png",
  },
  {
    id: 2,
    name: "Lys Reátegui",
    description:
      "Arquitecta colegiada, egresada de la Universidad Ricardo Palma, con especialización en gerencia de proyectos y gestión de manejo del riesgo con 15 años de experiencia en el sector retail, gestión municipal y control operacional del área inmobiliaria.",
    email: "lys.reategui@gim-peru.com",
    title: "Sub-gerente de finanzas y negocios inmobiliarios",
    pictureUrl: "/img/g2.png",
  },
  {
    id: 3,
    name: "Marcelo Vizquerra",
    description:
      "Arquitecta colegiada, egresada de la Universidad Ricardo Palma, con especialización en gerencia de proyectos y gestión de manejo del riesgo con 15 años de experiencia en el sector retail, gestión municipal y control operacional del área inmobiliaria.",
    email: "marcelo.vizquerra@gim-peru.com",
    title: "Sub-gerente de Obras y Mantenimiento",
    pictureUrl: "/img/g4.png",
  },
  {
    id: 4,
    name: "Johnny Espinoza",
    description:
      "Arquitecta colegiada, egresada de la Universidad Ricardo Palma, con especialización en gerencia de proyectos y gestión de manejo del riesgo con 15 años de experiencia en el sector retail, gestión municipal y control operacional del área inmobiliaria.",
    email: "contabilidad@gim-peru.com",
    title: "Contador general",
    pictureUrl: "/img/g4.png",
  },
  {
    id: 5,
    name: "Cynthia Zegarra",
    description:
      "Arquitecta colegiada, egresada de la Universidad Ricardo Palma, con especialización en gerencia de proyectos y gestión de manejo del riesgo con 15 años de experiencia en el sector retail, gestión municipal y control operacional del área inmobiliaria.",
    email: "",
    title: "",
    pictureUrl: "/img/g1.png",
  },
  {
    id: 6,
    name: "Lys Reátegui",
    description:
      "Arquitecta colegiada, egresada de la Universidad Ricardo Palma, con especialización en gerencia de proyectos y gestión de manejo del riesgo con 15 años de experiencia en el sector retail, gestión municipal y control operacional del área inmobiliaria.",
    email: "",
    title: "",
    pictureUrl: "/img/g2.png",
  },
  {
    id: 7,
    name: "Marcelo Vizquerra",
    description:
      "Arquitecta colegiada, egresada de la Universidad Ricardo Palma, con especialización en gerencia de proyectos y gestión de manejo del riesgo con 15 años de experiencia en el sector retail, gestión municipal y control operacional del área inmobiliaria.",
    email: "",
    title: "",
    pictureUrl: "/img/g4.png",
  },
  {
    id: 8,
    name: "Johnny Espinoza",
    description:
      "Arquitecta colegiada, egresada de la Universidad Ricardo Palma, con especialización en gerencia de proyectos y gestión de manejo del riesgo con 15 años de experiencia en el sector retail, gestión municipal y control operacional del área inmobiliaria.",
    email: "",
    title: "",
    pictureUrl: "/img/g4.png",
  },
];

import styles from "@styles/TeamPage.module.scss";
import TeamCard from "@components/about-us/our-team/TeamCard";
import { TeamMember } from "@components/about-us/types";

const TeamCards: FC = () => {
  return (
    <section className={styles.TeamCards}>
      {teamMembers.map((member) => (
        <TeamCard key={member.id} teamMember={member} />
      ))}
    </section>
  );
};

export default TeamCards;
