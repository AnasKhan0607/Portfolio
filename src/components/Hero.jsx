import Image from 'next/image';
import profile from '../../public/images/profile.png';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { RiContactsFill } from 'react-icons/ri';
import { MdDownload } from 'react-icons/md';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center justify-center p-10 min-h-screen ">
      {/* Left Side - Text */}
      <div className="text-center md:text-left">
        {/* Heading and Subheading */}
        <h3 className="text-1xl py-2 dark:text-white">
          HELLO THERE 👋🏽, I'M
        </h3>
        <h2 className="text-7xl py-2 text-teal-600 font-medium dark:text-teal-400">
          Anas Khan
        </h2>
        <h3 className="text-2xl py-2 dark:text-white">
          Software/DevOps Engineer
        </h3>
        {/* Description */}
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:mx-0">
          I’m a software engineer passionate about building scalable applications 
          and improving cloud infrastructure.
        </p>

        {/* Social Media Icons */}
        <div className="text-5xl flex justify-center md:justify-start gap-8 py-3 text-gray-600 dark:text-gray-400">
          <a 
            href="https://github.com/AnasKhan0607" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
          >
            <AiFillGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/anas-k/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
          >
            <AiFillLinkedin />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mt-8">
          <a 
            href="#contact" 
            className="flex items-center bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-500 dark:bg-teal-400 dark:hover:bg-teal-500 transition-colors duration-300"
          >
            <RiContactsFill className="mr-2" />
            Contact Me
          </a>
          <a 
            href="/Anas_Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-gray-600 text-white px-6 py-3 rounded-full hover:bg-gray-500 dark:bg-gray-400 dark:hover:bg-gray-500 transition-colors duration-300"
          >
            <MdDownload className="mr-2" />
            Resume
          </a>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="bg-gradient-to-b from-teal-500 rounded-full w-[31rem] h-[31rem] relative overflow-hidden">
          <Image
              src={profile}
              alt="profile"
              fill
              style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
