import { useState } from "react";
// import './styles.css';
//inspiration https://www.behance.net/gallery/157781767/Design-a-cool-portfolio-for-a-web-developer?tracking_source=search_projects|web+design+portfolio&l=8
function App() {
  function handleClick() {
    console.log("clocked ")
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
      {/* <h1 className="text-13xl font-bold underline">Backend developer</h1> */}
      {/* <h1>Anas TABITI</h1> */}
        <button onClick={handleClick}>
        <div className="flex-initial w-64 font-bold underline decoration-sky-500 text-red-800">
          Change Mode (Dark/Light)
        </div>
        </button>
        
    </>
  );
}

export default App;
