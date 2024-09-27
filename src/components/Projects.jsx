// @flow strict
import * as React from 'react';
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ project }) {

  return (
    <div className="relative rounded-lg border bg-gradient-to-r dark:from-[#0d1224] dark:to-[#262626] from-[#262626] to-[#525252] border-[#16f2b3] transition-transform duration-500 hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:border-2 before:border-pink-500 before:scale-x-0 before:origin-right before:transition-transform before:duration-500 hover:before:scale-x-100 hover:before:origin-left overflow-hidden">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}</span>
                  {
                    project.tools.length - 1 !== i &&
                    <span className="text-gray-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">date:</span>
            <span className="text-orange-400">{project.date}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div><span className="text-gray-400">{`};`}</span></div>
        </code>
      </div>
      {project.github && (
        <div className="flex justify-center py-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center bg-teal-600 dark:bg-[#16f2b3] hover:bg-[#13e0a8] dark:hover:bg-[#13e0a8] text-white font-bold py-2 px-4 rounded-full"
          >
            <FaGithub className="mr-2" /> View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      name: 'YouTube Learning Mode AI',
      date: 'August 2024 - Present',
      description: "Developed an AI-powered platform that transforms YouTube videos into an interactive, question-answering tool using OpenAI GPT-4 API for context-based responses from video transcripts",
      tools: ['Go', 'Python', 'Redis', 'OpenAI API', 'Docker', 'Kubernetes', 'GCP', 'Jenkins'],
      github: 'https://github.com/AnasKhan0607/Youtube-Learning-Mode'
    },
    {
      id: 2,
      name: 'BizReach Marketplace',
      date: 'May 2023 - August 2023',
      description: 'Led a team to develop a scalable marketplace application, utilizing Firebase for real-time database, authentication, and image storage, with an Express.js and Node.js backend, and a React.js frontend',
      tools: ['Firebase', 'Express.js', 'React', 'Node.js', 'Docker', 'GKE'],
      github: 'https://github.com/AnasKhan0607/Bizreach'
    },
    {
      id: 3,
      name: 'Home Lab',
      date: 'October 2023 - Present',
      description: 'Built a K3s cluster across 4 Raspberry Pis, deploying various applications and services with a microservices architecture and advanced monitoring using Prometheus and Grafana',
      tools: ['K3s', 'Raspberry Pi', 'Grafana', 'Prometheus', 'Docker', 'Microservices', 'Ansible', 'ArgoCD'],
      github: 'https://github.com/AnasKhan0607/raspberry-pi-k3s-cluster'
    },
    {
      id: 4,
      name: 'Visual Novel Game Editor',
      date: '2023',
      description: "A game editor for creating visual novel games, organized into User, Game, and Template branches, each handling different aspects of the game creation process",
      tools: ['Java', 'MySQL', 'JDBC', 'JavaFX'],
      github: 'https://github.com/AnasKhan0607/UofT-CSC207-Summer-2021-Group-Project-group_0059'
    },
    {
      id: 5,
      name: 'RoboRunner',
      date: '2022',
      description: 'A short platformer game created with Pygame, focusing on object-oriented programming principles',
      tools: ['Pygame', 'Python', 'OOP'],
      github: 'https://github.com/AnasKhan0607/RoboRunner'
    },
    {
      id: 6,
      name: 'RestorEase',
      date: '2022',
      description: 'A MERN project aimed at enhancing the experience of booking services at barbershops',
      tools: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      github: 'https://github.com/AnasKhan0607/RestorEase'
    }
  ];



  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-teal-600 dark:bg-teal-700 absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[1px] bg-teal-600 dark:bg-teal-400"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 6).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
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