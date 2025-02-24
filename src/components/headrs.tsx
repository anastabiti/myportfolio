import React from "react";
// import ReactGA from 'react-ga';

// <!-- https://flowbite.com/blocks/marketing/header/ -->
const Header: React.FC = () => {
  return (
    <header>
      <nav className="bg-green-200 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a className="flex items-center">
            <img
              src="/anas.png"
              className="mr-3 h-16 sm:h-19"
              alt="Anas Logo"
            />
            <span className="text-blue-900 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Anas TABITI
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            ></button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-blue-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  // click here to go to that id div
                  href="#projects"
                  className="block py-2 pr-4 pl-3 text-blue-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="/anastabiti.pdf"
                  download
                  // onClick={() => ReactGA.event({
                  //   category: 'User',
                  //   action: 'Downloaded CV'
                  // })}
                  className="block py-2 pr-4 pl-3 text-blue-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Download my CV
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="block py-2 pr-4 pl-3 text-blue-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
