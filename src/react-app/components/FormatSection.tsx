import { cn } from '@/lib/utils';

const FormatSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-lg mb-6 text-center">What You'll Find</h2>
          
          <div className="bg-white rounded-lg shadow-sm border border-border p-8 mb-8">
            <p className="text-lg mb-6">
              A focused mix of local AI notes and builder-friendly resources:
            </p>
            
            <div className="space-y-6">
              <div className={cn(
                "flex items-start gap-4 p-4 rounded-md",
                "bg-muted/50 border border-border",
                "animate-fade-in [animation-delay:100ms]"
              )}>
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-aikrakow-purple text-white font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Practical notes</h3>
                  <p>Short explainers on tools, agents, prompts, and workflows</p>
                </div>
              </div>
              
              <div className={cn(
                "flex items-start gap-4 p-4 rounded-md",
                "bg-muted/50 border border-border",
                "animate-fade-in [animation-delay:200ms]"
              )}>
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-aikrakow-purple text-white font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Local context</h3>
                  <p>Observations from Kraków's builders, startups, and creative scene</p>
                </div>
              </div>
              
              <div className={cn(
                "flex items-start gap-4 p-4 rounded-md",
                "bg-muted/50 border border-border",
                "animate-fade-in [animation-delay:300ms]"
              )}>
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-aikrakow-purple text-white font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Idea sketches</h3>
                  <p>Small product ideas, research questions, and prototype prompts</p>
                </div>
              </div>
              
              <div className={cn(
                "flex items-start gap-4 p-4 rounded-md",
                "bg-muted/50 border border-border",
                "animate-fade-in [animation-delay:400ms]"
              )}>
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-aikrakow-purple text-white font-bold">4</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Reading paths</h3>
                  <p>Curated links and summaries for going deeper without getting lost</p>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-muted-foreground">
              The goal is simple: make AI easier to understand, evaluate, and use well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormatSection;
