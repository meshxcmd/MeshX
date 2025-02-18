import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Cognitive Agents",
    description: "Pattern recognition and decision support agents that learn and adapt.",
    capabilities: ["Pattern Recognition", "Decision Support", "Adaptive Learning"],
    type: "core"
  },
  {
    title: "Knowledge Agents",
    description: "Information synthesis and research agents that build collective intelligence.",
    capabilities: ["Data Synthesis", "Research Automation", "Knowledge Graphs"],
    type: "core"
  },
  {
    title: "Interface Agents",
    description: "Human interaction and feedback processing for seamless collaboration.",
    capabilities: ["Human Interaction", "Feedback Processing", "Adaptive UI"],
    type: "core"
  },
  {
    title: "Evolution Agents",
    description: "Capability improvement and adaptation agents that optimize the network.",
    capabilities: ["Self-Improvement", "Network Optimization", "Skill Transfer"],
    type: "advanced"
  }
]

export function Features() {
  return (
    <section className="relative py-20 bg-background/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Agent Mesh Network
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl">
            Our revolutionary mesh network of specialized agents work together, share knowledge, 
            and evolve collectively to solve complex problems.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  <Badge 
                    variant={feature.type === "core" ? "default" : "secondary"}
                    className="capitalize"
                  >
                    {feature.type}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {feature.capabilities.map((capability) => (
                    <Badge 
                      key={capability} 
                      variant="outline"
                      className="bg-background/50"
                    >
                      {capability}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
