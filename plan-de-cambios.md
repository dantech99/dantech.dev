## Plan de Cambios del Portafolio

### Resumen General

Se actualizarán distintos módulos del portafolio para mejorar la experiencia de usuario, el diseño visual y el rendimiento, siguiendo las tareas definidas en el proyecto.

---

### Cambio 1: Mejora de Estilos en Modo Light para la pagina de about me

**Motivación:** Incrementar legibilidad y experiencia visual en modo claro

**Alcance:** Revisar paleta de colores, contrastes y elementos UI en modo light

**Pasos:**

- Analizar problemas actuales de contraste
- Definir nuevos valores de colores para textos y fondos
- Implementar cambios en CSS/Tailwind

**Impacto:** Mejorará accesibilidad para usuarios con preferencia de modo claro

**Criterios de Éxito:** Pasar verificación WCAG AA para contrastes

---

### Cambio 2: Integración de Certificados y Estudios en el about me

**Motivación:** Fortalecer sección "About Me" con credenciales académicas

**Alcance:** Crear componente para mostrar certificados y formación educativa

**Pasos:**

- implementar una seccion en el about me, debajo de la seccion de skills
- Implementar esquema en content collections con la siguiente estructura
  - id, nombre del titulo obtenido, una descripcion corta y una imagen del certificado o diploma obtenido
- Crear componente reutilizable para cada certificado

**requerimientos de ui:**
- la seccion de certificados y formacion educativa tiene que se un slider infinito con posibilidad de utilizar el puntero para mover horizontalmente el slider
- utiliza el mismo componente de las skills pero adaptalo para que sea de un tamaño considerable y se puedan ver los certificados correctamente
- la card de cada certificado solo mostrara la imagen del mismo

**Impacto:** Mayor credibilidad profesional

**Criterios de Éxito:** Visualización clara de certificaciones con posibilidad de verificación

---


### Cambio 4: Incorporación de Estados en Proyectos

**Motivación:** Mostrar claramente el estado de desarrollo de cada proyecto

**Alcance:** Agregar propiedad de status y UI indicativa

**Pasos:**

- Definir posibles estados (Completado, En desarrollo, Planificado)
- Crear badges o indicadores visuales
- Actualizar esquema de datos

**Impacto:** Mayor transparencia sobre el estado de los proyectos

**Criterios de Éxito:** Indicador visual claro en cada proyecto

---


### Cambio 6: Implementación de View Transitions

**Motivación:** Mejorar experiencia de navegación entre proyectos

**Alcance:** Agregar animaciones de transición a la página de "More Projects"

**Pasos:**

- Implementar transiciones suaves
- Probar en diferentes navegadores

**Impacto:** Experiencia de usuario más fluida

**Criterios de Éxito:** Transiciones suaves sin afectar rendimiento

---

### Cambio 7: Actualización del Título del Portafolio

**Motivación:** Mejorar SEO y representación de marca personal

**Alcance:** Redefinir título principal y metadatos

**Pasos:**

- Definir nuevo título
- Actualizar componentes de SEO
- Verificar implementación en todas las páginas

**Impacto:** Mejor posicionamiento en buscadores

**Criterios de Éxito:** Título descriptivo y profesional

---

### Tabla de Seguimiento

| Cambio | Estado | Prioridad | Impactos Relacionados |
| --- | --- | --- | --- |
| Estilos modo light | Pendiente | Alta | Accesibilidad, UX |
| Certificados/Estudios | Pendiente | Media | Estructura de contenido |
| Status de proyectos | Pendiente | Baja | Esquema de datos |
| View Transitions | Pendiente | Baja | Compatibilidad navegadores |
| Título del portafolio | Pendiente | Alta | SEO, Branding |

### Próximos Pasos

1. Priorizar cambios según impacto visual y técnico
2. Establecer rama de desarrollo para cada cambio principal
3. Implementar pruebas para validar mejoras
4. Revisar rendimiento después de cada implementación