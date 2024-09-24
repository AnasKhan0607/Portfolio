const Experience = () => {
    const experiences = [
      {
        role: 'Software Engineer',
        company: 'Ecobee',
        duration: 'Sep 2023 - May 2024',
        description: 'Migrated 70,000 devices from Google IoT Core to an internal IoT service.',
      },
      {
        role: 'QA Embedded Engineer',
        company: 'Ecobee',
        duration: 'May 2023 - Aug 2023',
        description: 'Developed AVS test automation using Python and Selenium.',
      },
      {
        role: 'Site Reliability Engineer',
        company: 'Ecobee',
        duration: 'May 2022 - Apr 2023',
        description: 'Migrated workloads from Flux to ArgoCD, improving deployment automation.',
      },
    ];
  
    return (
      <section id="experience" className="py-10">
        <h3 className="text-3xl py-1">Experience</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg dark:bg-gray-800">
              <h4 className="text-xl font-semibold">{experience.role}</h4>
              <p className="text-teal-500">{experience.company}</p>
              <p>{experience.duration}</p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Experience;
  