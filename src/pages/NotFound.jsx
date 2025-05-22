import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import Button from '../components/buttons/Button';

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <AlertTriangle size={48} className="text-[color:var(--color-warning)] mb-4" />
            <h1 className="text-4xl font-bold mb-2">404 - Ooh, pàgina no trobada</h1>
            <p className="mb-6 text-lg opacity-70">
                Reina, ho sentim molt però no hem trobat la pàgina que busques.
            </p>
            <div className="gap-4 py-5 w-40">
                <Button variant="info" onClick={() => navigate(`/`)}>
                    Tornar a l'inici
                </Button>
            </div>
        </div>

    )
}

export default NotFound;
