import { motion } from 'framer-motion';
import { FileCode2, Lightbulb, Target, ExternalLink } from 'lucide-react';

const StatusFooter = () => {
  return (
    <footer className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Status section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm text-secondary font-medium">Under Active Design</span>
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Current Repository Status
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Lightbulb, text: 'Conceptual Architecture' },
              { icon: Target, text: 'System Philosophy' },
              { icon: FileCode2, text: 'Impact Model' },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center gap-3 p-4 rounded-xl card-glass border border-border"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-muted-foreground mt-8 text-lg">
            Implementation modules (SymOS kernels, mesh protocols, ledger specs) are under active design.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16" />

        {/* Bottom info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-semibold text-gradient-primary mb-2">
              THIG
            </h3>
            <p className="text-sm text-muted-foreground">
              Technomesh Health Intelligence Grid
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Released under</span>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
            >
              Regenerative Commons License
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-muted-foreground italic mt-12"
        >
          Building health systems that evolve with life.
        </motion.p>
      </div>
    </footer>
  );
};

export default StatusFooter;
