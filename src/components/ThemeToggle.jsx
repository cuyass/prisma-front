import React from "react";

function ThemeToggle() {
    const toggleTheme = () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'prisma-light' ? 'prisma-dark' : 'prisma-light';
      document.documentElement.setAttribute('data-theme', next);
    };
  
    return <button className="btn btn-accent" onClick={toggleTheme}>Canviar tema</button>;
  }
export default ThemeToggle;  