// HorizontalRule.tsx
import React , {useRef} from 'react';
import { motion, useInView, useAnimation} from "framer-motion";

interface HorizontalRuleProps {
  isDarkMode: boolean;
}

const HorizontalRule: React.FC<HorizontalRuleProps> = ({ isDarkMode }) => {
 
  const ref = useRef();
  const controls = useAnimation();
  const inView = useInView(ref, {  amount: 0.5 });

  React.useEffect(() => {
    if (inView)  controls.start({ width: "30vw", opacity: 1 });
  }, [inView]);


  return (
    <motion.hr
      ref={ref}
      className={`w-[30vw] h-[1px] m-5 mx-auto border-0 rounded ${
        isDarkMode ? 'bg-gray-200' : 'bg-gray-700'
      }`}
    />
  );
};

export default HorizontalRule;
