import { useEffect, useState } from "react";
import Lanyard from "./Lanyard";

// Colores de la correa y el herraje por tema (la tarjeta siempre es blanca)
const THEME = {
  light: { strapColor: "#151A2E", metal: "graphite" },
  dark: { strapColor: "#52525B", metal: "silver" },
};

const supportsWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
};

// Sigue la clase `dark` del <html>, que cambia el interruptor de tema
const useDarkMode = () => {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    const read = () => setDark(root.classList.contains("dark"));
    read();
    const observer = new MutationObserver(read);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  return dark;
};

export default function ProfileLanyard({ frontImage, backImage, label }) {
  const dark = useDarkMode();
  const [webgl, setWebgl] = useState(true);

  useEffect(() => {
    setWebgl(supportsWebGL());
  }, []);

  // Sin WebGL se muestra la foto estática
  if (!webgl) {
    return (
      <img
        src={frontImage}
        alt={label}
        className="mx-auto h-full max-h-[420px] w-auto rounded-3xl border border-line object-cover shadow-elevated"
      />
    );
  }

  const { strapColor, metal } = THEME[dark ? "dark" : "light"];

  return (
    <div className="h-full w-full" role="img" aria-label={label}>
      <Lanyard
        frontImage={frontImage}
        backImage={backImage}
        imageFit="cover"
        cardColor="#ffffff"
        finish="glossy"
        cornerRadius={0.3}
        size={0.6}
        strapColor={strapColor}
        strapWidth={0.65}
        metal={metal}
        breeze={0.35}
      />
    </div>
  );
}
