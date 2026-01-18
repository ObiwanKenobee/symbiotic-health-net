import { motion } from 'framer-motion';
import { Leaf, Sparkles, Heart } from 'lucide-react';

const PhilosophySection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon cluster */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0 }}
            >
              <Leaf className="w-8 h-8 text-primary/60" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <Heart className="w-10 h-10 text-secondary/80" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <Sparkles className="w-8 h-8 text-accent/60" />
            </motion.div>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            The Symbiocene Philosophy
          </h2>

          <div className="space-y-6 text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              THIG is built on the Symbiocene principle:{' '}
              <span className="text-gradient-mesh font-semibold">
                systems should heal themselves as they heal the world
              </span>.
            </p>
            
            <p>
              The network learns from human behavior, environment, and culture.
              It incorporates ecological signals — water, soil, vectors.
              It grows wiser as participation increases.
            </p>

            <p className="text-foreground font-medium">
              Health is treated as an{' '}
              <span className="text-gradient-warm">emergent property of connected life</span>,
              not a service delivered from above.
            </p>
          </div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 p-8 rounded-2xl card-glass border border-primary/20 max-w-2xl mx-auto"
          >
            <p className="text-2xl md:text-3xl font-display font-medium text-foreground mb-4">
              "Think of it as the immune system of humanity."
            </p>
            <footer className="text-primary text-sm uppercase tracking-widest">
              — The BioMesh Vision
            </footer>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
