import { motion } from "framer-motion";

function Contact() {
  return (
    <section id='contact' className='py-20'>
      <div className='container max-w-screen-lg px-4 mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='flex flex-col items-center justify-center w-full mb-16 text-center'
        >
          <h2 className='mb-4 text-3xl font-semibold text-slate-800 dark:text-white'>
            Get Started
          </h2>
          <p className='w-3/4 mx-auto text-base font-normal text-slate-500 dark:text-slate-400'>
            We are here to help you make your content in a way that your
            audience. Fill out the form below and we will get back to you as
            soon as possible.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='max-w-screen-lg px-4 mx-auto'
      >
        <ContactForm />
      </motion.div>
      <ToastContainer />
    </section>
  );
}

import { useState } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Button from "./button";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(email, name, message);
    if (email === "" || name === "" || message === "") {
      return toast.error("Please fill out all fields.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    emailjs
      .send(
        "service_4a3n75o",
        "template_499y21o",
        {
          from_name: name,
          from_email: email,
          to_name: "Asbez Media Support",
          message: message,
          reply_to: email,
        },
        "hAW7EJkNMygNslFYB"
      )
      .then((result) => {
        console.log(result.text);
        toast.success("Message sent successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.log(error.text);
        toast.error(
          "Message failed to send. Try again with different parameters.",
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      });
  };

  return (
    <form action='#' className='space-y-8'>
      <div>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-slate-900 dark:text-slate-300'
        >
          Your email
        </label>
        <input
          type='email'
          id='email'
          value={email}
          className='shadow-sm bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-sm block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
          placeholder='name@server.com'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label
          htmlFor='subject'
          className='block mb-2 text-sm font-medium text-slate-900 dark:text-slate-300'
        >
          Your name
        </label>
        <input
          type='text'
          id='name'
          value={name}
          className='block w-full p-3 text-sm border rounded-sm shadow-sm text-slate-900 border-slate-300 bg-slate-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
          placeholder='What should we call you?'
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className='sm:col-span-2'>
        <label
          htmlFor='message'
          className='block mb-2 text-sm font-medium text-slate-900 dark:text-slate-300'
        >
          Your message
        </label>
        <textarea
          id='message'
          rows={6}
          value={message}
          className='block p-2.5 w-full text-sm text-slate-900 bg-slate-50 rounded-sm shadow-sm border border-slate-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
          placeholder='Send us a message and we will get back to you as soon as possible.'
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <Button
        type='submit'
        className='w-full'
        onClick={handleSubmit}
        disabled={
          email.trim() === "" || name.trim() === "" || message.trim() === ""
        }
        icon={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
            />
          </svg>
        }
      >
        Send message
      </Button>
    </form>
  );
}

export default Contact;
