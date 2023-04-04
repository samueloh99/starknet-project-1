import Head from "next/head";
import InfoSection from "../../components/InfoSection";
import HowWorksSection from "../../components/HowWorksSection";
import MainSection from "../../components/MainSection";

import BaseTemplate from "../Base";
import AboutUsSection from "../../components/AboutUsSection";

const HomeTemplate = () => (
  <BaseTemplate>
    <Head>
      <title>Home</title>
      <meta name="home" content="Home" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
    </Head>
    <div className="p-5 bg-custom-gradient">
      <MainSection />
    </div>
    <AboutUsSection />
    <InfoSection />
    <HowWorksSection />
  </BaseTemplate>
);

export default HomeTemplate;
