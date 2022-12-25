import { motion } from "framer-motion";

function Card(props: any) {
  const { title, description, icon, className } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={
        "h-full max-w-lg border border-gray-200 shadow-md dark:border-gray-700  bg-approach dark:bg-approach-dark  " +
        " " +
        className
      }
    >
      <div className='p-5'>
        <h5 className='w-full mb-2 text-2xl font-bold tracking-tight text-left text-slate-800 dark:text-white'>
          {title}
        </h5>
        <p className='mb-3 text-lg font-normal text-justify text-gray-700 dark:text-gray-400'>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default Card;
