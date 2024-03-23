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

      <div id="projects" className="me">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className=" font-bold">Libft</h2>
              <p>
                This project is your very first project as a student at 42. You
                will need to recode a few functions of the C standard library as
                well as some other utility functions that you will use during
                your whole cursus.
              </p>
              <img
                src="clib.jpg"
                alt="Project 1"
                className="block w-1/3 h-1/6"
              />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className=" font-bold">ft_printf</h2>
              <p>
                This project is pretty straightforward, you have to recode
                printf. You will learn what is and how to implement variadic
                functions. Once you validate it, you will reuse this function in
                your future projects.
              </p>
              <video
                src="me.mov"
                className="block w-2/3 h-1/6"
                autoPlay
                muted
                loop
              />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className="font-bold">Born2beroot</h2>
              <p>
                This project aims to introduce you to the wonderful world of
                virtualization.
              </p>
              <img src="virtual.png"></img>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className="font-bold">get_next_line</h2>
              <p>
              May it be a file, stdin, or even later a network connection, you will always need a way to read content line by line. It is time to start working on this function, which will be essential for your future projects.
              </p>
              <img src="virtual.png"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
