import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { config } from "@react-spring/web";

export const FadeIn: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const fadeInAnim = useSpring({
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: {
      tension: 280 * (props.speed || 1),
      friction: 60,
    },
  });

  return (
    <animated.div {...props} style={{ ...fadeInAnim, ...props.style }}>
      {props.children}
    </animated.div>
  );
};
