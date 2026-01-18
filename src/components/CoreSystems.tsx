import { motion } from 'framer-motion';
import { Brain, Network, Coins, Building2 } from 'lucide-react';
import SystemCard from './SystemCard';

const systems = [
  {
    icon: Brain,
    title: 'SymNodes',
    subtitle: 'AI Health Guardians',
    description: 'Solar-powered devices running the Health Kernel. Offline-first AI trained on WHO guidelines + local health data.',
    features: [
      'Speech and image-based symptom analysis in local languages',
      'Auto-generated treatment advice for community health workers',
      'Medication recommendations adapted to available resources',
    ],
    accentColor: 'primary' as const,
  },
  {
    icon: Network,
    title: 'BioMesh Layer',
    subtitle: 'The Health Mesh Network',
    description: 'Self-healing network protocol connecting SymNodes across communities. Data syncs via drones, bikes, or intermittent connectivity.',
    features: [
      'Self-healing routing when nodes fail',
      'Continuous aggregation of health signals',
      'Living, distributed health map that updates itself',
    ],
    accentColor: 'accent' as const,
  },
  {
    icon: Coins,
    title: 'H-Creds',
    subtitle: 'Regenerative Finance',
    description: 'Every verified health action generates Health Credits on the regenerative ledger. Funding flows through proof of impact.',
    features: [
      'Vaccination = +10 H-Creds',
      'Clean water installation = +100 H-Creds',
      'Outbreak prevention = +500 H-Creds',
    ],
    accentColor: 'secondary' as const,
  },
  {
    icon: Building2,
    title: 'Symbiotic Health Pods',
    subtitle: 'Adaptive Clinics',
    description: 'Modular clinics from recycled materials. Solar-powered with water purification and AI diagnostics.',
    features: [
      'Built from local and recycled materials',
      'AI-assisted predictive care',
      'Adapts medically and culturally over time',
    ],
    accentColor: 'primary' as const,
  },
];

const CoreSystems = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Core Systems
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four interconnected layers that transform health from a service delivered from above
            into an <span className="text-gradient-mesh font-medium">emergent property of connected life</span>.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {systems.map((system, index) => (
            <SystemCard key={system.title} {...system} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSystems;
