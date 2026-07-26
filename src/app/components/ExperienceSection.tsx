import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink, FileText, FileImage, BookOpen } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      title: "Projeto de Pesquisa",
      company: "Sistema de Visão Computacional Voltado para a Indústria Siderúrgica",
      period: "Em Desenvolvimento",
      description: "Desenvolvimento de um sistema de visão computacional para monitoramento de eletrodos em Forno Elétrico a Arco (EAF) e detecção automatizada da Região Crítica (RC). Envolve o processamento em tempo real de imagens térmicas.",
      technologies: ["Python", "YOLO (v8 / 11n-seg)", "Visão Computacional", "Optris Xi 400", "PIX Connect"]
    },
    {
      title: "Projeto de Extensão",
      company: "Projeto Maré Manguinhos",
      period: "Jan 2026 - Jul 2026",
      description: "Desenvolvimento de um sistema integrado de gestão para comerciantes, englobando módulos de vendas, painel de administração, mapeamento de rotas e um chatbot via WhatsApp para transcrição de áudios e registro automatizado de dados.",
      technologies: ["Python", "Node.js", "Docker", "WhatsApp API", "Speech-to-Text", "Google Maps API", "n8n","Evolution API"],
      githubUrl: "https://github.com/mare-de-manguinhos"
    },
    {
      title: "Projeto de Extensão",
      company: "Projeto Andes",
      period: "Jan 2025 - Jul 2025",
      description: "Desenvolvimento de uma ferramenta chamada Andes (Analysis as Code), voltada para a engenharia de requisitos. O sistema utiliza uma DSL própria construída para modelar casos de uso e atores, atuando como um compilador que gera automaticamente documentação em Markdown, testes E2E em Gherkin e artefatos de gestão de projetos.",
      technologies: ["Langium", "TypeScript", "Python", "Gherkin", "Docssaurus","Criação de DSL", "Markdown"],
      githubUrl: "https://github.com/andes-gps/andes-gps-projeto",
      docUrl: "https://nicolas-botelho.github.io/leds-tools-public/andes/basic_concepts/AndesOverview",
    },
    {
      title: "Iniciação Científica",
      company: "IFES - Campus Serra",
      period: "Ago 2024 - Ago 2025",
      description: "Desenvolvimento de um sistema de hardware e software integrado a deep learning para detecção de obstáculos viários em tempo real, resultando em artigo científico aprovado no congresso ERI-ES.",
      technologies: ["Python", "C/C++", "ESP32", "Visão Computacional", "Deep Learning"],
      githubUrl: "https://github.com/alliciarocha/Projeto-ML-Embarcados-Cidades-Int-IC-Ifes",
      articleUrl: "https://drive.google.com/file/d/1uiwFUlNRziXQCv0meRlZEGiPtGCcqqAT/view?usp=drive_link",
      posterUrl: "https://drive.google.com/file/d/1d9BvCzSA-67yGpIt_p9ZQfq4hkoDt4pB/view?usp=drive_link",
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-6 text-foreground">Experiências & Projetos</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minha jornada profissional construindo soluções inovadoras e crescendo como desenvolvedora.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/70 transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                    <p className="text-lg text-primary">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="self-start md:self-center">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-border/30">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 shrink-0 self-start sm:self-auto">
                    {exp.githubUrl && (
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm" 
                        className="gap-2 w-[145px] justify-center hover:bg-primary/15 hover:border-primary/80 hover:text-primary transition-all"
                      >
                        <a href={exp.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          <span>Ver no GitHub</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                        </a>
                      </Button>
                    )}

                    {exp.docUrl && (
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm" 
                        className="gap-2 w-[145px] justify-center hover:bg-primary/15 hover:border-primary/80 hover:text-primary transition-all"
                      >
                        <a href={exp.docUrl} target="_blank" rel="noopener noreferrer">
                          <BookOpen className="w-4 h-4" />
                          <span>Documentação</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                        </a>
                      </Button>
                    )}

                    {exp.articleUrl && (
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm" 
                        className="gap-2 w-[140px] justify-center hover:bg-primary/15 hover:border-primary/80 hover:text-primary transition-all"
                      >
                        <a href={exp.articleUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4" />
                          <span>Ver Artigo</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                        </a>
                      </Button>
                    )}

                    {exp.posterUrl && (
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm" 
                        className="gap-2 w-[140px] justify-center hover:bg-primary/15 hover:border-primary/80 hover:text-primary transition-all"
                      >
                        <a href={exp.posterUrl} target="_blank" rel="noopener noreferrer">
                          <FileImage className="w-4 h-4" />
                          <span>Ver Pôster</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}