import React, { useState } from 'react';

const Internship = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const internshipPositions = [
    {
      id: 1,
      title: "Frontend Development Intern",
      department: "Engineering",
      duration: "3-6 months",
      location: "Remote / On-site",
      type: "Paid Internship",
      description: "Work with our development team to create amazing user interfaces using React, JavaScript, and modern web technologies.",
      requirements: [
        "Currently pursuing Computer Science or related degree",
        "Basic knowledge of HTML, CSS, JavaScript",
        "Familiarity with React or other frontend frameworks",
        "Strong problem-solving skills",
        "Good communication skills"
      ],
      responsibilities: [
        "Develop responsive web components",
        "Collaborate with design team on UI/UX implementation",
        "Write clean, maintainable code",
        "Participate in code reviews",
        "Learn modern development tools and practices"
      ],
      skills: ["React", "JavaScript", "HTML/CSS", "Git", "Responsive Design"]
    },
    {
      id: 2,
      title: "Backend Development Intern",
      department: "Engineering",
      duration: "3-6 months",
      location: "Remote / On-site",
      type: "Paid Internship",
      description: "Join our backend team to build scalable APIs and services using Node.js, databases, and cloud technologies.",
      requirements: [
        "Computer Science or related field student",
        "Knowledge of programming languages (JavaScript, Python, or Java)",
        "Understanding of databases and APIs",
        "Familiarity with version control (Git)",
        "Eager to learn and grow"
      ],
      responsibilities: [
        "Develop and maintain REST APIs",
        "Work with databases and data modeling",
        "Implement security best practices",
        "Debug and troubleshoot issues",
        "Document code and processes"
      ],
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "API Development"]
    },
    {
      id: 3,
      title: "UI/UX Design Intern",
      department: "Design",
      duration: "3-4 months",
      location: "Hybrid",
      type: "Paid Internship",
      description: "Create beautiful and intuitive user experiences for our web and mobile applications.",
      requirements: [
        "Design, HCI, or related field student",
        "Portfolio demonstrating design skills",
        "Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)",
        "Understanding of user-centered design principles",
        "Strong visual design skills"
      ],
      responsibilities: [
        "Create wireframes and mockups",
        "Design user interfaces for web and mobile",
        "Conduct user research and usability testing",
        "Collaborate with development team",
        "Maintain design systems and guidelines"
      ],
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems"]
    },
    {
      id: 4,
      title: "Digital Marketing Intern",
      department: "Marketing",
      duration: "3-6 months",
      location: "Remote",
      type: "Paid Internship",
      description: "Help grow our brand through social media, content creation, and digital marketing campaigns.",
      requirements: [
        "Marketing, Communications, or related field",
        "Understanding of social media platforms",
        "Basic knowledge of digital marketing concepts",
        "Creative writing and content creation skills",
        "Analytical mindset"
      ],
      responsibilities: [
        "Create social media content and campaigns",
        "Analyze marketing metrics and performance",
        "Assist with email marketing campaigns",
        "Research industry trends and competitors",
        "Support SEO and content marketing efforts"
      ],
      skills: ["Social Media Marketing", "Content Creation", "Google Analytics", "SEO", "Email Marketing"]
    },
    {
      id: 5,
      title: "Data Science Intern",
      department: "Analytics",
      duration: "4-6 months",
      location: "On-site",
      type: "Paid Internship",
      description: "Work with our data team to analyze user behavior, create insights, and build predictive models.",
      requirements: [
        "Data Science, Statistics, or related field",
        "Programming experience in Python or R",
        "Understanding of statistics and machine learning",
        "Experience with data visualization tools",
        "Strong analytical thinking"
      ],
      responsibilities: [
        "Analyze large datasets for business insights",
        "Create data visualizations and dashboards",
        "Build and test machine learning models",
        "Present findings to stakeholders",
        "Collaborate with product and engineering teams"
      ],
      skills: ["Python", "R", "SQL", "Machine Learning", "Data Visualization"]
    },
    {
      id: 6,
      title: "Product Management Intern",
      department: "Product",
      duration: "4-6 months",
      location: "Hybrid",
      type: "Paid Internship",
      description: "Learn product management by working closely with our product team on feature development and user research.",
      requirements: [
        "Business, Computer Science, or related field",
        "Strong analytical and communication skills",
        "Interest in technology and user experience",
        "Ability to work with cross-functional teams",
        "Problem-solving mindset"
      ],
      responsibilities: [
        "Assist in product roadmap planning",
        "Conduct user interviews and surveys",
        "Analyze product metrics and user feedback",
        "Work with design and engineering teams",
        "Help define product requirements"
      ],
      skills: ["Product Strategy", "User Research", "Data Analysis", "Project Management", "Agile Methodology"]
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Stipend",
      description: "Receive fair compensation for your valuable contributions"
    },
    {
      icon: "👥",
      title: "Mentorship Program",
      description: "Work directly with experienced professionals in your field"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Access to courses, workshops, and professional development resources"
    },
    {
      icon: "🏢",
      title: "Real Project Experience",
      description: "Work on actual projects that impact our products and users"
    },
    {
      icon: "🌟",
      title: "Career Opportunities",
      description: "Potential for full-time offers based on performance"
    },
    {
      icon: "🎯",
      title: "Flexible Schedule",
      description: "Balance your internship with academic requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-2 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Internship Program
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Launch your career with hands-on experience at WebCart
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join our dynamic team and gain valuable industry experience while working on exciting projects 
            that shape the future of e-commerce and web development.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Intern with Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internship Positions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Available Positions
          </h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {internshipPositions.map((position) => (
              <div key={position.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{position.title}</h3>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {position.type}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m11 0a2 2 0 01-2 2H7a2 2 0 01-2-2m2-4h12a2 2 0 002-2v-1a2 2 0 00-2-2H7a2 2 0 00-2 2v1a2 2 0 002 2z" />
                      </svg>
                      {position.department}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {position.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {position.location}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{position.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {position.skills.slice(0, 3).map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                      {position.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          +{position.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedPosition(selectedPosition === position.id ? null : position.id)}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-2"
                  >
                    {selectedPosition === position.id ? 'Hide Details' : 'View Details'}
                  </button>

                  {selectedPosition === position.id && (
                    <div className="mt-4 space-y-4 border-t pt-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Responsibilities:</h4>
                        <ul className="space-y-1">
                          {position.responsibilities.map((resp, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start">
                              <span className="w-2 h-2 bg-green-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Application Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Submit Application</h3>
              <p className="text-sm text-gray-600">Complete our online application form with your resume and cover letter</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Initial Review</h3>
              <p className="text-sm text-gray-600">Our team reviews your application and portfolio within 1-2 weeks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Interview Round</h3>
              <p className="text-sm text-gray-600">Virtual or in-person interview with hiring manager and team members</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Decision & Onboarding</h3>
              <p className="text-sm text-gray-600">Final decision communicated within a week, followed by onboarding</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="mb-6 text-blue-100">
            Don't see a position that fits? We're always looking for talented individuals. 
            Send us your resume and tell us about your interests!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
