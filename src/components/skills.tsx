import { Server, ShieldAlert, Cloud, Code, FileTerminal, ShieldMinus, Terminal, RadioTower , ArrowDownUp } from 'lucide-react';


export default function TechnicalSkills() {
    // const skills = [
    //   { name: "Container Orchestration", percentage: 85 },
    //   { name: "Cloud Infrastructure", percentage: 80 },
    //   { name: "CI/CD Implementation", percentage: 75 },
    //   { name: "Infrastructure as Code", percentage: 70 },
    //   { name: "Monitoring & Logging", percentage: 75 },
    //   { name: "Shell Scripting", percentage: 80 },
    // ];
  
    const categories = [

      {
        name:"Cloud",
        icon: (
          <Cloud />
        )
      },
      {
        name: "Server Management",
        icon: (
          <Server />
        ),
      },
      {
        name: "Security",
        icon: (
          <ShieldAlert />
        ),
      },
      {
        name: "Networking",
        icon: (
          <RadioTower />
        ),
      },
      {
        name:"Infrastructure as Code",
        icon: (
          <Code/>
        ),

      },
      {
        name: "Source code management",
        icon: (
          <ShieldAlert />
        ),
      },
      {
        name:"Python Shell Scripting ",
        icon: (
         
          <FileTerminal />
        ),
      },
      {
        name:"application portability",
        icon: (
          <ShieldMinus />
        ),

      },
      {
        name:"Linux Commands",
        icon:(
          <Terminal/>
        ),

      },
      {
        name: "React",
        icon: (
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 600"
          width="40"
          height="40"
          fill="none"
          stroke="#4b8bf5"
          strokeWidth="20"
        
        >
          <circle cx="300" cy="300" r="50" fill="#4b8bf5" />
          <ellipse cx="300" cy="300" rx="200" ry="100" />
          <ellipse cx="300" cy="300" rx="200" ry="100" transform="rotate(60,300,300)" />
          <ellipse cx="300" cy="300" rx="200" ry="100" transform="rotate(-60,300,300)" />
        </svg>
        

        
        ),
      },
      {
        name: "Troubleshooting",
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"></path>
            <path d="M12 16.5V17M12 7V14"></path>
          </svg>
        ),
      },
      {
        name: "Network automation",
        icon: (
          <ArrowDownUp />
        ),
      },
      {
        name: "Workflow automation",
        icon: (
          <img src='src/assets/workflow.png' width="25" height="25" />

        ),
      },
      {
        name: "Orchestration",
        icon: (
<img src='src/assets/orchestration.png' width="25" height="25" />
        ),
      },
      {
        name: "pods/ clusters",
        icon: (
          <img src='src/assets/pods.png' width="25" height="25" />
                  ),
      },
      {
        name:"Application deployment",
        icon: (
          
          <img src='src/assets/deployment.png' width="25" height="25" />

        ),
      }
    ];
  
    return (
      <div className="min-h-screen bg-black py-16 px-4" id='Skills'>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-gray-400 text-lg">Core competencies and expertise levels</p>
          </div>
  
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-[#4B8BF5]">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#4B8BF5] rounded-full transition-all duration-500"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div> */}
  
          <div className="grid grid-cols-4 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-zinc-900 rounded-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
              >
                <div className="text-[#4B8BF5] mb-4">{category.icon}</div>
                <h3 className="text-white text-sm font-medium">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  