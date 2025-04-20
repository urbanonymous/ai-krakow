
import { MailPlus, MapPin, Share2 } from 'lucide-react';
import React from 'react';

const GetInvolvedSection = () => {
  const involvementOptions = [
    {
      icon: <MapPin className="w-6 h-6 text-foreground" />,
      title: "Venue Suggestions",
      description: "Know a great café or park? Help us discover unique spaces for our meetups.",
      cta: "Suggest a Spot",
      action: () => window.location.href = "mailto:urbano@ai-krakow.com?subject=Venue Suggestion"
    },
    {
      icon: <MailPlus className="w-6 h-6 text-foreground" />,
      title: "Co-Organize",
      description: "Low commitment, high impact. Help pick spots or spread the word about AI Krakow.",
      cta: "Join Team",
      action: () => window.open("https://chat.whatsapp.com/C6fW7HApMXp1and12BT6AJ", "_blank")
    },
    {
      icon: <Share2 className="w-6 h-6 text-foreground" />,
      title: "Spread the Vibe",
      description: "Invite AI-curious friends or share our community on social media with #AIKrakow.",
      cta: "Share Now",
      action: () => window.open("https://x.com/intent/tweet?text=Joining%20AI%20Krakow%20-%20A%20casual%20meetup%20for%20AI%20enthusiasts!%20%23AIKrakow", "_blank")
    }
  ];

  return (
    <section id="get-involved" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4">Get Involved</h2>
          <p className="text-lg text-muted-foreground">
            Let's make Kraków the hub for AI-driven creativity. Your participation shapes our community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {involvementOptions.map((option, index) => (
            <div 
              key={index} 
              className="border border-border rounded-lg p-6 text-center transition-all hover:shadow-md group"
            >
              <div className="mb-4 flex justify-center">
                {option.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{option.title}</h3>
              <p className="text-muted-foreground mb-4">{option.description}</p>
              <button 
                onClick={option.action}
                className="braun-button-secondary w-full"
              >
                {option.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;

