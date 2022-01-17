import type { NextPage } from "next";
import Cover from "@components/home/Cover/Cover";
import Presentation from "@components/home/Presentation";
import ServicesPresentation from "@components/home/ServicesPresentation";

const Home: NextPage = () => {
  return (
    <main>
      <Cover />
      <Presentation />
      <ServicesPresentation />
    </main>
  );
};

export default Home;
