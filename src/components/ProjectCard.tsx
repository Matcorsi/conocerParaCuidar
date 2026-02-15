import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  index: number;
}

const MotionLink = motion(Link);

export function ProjectCard({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  href,
  index
}: ProjectCardProps) {
  return (
    <MotionLink
      to={href}
      className="group relative block w-full aspect-[4/3] overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent transition-opacity duration-500 group-hover:opacity-75" />

      {/* Yellow top border accent */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-[#81C4C8] transform origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <span className="font-['Oswald'] text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#81C4C8] mb-2 transition-transform duration-500 group-hover:translate-y-0 translate-y-1 opacity-0 group-hover:opacity-100">
          {subtitle}
        </span>

        <h3 className="font-['Oswald'] font-bold text-2xl md:text-3xl uppercase tracking-tight text-white leading-tight transition-transform duration-500 group-hover:-translate-y-1">
          {title}
        </h3>

        <div className="mt-3 flex items-center gap-2 transition-all duration-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="w-6 h-px bg-[#81C4C8]" />
          <span className="text-xs text-[#e5e5e5]/80 uppercase tracking-widest font-['Oswald']">
            Explorar
          </span>
        </div>
      </div>
    </MotionLink>
  );
}
