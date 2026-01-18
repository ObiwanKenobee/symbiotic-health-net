import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SystemCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  accentColor: 'primary' | 'secondary' | 'accent';
  index: number;
}

const SystemCard = ({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  accentColor,
  index,
}: SystemCardProps) => {
  const colorClasses = {
    primary: {
      icon: 'text-primary',
      glow: 'glow-primary',
      border: 'border-primary/20 hover:border-primary/40',
      bg: 'bg-primary/5',
    },
    secondary: {
      icon: 'text-secondary',
      glow: 'glow-secondary',
      border: 'border-secondary/20 hover:border-secondary/40',
      bg: 'bg-secondary/5',
    },
    accent: {
      icon: 'text-accent',
      glow: 'glow-accent',
      border: 'border-accent/20 hover:border-accent/40',
      bg: 'bg-accent/5',
    },
  };

  const colors = colorClasses[accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative p-8 rounded-2xl card-glass border ${colors.border} transition-all duration-500 hover:scale-[1.02]`}
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${colors.glow}`} style={{ filter: 'blur(40px)', zIndex: -1 }} />
      
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} mb-6`}>
        <Icon className={`w-7 h-7 ${colors.icon}`} />
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
        {title}
      </h3>
      
      {/* Subtitle */}
      <p className={`text-sm font-medium ${colors.icon} mb-4`}>
        {subtitle}
      </p>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
            <span className={`w-1.5 h-1.5 rounded-full mt-2 ${colors.icon} opacity-60`} />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SystemCard;
