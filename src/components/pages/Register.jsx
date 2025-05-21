import React, { useState, useEffect } from 'react';
import Button from '../buttons/Button';
import { Mail } from 'lucide-react';

const Register = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [validationMsg, setValidationMsg] = useState('');
    const [apiMsg, setApiMsg] = useState('');
    const [apiStatus, setApiStatus] = useState('');

    const validateEmail = (value) => {
        if (!value) {
            return "El camp de correu és obligatori.";
        }
        if (!emailRegex.test(value)) {
            return "El format del correu no és vàlid.";
        }
        return '';
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        setValidationMsg(validateEmail(e.target.value));
        setApiMsg('');
        setApiStatus('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validation = validateEmail(email);
        if (validation) {
            setValidationMsg(validation);
            return;
        }

        setLoading(true);
        setApiMsg('');
        setApiStatus('');
        try {
            const response = await fetch('http://localhost:8080/api/v1/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setApiMsg("Registre completat amb èxit!");
                setApiStatus('success');
                setEmail('');
            } else {
                let errorMsg = 'Error inesperat';
                try {
                    const errorData = await response.json();
                    errorMsg = errorData.message || errorMsg;
                } catch {
                    // Si no és JSON, mantenim el missatge d'error per defecte
                }
                setApiMsg(errorMsg);
                setApiStatus('error');
            }
        } catch (error) {
            setApiMsg('Error de xarxa: ' + error.message);
            setApiStatus('error');
        } finally {
            setLoading(false);
        }
    };

    const isEmailValid = !validateEmail(email);

    useEffect(() => {
        if (!apiMsg) return;
        const timeout = setTimeout(() => {
            setApiMsg('');
            setApiStatus('');
        }, 4000);

        return () => clearTimeout(timeout);
    }, [apiMsg]);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-[color:var(--color-base-200)] px-4">
            <div className="w-full max-w-sm">
                <div className="flex flex-col items-center mb-8">
                    <Mail size={56} color="var(--color-accent)" className="mb-2" />
                    <h1 className="text-4xl mb-2 text-[color:var(--color-base-content)] font-[Righteous] tracking-wider">
                        Registra't!
                    </h1>
                    <p className="text-[color:var(--color-base-content)] font-[Roboto] text-center opacity-70">
                        Introdueix el teu email per començar a utilitzar l'aplicació.
                    </p>
                </div>
                {apiMsg && (
                    <div
                        className={`mb-4 px-4 py-2 rounded ${
                            apiStatus === 'success'
                                ? 'bg-success text-success-content border border-green-800'
                                : 'bg-error text-error-content border border-red-800'
                        }`}
                    >
                        {apiMsg}
                    </div>
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
                                onChange={handleChange}
                                required
                                className={`input input-bordered pl-10 w-full ${validationMsg ? 'input-error' : ''}`}
                                placeholder="correu@exemple.com"
                                aria-invalid={!!validationMsg}
                                aria-describedby="email-validation"
                            />
                        </div>
                        {validationMsg && (
                            <span id="email-validation" className="text-error text-sm mt-1">
                                {validationMsg}
                            </span>
                        )}
                    </label>
                    <Button
                        type="submit"
                        loading={loading}
                        disabled={loading || !isEmailValid}
                        variant="accent"
                        className="w-full"
                    >
                        Registrar-se!
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Register;
