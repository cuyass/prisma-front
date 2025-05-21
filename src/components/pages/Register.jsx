import React, { useState } from 'react';
import Button from '../buttons/Button';
import Alert from '../Alert';
import { Mail } from 'lucide-react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('success');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            const response = await fetch('http://localhost:8080/api/v1/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage("Registre completat amb èxit!");
                setVariant('success');
                setEmail('');
            } else {
                let errorMsg = 'Error inesperat';
                try {
                    const errorData = await response.json();
                    errorMsg = errorData.message || errorMsg;
                } catch {
                    // Si no es JSON, deja el mensaje por defecto
                }
                setMessage(errorMsg);
                setVariant('error');
            }
        } catch (error) {
            setMessage('Error de xarxa: ' + error.message);
            setVariant('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-[color:var(--color-base-200)] px-4">
            <div className="flex flex-col items-center mb-8">
                <Mail size={56} color="var(--color-accent)" className="mb-2" />
                <h1 className="text-3xl font-bold mb-2 text-[color:var(--color-base-content)]">
                    Registra el teu correu
                </h1>
                <p className="text-[color:var(--color-base-content)] opacity-70">
                    Introdueix el teu email per començar a utilitzar l'aplicació.
                </p>
            </div>
            <div className="w-full max-w-sm">
                {message && (
                    <Alert
                        variant={variant}
                        duration={variant === 'success' ? 4 : null}
                        closable
                        className="mb-4"
                    >
                        {message}
                    </Alert>
                )}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                    <label className="flex flex-col gap-1 text-left">
                        Email:
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[color:var(--color-accent)]">
                                <Mail size={20} />
                            </span>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                className="input input-bordered pl-10 w-full"
                                placeholder="correu@exemple.com"
                            />
                        </div>
                    </label>
                    <Button
                        type="submit"
                        loading={loading}
                        disabled={loading || !email}
                        variant="accent"
                        className="w-full"
                    >
                        Registrar
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Register;
