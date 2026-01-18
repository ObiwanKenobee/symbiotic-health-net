import { motion } from 'framer-motion';
import { Activity, Globe, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary font-medium">Powered by SymOS</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-gradient-primary">Technomesh</span>
          <br />
          <span className="text-foreground">Health Intelligence Grid</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          A decentralized health intelligence network for the{' '}
          <span className="text-gradient-warm font-semibold">Symbiocene</span>.
          <br className="hidden md:block" />
          Where every community becomes a node in planetary health.
        </motion.p>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {[
            { icon: Globe, text: 'Mesh-based Resilience', color: 'primary' },
            { icon: Activity, text: 'Local Intelligence', color: 'secondary' },
            { icon: Zap, text: 'Regenerative Finance', color: 'accent' },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-5 py-3 rounded-full card-glass ${
                item.color === 'primary' ? 'glow-primary' :
                item.color === 'secondary' ? 'glow-secondary' : 'glow-accent'
              }`}
            >
              <item.icon className={`w-5 h-5 ${
                item.color === 'primary' ? 'text-primary' :
                item.color === 'secondary' ? 'text-secondary' : 'text-accent'
              }`} />
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="space-y-4"
        >
          <p className="text-lg text-muted-foreground italic">
            "A pocket-sized WHO that works without the internet."
          </p>
          <div className="flex items-center justify-center gap-2 text-primary/60">
            <span className="w-12 h-px bg-primary/30" />
            <span className="text-xs uppercase tracking-widest">Infrastructure for a Living Planet</span>
            <span className="w-12 h-px bg-primary/30" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
