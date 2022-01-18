import { NextPage } from "next";
import OurTeam from "@components/about-us/OurTeam";
import EnterpriseGoals from "@components/about-us/EnterpriseGoals";
import EnterpriseValues from "@components/about-us/EnterpriseValues";

const Nosotros: NextPage = () => {
  return (
    <main className="main">
      <OurTeam />
      <EnterpriseGoals />
      <EnterpriseValues />
    </main>
  );
};

export default Nosotros;
