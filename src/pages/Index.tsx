import MeshBackground from '@/components/MeshBackground';
import HeroSection from '@/components/HeroSection';
import CoreSystems from '@/components/CoreSystems';
import ImpactMetrics from '@/components/ImpactMetrics';
import PhilosophySection from '@/components/PhilosophySection';
import StatusFooter from '@/components/StatusFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <MeshBackground />
      <main className="relative z-10">
        <HeroSection />
        <CoreSystems />
        <ImpactMetrics />
        <PhilosophySection />
        <StatusFooter />
      </main>
    </div>
  );
};

export default Index;
