import { useState, useEffect, useRef } from "react";
import { Users, CheckCircle, Activity, Briefcase } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 15000,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: CheckCircle,
    value: 25000,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: Activity,
    value: 120,
    suffix: "+",
    label: "Running Projects",
  },
  {
    icon: Briefcase,
    value: 50,
    suffix: "+",
    label: "Expert Technicians",
  },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

function StatItem({ icon: Icon, value, suffix, label, start, delay }: {
  icon: typeof Users;
  value: number;
  suffix: string;
  label: string;
  start: boolean;
  delay: number;
}) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const count = useCountUp(value, 2000, shouldAnimate);

  useEffect(() => {
    if (!start) return;
    const timer = setTimeout(() => setShouldAnimate(true), delay);
    return () => clearTimeout(timer);
  }, [start, delay]);

  return (
    <div
      className={`flex flex-col items-center text-center transition-all duration-700 ${
        shouldAnimate ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      data-testid={`stat-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-3">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <span className="text-3xl md:text-4xl font-bold text-foreground mb-1" data-testid={`text-stat-value-${label.toLowerCase().replace(/\s+/g, "-")}`}>
        {shouldAnimate ? count.toLocaleString() : "0"}{suffix}
      </span>
      <span className="text-sm text-muted-foreground font-medium">{label}</span>
    </div>
  );
}

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-14 bg-muted/40"
      data-testid="section-stats"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              start={isVisible}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
