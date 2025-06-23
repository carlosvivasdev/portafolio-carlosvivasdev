import './btn.css';
import { useState } from 'react';

interface BtnMainProps {
    cambiarFrase: () => void;
}

export const Btn_main = ({ cambiarFrase }: BtnMainProps) => {
    const [animando, setAnimando] = useState(false);

    const handleClick = () => {
        cambiarFrase();

        // Solo aplica animación en móviles
        if (window.innerWidth <= 400) {
            setAnimando(true);
            setTimeout(() => setAnimando(false), 600); // 0.8s x 2 (ida y vuelta)
        }
    };

    return (
        <button
            className={`btn ${animando ? 'btn-mobile-glitch' : ''}`}
            onClick={handleClick}
        >
            Dame otra frase
        </button>
    );
};
