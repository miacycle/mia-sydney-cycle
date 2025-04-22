import { Button } from "./ui/button";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 page-transition">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg mb-8 text-center">
          Feel free to reach out through my social profiles:
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/miacycle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            GitHub
          </a>
          <a
            href="http://layer5.io/community/members/mia-grenell"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Layer5 Profile
          </a>
        </div>
      </div>
    </div>

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
  );
};

export default Contact;
