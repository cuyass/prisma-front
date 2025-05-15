import React from "react";

const IconSection = () => {
    return (
        <div className="flex flex-wrap justify-center gap-8 mb-12 px-4">
            <div className="text-center w-24">
                <div className="bg-[color:var(--color-base-200)] w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-3 text-2xl text-[color:var(--color-accent)]">
                    🔒
                </div>
                <div className="text-sm text-[color:var(--color-base-content)]">Privacitat Digital</div>
            </div>

            <div className="text-center w-24">
                <div className="bg-[color:var(--color-base-200)] w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-3 text-2xl text-[color:var(--color-accent)]">
                    🛡️
                </div>
                <div className="text-sm text-[color:var(--color-base-content)]">Protecció d'Identitat</div>
            </div>

            <div className="text-center w-24">
                <div className="bg-[color:var(--color-base-200)] w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-3 text-2xl text-[color:var(--color-accent)]">
                    💬
                </div>
                <div className="text-sm text-[color:var(--color-base-content)]">Comunicació Segura</div>
            </div>

            <div className="text-center w-24">
                <div className="bg-[color:var(--color-base-200)] w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-3 text-2xl text-[color:var(--color-accent)]">
                    🔍
                </div>
                <div className="text-sm text-[color:var(--color-base-content)]">Navegació Anònima</div>
            </div>
        </div>
    );
};
export default IconSection;