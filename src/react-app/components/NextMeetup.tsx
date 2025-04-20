
import { cn } from '@/lib/utils';

const NextMeetup = () => {
  return (
    <section id="next-meetup" className="section-padding bg-white text-black relative z-10">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] text-sm font-medium mb-4">
            Coming Up
          </span>
          <h2 className="heading-lg text-black mb-4">Next Meetup</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={cn(
            "bg-gray-100 backdrop-blur-sm rounded-lg p-8",
            "border border-gray-200",
            "hover:transform hover:scale-[1.01] transition-all"
          )}>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3 text-black">
                <h3 className="text-2xl font-bold text-[#F97316] mb-6">
                  AI & Chill: First Gathering of the Curious
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <span className="text-lg">Saturday, May 10, 2025, 5:00 PM</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <span className="text-lg">Forum Przestrzenie, ul. Marii Konopnickiej 28, Kraków</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <span className="text-lg">You + ~20 AI-curious folks</span>
                  </div>
                </div>
                
                <p className="mb-6 text-black">
                  Join us at a cozy riverside spot to talk AI, side projects, and startup ideas. Bring your energy, a question, or just good vibes. All welcome, no pressure.
                </p>
                
                <p className="text-sm text-black/70">
                  Can't make it? Suggest a venue or date for the next one via email (<a href="mailto:hello@ai-krakow.com" className="text-[#F97316] hover:text-[#F97316]/80">hello@ai-krakow.com</a>).
                </p>
              </div>
              
              <div className="md:col-span-2">
                <div className="bg-gray-200 rounded-lg p-6 h-full flex flex-col justify-center">
                  <h4 className="text-xl font-medium mb-4 text-black">RSVP</h4>
                  <p className="mb-6 text-black">
                    Join our Telegram group to save your spot and stay updated.
                  </p>
                  <a 
                    href="https://t.me/+EXaAzkvvKh02YmQ0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(
                      "bg-[#F97316] hover:bg-[#F97316]/90",
                      "text-black font-medium px-5 py-3 rounded-md",
                      "flex items-center justify-center gap-2",
                      "transition-all"
                    )}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Join Telegram Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextMeetup;
