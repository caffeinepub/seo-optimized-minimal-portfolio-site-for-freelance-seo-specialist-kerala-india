import { Search, FileText, BarChart3, MapPin, Code, PenTool } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: 'Technical SEO Audits',
      description: 'Comprehensive site audits covering crawlability, indexation, site speed, mobile-friendliness, and technical issues that impact rankings.',
      deliverables: [
        'Detailed audit report with prioritized issues',
        'Crawl analysis and indexation review',
        'Site speed and Core Web Vitals assessment',
        'Mobile usability evaluation'
      ]
    },
    {
      icon: FileText,
      title: 'On-Page SEO',
      description: 'Optimize individual pages for target keywords with proper title tags, meta descriptions, heading structure, and content recommendations.',
      deliverables: [
        'Keyword research and mapping',
        'Title and meta description optimization',
        'Content structure and heading hierarchy',
        'Internal linking strategy'
      ]
    },
    {
      icon: MapPin,
      title: 'Local SEO',
      description: 'Help local businesses in Kerala and beyond improve visibility in local search results and Google Maps.',
      deliverables: [
        'Google Business Profile optimization',
        'Local citation building and cleanup',
        'Local keyword targeting',
        'Review management strategy'
      ]
    },
    {
      icon: PenTool,
      title: 'Content Strategy',
      description: 'Develop content plans aligned with search intent, keyword opportunities, and business goals.',
      deliverables: [
        'Content gap analysis',
        'Topic and keyword research',
        'Content briefs and guidelines',
        'Editorial calendar recommendations'
      ]
    },
    {
      icon: Code,
      title: 'Schema Markup',
      description: 'Implement structured data to help search engines understand your content and enable rich results.',
      deliverables: [
        'Schema type recommendations',
        'JSON-LD implementation',
        'Rich snippet optimization',
        'Structured data testing and validation'
      ]
    },
    {
      icon: BarChart3,
      title: 'SEO Monitoring & Reporting',
      description: 'Track performance metrics, rankings, and organic traffic with clear, actionable reports.',
      deliverables: [
        'Monthly performance reports',
        'Ranking tracking for target keywords',
        'Traffic and conversion analysis',
        'Ongoing recommendations'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            SEO Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive SEO services tailored to your business needs. Each service focuses on measurable improvements and realistic outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium mb-2 text-muted-foreground">What you get:</p>
                  <ul className="space-y-1.5 text-sm">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
