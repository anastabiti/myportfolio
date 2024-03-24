import React from "react";

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
                This project is a small 2D game with minilibx. I learned about
                textures, sprites and tiles.
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
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className="font-bold">Philosophers</h2>
              <p>
                Eat, Sleep, Spaghetti, repeat. This project is about learning
                how threads work by precisely timing a group of philosophers on
                when to pick up forks and eat spaghetti without dying from
                hunger.
              </p>
              <br></br>
              <div className="flex space-x-4">
                <img className="block w-1/6 h-1/6" src="C_Logo.png" />
                {/* <img className="block w-20 h-1/6" src="ssh.png" /> */}
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className="font-bold">minishell</h2>
              <p>
                The objective of this project is for you to create a simple
                shell: As beautiful as a shell
              </p>
              <br></br>
              <div className="flex space-x-4">
                <img className="block w-1/6 h-1/6" src="C_Logo.png" />
                {/* <img className="block w-20 h-1/6" src="ssh.png" /> */}
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className="font-bold">NetPractice</h2>
              <p>
                NetPractice is a general practical exercise to let you discover
                networking.
              </p>
              <br></br>
              <div className="flex space-x-4">
                <img className="block " src="NetPractice.png" />
                {/* <img className="block w-20 h-1/6" src="ssh.png" /> */}
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className="font-bold">CPP pool</h2>
              <p>Time to dive into Object Oriented Programming!</p>
              <br></br>
              <div className="flex space-x-4">
                <img className="block w-1/6 h-1/6" src="C++_logo.png" />
                {/* <img className="block w-20 h-1/6" src="ssh.png" /> */}
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className="font-bold"> cub3d</h2>
              <p>
                This project is inspired by the world-famous Wolfenstein 3D
                game, which was the first FPS ever. It explore ray-casting. Our
                goal will be to make a dynamic view inside a maze, in which we
                will have to find our way.
              </p>
              <br></br>
              <img className="block  " src="cub3d.png" />
              <br></br>
              <div className="flex space-x-4">
                <img className="block w-1/6 h-1/6" src="C_Logo.png" />
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className="font-bold"> Inception</h2>
              <p>
                This project aims to broaden the knowledge of system
                administration by using Docker. By virtualizing several Docker
                images, creating them in a new personal virtual machine.
              </p>
              <br></br>
              <img className="block  " src="dockermeme.webp" />
              <br></br>
              <div className="flex space-x-4">
                <img className="block w-1/6 h-1/6" src="Docker.png" />
                <img className="block w-2/6 h-1/6" src="dockercompose.avif" />
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className="font-bold"> ft_irc</h2>
              <p>
                Create your an IRC server in C++, fully compatible with an
                official client. (limechat)
              </p>
              <br></br>
              <img className="block  " src="irc.png" />
              <br></br>
              <div className="flex space-x-4">
                <img className="block w-1/6 h-1/6" src="C++_logo.png" />
                {/* <img className="block w-2/6 h-1/6" src="dockercompose.avif" /> */}
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className="font-bold"> ft_transcendence</h2>
              <p>
                this project is about creating a SPA website in Nestjs/Nextjs
                where users can :play a multiplayer Ping Pong game , Chat with
                others , create/join channel.
              </p>
              <br></br>
              <img className="block  " src="ftpong.png" />
              <br></br>
              <div className="flex space-x-4">
                <img className="block w-1/6 h-1/6" src="nestjs_logo.png" />
                <img className="block w-1/6 h-1/6" src="nextjs.svg" />
                <img className="block w-1/6 h-14" src="pngwing.com.png" />
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h2 className="font-bold"> Simple API in Django</h2>
              <p>
                Building a simple E-commerce REST API with Django REST Framework
              </p>
              <br></br>
              <img className="block  " src="ftpong.png" />
              <br></br>
              <div className="flex space-x-4">
                <img className="block w-1/6 h-1/6" src="djnago.png" />
                <img className="block w-1/6 h-1/6" src="python.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="Contact"
        className="Contact bg-green-200 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
      >
        <h2 style={{ color: "white", fontSize: "20px" }}>Contact Me</h2>
        <p style={{ color: "white", fontSize: "18px" }}>
          Phone: <span style={{ color: "white" }}>00212651321662</span>
        </p>
        <p style={{ color: "white", fontSize: "18px" }}>
          Email: <span style={{ color: "white" }}>anastabiti@gmail.com</span>
        </p>
      </div>
      
    </>
  );
};

export default Projects;
