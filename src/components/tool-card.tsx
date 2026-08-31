import { Check } from 'lucide-react'

interface ToolCardProps {
  title: string
  icon: React.ReactNode
  tools: string[]
}

export default function ToolCard({ title, icon, tools }: ToolCardProps) {
  return (
    <div className="bg-zinc-900 rounded-lg p-6 transition-transform duration-300 hover:scale-105">
      <div className="text-[#4B8BF5] w-12 h-12 mb-4">
        {icon}
      </div>
      <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {tools.map((tool, index) => (
          <li key={index} className="flex items-center text-gray-400">
            <Check className="w-4 h-4 text-[#4B8BF5] mr-2" />
            {tool}
          </li>
        ))}
      </ul>
    </div>
  )
}

