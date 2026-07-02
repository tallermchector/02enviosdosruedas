'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface TimelineContentProps extends HTMLMotionProps<any> {
  animationNum?: number;
  timelineRef?: React.RefObject<any>;
  customVariants?: any;
  as?: React.ElementType;
}

export function TimelineContent({
  children,
  animationNum,
  timelineRef,
  customVariants,
  as = 'div',
  className,
  ...props
}: TimelineContentProps) {
  const Component = motion(as as any);
  return (
    <Component
      className={className}
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      {...props}
    >
      {children}
    </Component>
  );
}
