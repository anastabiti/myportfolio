import React, { useState } from "react";

// <!-- https://flowbite.com/blocks/marketing/header/ -->
const Projects: React.FC = () => {
  return (
    <>
      <div id="projects" className="me">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className=" font-bold">Libft</h2>
              <p>
                This project is my very first project as a student at 42. I had
                to recode a few functions from the C standard library, as well
                as some other utility functions that I will use throughout my
                entire cursus.
              </p>
              <br></br>
              <br></br>
              <img src="C_Logo.png" className="block w-1/6 h-1/6" />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className=" font-bold">ft_printf</h2>
              <p>
                This project is pretty straightforward, I had to recode printf.
                I have learned what variadic functions are and how to implement
                them.
              </p>
              <br></br>
              <video
                src="me.mov"
                className="block w-2/3 h-1/6"
                autoPlay
                muted
                loop
              />
              <br></br>
              <img src="C_Logo.png" className="block w-1/6 h-1/6" />
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
              <br></br>
              <div className="flex space-x-4">
                <img className="block w-1/6 h-1/6" src="Virtualbox_logo.png" />
                <img
                  className="block w-1/6 h-1/6"
                  src="Bash_Logo_Colored.svg.png"
                />
                <img className="block w-14 h-1/6" src="Debian_logo.png" />
                <img className="block w-20 h-1/6" src="ssh.png" />
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className="font-bold">get_next_line</h2>
              <p>
                This project is about programming a function that returns a line
                read from a file descriptor.
              </p>

              <img src="gnl.webp"></img>
              <br></br>
              <img src="C_Logo.png" className="block w-1/6 h-1/6" />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className="font-bold">minitalk</h2>
              <p>
                The purpose of this project is to code a small data exchange
                program using UNIX signals. It is an introductory project for
                the bigger UNIX projects that will appear later on in the
                cursus.
              </p>
              <video
                src="minitalk.mov"
                className="block w-full h-full"
                autoPlay
                muted
                loop
              />
              <br></br>
              <div className="flex space-x-4">
                <img className="block w-1/6 h-1/6" src="C_Logo.png" />
                <img className="block w-1/3 h-2/4" src="unix.png" />
                {/* <img className="block w-14 h-1/6" src="Debian_logo.png" />
                <img className="block w-20 h-1/6" src="ssh.png" /> */}
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className="font-bold">push_swap</h2>
              <p>
                This project involves sorting data on a stack, with a limited
                set of instructions, and the smallest number of moves.
              </p>
              <video
                src="pushswap.mov"
                className="block w-full h-full"
                autoPlay
                muted
                loop
              />
              <br></br>
              <div className="flex space-x-4">
                <img className="block w-1/6 h-1/6" src="C_Logo.png" />
                {/* <img className="block w-14 h-1/6" src="Debian_logo.png" />
                <img className="block w-20 h-1/6" src="ssh.png" /> */}
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className="font-bold">so_long</h2>
              <p>
                This project is a small 2D game with minilibx. You'll learn
                about textures, sprites and tiles.
              </p>
              <video
                src="so_long.mov"
                className="block w-full h-full"
                autoPlay
                muted
                loop
              />
              <br></br>
              <div className="flex space-x-4">
                <img className="block w-1/6 h-1/6" src="C_Logo.png" />
                <img className="block w-1/6 h-1/6" src="mlx.png" />
                {/* <img className="block w-20 h-1/6" src="ssh.png" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
