import { FC } from "react";
import Image from "next/image";

import styles from "@styles/TeamPage.module.scss";
import { TeamMember } from "@components/about-us/types";
import SectionSubtitle from "@components/SectionSubtitle";

interface Props {
  teamMember: TeamMember;
}

const TeamCard: FC<Props> = ({ teamMember }) => {
  return (
    <div className={styles.TeamCard}>
      <div className={styles.TeamCardHeader}>
        <h3>{teamMember.name}</h3>
      </div>
      <div className={styles.TeamCardBody}>
        <div className={styles.TeamCardPicture}>
          <Image
            src={teamMember.pictureUrl}
            layout="fill"
            alt={teamMember.name}
          />
        </div>
        <div className={styles.TeamCardInfo}>
          <div className={styles.TeamCardTitle}>
            <SectionSubtitle title={teamMember.title} />
          </div>
          <div className={styles.TeamCardDescription}>
            <p>{teamMember.description}</p>
          </div>
        </div>
      </div>
      <div className={styles.TeamCardContactInfo}>
        <span>Contacto:</span>
        <span>{teamMember.email}</span>
      </div>
    </div>
  );
};

export default TeamCard;
