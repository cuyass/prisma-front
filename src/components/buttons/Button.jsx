import React from 'react';
import clsx from 'clsx';

const Button = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = 'primary',
  isActive = false,
  className = '',
  ...props
}) => {

  const variantVars = {
    primary: ['var(--color-primary)', 'var(--color-primary-content)', 'var(--color-primary)'],
    secondary: ['var(--color-secondary)', 'var(--color-secondary-content)', 'var(--color-secondary)'],
    accent: ['var(--color-accent)', 'var(--color-accent-content)', 'var(--color-accent)'],
    neutral: ['var(--color-neutral)', 'var(--color-neutral-content)', 'var(--color-neutral)'],
    success: ['var(--color-success)', 'var(--color-success-content)', 'var(--color-success)'],
    info: ['var(--color-info)', 'var(--color-info-content)', 'var(--color-info)'],
    warning: ['var(--color-warning)', 'var(--color-warning-content)', 'var(--color-warning)'],
    error: ['var(--color-error)', 'var(--color-error-content)', 'var(--color-error)'],
    ghost: ['transparent', 'var(--color-primary)', 'var(--color-primary)'],
  };

  const [bgColor, textColor, borderColor] = variantVars[variant] || variantVars.primary;

  const baseClasses =
    'transition-all font-semibold focus:outline-none px-5 py-2';
  const disabledClasses = disabled || loading ? 'opacity-50' : '';

  const activeStyle = isActive
    ? {
        border: `2px solid ${borderColor}`,
        fontWeight: 700,
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
      }
    : {};

  const hoverStyle =
    !disabled && !loading && !isActive
      ? {
          filter: 'brightness(1.07)',
        }
      : {};

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(baseClasses, disabledClasses, className)}
      aria-current={isActive ? 'page' : undefined}
      style={{
        backgroundColor: disabled || loading ? 'gray' : bgColor,
        color: disabled || loading ? '#ccc' : textColor,
        borderRadius: 'var(--radius-field)',
        border: isActive ? `2px solid ${borderColor}` : 'var(--border) solid transparent',
        fontWeight: isActive ? 700 : 600,
        textDecoration: isActive ? 'underline' : 'none',
        textUnderlineOffset: isActive ? '4px' : undefined,
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        ...activeStyle,
        ...hoverStyle,
        transition: 'background-color 0.3s, border 0.3s, text-decoration 0.2s, filter 0.2s',
      }}
      onMouseEnter={e => {
        if (!disabled && !loading && !isActive) {
          e.currentTarget.style.filter = 'brightness(1.07)';
          e.currentTarget.style.textDecoration = 'underline';
          e.currentTarget.style.textUnderlineOffset = '4px';
        }
      }}
      onMouseLeave={e => {
        if (!disabled && !loading && !isActive) {
          e.currentTarget.style.filter = '';
          e.currentTarget.style.textDecoration = 'none';
        }
      }}
      {...props}
    >
      {loading ? 'Guardant...' : children}
    </button>
  );
};

export default Button;
