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
    <section className="container py-24">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Agent Mesh Network
        </h2>
        <p className="max-w-[900px] text-muted-foreground">
          Our revolutionary mesh network of specialized agents work together, share knowledge, 
          and evolve collectively to solve complex problems.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <Badge 
                  variant={feature.type === "core" ? "default" : "secondary"}
                  className="capitalize"
                >
                  {feature.type}
                </Badge>
              </div>
              <CardDescription>{feature.description}</CardDescription>
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
    </section>
  )
}
