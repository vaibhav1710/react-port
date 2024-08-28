import React, {useRef} from "react";
import Typewriter from "../Typewriter/Typewriter";
import { motion, useInView, useAnimation} from "framer-motion";
import "./Header.css";

export default function Header({ isDarkMode }: { isDarkMode: boolean }) {
  const words = ["backend developer", "competitive programmer"];
 
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const imageRef = useRef();

  // Controls for animations
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const imageControls = useAnimation();

  // Check if elements are in view
  const inView1 = useInView(ref1, { once: true, amount: 0.5 });
  const inView2 = useInView(ref2, {  amount: 0.5 });
  const inView3 = useInView(ref3, { once: true, amount: 0.5 });
  const imageInView = useInView(imageRef, { amount: 0.5 });

  // Start animation when in view
  React.useEffect(() => {
    if (inView1) controls1.start({ opacity: 1, x: 0 });
    if (inView2) controls2.start({ opacity: 1, y: 0 });
    if (inView3) controls3.start({ opacity: 1, y: 0 });
    if (imageInView) imageControls.start({ opacity: 1, y: 0 });
  }, [inView1, inView2, inView3, imageInView]);

  return (
    <section id="home">
    <div
      className={`min-h-screen bg-black flex ${
        isDarkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex font-raleway flex-col justify-center items-center lg:items-center lg:flex-row font-extrabold w-5/6 m-auto bg-clip-text">
        <div className="text-center lg:text-left lg:pr-6">
          <motion.h2
            className="text-xl p-1 md:text-2xl"
            ref = {ref1}
            initial={{ opacity: 0, x: -50 }}
            animate={ inView3 ? { opacity: 1, x: 0 }: {}}
            transition={{ duration: 1 }}
          >
            Hi, my name is
          </motion.h2>
          
          <motion.h2
            className="text-3xl p-1 md:text-6xl"
            ref = {ref2}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Vaibhav Singh
          </motion.h2>

          <motion.h2

            className="text-xl p-2 sm:text-2xl"
            ref = {ref3}
            initial={{ opacity: 0, y: 50 }}
            animate= {{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            I'm a{" "}
            <span className="text-pink-500 text-xl p-2 sm:text-2xl">
              <Typewriter
                words={words}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={1000}
              />
            </span>
          </motion.h2>
        </div>

        <motion.div
            ref={imageRef}
            className="w-full lg:w-1/2 flex items-center justify-center mt-4 lg:mt-0"
            initial={{ opacity: 0, y: 100 }}
            animate={imageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
          <img
            className="w-full max-w-xs lg:max-w-full"
            src="/images/0d304406e063babf0f2e65fe5221fea5-removebg-preview-transformed.png"
            alt="Profile"
          />
        </motion.div>
      </div>
    </div>
  </section>
  );
}
