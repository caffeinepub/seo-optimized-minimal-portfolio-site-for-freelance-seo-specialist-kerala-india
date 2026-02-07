import { TrendingUp, Users, Clock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: 'Local Service Business',
      industry: 'Home Services',
      challenge: 'Low visibility in local search results, inconsistent NAP citations, and poor Google Business Profile optimization.',
      actions: [
        'Optimized Google Business Profile with complete information and regular posts',
        'Built and cleaned up local citations across 20+ directories',
        'Implemented local schema markup on website',
        'Created location-specific service pages with local keywords'
      ],
      results: [
        { icon: TrendingUp, label: 'Local pack rankings', value: 'Improved from outside top 20 to top 3 for primary keywords' },
        { icon: Users, label: 'Organic traffic', value: '145% increase in 6 months' },
        { icon: Clock, label: 'Phone calls', value: '3x increase in direct calls from Google' }
      ],
      timeline: '6 months'
    },
    {
      title: 'E-commerce Store',
      industry: 'Retail',
      challenge: 'Technical issues preventing proper indexation, slow page speed, and thin product descriptions.',
      actions: [
        'Fixed crawl errors and implemented proper URL structure',
        'Optimized site speed (reduced load time by 60%)',
        'Enhanced product pages with detailed descriptions and schema',
        'Built internal linking structure for category and product pages'
      ],
      results: [
        { icon: TrendingUp, label: 'Indexed pages', value: 'Increased from 40% to 95% of site' },
        { icon: Users, label: 'Organic sessions', value: '220% increase in 8 months' },
        { icon: Clock, label: 'Page speed', value: 'Core Web Vitals: all metrics in green' }
      ],
      timeline: '8 months'
    },
    {
      title: 'Professional Services Firm',
      industry: 'Consulting',
      challenge: 'Competing for competitive keywords with limited content and weak backlink profile.',
      actions: [
        'Conducted comprehensive keyword research and content gap analysis',
        'Created 25+ in-depth service and resource pages',
        'Optimized existing pages for target keywords',
        'Implemented topic clusters and pillar page strategy'
      ],
      results: [
        { icon: TrendingUp, label: 'Keyword rankings', value: '40+ keywords in top 10 (up from 8)' },
        { icon: Users, label: 'Organic leads', value: '180% increase in qualified inquiries' },
        { icon: Clock, label: 'Content performance', value: 'Average position improved from 35 to 12' }
      ],
      timeline: '10 months'
    }
  ];

  return (
    <section id="case-studies" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Case Studies
          </h2>
          <p className="text-lg text-muted-foreground">
            Real examples of SEO work and measurable results. Each project is unique, and outcomes depend on many factors including competition, budget, and timeline.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {caseStudies.map((study) => (
            <Card key={study.title} className="border-2">
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                    <CardDescription className="text-base">
                      <span className="font-medium">{study.industry}</span> • {study.timeline}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Challenge</h4>
                  <p className="text-foreground/80">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Actions Taken</h4>
                  <ul className="space-y-1.5">
                    {study.actions.map((action) => (
                      <li key={action} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-primary mt-1">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Measurable Outcomes</h4>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {study.results.map((result) => {
                      const Icon = result.icon;
                      return (
                        <div key={result.label} className="bg-background p-4 rounded-lg border">
                          <Icon className="h-5 w-5 text-primary mb-2" />
                          <p className="text-xs text-muted-foreground mb-1">{result.label}</p>
                          <p className="text-sm font-medium">{result.value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground text-center italic">
            Note: Results vary based on industry, competition, starting point, and ongoing effort. These case studies represent real projects but specific client details have been anonymized. SEO is a long-term investment, and sustainable results require consistent work over months.
          </p>
        </div>
      </div>
    </section>
  );
}
