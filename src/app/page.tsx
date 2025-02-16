import Image from "next/image";

export default function Home() {
  return (
    <div className="container py-8">
      <main className="space-y-16">
        {/* Header */}
        <div className="space-y-6">
          <Image
            src="/mesh-x.svg"
            alt="MeshX Logo"
            width={180}
            height={48}
            className="mb-4"
            priority
          />
          <h1 className="text-5xl font-bold text-gradient">
            MeshX Design System
          </h1>
          <p className="text-muted-foreground text-lg">
            Elegant, modern, and deeply immersive design language
          </p>
        </div>

        {/* Color Palette */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-primary">Color System</h2>
          
          {/* Primary Colors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-8">
              <h3 className="font-medium mb-2">Primary</h3>
              <div className="space-y-3">
                <div className="h-10 bg-primary rounded-md" />
                <p className="text-sm text-muted-foreground">Interactive elements and CTAs</p>
              </div>
            </div>
            <div className="card p-8">
              <h3 className="font-medium mb-2">Secondary</h3>
              <div className="space-y-3">
                <div className="h-10 bg-secondary rounded-md" />
                <p className="text-sm text-muted-foreground">Supporting elements</p>
              </div>
            </div>
            <div className="card p-8">
              <h3 className="font-medium mb-2">Accent</h3>
              <div className="space-y-3">
                <div className="h-10 bg-accent rounded-md" />
                <p className="text-sm text-muted-foreground">Highlights and emphasis</p>
              </div>
            </div>
          </div>

          {/* UI Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-8">
              <h3 className="font-medium mb-2">Background</h3>
              <div className="space-y-3">
                <div className="h-10 bg-background border border-muted rounded-md" />
                <p className="text-sm text-muted-foreground">Main background</p>
              </div>
            </div>
            <div className="card p-8">
              <h3 className="font-medium mb-2">Card</h3>
              <div className="space-y-3">
                <div className="h-10 bg-card border border-card-border rounded-md" />
                <p className="text-sm text-muted-foreground">Card backgrounds</p>
              </div>
            </div>
            <div className="card p-8">
              <h3 className="font-medium mb-2">Muted</h3>
              <div className="space-y-3">
                <div className="h-10 bg-muted rounded-md" />
                <p className="text-sm text-muted-foreground">Subtle elements</p>
              </div>
            </div>
          </div>
        </section>

        {/* Example Components */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-primary">Components</h2>
          <div className="space-y-6">
            {/* Buttons */}
            <div className="card p-8">
              <h3 className="font-medium mb-4">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="button">
                  Primary Button
                </button>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-4 py-2 rounded-lg transition-colors">
                  Secondary Button
                </button>
                <button className="text-accent hover:text-accent/90 transition-colors">
                  Text Button →
                </button>
              </div>
            </div>

            {/* Card Example */}
            <div className="card p-6 max-w-md">
              <h3 className="text-xl font-semibold mb-4">Feature Card</h3>
              <p className="text-muted-foreground mb-4">
                Example of how our colors create depth and visual hierarchy in components.
              </p>
              <div className="pt-4 border-t border-card-border">
                <button className="text-primary hover:text-primary-hover transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
