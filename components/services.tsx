import { motion } from "framer-motion";
import Card from "./cards";

function Services() {
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
            Our Services
          </h2>
          <p className='w-3/4 mx-auto text-base font-normal text-gray-500 dark:text-gray-400'>
            We offer a variety of services to help you grow your social media
            presence. We can help you with everything from creating a social
            media strategy to creating content for your social media platforms.
          </p>
        </motion.div>
        <div className='grid justify-center w-full grid-cols-1 gap-8 mb-16 text-center lg:grid-cols-2 tems-center'>
          <Card
            title='Coaching'
            description='We provide coaching by experts in the field to help you grow your social media presence.'
            className='bg-graph-paper dark:bg-graph-paper-dark'
          />
          <Card
            title='Content Creation'
            description='We have a team of expert content creators to help you create content for your social media platforms.'
            className='bg-graph-paper dark:bg-graph-paper-dark'
          />
          <Card
            title='Social Media Strategy'
            description='We create a social media strategy using our 4 step approach to find the best way you could grow organically.'
            className='bg-graph-paper dark:bg-graph-paper-dark'
          />
          <Card
            title='Optimization For Algorithms'
            description='We have experts who study the algorithms of social media platforms to help you grow your social media presence.'
            className='bg-graph-paper dark:bg-graph-paper-dark'
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
