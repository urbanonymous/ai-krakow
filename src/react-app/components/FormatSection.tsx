import { cn } from '@/lib/utils';

const FormatSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-lg mb-6 text-center">How It Works</h2>
          
          <div className="bg-white rounded-lg shadow-sm border border-border p-8 mb-8">
            <p className="text-lg mb-6">
              Our meetups are chill and unscripted:
            </p>
            
            <div className="space-y-6">
              <div className={cn(
                "flex items-start gap-4 p-4 rounded-md",
                "bg-muted/50 border border-border",
                "animate-fade-in [animation-delay:100ms]"
              )}>
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-aikrakow-purple text-white font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Quick intros</h3>
                  <p>Say who you are, what you're into</p>
                </div>
              </div>
              
              <div className={cn(
                "flex items-start gap-4 p-4 rounded-md",
                "bg-muted/50 border border-border",
                "animate-fade-in [animation-delay:200ms]"
              )}>
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-aikrakow-purple text-white font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Open chats</h3>
                  <p>Talk projects, tools, or wild ideas</p>
                </div>
              </div>
              
              <div className={cn(
                "flex items-start gap-4 p-4 rounded-md",
                "bg-muted/50 border border-border",
                "animate-fade-in [animation-delay:300ms]"
              )}>
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-aikrakow-purple text-white font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Mini-pitches</h3>
                  <p>Share a startup idea or question (optional)</p>
                </div>
              </div>
              
              <div className={cn(
                "flex items-start gap-4 p-4 rounded-md",
                "bg-muted/50 border border-border",
                "animate-fade-in [animation-delay:400ms]"
              )}>
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-aikrakow-purple text-white font-bold">4</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Casual vibes</h3>
                  <p>Grab a drink, make friends, spark collabs</p>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-muted-foreground">
              We rotate venues—cafés, bars, parks, or co-working spaces—for a fresh, nomadic feel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormatSection;
