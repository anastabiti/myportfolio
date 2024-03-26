import React, { useState } from "react";

// <!-- https://flowbite.com/blocks/marketing/header/ -->
const Intro: React.FC = () => {
  const [text] = useState("Hello I'm Anas TABITI");

  return (
    <>
      <div className="grid  grid-rows-3 grid-flow-col ">
        {/* <div></div> */}
        <div className="cursor-context-menu back flex items-center justify-center h-4/6 text-right transform transition duration-1000 ease-in-out hover:rotate-180">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl box-decoration-slice bg-gradient-to-r from-blue-500 to-green-200 dark:from-blue-500 dark:to-black-500 text-white px-2 transform hover:rotate-180">
            {text.split("\n").map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </span>
        </div>

        <div>
          <div className="cursor-context-menu back flex justify-center h-full text-right w-full sm:w-4/6 md:w-4/6 absolute sm:inset-y-1/4 md:inset-y-2/4">
            <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
              <span
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl box-decoration-slice bg-gradient-to-r from-blue-500 to-green-200 dark:from-blue-500 dark:to-black-500 text-white px-2 inline-block"
                style={{
                  animation: `typing 3s steps(40, end), blink-caret .75s step-end infinite`,
                  borderRight: ".15em solid orange",
                }}
              >
                Backend developer <br></br>looking for an internship
              </span>
            </div>
          </div>
        </div>

        <div> </div>
        <div className="w-full lg:w-5/6">
          <video
            className="w-full h-auto lg:h-full object-cover"
            src="BackendSys.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
    </>
  );
};
export default Intro;
