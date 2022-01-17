import { FC } from "react";

interface Props {
  text: string;
  highlightedText: string;
}

const SectionTitle: FC<Props> = ({ text, highlightedText }) => {
  return (
    <h2 className="section-title">
      <span className="section-title--normal">{text}</span>
      <span className="section-title--highlighted">{highlightedText}</span>
    </h2>
  );
};

export default SectionTitle;
