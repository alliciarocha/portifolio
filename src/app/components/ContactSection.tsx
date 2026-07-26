import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, Phone, MapPin, Linkedin, Github, FileText, ExternalLink } from 'lucide-react';

export function ContactSection() {
  const contactCards = [
    {
      title: "E-mail",
      value: "allicia30300@gmail.com",
      link: "mailto:allicia30300@gmail.com",
      icon: Mail,
      isExternal: false
    },
    {
      title: "Telefone",
      value: "+55 (27) 99695-2705",
      link: "tel:+5527996952705",
      icon: Phone,
      isExternal: false
    },
    {
      title: "Localização",
      value: "Serra, ES - Brasil",
      link: null,
      icon: MapPin,
      isExternal: false
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/allicia-rocha",
      link: "https://www.linkedin.com/in/allicia-rocha",
      icon: Linkedin,
      isExternal: true
    },
    {
      title: "GitHub",
      value: "github.com/alliciarocha",
      link: "https://github.com/alliciarocha",
      icon: Github,
      isExternal: true
    },
    {
      title: "Currículo",
      value: "Visualizar / Baixar CV",
      link: "https://drive.google.com/file/d/1A1mhO3g8__OLDSSCmvacDGb_tLJv3bTT/view?usp=drive_link",
      icon: FileText,
      isExternal: true
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-6 text-foreground">Entre em Contato</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sinta-se à vontade para entrar em contato ou conectar-se através das redes e canais abaixo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactCards.map((item, index) => {
            const IconComponent = item.icon;
            
            const cardElement = (
              <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-all h-full group">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between text-foreground text-lg">
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                      <span>{item.title}</span>
                    </div>
                    {item.isExternal && (
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors font-medium text-sm">
                    {item.value}
                  </p>
                </CardContent>
              </Card>
            );

            if (item.link) {
              return (
                <a
                  key={index}
                  href={item.link}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="block no-underline h-full"
                >
                  {cardElement}
                </a>
              );
            }

            return <div key={index} className="h-full">{cardElement}</div>;
          })}
        </div>
      </div>
    </section>
  );
}