import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/9108efb4-7c87-4e24-a8dc-efd4400d70fb/files/d61ba5c4-a006-469f-b637-dda5c88a5ee6.jpg"
          alt="Суши и роллы Два Макса"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-widest text-sm md:text-base mb-4 opacity-80">Доставка еды</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ДВА МАКСА
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90 mb-10">
          Суши, роллы, фастфуд и многое другое — горячим прямо к вашей двери
        </p>
        <button className="bg-white text-black px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300">
          Заказать сейчас
        </button>
      </div>
    </div>
  );
}