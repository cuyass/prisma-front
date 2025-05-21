import React from 'react';
import Button from './Button';

const PaginationButton = ({ children, onClick, disabled = false, isActive = false }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant={isActive ? 'primary' : 'ghost'}
      isActive={isActive}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Button>
  );
};

export default PaginationButton;
