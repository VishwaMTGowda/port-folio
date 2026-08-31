import { Globe, Cloud, GitBranch, Code,  Ship, GitFork } from 'lucide-react'
import ToolCard from './tool-card'

export default function ToolsSection() {
  const toolsData = [
    {
      title: 'Web Development',
      icon: <Globe className="w-full h-full" />,
      tools: ['Frontend Development', 'React', 'Responsive Web']
    },
    {
      title: 'Cloud Services',
      icon: <Cloud className="w-full h-full" />,
      tools: ['AWS', 'Azure']
    },
    {
      title: 'CI/CD Pipeline',
      icon: <GitBranch className="w-full h-full" />,
      tools: ['Jenkins', 'Continues Testing', 'Building Service']
    },
    {
      title: 'Infrastructure as Code',
      icon: <Code className="w-full h-full" />,
      tools: ['Terraform', 'Ansible', 'Infrastructure scaling']
    },
    {
      title: 'Containerization',
      icon: <Ship className="w-full h-full" />,
      tools: ['Docker', 'Kubernetes', 'Container Orchestration']
    },
    {
      title: 'Version Control',
      icon: <GitFork className="w-full h-full" />,
      tools: ['Git', 'GitHub', 'GitLab']
    }
  ]

  return (
    <section className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            DevOps Tools & Technologies
          </h2>
          <p className="text-gray-400 text-lg">
            Proficient in modern DevOps tools and practices
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsData.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              icon={tool.icon}
              tools={tool.tools}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

