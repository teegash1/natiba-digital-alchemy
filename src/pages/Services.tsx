import { useEffect } from 'react';
import { Code, Database, Brain, Cloud, Smartphone, Cog, Lock, BarChart } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Custom Software Development',
      description: 'End-to-end software development services using modern frameworks and methodologies.',
      features: [
        'Web Application Development',
        'Enterprise Software Solutions',
        'API Development & Integration',
        'Legacy System Modernization',
      ],
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Management Systems',
      description: 'Comprehensive management solutions to optimize your business operations.',
      features: [
        'ERP Systems Implementation',
        'CRM Solutions',
        'Inventory Management',
        'Project Management Tools',
      ],
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'AI & Automation',
      description: 'Harness the power of artificial intelligence to automate and enhance your processes.',
      features: [
        'Machine Learning Solutions',
        'Natural Language Processing',
        'Predictive Analytics',
        'Robotic Process Automation',
      ],
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure for modern businesses.',
      features: [
        'Cloud Migration Services',
        'AWS / Azure / GCP Deployment',
        'Serverless Architecture',
        'Cloud Security & Compliance',
      ],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'iOS & Android Apps',
        'React Native Development',
        'Progressive Web Apps',
        'Mobile UI/UX Design',
      ],
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development pipeline with modern DevOps practices.',
      features: [
        'Continuous Integration/Deployment',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Logging',
      ],
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions.',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Compliance Management',
        'Incident Response',
      ],
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights with advanced analytics.',
      features: [
        'Business Intelligence Solutions',
        'Data Visualization',
        'Real-time Analytics',
        'Big Data Processing',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to meet your business objectives. 
            From concept to deployment, we deliver excellence at every stage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover-lift"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gradient">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-32" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-gradient">Process</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and objectives' },
              { step: '02', title: 'Design', description: 'Creating intuitive and scalable solutions' },
              { step: '03', title: 'Development', description: 'Building with best practices and modern tech' },
              { step: '04', title: 'Delivery', description: 'Deploying and supporting your success' },
            ].map((phase, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl font-bold text-gradient mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
