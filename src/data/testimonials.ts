export interface Testimonial {
  name: string;
  role: string; // por ejemplo: "CEO en Empresa X"
  quote: string;
  date?: string; // por ejemplo: "ENE 2026"
  avatar?: string; // ruta en /public, por ejemplo: "/img/testimonios/ana.jpg"
}

// Añade aquí testimonios reales de clientes. Mientras esta lista esté vacía,
// la sección de testimonios no se muestra en el home.
export const testimonials: Testimonial[] = [];
