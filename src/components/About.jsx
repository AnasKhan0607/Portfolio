const About = () => {
    return (
      <section id="about" className="text-center py-10">

        <div className="w-[100px] h-[100px] bg-teal-600 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

        <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-teal-600 to-transparent  w-full" />
        </div>
        </div>

        <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
            <span className="w-24 h-[2px] bg-teal-600"></span>
            <span className="bg-teal-600 w-fit text-white p-2 px-5 text-xl rounded-md">
            About Me
            </span>
            <span className="w-24 h-[2px] bg-teal-600"></span>
        </div>
        </div>
        <h3 className="text-3xl py-1">About Me</h3>
        <p className="text-md py-2 leading-8 max-w-xl mx-auto">
          I am currently pursuing a double major in Computer Science & CCIT at the University of Toronto. I am highly skilled in software engineering and cloud infrastructure, and I’m always looking to work on impactful projects.
        </p>
      </section>
    );
  };
  
  export default About;
  