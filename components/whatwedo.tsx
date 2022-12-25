import { motion } from "framer-motion";

function WhatWeDo() {
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
            Our Approach
          </h2>
          <p className='w-3/4 mx-auto text-base font-normal text-gray-500 dark:text-gray-400'>
            Our approach can be broken down into 4 steps, research, plan,
            target, and launch. These 4 steps ensure that we make an effecient
            game plan for engaging your audience.
          </p>
        </motion.div>
        <ol className='relative max-w-screen-md mx-auto border-l border-gray-200 dark:border-gray-700'>
          <Step
            time='Step 1'
            title='Research'
            description='We do deep research on the platforms you want to grow on, your content, your audience, and your competitors.'
          />
          <Step
            time='Step 2'
            title='Plan'
            description='We create a plan to help you grow your social media presence. This plan includes a content calendar, a target audience, and a growth strategy.'
          />
          <Step
            time='Step 3'
            title='Target'
            description='We target your audience and improve relative to your competitors to help you grow your social media presence.'
          />
          <Step
            time='Step 4'
            title='Revise'
            description='We revise our plan to make sure we are getting the best results possible. We also provide you with a report on our findings.'
          />
        </ol>
      </div>
    </section>
  );
}

function Step(props: any) {
  const { time, title, description } = props;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
        <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
          {time}
        </time>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
          {title}
        </h3>
        <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
          {description}
        </p>
      </li>
    </motion.div>
  );
}

export default WhatWeDo;
