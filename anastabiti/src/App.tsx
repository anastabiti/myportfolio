import { useEffect, useState } from 'react';
import Header from "./components/headrs";
// import './styles.css';
//inspiration https://www.behance.net/gallery/157781767/Design-a-cool-portfolio-for-a-web-developer?tracking_source=search_projects|web+design+portfolio&l=8
function App() {
  const [text, setText] = useState('Anas\nTABITI');

  const handleMouseEnter = () => {
    setText('Student at 1337\n');
  };
  const handleMouseLeave = () => {
    setText('Anas TABITI');
  };

  return (
    <>
      <Header></Header>

      {/* https://tailwindcss.com/docs/box-decoration-break */}
      {/* <div className="cursor-progress ..."> */}
      {/* <div className="cursor-context-menu back flex items-center justify-center h-1/2 text-right w-3/6 absolute top-0 transform transition duration-1000 ease-in-out hover:rotate-180">
    <span
        style={{ fontSize: "100px" }}
        className="box-decoration-slice bg-gradient-to-r from-blue-500 to-green-200 dark:from-blue-500 dark:to-black-500 text-white px-2"
    >
        Anas
        <br />
        TABITI
    </span>
</div> */}
<div className="cursor-context-menu back flex items-center justify-center h-full text-right w-3/6 absolute top-0 ">
    <span
        style={{ fontSize: "100px" }}
        className="box-decoration-slice bg-gradient-to-r from-blue-500 to-green-200 dark:from-blue-500 dark:to-black-500 text-white px-2"
    >
        Backend developer
    </span>
</div>

<div className="cursor-context-menu back flex items-center justify-center h-1/2 text-right w-3/6 absolute top-0 transform transition duration-1000 ease-in-out hover:rotate-180" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span
          style={{ fontSize: "100px" }}
          className="box-decoration-slice bg-gradient-to-r from-blue-500 to-green-200 dark:from-blue-500 dark:to-black-500 text-white px-2 transform hover:rotate-180"
      >
        {text.split('\n').map((item, i) => <p key={i}>{item}</p>)}
      </span>
    </div>
{/* <div className="cursor-context-menu back flex items-center justify-center h-1/2 text-right w-3/6 absolute top-0 transform transition duration-1000 ease-in-out hover:rotate-180" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span
          style={{ fontSize: "100px" }}
          className="box-decoration-slice bg-gradient-to-r from-blue-500 to-green-200 dark:from-blue-500 dark:to-black-500 text-white px-2"
      >
        {text.split('\n').map((item, i) => <p key={i}>{item}</p>)}
      </span>
    </div> */}
    </>
  );
}

export default App;
