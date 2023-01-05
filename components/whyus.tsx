import { motion } from "framer-motion";
import Card from "./cards";

function WhyUs() {
  return (
    <section className='py-20'>
      <div className='container max-w-screen-lg px-4 mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='flex flex-col items-center justify-center w-full mb-16 text-center'
        >
          <h2 className='mb-4 text-3xl font-semibold text-gray-800 dark:text-white'>
            Why Us?
          </h2>
          <p className='w-3/4 mx-auto text-base font-normal text-gray-500 dark:text-gray-400'>
            We curate the best content for your social media platforms in a way
            that is optimized for the algorithms of the platforms, and in a way
            that your audience feels connected to you:
          </p>
        </motion.div>
        <div className='grid justify-center w-full grid-cols-1 gap-8 mb-16 text-center lg:grid-cols-2 tems-center'>
          <Card
            title='Authenticity'
            description='We help you make your content in a way that your audience feel like you are truly talking to them with authenticity throughout the piece of content.'
            className='bg-graph-paper dark:bg-graph-paper-dark'
          />
          <Card
            title='Loyalty'
            description='We teach you to make your audience feel confident about you, by making them confident about the content you make.'
            className='bg-graph-paper dark:bg-graph-paper-dark'
          />
          <Card
            title='Personal Touch'
            description='We help you make your content in a way that they feel personally connected to you, your content and by extension, your brand.'
            className='bg-graph-paper dark:bg-graph-paper-dark'
          />
          <Card
            title='Engagement'
            description='We help you make your content in a way that your audience feels engaged with your content to make them binge watch your content.'
            className='bg-graph-paper dark:bg-graph-paper-dark'
          />
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
