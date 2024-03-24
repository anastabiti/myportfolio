// import React, { useCallback, useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

// const ParticlesBackground = () => {
//     const [init, setInit] = useState(false);

//     // this should be run only once per application lifetime
//     useEffect(() => {
//         initParticlesEngine(async (engine) => {
//             await loadSlim(engine);
//         }).then(() => {
//             setInit(true);
//         });
//     }, []);

//     const particlesLoaded = (container) => {
//         console.log(container);
//     };

//     return (
//         init && <Particles
//             id="tsparticles"
//             particlesLoaded={particlesLoaded}
//             options={{
//                 background: {
//                     color: {
//                         value: "#0d47a1",
//                     },
//                 },
//                 fpsLimit: 120,
//                 interactivity: {
//                     events: {
//                         onClick: {
//                             enable: true,
//                             mode: "push",
//                         },
//                         onHover: {
//                             enable: true,
//                             mode: "repulse",
//                         },
//                         resize: true,
//                     },
//                     modes: {
//                         push: {
//                             quantity: 4,
//                         },
//                         repulse: {
//                             distance: 200,
//                             duration: 0.4,
//                         },
//                     },
//                 },
//                 particles: {
//                     color: {
//                         value: "#ffffff",
//                     },
//                     links: {
//                         color: "#ffffff",
//                         distance: 150,
//                         enable: true,
//                         opacity: 0.5,
//                         width: 1,
//                     },
//                     move: {
//                         direction: "none",
//                         enable: true,
//                         outModes: {
//                             default: "bounce",
//                         },
//                         random: false,
//                         speed: 6,
//                         straight: false,
//                     },
//                     number: {
//                         density: {
//                             enable: true,
//                             area: 800,
//                         },
//                         value: 80,
//                     },
//                     opacity: {
//                         value: 0.5,
//                     },
//                     shape: {
//                         type: "circle",
//                     },
//                     size: {
//                         value: { min: 1, max: 5 },
//                     },
//                 },
//                 detectRetina: true,
//             }}
//         />
//     );
// };

// export default ParticlesBackground;


import React, { useEffect, useRef, useState } from 'react';

function MatrixRain() {
  const canvasRef = useRef(null);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize columns ... (more on this below)

    const render = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Fade-out effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0'; // Classic Matrix green 
      ctx.font = '12px monospace'; 

      columns.forEach((column) => {
        // ... Logic to draw and update numbers in each column
      })
    }

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      render();
    }
    animate(); 

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas ref={canvasRef} style={{ background: 'white' }} />
  );
}

export default MatrixRain;
