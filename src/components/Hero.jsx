import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero bg-base-200 h-full">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Benvingudis a PRISMA Defense Hub
          </h1>
          <h2 className="py-6 text-xl">
            Seguretat digital per la comunitat: perquè les identitats són per celebrar-les, no per filtrar-les.
          </h2>
          {/* <Link to="/explore">
            <button className="btn btn-primary mr-4">Find events</button>
          </Link>
          <Link to="/events/create">
            <button className="btn btn-secondary">Create event</button>
          </Link> */}
          <p className="py-6">
            PRISMA és un hub de defensa digital creat per la comunitat, per a la comunitat. La nostra missió és proporcionar recursos i suport a aquells que busquen millorar la seva seguretat digital i protegir les seves identitats en línia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
