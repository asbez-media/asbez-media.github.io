import Button from "./button";
import { motion } from "framer-motion";

function Pricing() {
  return (
    <section>
      <div className='container px-4 mx-auto'>
        <div className='px-4 py-8 mx-auto lg:py-16 lg:px-6'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='flex flex-col items-center justify-center w-full mb-16 text-center'
          >
            <h2 className='mb-4 text-3xl font-semibold text-gray-800 dark:text-white'>
              Pricing
            </h2>
            <p className='w-3/4 mx-auto text-base font-normal text-gray-500 dark:text-gray-400'>
              We offer a variety of pricing plans to fit your needs. We provide
              coaching for social media, we manage your accounts, and we provide
              you with a custom plan to help you grow your social media
              presence.
            </p>
          </motion.div>
          <div className='grid justify-center w-full grid-cols-1 gap-8 mb-16 text-center lg:grid-cols-3 tems-center'>
            <Package
              name='Social Media Coaching'
              description='Expert coaching on growing on social media'
              price='$399'
              features={[
                "Guidance and instruction on how to effectively use social media to grow an account",
                "Teach you to avoid common mistakes and pitfalls when using social media ",
                "Offer tips and strategies to grow quality fanbase in fast-term",
                "Focus on helping you build a strong foundation and establish best practices for your social media presence",
              ]}
            />

            <Package
              name="Account Management"
              description="We manage your account for you so that you have more time being creative"
              price="$799"
              monthly
              features={
                [
                  "Take over the daily management of your social media accounts",
                  "Create professional-quality text and visual content, including posts, videos, and stories",
                  "Use our expertise to effectively engage with your audience and grow your interaction",
                  "Regularly track and report on the performance of the account to ensure it is meeting your goals",
                ]
              } />
            <Package
              name="Customised Plan"
              description="You can pick and choose what services you want from us"
              price="negotiable"
              features={
                [
                  "Tailor our services to meet your specific needs and goals",
                  "Create a customized plan and strategy for your social media presence",
                  "Offer a range of services, such as coaching, account management, content creation, and more",
                  "Work closely with you to ensure their needs are being met and their goals are being achieved",
                ]
              } />
          </div>
        </div>
      </div>
    </section>
  );
}

function Package(props: any) {
  const { name, description, price, features, monthly } = props;
  return (
    <div className='flex flex-col h-full max-w-lg p-8 mx-auto text-center text-gray-900 border border-gray-100 shadow bg-graph-paper dark:border-gray-600 dark:bg-graph-paper-dark dark:text-white '>
      <h3 className='mb-4 text-2xl font-semibold'>{name}</h3>
      <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
        {description}
      </p>
      <div className='flex items-baseline justify-center my-8'>
        <span className='mr-2 text-5xl font-extrabold'>{price}</span>
        {monthly && (<span className="text-gray-500 dark:text-gray-400">/month</span>)
        }
      </div>
      <ol className='px-5 space-y-4 text-left list-disc list-inside'>
        {features.map((feature: string) => (
          <li key={feature} className='flex items-center space-x-3'>
            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            <span>
              {feature}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Pricing;
