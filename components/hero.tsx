/* eslint-disable @next/next/no-img-element */
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./button";

function Hero() {
  return (
    <section>
      <div className='grid max-w-screen-xl gap-8 px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className='max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
              {"Social Media Engagement Made Easy."}
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
              {
                "Here at NoteWorthy, we are dedicated to providing solutions to help you grow your social media presence."
              }
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div>
              <Button
                onClick={() => {
                  window.document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[18px] h-[18px]'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z'
                      clipRule='evenodd'
                    />
                  </svg>
                }
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>{" "}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='flex flex-row gap-4 lg:col-span-5'
        >
          <Player
            autoplay
            loop
            src='https://assets7.lottiefiles.com/packages/lf20_osdxlbqq.json'
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
