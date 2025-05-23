import React from "react";

const HeroSection = () => {
  return (
    <div className="hero bg-base-200 h-full">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl p-3 font-bold font-[Roboto]">
            <span>Benvingudis a</span><br /><span className="tracking-wider bg-gradient-to-r from-violet-600 via-blue-500 via-cyan-400 via-green-400 via-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text font-extrabold">PRISMA</span><br /><span>Defense Hub</span>  
          </h1>
          <h2 className="py-6 text-xl font-[Roboto]">
            <span>Seguretat digital per a la comunitat:</span><br /><span> perquè les identitats són per celebrar-les, no per filtrar-les.</span>
          </h2>
          <p className="py-6 font-[Roboto]">
            PRISMA és un hub de defensa digital creat per la comunitat, per a la comunitat. La nostra missió és proporcionar recursos i suport a aquelles persones que busquen millorar la seva seguretat digital i protegir les seves identitats en línia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
