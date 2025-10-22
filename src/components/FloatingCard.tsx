import { useRef, useState } from 'react';
import { useFloating, offset, flip, shift } from '@floating-ui/react';

interface FloatingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const FloatingCard = ({ icon, title, description, delay = 0 }: FloatingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { refs, floatingStyles } = useFloating({
    placement: 'top',
    middleware: [offset(10), flip(), shift()],
  });

  return (
    <div
      ref={refs.setReference}
      onMouseEnter={() => {
        setIsHovered(true);
        setShowTooltip(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowTooltip(false);
      }}
      className="relative"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div
        ref={cardRef}
        className={`glass p-8 rounded-2xl hover-lift cursor-pointer transition-all duration-500 ${
          isHovered ? 'glow' : ''
        }`}
      >
        <div className="mb-6 text-primary text-5xl">{icon}</div>
        <h3 className="text-2xl font-bold mb-4 text-gradient">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {showTooltip && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="glass p-3 rounded-lg text-sm z-50 animate-scale-in"
        >
          <p className="text-foreground font-medium">Learn more about {title}</p>
        </div>
      )}
    </div>
  );
};
