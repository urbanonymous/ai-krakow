
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
      <div className="container-custom relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-mono tracking-tight mb-8">
            AI Kraków
            <br />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl font-sans">
            An independent Kraków notebook for AI builders, founders, researchers, and curious minds. Read practical notes, local context, and ideas worth exploring.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#blog" 
              className="braun-button-primary"
            >
              READ LATEST POSTS
            </a>
            <a 
              href="#about" 
              className="braun-button-secondary"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
