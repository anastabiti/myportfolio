import { useEffect, useState } from "react";
import Header from "./components/headrs";
import Projects from "./components/projects";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Intro from "./components/intro";
// import './styles.css';
//inspiration https://www.behance.net/gallery/157781767/Design-a-cool-portfolio-for-a-web-developer?tracking_source=search_projects|web+design+portfolio&l=8
function App() {
  {
    /* https://tailwindcss.com/docs/box-decoration-break */
    // https://tailwindcss.com/docs/grid-row
  }
  {
    /* <div className="cursor-progress ..."> */
  }
  return (
    <>
      <Header></Header>
      <Intro></Intro>
      <Projects></Projects>
    </>
  );
}

export default App;
