import { useEffect, useState } from "react";

const FULL_TEXT = "WORK IN PROGRESS";
const TYPING_SPEED = 90; // ms por caracter

export default function WorkInProgress() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  // Efecto de escritura: agrega un caracter a la vez.
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, TYPING_SPEED);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center text-center max-w-3xl">
      {/* WORK IN PROGRESS: se escribe tipo codigo */}
      <h1 className="font-bold uppercase tracking-[0.25em] text-2xl sm:text-4xl lg:text-5xl flex items-center">
        <span className="whitespace-pre">{typed}</span>
        {/* Cursor: pegado al texto, parpadea solo al terminar de escribir */}
        <span
          aria-hidden="true"
          className={`inline-block w-[0.6ch] h-[1em] bg-text-presentation ml-1 ${
            done ? "animate-blinking-cursor" : ""
          }`}
        />
      </h1>

      {/* Link: aparece con fade in al terminar de escribir */}
      <div className="mt-10 h-16 flex items-center justify-center">
        {done && (
          <a
            href="https://www.mati-dev.cl"
            className="border border-text-presentation/40 rounded-full px-6 py-3 text-sm sm:text-base tracking-widest uppercase hover:bg-text-presentation hover:text-primary transition-colors duration-300 animate-fadeIn"
          >
            www.mati-dev.cl
          </a>
        )}
      </div>
    </div>
  );
}
