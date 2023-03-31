import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Button } from "react-daisyui";

export const ScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <AnimatePresence>
      {scrollPosition > 500 ? (
        <div className="w-4 md:w-10 fixed z-10 bottom-4 md:bottom-16 right-16 md:right-24">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0, dur: 0.1 }}
            transition={{ type: "spring", duration: 0.4 }}
          >
            <Button
              shape="square"
              color="primary"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="Wróć do góry"
              size="lg"
            >
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="0 0 24 24"
                className="w-8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m18.787 9.473s-4.505-4.502-6.259-6.255c-.147-.146-.339-.22-.53-.22-.192 0-.384.074-.531.22-1.753 1.753-6.256 6.252-6.256 6.252-.147.147-.219.339-.217.532.001.19.075.38.221.525.292.293.766.295 1.056.004l4.977-4.976v14.692c0 .414.336.75.75.75.413 0 .75-.336.75-.75v-14.692l4.978 4.978c.289.29.762.287 1.055-.006.145-.145.219-.335.221-.525.002-.192-.07-.384-.215-.529z"
                  fill-rule="nonzero"
                />
              </svg>
            </Button>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};
