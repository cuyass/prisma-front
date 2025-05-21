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
    }, [duration, children]);



    const variantClasses = {
        neutral: 'alert-info',
        success: 'alert-success',
        warning: 'alert-warning',
        error: 'alert-error',
    };

    const alertClass = variantClasses[variant] || 'alert-info';

    if (!visible) return null;

    return (
        <div role="alert" className={`alert ${alertClass} shadow-lg relative`} {...props}>
            <span>{children}</span>
            {closable && (
                <Button
                    onClick={() => setVisible(false)}
                    variant="neutral"
                    className="btn-sm btn-circle btn-ghost absolute top-2 right-2"
                    aria-label="Tancar alerta"
                >
                    ✕
                </Button>
            )}
        </div>
    );
};

export default Alert;
