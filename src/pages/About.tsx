import { useEffect } from 'react';
import { Target, Eye, Heart, Award, Users, TrendingUp } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutBackground from '@/assets/about-bg.jpg';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to deliver cutting-edge solutions',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Committed to delivering quality in every project we undertake',
    },
  ];

  const achievements = [
    { icon: <Users />, number: '200+', label: 'Enterprise Clients' },
    { icon: <TrendingUp />, number: '15+', label: 'Years Experience' },
    { icon: <Award />, number: '50+', label: 'Industry Awards' },
    { icon: <Target />, number: '1M+', label: 'Users Impacted' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section 
        className="relative py-32 mb-20 overflow-hidden"
        style={{
          backgroundImage: `url(${aboutBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Natiba Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A leading technology solutions provider specializing in custom software development, 
              intelligent management systems, and AI-powered automation. We transform businesses 
              through innovation and technical excellence.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-32 max-w-6xl mx-auto">
          <div className="glass p-10 rounded-2xl" data-aos="fade-right">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-12 h-12 text-primary" />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses worldwide with innovative technology solutions that drive growth, 
              efficiency, and competitive advantage. We believe in creating software that not only meets 
              today's challenges but anticipates tomorrow's opportunities.
            </p>
          </div>

          <div className="glass p-10 rounded-2xl" data-aos="fade-left">
            <div className="flex items-center gap-4 mb-6">
              <Eye className="w-12 h-12 text-secondary" />
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be the global leader in transformative technology solutions, recognized for our 
              commitment to innovation, quality, and client success. We envision a future where 
              every business harnesses the full potential of technology.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
            Our <span className="text-gradient">Values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl text-center hover-lift"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
            Our <span className="text-gradient">Impact</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl text-center hover-lift"
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4">
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">{achievement.number}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="glass p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded over 15 years ago, Natiba Solutions emerged from a simple belief: technology 
                should be a catalyst for business transformation, not a complexity to manage. What started 
                as a small team of passionate developers has grown into a full-service technology partner 
                trusted by enterprises worldwide.
              </p>
              <p>
                Today, we're proud to serve clients across industries including healthcare, finance, 
                manufacturing, retail, and more. Our team of expert engineers, designers, and strategists 
                work collaboratively to deliver solutions that don't just meet requirements—they exceed 
                expectations and drive measurable results.
              </p>
              <p>
                As we look to the future, our commitment remains unchanged: to leverage emerging 
                technologies like AI, machine learning, and cloud computing to help our clients stay 
                ahead in an increasingly digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
