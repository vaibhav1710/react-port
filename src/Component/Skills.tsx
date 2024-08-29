import React, {useRef} from "react";
import IconCloud from "./IconCloud";
import {motion, useAnimation} from "framer-motion";
import { useInView } from 'react-intersection-observer';

function Skills({ isDarkMode }: { isDarkMode: boolean }) {
  const iconSlugs = [
    "javascript",
    "react",
    "nodejs",
    "typescript",
    "java",
    "redis",
    "amazonaws",
    "nextjs",
    "redis",
    "elasticsearch",
    "cplusplus",
    "docker",
    "mongodb",
    "mysql",
    "express",
    "bootstrap",
    "tailwindcss",
    "postman",
    "github",
    "git",
    "postgresql",
    "nestjs",
    "html5",
    "css3",
    "vercel",
    "graphql",
    "nginx",
    "visualstudiocode",
    "python",
    "intellijidea"
  ];

  
  const { ref, inView } = useInView({
    threshold: 0.2,    // Trigger when 10% of the section is visible
  });

  

  return (
    <>
    <section id="skills" className={`p-10 w-full m-auto`}>
    <motion.h2 className="heading text-center text-4xl text-wrap font-extrabold bg-clip-text"  initial={{ opacity: 0, y: -50 }}
           ref={ref}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}  
            whileInView={{opacity:1, x:0}} 
            viewport={{  amount: 0.5 }}>Skills </motion.h2>

      <div className="relative flex h-full w-full max-w-[36rem] items-center justify-center overflow-hidden px-20 mx-auto">
        <IconCloud iconSlugs={iconSlugs} isDarkMode={isDarkMode} />
      </div>
      </section>
    </>
  );
}

export default Skills;
