import React from "react";
import Navbar from "../Components/Navbar";
import Header from "./Landingpage/Header";
import Highlight from "./Landingpage/Highlight";
import Freebies from "./Landingpage/Freebies";
import Project from "./Landingpage/Project";
import Course from "./Landingpage/Course";
import Media from "./Landingpage/Media";
import Team from "./Landingpage/Team";
import Footer from "../Components/Footer";

const Landingpage = () => {
  return (
    // layout utama
    <div className="w-full h-full overflow-x-hidden font-manrope">
      <Navbar />
      {/* Section info - 1 or Navbar */}
      <Header />
      {/* Highlight 3 poin */}
      <Highlight />
      {/* Freebies */}
      <Freebies />
      {/* Project */}
      <Project />
      {/* course */}
      <Course />
      {/* Media */}
      <Media />
      {/* Team */}
      <Team />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landingpage;
