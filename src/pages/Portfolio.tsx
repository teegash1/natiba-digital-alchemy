import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Code, TrendingUp } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const projects = [
    {
      title: 'HealthCare Management Platform',
      category: 'Healthcare • Web Application',
      description: 'Comprehensive patient management system with AI-powered diagnosis assistance, electronic health records, and telemedicine capabilities.',
      technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'WebRTC'],
      results: ['85% reduction in administrative time', '300+ hospitals using platform', '99.9% uptime achieved'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Smart Inventory System',
      category: 'Retail • ERP Solution',
      description: 'AI-driven inventory management with predictive analytics, automated reordering, and real-time tracking across multiple warehouses.',
      technologies: ['Angular', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
      results: ['40% reduction in stock waste', '60% faster order processing', '$2M+ annual cost savings'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Financial Analytics Dashboard',
      category: 'FinTech • Data Analytics',
      description: 'Real-time financial analytics platform with machine learning for fraud detection and investment recommendations.',
      technologies: ['Vue.js', 'FastAPI', 'TimescaleDB', 'Apache Kafka', 'Kubernetes'],
      results: ['95% fraud detection accuracy', '10M+ transactions processed daily', 'ISO 27001 certified'],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Manufacturing IoT Solution',
      category: 'Manufacturing • IoT',
      description: 'Industrial IoT platform connecting factory equipment with predictive maintenance and production optimization.',
      technologies: ['React Native', 'AWS IoT', 'InfluxDB', 'TensorFlow', 'MQTT'],
      results: ['35% increase in productivity', '50% reduction in downtime', '1000+ devices connected'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'E-Learning Platform',
      category: 'Education • Mobile App',
      description: 'Interactive learning platform with AI tutoring, video conferencing, and personalized learning paths.',
      technologies: ['React', 'Flutter', 'Firebase', 'OpenAI', 'WebRTC'],
      results: ['500K+ active students', '95% satisfaction rate', '20+ countries served'],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Supply Chain Optimizer',
      category: 'Logistics • AI Solution',
      description: 'Machine learning-powered supply chain optimization with route planning and demand forecasting.',
      technologies: ['Next.js', 'Django', 'Neo4j', 'TensorFlow', 'Google Maps API'],
      results: ['30% cost reduction', '45% faster deliveries', '98% on-time delivery rate'],
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming businesses across industries with innovative technology solutions. 
            Explore our successful projects and see the impact we've made.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden hover-lift group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} p-8 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <div className="text-white/80 text-sm mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Code className="w-32 h-32 text-white" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="text-sm font-semibold mb-2 text-foreground">Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <div className="text-sm font-semibold mb-3 text-foreground flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    Key Results:
                  </div>
                  <ul className="space-y-2">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Project Button */}
                <button className="mt-6 w-full py-3 bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 group/btn">
                  View Case Study
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass p-12 rounded-2xl max-w-4xl mx-auto" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your <span className="text-gradient">Success Story</span>?
          </h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how we can help you achieve similar results
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-foreground font-semibold hover-lift transition-all duration-300"
          >
            Start Your Project
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
