import { motion } from "framer-motion";

function Header() {
    return (
        <header>
            <nav className='px-4 py-2 pt-12 lg:px-6'>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='flex items-center max-w-screen-xl mx-auto'
                >
                    <picture>
                        <img
                            src='/transparent-logo.png'
                            className='h-6 mr-3 sm:h-9'
                            alt='Ajez Media Logo'
                        />
                    </picture>

                    <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                        Asbez Media - Social Media Engagement Made Easy
                    </span>
                </motion.div>
            </nav>
        </header>
    );
}

export default Header;