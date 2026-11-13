import SpotlightCard from "./SpotlightCard";
import { useDarkMode } from "./useDarkMode";

const SHADOW = "0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08)";

/**
 * Tarjeta del sitio con efecto de luz (SpotlightCard de React Bits).
 * Usa los tokens del sitio (--surface / --line) para fondo y borde, así que
 * antes de hidratar ya se ve correcta; solo el color de la luz depende del tema.
 *
 * Props propias: `radius` (px), `padding` (CSS) y `spotlightSize`.
 * El resto (className, style, role, id...) se pasa a la tarjeta.
 */
export default function SiteCard({
  children,
  className = "",
  style,
  radius = 20,
  padding = "1rem",
  spotlightSize = 240,
  ...rest
}) {
  const dark = useDarkMode();

  return (
    <SpotlightCard
      theme={dark ? "dark" : "light"}
      intensity={dark ? 0.2 : 0.45}
      spotlightSize={spotlightSize}
      softness={0.7}
      borderGlow={0.8}
      proximity={60}
      className={className}
      style={{
        "--spotlight-card-surface": "var(--surface)",
        "--spotlight-card-border": "var(--line)",
        "--spotlight-card-shadow": SHADOW,
        borderRadius: radius,
        padding,
        ...style,
      }}
      {...rest}
    >
      {children}
    </SpotlightCard>
  );
}
