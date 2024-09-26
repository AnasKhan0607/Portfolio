// src/components/Experience.jsx
const Experience = () => {
    return (
      <section id="experience" className="p-10">
        <h3 className="text-3xl py-1">Experience</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title">Software Engineer - Ecobee</h2>
              <p>September 2023 - May 2024</p>
              <p>
                Lead migration of 70,000 devices from Google IOT Core to an internal IoT service,
                maintaining 99% uptime and ensuring service health.
              </p>
            </div>
          </div>
          {/* Add more cards for other experience items */}
        </div>
      </section>
    );
  };
  
  export default Experience;
  