import React from "react";

const Card = ({ image, icon, title, description, actionText = "Llegir més", onClick }) => {
    return (
        <div className="card bg-[color:var(--color-base-100)] w-full shadow-sm border border-[color:var(--color-base-300)] rounded-[var(--radius-box)]">
            <figure className="px-1 pt-5 bg-[color:var(--color-base-200)]">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="rounded-xl w-60 h-35 object-cover mb-4"
                    />
                ) : icon ? (
                    <div className="text-6xl mb-4 text-[color:var(--color-accent)]">{icon}</div>
                ) : null}
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-[color:var(--color-base-content)]">{title}</h2>
                <p className="text-[color:var(--color-base-content)] opacity-70">{description}</p>
                <div className="card-actions">
                    <button
                        className="btn bg-[color:var(--color-accent)] text-[color:var(--color-accent-content)] hover:opacity-90 border-none rounded-[var(--radius-selector)]"
                        onClick={onClick}
                    >
                        {actionText}
                    </button>
                </div>
            </div>
        </div>

    );
};
export default Card;