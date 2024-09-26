import Image from 'next/image';
import profile from '../../public/images/profile.png';

import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center justify-center p-10 min-h-screen ">
      {/* Left Side - Text */}
      <div className="text-center md:text-left">
        {/* Heading and Subheading */}
        <h3 className="text-1xl py-2 dark:text-white">
          HELLO THERE 👋🏽, IM
        </h3>
        <h2 className="text-7xl py-2 text-teal-600 font-medium dark:text-teal-400">
          Anas Khan
        </h2>
        <h3 className="text-2xl py-2 dark:text-white">
          Software Engineer
        </h3>
        {/* Description */}
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:mx-0">
          I’m a software engineer passionate about building scalable applications 
          and improving cloud infrastructure.
        </p>

        {/* Social Media Icons */}
        <div className="text-5xl flex justify-center md:justify-start gap-8 py-3 text-gray-600 dark:text-gray-400">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
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
