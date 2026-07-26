import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl mb-6 text-foreground">
            Allicia Rocha
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Desenvolvedora Full Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Olá! Sou a Allicia, uma desenvolvedora FullStack e pesquisadora apaixonada por criar soluções inovadoras. Meu foco é unir inteligência artificial — especialmente visão computacional — com interfaces funcionais e de alto desempenho para resolver problemas reais
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="px-8 py-3 bg-primary hover:bg-primary/90"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Entrar em Contato
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-3"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  );
}