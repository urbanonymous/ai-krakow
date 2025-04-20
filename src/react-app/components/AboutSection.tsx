import { cn } from '@/lib/utils';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4">Welcome to <span className="text-[#F97316]">AI Kraków</span></h2>
          <p className="text-lg text-muted-foreground">
            A relaxed gathering for the AI-curious in Kraków
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className={cn(
            "bg-muted rounded-lg p-8",
            "border border-border",
            "animate-fade-in [animation-delay:200ms]"
          )}>
            <h3 className="heading-md mb-4">What's AI Kraków?</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-6 h-6 mt-1 flex-shrink-0 flex items-center justify-center rounded-full bg-[#F97316] text-white font-bold">✓</div>
                <p>Share your AI projects or side hustles</p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 mt-1 flex-shrink-0 flex items-center justify-center rounded-full bg-[#F97316] text-white font-bold">✓</div>
                <p>Brainstorm startup ideas or creative AI uses</p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 mt-1 flex-shrink-0 flex items-center justify-center rounded-full bg-[#F97316] text-white font-bold">✓</div>
                <p>Learn from others, from coders to newbies</p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 mt-1 flex-shrink-0 flex items-center justify-center rounded-full bg-[#F97316] text-white font-bold">✓</div>
                <p>Connect over coffee, drinks, or a park picnic</p>
              </li>
            </ul>
            <p className="mt-6 text-muted-foreground">
              Think: AI + community + creativity in Kraków's coolest spots.
            </p>
          </div>
          
          <div className={cn(
            "bg-muted rounded-lg p-8",
            "border border-border",
            "animate-fade-in [animation-delay:400ms]"
          )}>
            <h3 className="heading-md mb-4">Who's This For?</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-6 h-6 mt-1 flex-shrink-0 flex items-center justify-center rounded-full bg-[#F97316] text-white font-bold">✓</div>
                <p>Developers coding with LLMs or AI tools</p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 mt-1 flex-shrink-0 flex items-center justify-center rounded-full bg-[#F97316] text-white font-bold">✓</div>
                <p>Designers exploring AI-driven art or UX</p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 mt-1 flex-shrink-0 flex items-center justify-center rounded-full bg-[#F97316] text-white font-bold">✓</div>
                <p>Founders dreaming up AI startups</p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 mt-1 flex-shrink-0 flex items-center justify-center rounded-full bg-[#F97316] text-white font-bold">✓</div>
                <p>Students & researchers diving into AI</p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 mt-1 flex-shrink-0 flex items-center justify-center rounded-full bg-[#F97316] text-white font-bold">✓</div>
                <p>Or just folks wondering, "What can AI do for me?"</p>
              </li>
            </ul>
            <p className="mt-6 text-muted-foreground">
              No expertise needed—just bring your curiosity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
