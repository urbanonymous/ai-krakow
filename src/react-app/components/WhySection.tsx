
import { cn } from '@/lib/utils';

const WhySection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <h2 className="heading-lg mb-6">Why AI Kraków?</h2>
              <p className="text-lg mb-4">
                AI is more than tech, it's a spark for creativity and connection. Kraków's vibrant mix of devs, makers, and dreamers makes it the perfect place to build a community around AI.
              </p>
              <p className="text-lg mb-4">
                Let's create a space where ideas flow, collabs happen, and AI feels human.
              </p>
              <div className="mt-8">
                <a 
                  href="#get-involved" 
                  className={cn(
                    "bg-[#F97316] hover:bg-[#F97316]/90 text-white",
                    "px-6 py-3 rounded-md font-medium transition-all inline-flex items-center gap-2"
                  )}
                >
                  Get Involved
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className={cn(
                "rounded-lg overflow-hidden",
                "bg-gradient-to-br from-gray-200 to-gray-300",
                "p-8 text-foreground",
                "animate-fade-in [animation-delay:200ms]"
              )}>
                <h3 className="text-xl font-medium mb-4">AI Kraków Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-0.5 flex-shrink-0 flex items-center justify-center rounded-full bg-aikrakow-orange text-white">✓</div>
                    <p>Collaboration Over Competition: Building Together, Growing Together</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-0.5 flex-shrink-0 flex items-center justify-center rounded-full bg-aikrakow-orange text-white">✓</div>
                    <p>Knowledge Sharing: Every Idea is a Seed for Innovation</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-0.5 flex-shrink-0 flex items-center justify-center rounded-full bg-aikrakow-orange text-white">✓</div>
                    <p>Inclusive Learning: No Experience Required, Curiosity Welcome</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-0.5 flex-shrink-0 flex items-center justify-center rounded-full bg-aikrakow-orange text-white">✓</div>
                    <p>Serious Impact, Relaxed Vibes: Where Fun Meets Function</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-0.5 flex-shrink-0 flex items-center justify-center rounded-full bg-aikrakow-orange text-white">✓</div>
                    <p>Tech with Heart: AI Empowering Human Connections</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;

