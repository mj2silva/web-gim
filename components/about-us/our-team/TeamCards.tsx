import { FC } from "react";

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Cynthia Zegarra",
    description:
      "Arquitecta colegiada, egresada de la Universidad Ricardo Palma, con especialización en gerencia de proyectos y gestión de manejo del riesgo con 15 años de experiencia en el sector retail, gestión municipal y control operacional del área inmobiliaria.",
    email: "cynthia.zegarra@gim-peru.com",
    title: "Director",
    pictureUrl: "/img/equipo/Cynthia1.jpg",
  },
  {
    id: 2,
    name: "Lys Reátegui",
    description:
      "Profesional de Administración de Empresas de la UTP, con 15 años de experiencia en el control operacional y gestión inmobiliaria del sector retail, con especialización en finanzas. Responsable del área de finanzas y de los negocios inmobiliarios de la empresa.",
    email: "lys.reategui@gim-peru.com",
    title: "Sub-gerente de finanzas y negocios inmobiliarios",
    pictureUrl: "/img/equipo/Lys1.jpg",
  },
  {
    id: 3,
    name: "Marcelo Vizquerra",
    description:
      "Arquitecto colegiado, egresado de la Universidad Peruana de Ciencias Aplicadas y Oklahoma State University, con más de 15 años de experiencia en supervisión, construcción y dirección de obras en el sector retail, espacios comerciales y mineros.",
    email: "marcelo.vizquerra@gim-peru.com",
    title: "Sub-gerente de Obras y Mantenimiento",
    pictureUrl: "/img/equipo/Marcelo.jpg",
  },
  {
    id: 4,
    name: "Johnny Espinoza",
    description:
      "Graduado en Contabilidad y Finanzas en la UTP, diplomado en Tributación Empresarial y especialización en Contabilidad de Empresas Constructoras e Inmobiliarias.",
    email: "contabilidad@gim-peru.com",
    title: "Contador general",
    pictureUrl: "/img/equipo/Johnny.jpg",
  },
  {
    id: 5,
    name: "Nathalie Diaz",
    description:
      "Arquitecta colegiada, egresada de la Universidad Ricardo Palma, con especialización en gerencia de proyectos y gestión de manejo del riesgo con 15 años de experiencia en el sector retail, gestión municipal y control operacional del área inmobiliaria.",
    email: "nathalie.diaz@gim-peru.com",
    title: "Arquitecta Líder de Proyectos",
    pictureUrl: "/img/equipo/Nathalie.jpg",
  },
  {
    id: 6,
    name: "Andreé Sotelo",
    description:
      "Arquitecto egresado de la Universidad Ricardo Palma, con experiencia en el diseño de proyectos retail, industria, store planning, manejo de costos, presupuestos y desarrollo de expedientes técnicos para obras de infraestructura en general.",
    email: "andree.sotelo@gim-peru.com",
    title: "Arquitecto Líder de Proyectos",
    pictureUrl: "/img/equipo/Andree.jpg",
  },
  {
    id: 7,
    name: "Katherine Nuñez",
    description:
      "Arquitecta egresada de la Universidad Ricardo Palma, con experiencia en gestión y coordinación de proyectos, control y seguridad en edificaciones y saneamiento físico legal de predios.",
    email: "katherine.nunez@gim-peru.com",
    title: "Arquitecta Líder de Proyectos",
    pictureUrl: "/img/equipo/Katherine.jpg",
  },
  {
    id: 8,
    name: "Carl Tuesta",
    description:
      "Arquitecto egresado de la Universidad Ricardo Palma, con experiencia en supervisión y construcción de obras, manejo de costos, presupuestos, diseño y desarrollo de proyectos. Especialista en diseño paramétrico y fabricación digital.",
    email: "carl.tuesta@gim-peru.com",
    title: "Supervisor de Obras",
    pictureUrl: "/img/equipo/Carl.jpg",
  },
  {
    id: 9,
    name: "Jaime Segovia",
    description:
      "Inspector técnico de seguridad con 15 años de experiencia en defensa civil y evaluación de daños y análisis de necesidades, auditor sistemas de gestión - OHSAS 18001, occupational Safety & Health Supervisor. Cursos de actualización relacionados a la seguridad de la infraestructura, seguridad de protección contra incendios según la normatividad vigente.",
    email: "jaime.segovia@gim-peru.com",
    title: "Jefe de Seguridad de Infraestructura y Control de Riesgo",
    pictureUrl: "/img/equipo/Jaime.jpg",
  },
  {
    id: 10,
    name: "Fiorella Romero",
    description:
      "Occupy tilde heirloom celiac. Wayfarers kinfolk fashion axe banh mi farm-to-table, retro raw denim normcore viral flexitarian.",
    email: "fiorella.romero@gim-peru.com",
    title: "Gestión Municipal",
    pictureUrl: "/img/equipo/Fiorella.jpg",
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
