import React from "react";
import Card from "../Card";

const FeaturedContent = () => {
    const resources = [
      {
        icon: "🔐",
        title: "Fonaments de Privacitat",
        description: "Aprèn els conceptes bàsics per protegir la teva informació personal en línia.",
        actionText: "Començar",
        route: "/pages/learn/privacy-basics"
      },
      {
        icon: "📱",
        title: "Seguretat en Aplicacions de Cites",
        description: "Guia per utilitzar aplicacions de cites de manera segura i protegir la teva identitat.",
        actionText: "Llegir Guia",
        route: "/pages/learn/dating-app-safety"
      },
      {
        icon: "👥",
        title: "Activisme Digital Segur",
        description: "Estratègies per activistes LGBTQ+ per mantenir-se segurs mentre advocen pel canvi.",
        actionText: "Explorar",
        route: "/pages/learn/digital-activism"
      },
      {
        icon: "🗝️",
        title: "Gestió de Contrasenyes",
        description: "Crea i gestiona contrasenyes fortes per protegir els teus comptes en línia.",
        actionText: "Aprendre",
        route: "/pages/learn/password-management"
      }
    ];
  
    const handleCardClick = (route) => {
      Navigate(route);
    };
  
    return (
      <div className="px-6 max-w-6xl mx-auto mb-12">
        <h2 className="text-xl font-bold text-center mb-6 text-[color:var(--color-base-content)]">
          Recursos Destacats
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card 
              key={index}
              icon={resource.icon}
              image={resource.image}
              title={resource.title}
              description={resource.description}
              actionText={resource.actionText}
              onClick={() => handleCardClick(resource.route)}
            />
          ))}
        </div>
      </div>
    );
  };
export default FeaturedContent;