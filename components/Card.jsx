import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import Front from "./Front";
import dynamic from "next/dynamic";
import Side1 from "./Side1";
import Side2 from "./Side2";

const Snow = dynamic(() => import("react-snowfall"), { ssr: false });

const cardVariants = {
  closed: {
    transform: "rotateX(10deg) translateY(100%)",
  },
  open: {
    transform: "rotateX(170deg) translateY(100%)",
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
    <div className="py-16 px-8 overflow-x-hidden">
      <div
        className="relative flex flex-col items-center w-full"
        style={{ perspective: 1000 }}
      >
        <div className="absolute w-full sm:w-2/3 max-w-2xl aspect-video flex flex-col items-center justify-center">
          <motion.div
            variants={textVariants}
            initial="closed"
            animate={controls}
            transition={{
              duration: 2,
            }}
            className="text-center flex flex-col items-center"
          >
            <h1 className="sm:text-3xl font-bold">~ happy holidays ~</h1>
            <h2 className="sm:text-xl font-light">
              You received a card from uwu!
            </h2>
          </motion.div>
          <motion.div
            variants={textVariants}
            initial="closed"
            animate={controls}
            transition={{
              duration: 2,
            }}
            className="absolute bottom-1 flex flex-col items-center"
          >
            <div className="text-gray-500 text-sm sm:text-base">
              Tap the card to open
            </div>
            <div className="translate-y-1 sm:translate-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-8 sm:w-8 text-gray-400 animate-bounce stroke-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                />
              </svg>
            </div>
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
          className="relative w-full sm:w-2/3 max-w-2xl aspect-video z-10"
          style={{
            transformOrigin: "center bottom",
            transform: "translateY(100%)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-white"
              style={{
                transform: "rotateX(180deg)",
              }}
            >
              <Side1 />
            </div>
          </div>
          <div
            className="absolute inset-0 bg-white"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Front />
          </div>
        </motion.div>
        <div
          className="w-full sm:w-2/3 max-w-2xl aspect-video will-change-transform bg-white"
          style={{
            transformOrigin: "center top",
            transform: "rotateX(10deg)",
          }}
        >
          <Side2 />
        </div>
      </div>
      <Snow color="white" />
    </div>
  );
};

export default Card;
