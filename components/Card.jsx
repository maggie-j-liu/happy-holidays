import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import Front from "./Front";
import dynamic from "next/dynamic";
import TextSide from "./TextSide";
import ImageSide from "./ImageSide";
import Head from "next/head";

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

const Card = ({
  title = "happy holidays",
  message = "",
  name = "",
  recipient = "",
}) => {
  const controls = useAnimation();
  const [open, setOpen] = useState(false);
  return (
    <div className="py-16 px-8 overflow-x-hidden">
      <Head>
        <title>Happy Holidays, {recipient}</title>
        <meta
          name="description"
          content={`A holiday card for ${recipient}, from ${name}.`}
        />
      </Head>
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
            <h1 className="text-sm leading-none sm:leading-normal sm:text-3xl font-bold">
              ~&nbsp;happy holidays, {recipient}&nbsp;~
            </h1>
            <h2 className="text-xs sm:text-xl font-light">
              You received a card from {name}!
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
            <div className="text-gray-500 text-xs sm:text-base">
              Tap the card to open
            </div>
            <div className="translate-y-1 sm:translate-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-8 sm:w-8 text-gray-400 animate-bounce stroke-1"
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
          className="cursor-pointer relative w-full sm:w-2/3 max-w-2xl aspect-video z-10"
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
              <ImageSide />
            </div>
          </div>
          <div
            className="absolute inset-0 bg-white"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Front title={title ? title : "happy holidays"} />
          </div>
        </motion.div>
        <div
          className="overflow-auto w-full sm:w-2/3 max-w-2xl aspect-video will-change-transform bg-white"
          style={{
            transformOrigin: "center top",
            transform: "rotateX(10deg)",
          }}
        >
          <TextSide message={message} />
        </div>
      </div>
      <Snow color="white" />
    </div>
  );
};

export default Card;
