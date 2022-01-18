import { FC } from "react";

interface Props {
  title: string;
}

const SectionSubtitle: FC<Props> = ({ title }) => {
  return (
    <div className="section-subtitle">
      <h3>{title}</h3>
    </div>
  );
};

export default SectionSubtitle;
