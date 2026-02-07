import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact', href: '#contact' }
];

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b' : 'bg-background'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="text-lg font-semibold tracking-tight hover:text-primary transition-colors"
        >
          SEO Specialist
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                activeSection === item.href.substring(1)
                  ? 'text-primary bg-secondary'
                  : 'text-foreground/80 hover:text-foreground hover:bg-secondary/50'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <nav className="flex flex-col gap-2 mt-8">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`px-4 py-3 text-base font-medium transition-colors rounded-md ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary bg-secondary'
                        : 'text-foreground/80 hover:text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
