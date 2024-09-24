import Image from 'next/image';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const Hero = () => {
  return (
    <section id="hero" className="text-center p-10 min-h-screen">
      <h2 className="text-5xl py-2 text-teal-600 font-medium">Anas Khan</h2>
      <h3 className="text-2xl py-2">Software Engineer</h3>
      <p className="text-md py-5 leading-8 max-w-xl mx-auto">
        I’m a software engineer passionate about building scalable applications and improving cloud infrastructure.
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20">
        <Image src="/images/profile.png" layout="fill" objectFit="cover" alt="profile" />
      </div>
    </section>
  );
};

export default Hero;
