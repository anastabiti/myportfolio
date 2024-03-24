import Header from "./components/headrs";
import Projects from "./components/projects";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Intro from "./components/intro";
import ReactGA from 'react-ga';

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
      <Header></Header>
      <Intro></Intro>
      <br></br>
      <br></br>
      <br></br>
      <Projects></Projects>
      {/* <div
        className="footer"
        style={{
          backgroundColor: "grey",
          textAlign: "center",
          padding: "10px",
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
        }}
      >
        <p style={{ color: "#333" }}>
          © {new Date().getFullYear()} Anas TABITI
        </p>
      </div> */}
    </>
  );
}

export default App;
