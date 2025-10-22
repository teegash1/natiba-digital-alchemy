import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Brain, Database, Sparkles, Zap, Shield } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FloatingCard } from '@/components/FloatingCard';
import heroBackground from '@/assets/hero-bg.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const services = [
    {
      icon: <Code />,
      title: 'Custom Software Development',
      description: 'Build scalable, robust applications tailored to your business needs with cutting-edge technologies.',
      delay: 0,
    },
    {
      icon: <Database />,
      title: 'Management Systems',
      description: 'Streamline operations with intelligent ERP, CRM, and custom management solutions.',
      delay: 100,
    },
    {
      icon: <Brain />,
      title: 'AI Automation',
      description: 'Transform your business with machine learning, NLP, and intelligent automation solutions.',
      delay: 200,
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', delay: 0 },
    { number: '98%', label: 'Client Satisfaction', delay: 100 },
    { number: '50+', label: 'Team Members', delay: 200 },
    { number: '24/7', label: 'Support Available', delay: 300 },
  ];

  const features = [
    { icon: <Sparkles className="w-6 h-6" />, text: 'Innovation-Driven Solutions' },
    { icon: <Zap className="w-6 h-6" />, text: 'Rapid Development Cycles' },
    { icon: <Shield className="w-6 h-6" />, text: 'Enterprise-Grade Security' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in"
              data-aos="fade-down"
            >
              <span className="text-gradient">Transform</span> Your Business
            </h1>
            <p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Empowering enterprises with cutting-edge software solutions, intelligent management systems, 
              and revolutionary AI automation technologies.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-foreground font-semibold flex items-center gap-2 hover-lift transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 glass rounded-full text-foreground font-semibold hover-lift transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>

            <div 
              className="flex flex-wrap justify-center gap-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 glass px-4 py-2 rounded-full"
                >
                  <span className="text-primary">{feature.icon}</span>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay={stat.delay}
              >
                <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <FloatingCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div 
            className="glass p-12 md:p-20 rounded-3xl text-center max-w-4xl mx-auto"
            data-aos="zoom-in"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Innovate</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how Natiba Solutions can transform your business with technology
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-foreground font-semibold hover-lift transition-all duration-300"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
