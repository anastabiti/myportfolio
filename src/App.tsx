import Header from "./components/headrs";
import Projects from "./components/projects";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Intro from "./components/intro";
import ReactGA from 'react-ga';
import { MatrixRainingLetters } from "react-mdr";
import React from "react";

ReactGA.initialize('G-WCTSRBVK5M');

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

     <Header ></Header>
      {/* <MatrixRainingLetters key="foo-bar" /> */}
      <Intro>
      </Intro>

      {/* Rest of your website components go here */}
          <br></br>
      <br></br>
      <br></br>
      <Projects></Projects>
    </>
  );
}

export default App;
