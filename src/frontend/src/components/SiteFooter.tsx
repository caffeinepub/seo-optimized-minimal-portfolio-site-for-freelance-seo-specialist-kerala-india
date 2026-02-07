import { Heart } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Freelance SEO Specialist based in Kerala, India
          </p>
          <p className="text-sm text-muted-foreground">
            Helping businesses improve their organic search visibility through honest, execution-focused strategies.
          </p>
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
              © {currentYear}. Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
              <a 
                href="https://caffeine.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
