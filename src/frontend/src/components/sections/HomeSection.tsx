import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HomeSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center py-12 md:py-20">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Freelance SEO Expert in Kerala
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            I help businesses improve their search rankings through honest, execution-focused SEO strategies. Based in Kerala, India, working with clients locally and globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={scrollToContact} className="text-base">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-base"
            >
              View Services
            </Button>
          </div>
          
          <div className="mt-12 pt-12 border-t">
            <p className="text-sm text-muted-foreground mb-4">Specializing in:</p>
            <div className="flex flex-wrap gap-3">
              {['Technical SEO', 'On-Page Optimization', 'Local SEO', 'Content Strategy', 'SEO Audits'].map((item) => (
                <span 
                  key={item}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
