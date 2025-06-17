// src/App.tsx
import gifMain from "./assets/output-onlinegiftools.gif"
import "./App.css";
import { useRef, useState } from "react";
import { Background } from "./components/background/background";
import { Btn_main } from "./components/button/btn";

function App() {
  const frases = [
    "Sí, estoy haciendo la página... pero me distraje viendo memes.",
    "Tranquilo, ya casi la termino... faltan solo como 843 cosas.",
    "No está rota, simplemente aún no la he terminado (algun dia).",
    "Coming soon… probablemente. Tal vez. Algún día.",
    "Mantenimiento... o procrastinación con estilo.",
    "Paciencia... el código no se escribe solo (aunque debería).",
    "Estos mensajes fueron aprobados por Carlos.",
    "DevOps nivel: más café que paciencia.",
    "Si ves esto, es culpa del universo, no mía.",
    "Estoy ocupado mirando fijamente el monitor esperando que se arregle solo.",
    "¿Documentación? ¿Qué es eso? ¿Se come?",
    "Esto iba a ser una página épica, pero me ganó la pereza.",
    "Si estás leyendo esto, significa que aún no terminé. Qué sorpresa.",
    "Esta página aún no existe... como mi motivación.",
    "Todo iba bien, hasta que dije: ‘lo hago mañana’.",
    "Error 404 (ganas no encontradas).",
    "Estoy haciendo pruebas... de paciencia.",
    "Progreso del proyecto: 1% hecho, 99% memes.",
    "Haz como yo: no esperes nada y no te decepcionarás.",
    "La web se está cocinando... en fuego lento, como todo lo bueno (según yo).",
    "¿Por qué funciona? – No lo sé.",
    "Entre un ‘npm install’ y otro, me tomo otro café.",
    "Este deploy fue más lento que un pit stop de Ferrari.",
    "Carlos y Ferrari tienen algo en común: los dos dicen que todo va bien... hasta que no.",
    "Mis commits son como las estrategias de Ferrari: suenan bien al principio... luego lloras.",
    "Disponible pronto. O no. ¿Quién sabe?",
    "Mejor esto que una pantalla en blanco. ¿No?",
    "Se suponía que ya iba a estar lista. Se suponía...",
    "¡Gracias por tu interés!",
  ];

  const [fraseActual, setFraseActual] = useState(frases[0]);
  const frasesRestantes = useRef([...frases.filter(f => f !== frases[0])]);

  const cambiarFrase = () => {
    // Si ya se usaron todas, reinicia
    if (frasesRestantes.current.length === 0) {
      frasesRestantes.current = [...frases.filter(f => f !== fraseActual)];
    }

    const randomIndex = Math.floor(Math.random() * frasesRestantes.current.length);
    const nuevaFrase = frasesRestantes.current.splice(randomIndex, 1)[0];

    setFraseActual(nuevaFrase);
  };

  return (
    <>
      <Background />
      <div className="container">
        <h2>PROXIMAMENTE</h2>
        <img src={gifMain} alt="Cargando..." />
        <p> {fraseActual} </p>
        <Btn_main cambiarFrase={cambiarFrase} />
      </div>
    </>
  );
}

export default App;
