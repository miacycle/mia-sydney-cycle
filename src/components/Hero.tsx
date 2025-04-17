
import { Github } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 fade-in">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-primary">Mia Grenell</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Graduate Research Assistant & Open Source Engineer
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Based in Sydney, Australia 🇦🇺
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="gap-2" asChild>
                <a href="https://github.com/miacycle" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="http://layer5.io/community/members/mia-grenell" target="_blank" rel="noopener noreferrer">
                  Layer5 Profile
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/lovable-uploads/623d0e6d-b4d7-44a4-97f9-a33b521935cf.png"
              alt="Mia Grenell"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
