import { useState } from "react";
// import './styles.css';
//inspiration https://www.behance.net/gallery/157781767/Design-a-cool-portfolio-for-a-web-developer?tracking_source=search_projects|web+design+portfolio&l=8
function App() {
  function handleClick() {
    console.log("clocked ");
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      //add class=dark in html element
      document.documentElement.classList.add("dark");
    } else {
      //remove class=dark in html element
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }
  return (
    <>
      <div style={{ position:"relative", top:"10px",left:"45%"}} className="lg:flex lg:gap-x-12">
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          About me
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Projects
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Download my CV
        </a>

      </div>

      {/* <div className="cursor-progress ..."> */}
      <div  style={{ position:"relative", }} className="cursor-context-menu	 ...">
        <h1  className="text-13xl font-bold underline">Backend developer</h1>
        {/* https://tailwindcss.com/docs/box-decoration-break */}
        <span
          style={{ fontSize: "100px" }}
          className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ..."
        >
          Anas
          <br />
          TABITI
        </span>

        <button
          style={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleClick}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Dark/Light
        </button>
      </div>
    </>
  );
}

export default App;
