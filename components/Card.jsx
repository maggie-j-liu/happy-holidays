import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const cardVariants = {
  closed: {
    rotateX: -170,
  },
  open: {
    rotateX: -10,
  },
};

const textVariants = {
  closed: {
    opacity: 1,
  },
  open: {
    opacity: 0,
  },
};

const Card = () => {
  const controls = useAnimation();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        style={{ perspective: 1000 }}
        className="flex flex-col items-center py-16 w-full"
      >
        <div className="absolute w-2/3 max-w-2xl aspect-video flex items-center justify-center">
          <motion.div
            variants={textVariants}
            initial="closed"
            animate={controls}
            transition={{
              duration: 2,
            }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold">~ happy holidays ~</h1>
            <h2 className="text-xl font-light">
              You received a card from Maggie Liu!
            </h2>
          </motion.div>
        </div>
        <motion.div
          onTap={() => {
            if (open) {
              setOpen(false);
              controls.start("closed");
            } else {
              setOpen(true);
              controls.start("open");
            }
          }}
          variants={cardVariants}
          initial="closed"
          animate={controls}
          transition={{
            duration: 3,
          }}
          className="w-2/3 max-w-2xl aspect-video bg-red-200 z-10"
          style={{
            transformOrigin: "center bottom",
          }}
        ></motion.div>
        <div
          className="w-2/3 max-w-2xl aspect-video bg-green-200 will-change-transform"
          style={{
            transformOrigin: "center top",
            transform: "rotateX(10deg)",
          }}
        ></div>
      </div>
    </>
  );
};

export default Card;
