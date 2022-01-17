import type { NextPage } from "next";
import Cover from "@components/home/Cover/Cover";
import Presentation from "@components/home/Presentation";

const Home: NextPage = () => {
  return (
    <main>
      <Cover />
      <Presentation />
    </main>
  );
};

export default Home;
