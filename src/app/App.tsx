import { AnimatedWaterBackground } from './components/AnimatedWaterBackground';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <AnimatedWaterBackground />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      <footer className="py-8 text-center border-t border-border bg-background/80 backdrop-blur-sm">
        <p className="text-muted-foreground">
          © 2026 Allicia Rocha. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}