import React from "react";

import "./Home.css";

import Newsletter from "./HomePageComponents/Newsletter/Newsletter";

import Bannervideo from "./HomePageComponents/Bannervideo/Bannervideo";
import Webinar from "./HomePageComponents/Webinar/Webinar";
import Products from "./HomePageComponents/Products/Products";
import Ourrelationship from "./HomePageComponents/Ourrelationship/Ourrelationship";
import Docuseries from "./HomePageComponents/Docuseries/Docuseries";
import Specialties from "./HomePageComponents/Specialties/Specialties";
import Media from "./HomePageComponents/Media/Media";
import Podcasts from "./HomePageComponents/Podcasts/Podcasts";
import Strategy from "./HomePageComponents/Strategy/Strategy";
import Eksahishuruaat from "./HomePageComponents/Eksahishuruaat/Eksahishuruaat";

const Home = () => {
  return (
    <>
      {/* BannerVideo */}
      <Bannervideo />

      {/* Specialties */}
      <Specialties />

      {/* Eksahishuruaat */}
      {/* <Eksahishuruaat /> */}

      {/* Products */}
      <Products />

      {/* Webinar */}
      <Webinar />

      {/* Docuseries */}
      <Docuseries />

      {/* OurrelationShip */}
      <Ourrelationship />

      {/* podcasts */}
      <Podcasts />

      {/* Strategy */}
      <Strategy />

      {/* Media */}
      <Media />

      {/* newsLetter */}
      <Newsletter />
    </>
  );
};

export default Home;
