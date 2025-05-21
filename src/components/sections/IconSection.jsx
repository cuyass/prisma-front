import React from "react";

const IconSection = () => {
    return (
        <div className="bg-base-200 flex justify-center p-6 gap-8 flex-wrap">

            <div className="text-center w-24">
                <div className="bg-gradient-to-br from-[color:var(--color-error)] via-[color:var(--color-warning)] to-[color:var(--color-accent)] w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-3 p-1">
                    <div className="bg-[color:var(--color-base-100)] w-full h-full rounded-full flex justify-center items-center">
                        <span className="text-2xl text-[color:var(--color-accent)]">🔒</span>
                    </div>
                </div>
                <div className="text-sm text-[color:var(--color-base-content)] font-[Roboto]">Privacitat Digital</div>
            </div>
            <div className="text-center w-24">
                <div className="bg-gradient-to-br from-[color:var(--color-error)] via-[color:var(--color-warning)] to-[color:var(--color-accent)] w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-3 p-1">
                    <div className="bg-[color:var(--color-base-100)] w-full h-full rounded-full flex justify-center items-center">
                        <span className="text-2xl text-[color:var(--color-accent)]">🛡️</span>
                    </div>
                </div>
                <div className="text-sm text-[color:var(--color-base-content)] font-[Roboto]">Protecció d'Identitat</div>
            </div>
            <div className="text-center w-24">
                <div className="bg-gradient-to-br from-[color:var(--color-error)] via-[color:var(--color-warning)] to-[color:var(--color-accent)] w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-3 p-1">
                    <div className="bg-[color:var(--color-base-100)] w-full h-full rounded-full flex justify-center items-center">
                        <span className="text-2xl text-[color:var(--color-accent)]">💬</span>
                    </div>
                </div>
                <div className="text-sm text-[color:var(--color-base-content)] font-[Roboto]">Comunicació Segura</div>
            </div>
            <div className="text-center w-24">
                <div className="bg-gradient-to-br from-[color:var(--color-error)] via-[color:var(--color-warning)] to-[color:var(--color-accent)] w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-3 p-1">
                    <div className="bg-[color:var(--color-base-100)] w-full h-full rounded-full flex justify-center items-center">
                        <span className="text-2xl text-[color:var(--color-accent)]">🔍</span>
                    </div>
                </div>
                <div className="text-sm text-[color:var(--color-base-content)] font-[Roboto]">Navegació Anònima</div>
            </div>
        </div>
    );
};
export default IconSection;