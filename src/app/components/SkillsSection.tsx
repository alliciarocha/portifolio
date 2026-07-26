import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Code2,
  FileCode2,
  Coffee,
  Terminal,
  Globe,
  Container,
  Eye,
  BarChart3,
  Monitor,
  Database,
  Server,
  GitBranch,
  FileSpreadsheet,
  Camera,
  Bot
} from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      skills: [
        { name: "Python", icon: Code2 },
        { name: "JavaScript", icon: FileCode2 },
        { name: "Java", icon: Coffee },
        { name: "C / C++", icon: Terminal },
        { name: "HTML e CSS", icon: Globe }
      ]
    },
    {
      title: "Frameworks & Dados",
      skills: [
        { name: "YOLO (v8 / 11)", icon: Eye },
        { name: "OpenCV", icon: Camera },
        { name: "Pandas", icon: BarChart3 },
        { name: "PySide6", icon: Monitor }
      ]
    },
    {
      title: "Infraestrutura & Ferramentas",
      skills: [
        { name: "Docker", icon: Container },
        { name: "PostgreSQL & MySQL", icon: Database },
        { name: "MongoDB & Neo4j", icon: Server },
        { name: "Evolution API", icon: Bot },
        { name: "Git e Versionamento", icon: GitBranch },
        { name: "Pacote Office", icon: FileSpreadsheet }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-6 text-foreground">Habilidades & Especialidades</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias, frameworks e ferramentas que utilizo no desenvolvimento de projetos e pesquisas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full flex flex-col bg-card/50 border-border/50 hover:border-primary/40 transition-colors">
              <CardHeader className="pb-4">
                <CardTitle className="text-center text-xl text-primary font-semibold">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-none space-y-2.5 p-0 m-0">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <li 
                        key={skillIndex} 
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-background/40 border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                      >
                        <IconComponent className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}