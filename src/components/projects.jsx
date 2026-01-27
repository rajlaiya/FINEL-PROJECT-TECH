import React, { useEffect, useMemo, useState } from 'react';

const PROJECT_STATS = [
  { label: 'Satisfied Clients', value: 200, suffix: '+' },
  { label: 'Projects Completed', value: 260, suffix: '+' },
  { label: 'Projects In Development', value: 15, suffix: '+' },
];

const Projects = () => {
  const stats = useMemo(() => PROJECT_STATS, []);

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 900; // ms
    const frame = 30; // ms per tick
    const steps = Math.ceil(duration / frame);
    const increments = stats.map((stat) => Math.max(1, Math.ceil(stat.value / steps)));
    let current = stats.map(() => 0);

    const id = setInterval(() => {
      current = current.map((val, idx) => Math.min(stats[idx].value, val + increments[idx]));
      setCounts(current);

      const done = current.every((val, idx) => val >= stats[idx].value);
      if (done) clearInterval(id);
    }, frame);

    return () => clearInterval(id);
  }, [stats]);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration, inventory management, and user authentication.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=E-Commerce+Platform",
      status: "Completed",
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      image: "https://via.placeholder.com/400x250/059669/FFFFFF?text=Task+Management",
      status: "In Progress",
      link: "#"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and budget tracking.",
      technologies: ["React Native", "Firebase", "TypeScript", "Plaid API"],
      image: "https://via.placeholder.com/400x250/DC2626/FFFFFF?text=Banking+App",
      status: "Completed",
      link: "#"
    },
    {
      id: 4,
      title: "AI-Powered Analytics Dashboard",
      description: "Business intelligence dashboard with machine learning insights, real-time data visualization, and predictive analytics.",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      image: "https://via.placeholder.com/400x250/7C3AED/FFFFFF?text=AI+Analytics",
      status: "Completed",
      link: "#"
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "A modern social networking platform with real-time messaging, content sharing, and community features.",
      technologies: ["Next.js", "GraphQL", "Redis", "AWS"],
      image: "https://via.placeholder.com/400x250/EA580C/FFFFFF?text=Social+Platform",
      status: "Planning",
      link: "#"
    },
    {
      id: 6,
      title: "IoT Smart Home System",
      description: "Comprehensive smart home automation system with device control, energy monitoring, and security features.",
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "React"],
      image: "https://via.placeholder.com/400x250/0891B2/FFFFFF?text=Smart+Home",
      status: "In Progress",
      link: "#"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Planning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950/70 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-200 text-xs font-semibold uppercase tracking-wide">
            Demo showcase
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Our Projects (Demo)
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            These examples are demo projects to illustrate our capabilities across industries and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/85 dark:bg-slate-900/70 border border-white/60 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-black/30 backdrop-blur p-6 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-300">
                {counts[idx].toLocaleString()}
                {stat.suffix}
              </div>
              <div className="mt-2 text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white dark:bg-slate-900/80 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-14 px-6 flex items-center justify-between bg-gradient-to-r from-blue-500/15 via-purple-500/10 to-blue-500/15 dark:from-slate-800 dark:via-slate-900 dark:to-slate-900">
                <div className="inline-flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/80 dark:bg-white/10 border border-white/70 dark:border-white/10 grid place-content-center text-blue-600 dark:text-blue-300 font-semibold">
                    {project.title.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Demo project</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 font-medium transition-colors duration-200"
                >
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in starting a project with us?
          </p>
          <a 
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
