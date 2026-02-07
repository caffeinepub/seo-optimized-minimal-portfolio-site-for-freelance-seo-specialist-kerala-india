import { useState, useEffect } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { HomeSection } from './components/sections/HomeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { CaseStudiesSection } from './components/sections/CaseStudiesSection';
import { ContactSection } from './components/sections/ContactSection';
import { SeoHeadManager } from './seo/SeoHeadManager';
import { seoBySection } from './seo/seoConfig';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'case-studies', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current && current !== currentSection) {
        setCurrentSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return (
    <>
      <SeoHeadManager 
        metadata={seoBySection[currentSection]} 
        currentSection={currentSection}
      />
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <HomeSection />
          <AboutSection />
          <ServicesSection />
          <CaseStudiesSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}

export default App;
