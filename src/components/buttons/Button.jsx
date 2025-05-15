import React from 'react';

const Button = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  ...props
}) => {
 
  const variantColors = {
    primary: ['var(--color-primary)', 'var(--color-primary-content)'],
    secondary: ['var(--color-secondary)', 'var(--color-secondary-content)'],
    accent: ['var(--color-accent)', 'var(--color-accent-content)'],
    neutral: ['var(--color-neutral)', 'var(--color-neutral-content)'],
    success: ['var(--color-success)', 'var(--color-success-content)'],
    warning: ['var(--color-warning)', 'var(--color-warning-content)'],
    error: ['var(--color-error)', 'var(--color-error-content)'],
  };

  const [bgColor, textColor] = variantColors[variant] || variantColors.primary;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      {...props}
      style={{
        backgroundColor: disabled ? 'gray' : bgColor,
        color: disabled ? '#ccc' : textColor,
        borderRadius: 'var(--radius-field)',
        padding: '0.5rem 1.25rem',
        border: 'none',
        fontWeight: '600',
        fontFamily: 'var(--font-sans)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={e => {
        if (!disabled) e.currentTarget.style.filter = 'brightness(1.1)';
      }}
      onMouseLeave={e => {
        if (!disabled) e.currentTarget.style.filter = 'brightness(1)';
      }}
    >
      {children}
    </button>
  );
};

export default Button;
