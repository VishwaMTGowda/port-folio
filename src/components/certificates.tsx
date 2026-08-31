import { ArrowUpRight} from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "Continuous Integration and Continuous Delivery (CI/CD)",
      organization: "IBM",
      icon: 
       <img src='src/assets/ibm.png'alt="React Logo" width="80" height="80" />,
      year: "2024",
      verifyLink: "https://www.coursera.org/verify/LCWHIF0TL9JX",
    },
    {
      title: "Hands-on Introduction to Linux Commands and Shell Scripting",
      organization: "IBM",
      icon:       
       <img src='src\assets\ibm.png'alt="React Logo" width="80" height="80" />,
      year: "2024",
      verifyLink: "https://www.coursera.org/verify/Y6OR1QRKZH17",
    },
    {
      title: "Professional DevOps",
      organization: "Infosys Springboard",
      icon: <img src='src/assets/infosys2.png'alt="React Logo" width="180" height="120" />,
      year: "2025",
      verifyLink: "https://verify.onwingspan.com/",
    },
    {
      title: "SAP Technical	Consulting	Job	Simulation",
      organization: "Forage",
      icon: <img src='src\assets\forage.png' alt="React Logo" width="50" height="50" />,
      // verifyLink:""
    },
  
    {
      title: " Introduction to Terraform",
      organization: "Infosys Springboard",
      icon: <img src='src\assets\infosys2.png'alt="React Logo" width="180" height="120" />,
      year: "2025",
      verifyLink: "https://verify.onwingspan.com/",
    },
    {
      title: "React Basics",
      organization: "Meta",
      icon: <img src='src\assets\meta.png'alt="React Logo" width="80" height="80" />,
      year: "2023",
      verifyLink: "https://www.coursera.org/verify/P9KL2E958A3H",
    }
      // {
    //   title: "Linux Commands & Shell Scripting Essentials V2",
    //   organization: "Coursera",
    //   icon: <img src='src\assets\coursera.png' alt="React Logo" width="100" height="100" />,
    //   verifyLink:"https://www.credly.com/badges/1383c46c-62f0-42f9-89c9-ce33720ff4cd/linked_in_profile"
    // },
    

  ]

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4" id='Certificates'>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Professional Certifications</h1>
          <p className="text-gray-400">Validated expertise in DevOps technologies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1E1E1E] rounded-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              <div className="text-[#4B8BF5] mb-4">
                {cert.icon}
              </div>
              <h2 className="text-xl font-bold mb-2">{cert.title}</h2>
              <p className="text-gray-400 text-sm mb-4">{cert.organization}</p>
              <div className="flex items-center gap-2 text-sm text-[#4B8BF5] mb-4">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Issued: {cert.year}
              </div>
              <a
                href={cert.verifyLink}
                className="text-[#4B8BF5] hover:text-[#3B7BE5] flex items-center gap-1 text-sm"
              >
                Verify Certificate
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

