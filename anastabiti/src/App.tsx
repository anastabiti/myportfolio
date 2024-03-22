import { useEffect, useState } from "react";
import Header from "./components/headrs";
// import './styles.css';
//inspiration https://www.behance.net/gallery/157781767/Design-a-cool-portfolio-for-a-web-developer?tracking_source=search_projects|web+design+portfolio&l=8
function App() {
  const [text, setText] = useState("Anas TABITI");

  return (
    <>
      <Header></Header>

      {/* https://tailwindcss.com/docs/box-decoration-break */}
      {/* <div className="cursor-progress ..."> */}
      <div className="cursor-context-menu back flex items-center justify-center h-full text-right w-3/6 absolute top-13 ">
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

      <div className="cursor-context-menu back flex items-center justify-center h-4/6 text-right w-3/6 absolute top-0 transform transition duration-1000 ease-in-out hover:rotate-180">
        <span
          style={{ fontSize: "100px" }}
          className="box-decoration-slice bg-gradient-to-r from-blue-500 to-green-200 dark:from-blue-500 dark:to-black-500 text-white px-2 transform hover:rotate-180"
        >
          {text.split("\n").map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </span>
      </div>
      <div className="flex justify-end w-456 h-full">
            <img src="FILE1.gif"  alt="Image" />
      </div>
    </>
  );
}

export default App;
