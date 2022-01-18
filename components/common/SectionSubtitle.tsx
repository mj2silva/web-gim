import { FC } from "react";

interface Props {
  title: string;
}

const SectionSubtitle: FC<Props> = () => {
  return (
    <div className="section-subtitle">
      <h3>Conozca nuestro equipo</h3>
    </div>
  );
};

export default SectionSubtitle;
