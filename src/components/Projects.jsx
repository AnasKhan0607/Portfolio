import Image from 'next/image';

// Project Data
const projectsData = [
  {
    name: 'YouTube Learning Mode AI Service',
    description: 'An interactive learning platform that transforms YouTube videos into an AI-powered question-answering tool.',
    tools: ['Go', 'Python', 'Redis', 'OpenAI API', 'Docker', 'Kubernetes', 'GCP'],
    role: 'Full-Stack Developer'
  },
  {
    name: 'Full-Stack Web Application with MERN',
    description: 'A full-stack web app built using MERN stack and deployed on Kubernetes.',
    tools: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Docker', 'Kubernetes'],
    role: 'Lead Developer'
  },
  {
    name: 'Raspberry Pi K3s Cluster Setup',
    description: 'Set up a Kubernetes cluster using Raspberry Pi to learn container orchestration on a small-scale cloud infrastructure.',
    tools: ['K3s', 'Kubernetes', 'Raspberry Pi', 'Go', 'Python'],
    role: 'DevOps Engineer'
  },
  {
    name: 'Client-Server File Sharing App',
    description: 'A simple client-server file sharing application built in Go with gRPC for efficient communication between microservices.',
    tools: ['Go', 'gRPC', 'Docker'],
    role: 'Backend Developer'
  }
];

// ProjectCard Component
const ProjectCard = ({ project }) => {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full mb-8">
      {/* Decorative Gradients */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      {/* Project Details */}
      <div className="px-4 lg:px-8 py-3 lg:py-5">
        <h3 className="text-center text-[#16f2b3] text-lg lg:text-xl font-bold">
          {project.name}
        </h3>
        <p className="text-gray-300 text-sm lg:text-base text-center my-3">
          {project.description}
        </p>
      </div>
      {/* Tools and Role */}
      <div className="px-4 lg:px-8 py-2">
        <p className="text-gray-300 text-xs lg:text-sm">
          <strong>Tools:</strong> {project.tools.join(", ")}
        </p>
        <p className="text-gray-300 text-xs lg:text-sm">
          <strong>Role:</strong> {project.role}
        </p>
      </div>
    </div>
  );
};

// Projects Section
const Projects = () => {
  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      {/* Section Heading */}
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-teal-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Project Cards */}
      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
