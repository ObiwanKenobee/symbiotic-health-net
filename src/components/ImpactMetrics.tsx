import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface MetricProps {
  value: string;
  label: string;
  suffix?: string;
  delay: number;
}

const AnimatedNumber = ({ value, suffix = '', delay }: { value: string; suffix?: string; delay: number }) => {
  const [displayed, setDisplayed] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const numericPart = value.replace(/[^0-9.]/g, '');
    const target = parseFloat(numericPart);
    const prefix = value.match(/^[^0-9]*/)?.[0] || '';
    const duration = 2000;
    const startTime = Date.now() + delay * 1000;

    const animate = () => {
      const now = Date.now();
      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }
      
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = target * eased;
      
      if (target >= 1000000) {
        setDisplayed(`${prefix}${(current / 1000000).toFixed(1)}M`);
      } else if (target >= 1000) {
        setDisplayed(`${prefix}${(current / 1000).toFixed(1)}K`);
      } else if (target % 1 !== 0) {
        setDisplayed(`${prefix}${current.toFixed(1)}`);
      } else {
        setDisplayed(`${prefix}${Math.floor(current)}`);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayed(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, delay]);

  return (
    <span ref={ref}>
      {displayed}{suffix}
    </span>
  );
};

const Metric = ({ value, label, suffix, delay }: MetricProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="text-center p-8"
  >
    <div className="font-display text-5xl md:text-6xl font-bold text-gradient-primary mb-4">
      <AnimatedNumber value={value} suffix={suffix} delay={delay} />
    </div>
    <p className="text-muted-foreground text-lg">{label}</p>
  </motion.div>
);

const metrics = [
  { value: '20', suffix: 'M+', label: 'Preventable Deaths Averted' },
  { value: '1.2', suffix: 'B', label: 'People with New Diagnostics' },
  { value: '1', suffix: 'M+', label: 'Health Pods Deployed' },
  { value: '70', suffix: '%', label: 'Funding Efficiency Gain' },
  { value: '5', suffix: 'M+', label: 'Local Health Jobs Created' },
  { value: '80', suffix: '%', label: 'Global At-Risk Coverage' },
];

const ImpactMetrics = () => {
  return (
    <section className="relative py-32 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4 block">
            By 2045
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projected Global Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            When every community becomes a node in the planetary health grid.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {metrics.map((metric, index) => (
            <Metric
              key={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
