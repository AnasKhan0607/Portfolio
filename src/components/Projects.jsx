import Image from 'next/image';

const Projects = () => {
  const projects = [
    { title: 'BizReach Marketplace', img: '/images/project1.png' },
    { title: 'Home Lab K3s Cluster', img: '/images/project2.png' },
    { title: 'Personal Portfolio', img: '/images/project3.png' },
  ];

  return (
    <section id="projects" className="py-10">
      <h3 className="text-3xl py-1">Projects</h3>
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <Image src={project.img} layout="responsive" width={700} height={475} alt={project.title} />
            <h4 className="text-xl font-semibold mt-2">{project.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
