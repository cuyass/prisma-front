import React, { useEffect, useState } from 'react';
import Button from './buttons/Button';

const Alert = ({
    children,
    variant = 'neutral',
    duration = null,
    closable = false,
    ...props
}) => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (duration) {
            const timer = setTimeout(() =>
                setVisible(false), duration * 1000);

            return () => clearTimeout(timer);
        }
    }, [duration]);

    const baseStyles = 'alert';

    const variants = {


        neutral: ['var(--color-neutral)', 'var(--color-neutral-content)'],
        success: ['var(--color-success)', 'var(--color-success-content)'],
        warning: ['var(--color-warning)', 'var(--color-warning-content)'],
        error: ['var(--color-error)', 'var(--color-error-content)'],
    };

    const variantStyle = variants[variant] || '';

    if (!visible) return null;

    return (
        <div role="alert" className={`relative ${baseStyles} ${variantStyle}`} {...props}>
            <span>{children}</span>
            {closable && (
                <Button
                    onClick={() => setVisible(false)}
                    variant="neutral"
                    className="btn-sm btn-circle btn-ghost absolute top-2 right-2"
                    aria-label="Close alert"
                >
                    ✕
                </Button>
            )}
        </div>
    );
};

export default Alert;
