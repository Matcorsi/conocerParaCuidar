import { Outlet } from "react-router-dom";
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

export default function Layout() {
  return (
    <div>
      <main>
        <Outlet />
        <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="images/sierras.jpg"
              alt="Dramatic wildlife landscape with animals on the African savanna at golden hour"
              className="w-full h-full object-cover" />

            {/* Dark gradient overlay — heavier at bottom for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/30" />
          </div>

          {/* Logo */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 z-20">
            <img
              src="/images/icon.png"
              alt="Logo de Conocer para Cuidar"
              className="h-14 md:h-12 lg:h-14 opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>


          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-16 md:px-12 lg:px-20 max-w-6xl mx-auto">
            {/* Yellow accent bar */}
            <motion.div
              className="w-16 h-1 bg-[#96C561] mb-6"
              initial={{
                width: 0
              }}
              animate={{
                width: 64
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1]
              }} />


            <motion.h1
              className="font-['Oswald'] font-bold text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-white mb-4"
              initial={{
                opacity: 0,
                y: 40
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}>

              Conocer
              <br />
              <span className="text-[#96C561]">para</span> Cuidar
            </motion.h1>

            <motion.p
              className="text-[#e5e5e5] text-lg md:text-xl max-w-lg leading-relaxed"
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}>

              Investigación, educación y acción para la conservación de la vida
              silvestre en Tandil.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              className="mt-12 flex items-center gap-3"
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 0.6,
                delay: 1.2
              }}>

              <motion.div
                className="w-px h-8 bg-[#96C561]/60"
                animate={{
                  scaleY: [1, 0.5, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }} />

              <span className="font-['Oswald'] text-xs uppercase tracking-[0.25em] text-[#e5e5e5]/60">
                Explorar proyectos
              </span>
            </motion.div>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-20 py-20 max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            className="mb-14"
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-60px'
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }}>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-[3px] bg-[#96C561]" />
              <span className="font-['Oswald'] text-xs uppercase tracking-[0.3em] text-[#96C561]">
                Nuestros Proyectos
              </span>
            </div>
            <h2 className="font-['Oswald'] font-bold text-3xl md:text-4xl uppercase tracking-tight text-white">
              Áreas de Investigación
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <ProjectCard
              title="Lago del Fuerte"
              subtitle="Programa de conservación"
              imageUrl="images/dique.png"
              imageAlt="Lago del Fuerte - Tandil, Buenos Aires, Argentina."
              href="/lagodelfuerte"
              index={0} />


            <ProjectCard
              title="Humedal Los Coipos"
              subtitle="Proximamente"
              imageUrl="images/humedal.jpg"
              imageAlt="Humedal - Los Coipos"
              href="#"
              index={1} />


            <ProjectCard
              title="Sierras"
              subtitle="Proximamente"
              imageUrl="images/cerro-venado-tandil.jpg"
              imageAlt="Sierras de Tandil"
              href="#"
              index={2} />

          </div>
        </section>

        <footer className="w-full border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16">
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">

              {/* Left — branding */}
              <div>
                <div className="w-10 h-[3px] bg-[#96C561] mb-5" />
                <div className="flex items-center gap-2">
                  <img
                    src="/images/icon.png"
                    alt="Logo de Conocer para Cuidar"
                    className="h-14 md:h-12 lg:h-14 opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                  <h2 className="font-['Oswald'] font-bold text-2xl uppercase tracking-tight text-white">
                    Conocer para Cuidar
                  </h2>
                </div>
                <p className="text-[#e5e5e5]/60 text-sm leading-relaxed max-w-sm">
                  Investigación, educación y conservación de la vida silvestre en
                  Tandil, Buenos Aires, Argentina.
                </p>
              </div>


              {/* Right — links & info */}
              <div className="flex flex-col items-start md:items-end gap-4">
                <div className="flex gap-6">
                  <a
                    href="https://walink.co/fa3ab2"
                    className="font-['Oswald'] text-xs uppercase tracking-[0.2em] text-[#e5e5e5]/60 hover:text-[#96C561] transition-colors duration-300">

                    Contacto
                  </a>
                  {/* <a
                    href="#"
                    className="font-['Oswald'] text-xs uppercase tracking-[0.2em] text-[#e5e5e5]/60 hover:text-[#96C561] transition-colors duration-300">

                    Donar
                  </a>
                  <a
                    href="#equipo"
                    className="font-['Oswald'] text-xs uppercase tracking-[0.2em] text-[#e5e5e5]/60 hover:text-[#96C561] transition-colors duration-300">

                    Equipo
                  </a> */}
                </div>
                <p className="text-[#e5e5e5]/30 text-xs">
                  © 2026 Conocer para Cuidar. Todos los derechos reservados. Desarrollado por{' '}
                                <a
                                  href="https://matco-software.vercel.app"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-[#F5F1E6] hover:text-green-300 transition-colors"
                                >
                                  Matco
                                </a>.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom yellow accent line */}
          <div className="w-full h-[3px] bg-[#96C561]" />
        </footer>

      </main>
    </div>
  );
}
