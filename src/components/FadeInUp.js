import { motion } from 'framer-motion';

import React from 'react';

const FadeInUp = ({ inView = true, children, x = 0, y = 0 }) => {
  // console.log(inView);
  const easing = [0.42, 0, 0.58, 1];
  const yOffset = 24;
  const transition = {
    duration: 0.8,
    delay: 0.25,
    ease: easing,
  };
  const variants = {
    hidden: { y: yOffset, opacity: 0, transition },
    show: {
      y,
      x,
      opacity: 1,
      transition,
    },
  };

  return (
    <motion.div
      style={{ width: '100%' }}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      exit="hidden"
      variants={variants}>
      {children}
    </motion.div>
  );
};

export default FadeInUp;
