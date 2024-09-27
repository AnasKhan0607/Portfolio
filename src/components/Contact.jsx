import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

// Personal Data
const personalData = {
  email: 'anas.k2001@icloud.com',
  phone: '(647)-806-2443',
  address: 'Toronto, Ontario, Canada',
  github: 'https://github.com/AnasKhan0607',
  linkedIn: 'https://www.linkedin.com/in/anas-k/',
  twitter: 'https://twitter.com/anas_twitter', // Replace with your actual Twitter link
  stackOverflow: 'https://stackoverflow.com/users/anas_khan', // Replace with your actual Stack Overflow link
  facebook: 'https://facebook.com/anas.khan', // Replace with your actual Facebook link
};

const Contact = () => {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-gray-800 dark:text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-teal-600 dark:bg-gray-700 w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-teal-600 dark:bg-gray-700"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Contact Form Without Captcha */}
        <div className="lg:w-full">
          <form className="w-full max-w-lg mx-auto p-6 border-2 border-teal-500 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-800 dark:text-white text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border border-teal-500 rounded w-full py-2 px-3 text-gray-800 dark:text-white leading-tight focus:outline-none focus:border-teal-600 dark:focus:border-teal-400 bg-transparent"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 dark:text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border border-teal-500 rounded w-full py-2 px-3 text-gray-800 dark:text-white leading-tight focus:outline-none focus:border-teal-600 dark:focus:border-teal-400 bg-transparent"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-800 dark:text-white text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border border-teal-500 rounded w-full py-2 px-3 text-gray-800 dark:text-white leading-tight focus:outline-none focus:border-teal-600 dark:focus:border-teal-400 bg-transparent"
                id="message"
                placeholder="Your Message"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="lg:w-3/4">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-gray-400 dark:bg-gray-800 p-2 rounded-full hover:bg-teal-500 hover:scale-110 transition-all duration-300 text-gray-800 dark:text-white cursor-pointer"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-gray-400 dark:bg-gray-800 p-2 rounded-full hover:bg-teal-500 hover:scale-110 transition-all duration-300 text-gray-800 dark:text-white cursor-pointer"
                size={36}
              />
              <span>{personalData.phone}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-gray-400 dark:bg-gray-800 p-2 rounded-full hover:bg-teal-500 hover:scale-110 transition-all duration-300 text-gray-800 dark:text-white cursor-pointer"
                size={36}
              />
              <span>{personalData.address}</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-gray-400 dark:bg-gray-800 p-3 rounded-full hover:bg-teal-500 hover:scale-110 transition-all duration-300 text-gray-800 dark:text-white cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-gray-400 dark:bg-gray-800 p-3 rounded-full hover:bg-teal-500 hover:scale-110 transition-all duration-300 text-gray-800 dark:text-white cursor-pointer"
                size={48}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
