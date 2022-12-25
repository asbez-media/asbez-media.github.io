import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import Card from "./cards";

function Services() {
  return (
    <section className='py-20'>
      <div className='container max-w-screen-xl px-4 mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='flex flex-col items-center justify-center w-full max-w-screen-lg mx-auto mb-16 text-center'
        >
          <h2 className='mb-4 text-3xl font-semibold text-gray-800 dark:text-white'>
            Our Services
          </h2>
          <p className='w-3/4 mx-auto text-base font-normal text-gray-500 dark:text-gray-400'>
            We offer a variety of services to help you grow your social media
            presence. We can help you with everything from creating a social
            media strategy to creating content for your social media platforms.
          </p>
        </motion.div>
        <div className='grid justify-center grid-cols-1 gap-8 mb-16 text-center w-screen-xl lg:grid-cols-3 tems-center'>
          <Card
            title='Coaching'
            description='We provide coaching by experts in the field to help you grow your social media presence.'
            className='bg-graph-paper dark:bg-graph-paper-dark'
            icon={
              <Player
                autoplay
                loop
                src='https://assets3.lottiefiles.com/packages/lf20_b4yychpi.json'
              />
            }
          />
          <Card
            title='Content Creation'
            description='We have a team of expert content creators to help you create content for your social media platforms.'
            className='bg-graph-paper dark:bg-graph-paper-dark'
            icon={
              <Player
                autoplay
                loop
                src='https://assets8.lottiefiles.com/packages/lf20_zpz526tf.json'
              />
            }
          />
          <Card
            title='Optimization For Algorithms'
            description='We have experts who study the algorithms of social media platforms to help you grow your social media presence.'
            className='bg-graph-paper dark:bg-graph-paper-dark'
            icon={
              <Player
                autoplay
                loop
                src='https://assets3.lottiefiles.com/packages/lf20_xoc1ru7p.json'
              />
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
