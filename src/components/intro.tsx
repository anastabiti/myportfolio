import React, { useState } from "react";

// <!-- https://flowbite.com/blocks/marketing/header/ -->
const Intro: React.FC = () => {
  const [text] = useState("Hello I'm Anas TABITI");

  return (
    <>
      <div className="grid  grid-rows-3 grid-flow-col gap-4 mb-80">
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
    </>
  );
};
export default Intro;
