export default function Home() {
  return (
    <div className="min-h-screen bg-navy text-white p-8">
      <main className="max-w-4xl mx-auto">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gradient">
              MeshX Design System
            </h1>
            <p className="text-gray text-lg">
              Elegant, modern, and deeply immersive design language
            </p>
          </div>

          {/* Color Palette */}
          <section className="space-y-8">
            <h2 className="text-3xl font-semibold text-purple-bright">Color Palette</h2>
            
            {/* Primary Colors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-deep p-8 rounded-xl shadow-lg">
                <h3 className="font-medium mb-2 text-purple-light">Deep Purple</h3>
                <p className="text-sm text-purple-bright">#1E1E3F</p>
                <p className="mt-4 text-sm text-gray/80">Primary backgrounds and elements</p>
              </div>
              <div className="bg-purple-bright p-8 rounded-xl shadow-lg">
                <h3 className="font-medium mb-2">Bright Purple</h3>
                <p className="text-sm text-purple-deep">#8A7CFF</p>
                <p className="mt-4 text-sm text-purple-deep/80">Highlights and CTAs</p>
              </div>
              <div className="bg-purple-light p-8 rounded-xl shadow-lg">
                <h3 className="font-medium mb-2 text-purple-deep">Light Lavender</h3>
                <p className="text-sm text-purple-deep">#E6E1FF</p>
                <p className="mt-4 text-sm text-purple-deep/80">Subtle accents and hovers</p>
              </div>
            </div>

            {/* Secondary Colors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-navy border border-purple-deep/20 p-8 rounded-xl shadow-lg">
                <h3 className="font-medium mb-2 text-purple-light">Dark Navy</h3>
                <p className="text-sm text-purple-bright">#0D0D1F</p>
                <p className="mt-4 text-sm text-gray/80">Deep backgrounds and contrast</p>
              </div>
              <div className="bg-gray p-8 rounded-xl shadow-lg">
                <h3 className="font-medium mb-2 text-purple-deep">Cool Gray</h3>
                <p className="text-sm text-purple-deep">#F5F5F8</p>
                <p className="mt-4 text-sm text-purple-deep/80">Text and UI elements</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-medium mb-2 text-purple-deep">White</h3>
                <p className="text-sm text-purple-deep">#FFFFFF</p>
                <p className="mt-4 text-sm text-purple-deep/80">High-contrast elements</p>
              </div>
            </div>
          </section>

          {/* Example Components */}
          <section className="space-y-8">
            <h2 className="text-3xl font-semibold text-purple-bright">Component Examples</h2>
            <div className="flex flex-wrap gap-4">
              {/* Primary Button */}
              <button className="bg-purple-bright px-8 py-3 rounded-lg hover:bg-purple-light hover:text-purple-deep transition-all duration-200">
                Primary Action
              </button>
              {/* Secondary Button */}
              <button className="bg-purple-deep px-8 py-3 rounded-lg hover:bg-purple-bright transition-all duration-200">
                Secondary Action
              </button>
              {/* Text Button */}
              <button className="text-purple-light hover:text-purple-bright transition-colors duration-200">
                Text Action →
              </button>
            </div>

            {/* Card Example */}
            <div className="bg-purple-deep p-6 rounded-xl shadow-lg space-y-4 max-w-md">
              <h3 className="text-xl font-semibold text-purple-light">Feature Card</h3>
              <p className="text-gray/90">
                Example of how our colors can be used in a card component with proper contrast and visual hierarchy.
              </p>
              <div className="pt-4 border-t border-purple-bright/20">
                <button className="text-purple-bright hover:text-purple-light transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
