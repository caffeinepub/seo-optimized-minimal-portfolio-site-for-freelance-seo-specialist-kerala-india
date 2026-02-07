import { Mail, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '../ContactForm';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to improve your search rankings? Let's discuss your project and see how I can help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center text-center p-6 bg-secondary/50 rounded-lg">
              <MapPin className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">Kerala, India</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-secondary/50 rounded-lg">
              <Clock className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-1">Response Time</h3>
              <p className="text-sm text-muted-foreground">Within 24-48 hours</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-secondary/50 rounded-lg">
              <Mail className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-1">Availability</h3>
              <p className="text-sm text-muted-foreground">Open to new projects</p>
            </div>
          </div>

          <div className="bg-card border-2 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <p className="text-muted-foreground mb-6">
              Fill out the form below with details about your project. The more information you provide, the better I can understand your needs and respond with relevant insights.
            </p>
            <ContactForm />
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Prefer email? You can also reach out directly at{' '}
              <a href="mailto:hello@example.com" className="text-primary hover:underline">
                hello@example.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
