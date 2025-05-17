import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card";
import Privacy from "../../assets/images/privacy-image.jpg";
import Apps from "../../assets/images/apps-image.jpg";
import Activism from "../../assets/images/activism-image.jpg";
import Password from "../../assets/images/password-image.jpg";

const FeaturedContent = () => {
    const navigate = useNavigate();

    const resources = [
      {
        image: Privacy,
        title: "Fonaments de Privacitat",
        description: "Aprèn els conceptes bàsics per protegir la teva informació personal en línia.",
        actionText: "Començar",
        path: "/learn"
      },
      {
        image: Apps,
        title: "Seguretat en Aplicacions de Cites",
        description: "Guia per utilitzar aplicacions de cites de manera segura i protegir la teva identitat.",
        actionText: "Llegir Guia",
        path: "/learn"
      },
      {
        image: Activism,
        title: "Activisme Digital Segur",
        description: "Estratègies per activistes LGBTQ+ per mantenir-se segurs mentre advocen pel canvi.",
        actionText: "Explorar",
        path: "/learn"
      },
      {
        image: Password,
        title: "Gestió de Contrasenyes",
        description: "Crea i gestiona contrasenyes fortes per protegir els teus comptes en línia.",
        actionText: "Aprendre",
        path: "/learn"
      }
    ];
  
    const handleCardClick = (path) => {
      navigate(path);
    };
  
    return (
      <div className="px-6 max-w-6xl mx-auto mb-12">
        <h2 className="text-xl font-bold text-center mb-6 text-[color:var(--color-base-content)] font-[Roboto]">
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
              onClick={() => handleCardClick(resource.path)}
            />
          ))}
        </div>
      </div>
    );
  };
export default FeaturedContent;