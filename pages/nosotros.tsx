import { NextPage } from "next";
import OurTeam from "@components/about-us/OurTeam";
import EnterpriseGoals from "@components/about-us/EnterpriseGoals";
import EnterpriseValues from "@components/about-us/EnterpriseValues";
import EnterpriseBenefits from "@components/about-us/EnterpriseBenefits";
import ContactSection from "@components/contact/ContactSection";

const Nosotros: NextPage = () => {
  return (
    <main className="main">
      <OurTeam />
      <EnterpriseGoals />
      <EnterpriseValues />
      <EnterpriseBenefits />
      <ContactSection />
    </main>
  );
};

export default Nosotros;
