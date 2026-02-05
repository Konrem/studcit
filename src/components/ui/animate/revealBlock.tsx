'use client';

import { useEffect, useRef, useState } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;       
  direction?: Direction;
}

export default function RevealBlock({
  children,
  delay = 0,
  direction = 'up',
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const directionClass = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: 'translate-x-15',
    right: '-translate-x-15',
  }[direction];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directionClass}`}
      `}
    >
      {children}
    </div>
  );
}
