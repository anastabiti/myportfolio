import { useEffect, useState } from "react";
import Header from "./components/headrs";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import './styles.css';
//inspiration https://www.behance.net/gallery/157781767/Design-a-cool-portfolio-for-a-web-developer?tracking_source=search_projects|web+design+portfolio&l=8
function App() {
  const [text, setText] = useState("Anas TABITI");

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
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div></div>

        <div className="cursor-context-menu back flex items-center justify-center h-4/6 text-right  transform transition duration-1000 ease-in-out hover:rotate-180">
          <span
            style={{ fontSize: "100px" }}
            className="box-decoration-slice bg-gradient-to-r from-blue-500 to-green-200 dark:from-blue-500 dark:to-black-500 text-white px-2 transform hover:rotate-180"
          >
            {text.split("\n").map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </span>
        </div>

        <div>
          <div className="cursor-context-menu back flex  justify-center h-full text-right w-3/6 absolute top-13 ">
            <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
              <span
                style={{
                  fontSize: "100px",
                  animation: `typing 3s steps(40, end), blink-caret .75s step-end infinite`,
                  borderRight: ".15em solid orange",
                  display: "inline-block",
                }}
                className="box-decoration-slice bg-gradient-to-r from-blue-500 to-green-200 dark:from-blue-500 dark:to-black-500 text-white px-2"
              >
                Backend developer
              </span>
            </div>
          </div>
        </div>

        <div> </div>
        <div className="">
          <img
            src="FILE3.gif"
            alt="Image"
            className="transform translate-y-full scale-150"
          />
        </div>
      </div>
      <div id="projects">
        <div
          id="projects"
          className="absolute items-center justify-center     w-1/3	 h-1/6 "
        >
          <Carousel>
            <div>
              <img
                src="clib.jpg"
                alt="Project 1"
                className=" block w-1/3	h-1/6	"
              />
              <p className="legend">Libft</p>
              <p>
                Libft: This project is your very first project as a student at
                42. You will need to recode a few functions of the C standard
                library as well as some other utility functions that you will
                use during your whole cursus.
              </p>
            </div>
            <div>
              {/* <img src="project2.jpg" alt="Project 2" /> */}
              <p className="legend">Project 2</p>
              <p>This is some additional text for Project 2.</p>
            </div>
            <div>
              {/* <img src="project3.jpg" alt="Project 3" /> */}
              <p className="legend">Project 3</p>
              <p>This is some additional text for Project 3.</p>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default App;
