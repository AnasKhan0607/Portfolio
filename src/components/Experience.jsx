import { useState } from "react";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Ecobee - co-op",
      duration: "September 2023 - May 2024",
      techStack: "Golang, Typescript, Next.js, GraphQL, GCP, PubSub, CircleCI",
      details: [
        "Lead migration of 70,000 devices from Google IOT Core to an internal IOT service, maintaining a 99% uptime and ensuring the service's health.",
        "Refined Ecobee’s Subscriptions portal web application for new feature releases using Typescript and Next.js.",
        "Actively participated in incident response and mitigation, working through debugging services using logs and metrics to provide and implement solutions.",
        "Implemented Dead Letter Queue for the backend’s PubSub event-driven architecture to allow for messages between services to be addressed appropriately, increasing reliability of services."
      ]
    },
    {
      id: 2,
      title: "QA Embedded Engineer",
      company: "Ecobee - co-op",
      duration: "May 2023 - August 2023",
      techStack: "Python, Selenium, Jenkins",
      details: [
        "Developed and enhanced AVS test automation utilizing Python and Selenium WebDriver, increasing reliability and coverage of Alexa voice service functionalities, reducing manual testing time by 50%.",
        "Implemented Apache Guacamole (VNC Webclient) for simulator testing in a Kubernetes cluster, enhancing resource efficiency and providing unified access to multiple simulators.",
        "Developed a dynamic configuration mechanism to automatically establish connections to new simulators, reducing manual setup time by 30%.",
        "Executed regression and smoke tests for new firmware releases, ensuring stability and performance, and validating deliverables met quality standards before deployment."
      ]
    },
    {
      id: 3,
      title: "Site Reliability Engineer",
      company: "Ecobee - co-op",
      duration: "May 2022 - April 2023",
      techStack: "Kubernetes, Terraform, GCP, GKE, ArgoCD, Grafana, Prometheus",
      details: [
        "Successfully migrated all workloads from Flux to ArgoCD, including setting up self-managing Argo using the apps-to-apps pattern, improving deployment automation and scalability across tenants.",
        "Deployed and maintained ArgoCD Bot to automate ArgoCD changes via GitHub PRs, streamlining deployments and improving auditability.",
        "Implemented GitHub Actions to automate PR approvals based on PagerDuty incidents.",
        "Migrated tenant services into GKE cluster by developing Helm charts encapsulating Deployments, Services, and Ingress configurations, reducing infrastructure costs.",
        "Maintained and updated Terraform configurations, ensuring optimal infrastructure provisioning and scalability on GCP."
      ]
    }
  ];

  const handleExperienceClick = (id) => {
    setSelectedExperience(selectedExperience === id ? null : id);
  };

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Section Heading */}
      <div className="w-[100px] h-[100px] bg-teal-600 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-teal-600 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-teal-600"></span>
          <span className="bg-teal-600 w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-teal-600"></span>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-8">
        {/* Left Column: GIF */}
        <div className="flex justify-center items-center">
          <Image 
            src="/experience.gif" 
            alt="Experience GIF" 
            width={500} 
            height={500} 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column: Experience Cards */}
        <div className="flex flex-col gap-6">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="cursor-pointer relative rounded-lg border bg-gradient-to-r dark:from-[#0d1224] dark:to-[#262626] from-[#262626] to-[#525252] border-[#16f2b3] transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:border-pink-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:border-2 before:border-pink-500 before:scale-x-0 before:origin-right before:transition-transform before:duration-500 hover:before:scale-x-100 hover:before:origin-left overflow-hidden"
              onClick={() => handleExperienceClick(experience.id)}
            >
              <div className="relative z-10 flex items-center gap-4 p-10">
                <BsPersonWorkspace size={50} className="text-teal-400" />
                <div>
                  <h3 className="text-lg font-bold text-white">{experience.title}</h3>
                  <p className="text-m text-white">{experience.company}</p>
                  <p className="text-s text-teal-200">{experience.duration}</p>
                  <p className="text-s text-teal-100">Tech Stack: {experience.techStack}</p>
                </div>
              </div>

              {/* Expandable Details */}
              {selectedExperience === experience.id && (
                <div className="mt-4 border-t-[2px] border-indigo-900 p-4 bg-teal-700 rounded-lg shadow-inner">
                  <ul className="list-disc ml-6">
                    {experience.details.map((detail, index) => (
                      <li key={index} className="text-sm text-white">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
