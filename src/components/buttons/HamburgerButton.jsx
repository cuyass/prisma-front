import React from 'react';

const HamburgerButton = ({ onClick, tabIndex = 0, ariaLabel = 'Menu' }) => {
  const styles = {
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '3rem',
      height: '3rem',
      padding: '0.25rem',
      marginRight: '1rem',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-field)',
      transition: 'background-color 0.2s ease',
    },
    svg: {
      width: '2rem',
      height: '2rem',
      stroke: 'var(--color-base-content)',
      strokeLinecap: 'square',
      strokeLinejoin: 'round',
      strokeWidth: 2,
    },
    buttonHover: {
      backgroundColor: 'var(--color-accent)',
    }
  };

  const [hover, setHover] = React.useState(false);

  return (
    <button
      type="button"
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      onClick={onClick}
      style={{
        ...styles.button,
        ...(hover ? styles.buttonHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        style={styles.svg}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  );
};

export default HamburgerButton;
