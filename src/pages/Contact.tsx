import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
      duration: 5000,
    });

    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'info@natibasolutions.com',
      link: 'mailto:info@natibasolutions.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+254 700 009 374',
      link: 'tel:+254700009374',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'Jalaram Courtyard, Westlands, Nairobi, Kenya',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help transform your business with technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <div className="glass p-10 rounded-2xl mb-8">
              <h2 className="text-3xl font-bold mb-6">Let's Talk</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking to build a new application, modernize existing systems, 
                or explore AI automation opportunities, our team is ready to help you succeed.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{info.title}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{info.content}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="glass p-10 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Why Choose Natiba Solutions?</h3>
              <ul className="space-y-4">
                {[
                  'Proven track record with 50+ delivered projects',
                  '5 years in business, trusted by clients',
                  'Team of 8 experts across engineering and design',
                  '1000+ people impacted by our solutions',
                  'Cutting-edge technology and best practices',
                  'Transparent pricing, timelines, and agile delivery',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="glass p-10 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="+254 700 009 374"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="software">Custom Software Development</option>
                    <option value="management">Management Systems</option>
                    <option value="ai">AI & Automation</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-foreground font-semibold flex items-center justify-center gap-2 hover-lift transition-all duration-300 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
