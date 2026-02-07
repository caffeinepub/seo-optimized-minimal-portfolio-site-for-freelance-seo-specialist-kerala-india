import { CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  const principles = [
    'No guaranteed rankings or unrealistic promises',
    'Transparent reporting and clear communication',
    'Focus on sustainable, long-term results',
    'Data-driven decisions backed by analytics',
    'Continuous learning and adaptation to algorithm changes'
  ];

  const tools = [
    'Google Search Console',
    'Google Analytics',
    'Screaming Frog',
    'Ahrefs / SEMrush',
    'PageSpeed Insights',
    'Schema Markup Tools'
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            About My Approach
          </h2>
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              I'm a <strong>Freelance SEO Specialist based in Kerala, India</strong>, focused on helping businesses improve their organic search visibility through honest, execution-focused strategies.
            </p>
            <p>
              My approach is straightforward: understand your business goals, audit your current state, identify opportunities, and implement changes that move the needle. No hype, no shortcuts—just solid SEO work.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Working Principles</h3>
            <ul className="space-y-3">
              {principles.map((principle) => (
                <li key={principle} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">{principle}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span 
                  key={tool}
                  className="px-4 py-2 bg-background border rounded-md text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
