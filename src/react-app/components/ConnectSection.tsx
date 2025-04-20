
import { cn } from '@/lib/utils';

const ConnectSection = () => {
  const connections = [
    {
      title: "WhatsApp",
      description: "Join AI Kraków for updates and chats.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      url: "https://chat.whatsapp.com/C6fW7HApMXp1and12BT6AJ",
      color: "bg-[#0088cc]/10 text-[#0088cc]",
      delay: "100ms"
    },
    {
      title: "Notion Hub",
      description: "Explore our shared Notion page for AI tools, ideas, and resources.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <path d="M4 8h18"></path>
          <path d="M8 4v4"></path>
        </svg>
      ),
      url: "https://www.notion.so/AI-Krakow-1dbbb67738eb8039a827e1ac3e05b5f1?pvs=4",
      color: "bg-gray-900/10 text-gray-900",
      delay: "200ms"
    },
    {
      title: "X Thread",
      description: "Follow #AIKrakow on X to share projects and stay looped in.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ),
      url: "https://x.com/search?q=%23AIKrakow",
      color: "bg-black/10 text-black",
      delay: "300ms"
    },
    {
      title: "Email",
      description: "Got ideas or want to co-organize? Reach us at urbano@ai-krakow.com.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      url: "mailto:urbano@ai-krakow.com",
      color: "bg-aikrakow-purple/10 text-aikrakow-purple",
      delay: "400ms"
    }
  ];

  return (
    <section id="connect" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4">Stay Connected</h2>
          <p className="text-lg text-muted-foreground">
            Join our community and stay updated on upcoming meetups and discussions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {connections.map((item, index) => (
            <a 
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "block p-6 rounded-lg border border-border",
                "hover:shadow-md transition-all",
                "animate-fade-in",
              )}
              style={{ animationDelay: item.delay }}
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center",
                  item.color
                )}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
