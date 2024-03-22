import { useState } from "react";
import Header from "./components/headrs";
// import './styles.css';
//inspiration https://www.behance.net/gallery/157781767/Design-a-cool-portfolio-for-a-web-developer?tracking_source=search_projects|web+design+portfolio&l=8
function App() {
  return (
    <>
      <Header></Header>

      {/* https://tailwindcss.com/docs/box-decoration-break */}
      {/* <div className="cursor-progress ..."> */}
      {/* <div className="cursor-context-menu back flex items-center justify-center h-1/2 text-right w-3/6 absolute top-0">
    <span
        style={{ fontSize: "100px" }}
        className="box-decoration-slice bg-gradient-to-r from-blue-500 to-green-200 text-white px-2"
    >
        Anas
        <br />
        TABITI
    </span>
</div> */}
<div className="cursor-context-menu back flex items-center justify-center h-1/2 text-right w-3/6 absolute top-0">
    <span
        style={{ fontSize: "100px" }}
        className="box-decoration-slice bg-gradient-to-r from-blue-500 to-green-200 dark:from-blue-500 dark:to-black-500 text-white px-2"
    >
        Anas
        <br />
        TABITI
    </span>
</div>
    </>
  );
}

export default App;
