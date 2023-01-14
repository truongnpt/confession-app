import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';

//Fade in visible
export const AnimationWrapper = ({
  children,
  transitionProps,
  className,
  visibleAnimationVariants,
  hiddenAnimationVariants,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const animationVariants = {
    visible: { opacity: 1, scale: 1, y: 0, ...visibleAnimationVariants },
    hidden: { opacity: 0.1, scale: 1, y: 30, ...hiddenAnimationVariants },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.25, ...transitionProps }}
      variants={animationVariants}
      className={`animation-body ${className ?? ''}`}
    >
      {children}
    </motion.div>
  );
};

AnimationWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  transitionProps: PropTypes.object,
  visibleAnimationVariants: PropTypes.object,
  hiddenAnimationVariants: PropTypes.object,
  heightY: PropTypes.number,
  className: PropTypes.string,
};
