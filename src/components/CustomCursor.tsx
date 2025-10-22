import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorGlow = cursorGlowRef.current;
    if (!cursor || !cursorGlow) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let glowX = 0;
    let glowY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
        cursorGlow.style.transform = 'translate(-50%, -50%) scale(1.5)';
      }
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorGlow.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    const animate = () => {
      const speed = 0.15;
      const glowSpeed = 0.08;

      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      glowX += (mouseX - glowX) * glowSpeed;
      glowY += (mouseY - glowY) * glowSpeed;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      cursorGlow.style.left = `${glowX}px`;
      cursorGlow.style.top = `${glowY}px`;

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter, true);
    document.body.addEventListener('mouseleave', handleMouseLeave, true);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter, true);
      document.body.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorGlowRef}
        className="fixed w-32 h-32 rounded-full pointer-events-none z-[9999] mix-blend-screen hidden md:block"
        style={{
          background: 'radial-gradient(circle, hsl(217 91% 60% / 0.3) 0%, transparent 70%)',
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 rounded-full pointer-events-none z-[9999] border-2 border-primary hidden md:block"
        style={{
          transition: 'transform 0.2s ease-out',
        }}
      />
    </>
  );
};
