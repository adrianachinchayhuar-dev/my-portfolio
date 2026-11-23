import type { Project } from '@/types';

// Solo hechos proporcionados por Adriana o descritos expresamente en sus CV.
// Las preguntas pendientes y la procedencia se documentan fuera de public/.
// No completar campos vacíos por inferencia. Ninguna portada es una captura real.
export const projects: Project[] = [
  {
    slug: 'neurotutor', title: 'NeuroTutor', shortTitle: 'NeuroTutor', category: 'Educación · Desarrollo web',
    description: 'Plataforma educativa con frontend web, dashboard e integración de APIs REST con un backend distribuido.',
    objective: 'Contribuir al frontend y al dashboard de una plataforma educativa mediante la integración con sus servicios backend.',
    features: ['Frontend web para la plataforma educativa.', 'Dashboard para visualizar información.', 'Integración de APIs REST con un backend distribuido.'],
    participation: 'Participé en el desarrollo del frontend web y del dashboard e integré APIs REST y servicios backend. Mi trabajo formó parte del desarrollo de la plataforma junto con el resto del equipo.',
    technologies: ['APIs REST', 'Frontend web', 'Backend distribuido'],
    image: '/projects/neurotutor-aprendizaje-3d.webp', imageKind: 'illustration', imageAlt: 'Ilustración conceptual de un libro abierto con nodos de aprendizaje para NeuroTutor.', screenshots: [], featured: true,
  },
  {
    slug: 'dashboard-encuestas-iot', title: 'Dashboard de Encuestas IoT', shortTitle: 'Encuestas IoT', category: 'Web · Internet de las cosas',
    description: 'Dashboard en React que integra un backend Node.js y un dispositivo ESP32 para recibir y visualizar información en tiempo real.',
    objective: 'Visualizar información en un dashboard web integrado con un backend y un dispositivo ESP32.',
    features: ['Dashboard web en React.', 'Visualización de información en tiempo real.', 'Recepción de datos mediante la integración de Node.js y ESP32.'],
    participation: 'Trabajé en el dashboard y en su integración con el backend y el dispositivo ESP32.',
    technologies: ['React', 'Node.js', 'ESP32'],
    image: '/projects/encuestas-iot-conectividad-3d.webp', imageKind: 'illustration', imageAlt: 'Ilustración conceptual de un microcontrolador conectado a datos y respuestas de encuestas.', screenshots: [], featured: true,
  },
  {
    slug: 'arquitectura-microservicios', title: 'Arquitectura de Microservicios', shortTitle: 'Microservicios', category: 'Backend · Sistemas distribuidos',
    description: 'Arquitectura con Spring Cloud, Eureka, OpenFeign y API Gateway, con mecanismos de seguridad mediante JWT.',
    objective: 'Aplicar arquitectura de software y desarrollo backend mediante la implementación de componentes de microservicios.',
    features: ['Arquitectura basada en microservicios.', 'Uso de Eureka, OpenFeign y API Gateway.', 'Integración de mecanismos de seguridad mediante JWT.'],
    participation: 'Implementé componentes con Spring Cloud, Eureka, OpenFeign y API Gateway, además de mecanismos de seguridad mediante JWT.',
    technologies: ['Spring Cloud', 'Eureka', 'OpenFeign', 'API Gateway', 'JWT'],
    image: '/projects/microservicios-arquitectura-3d.webp', imageKind: 'illustration', imageAlt: 'Ilustración conceptual de módulos de backend conectados mediante un portal central.', screenshots: [], featured: true,
  },
  {
    slug: 'sistema-ventas-ios', title: 'Sistema de Ventas iOS', shortTitle: 'Ventas iOS', category: 'Desarrollo móvil · iOS',
    description: 'Proyecto de un sistema de ventas para iOS desarrollado con Swift, UIKit y Core Data.',
    objective: 'Digitalizar la gestión comercial y aplicar persistencia de datos, validaciones y control de permisos mediante Core Data.',
    problem: 'Gestionar productos, clientes y operaciones de venta desde una aplicación móvil con permisos diferenciados para vendedores y supervisores.',
    features: ['Inicio de sesión y navegación según los roles vendedor y supervisor.', 'Gestión de productos y clientes.', 'Registro de ventas con cálculo de subtotal, descuentos e IGV.', 'Actualización de stock al registrar ventas.', 'Historial de ventas del vendedor.', 'Consulta y filtros de ventas para supervisores.', 'Anulación de ventas con devolución de stock.', 'Resumen de indicadores de ventas.'],
    participation: 'Desarrollé la aplicación móvil, los flujos de gestión comercial y la persistencia con Core Data como parte de un proyecto académico.',
    technologies: ['Swift', 'UIKit', 'Core Data'],
    image: '/projects/ventas-ios-gestion-3d.webp', imageKind: 'illustration', imageAlt: 'Ilustración conceptual de un teléfono, productos, un recibo y monedas para ventas móviles.', screenshots: [], featured: false,
  },
  {
    slug: 'catalogo-productos-flutter', title: 'Catálogo de Productos Flutter', shortTitle: 'Catálogo Flutter', category: 'Desarrollo móvil · Flutter',
    description: 'Proyecto de un catálogo de productos desarrollado con Flutter y componentes Cupertino.',
    objective: 'Aplicar desarrollo multiplataforma y mejorar la experiencia de uso mediante una interfaz inspirada en iOS.',
    problem: 'Organizar y consultar un catálogo móvil de productos, con búsqueda, ordenamiento y controles de inventario.',
    features: ['Inicio de sesión y navegación entre pantallas.', 'Registro de productos con validaciones.', 'Búsqueda de productos por nombre.', 'Ordenamiento por nombre o precio.', 'Eliminación de productos con confirmación.', 'Indicadores de inventario y valor del stock.', 'Interfaz con componentes Cupertino.', 'Uso de imágenes locales y diseño responsive.'],
    participation: 'Desarrollé la aplicación móvil multiplataforma y su interfaz con componentes Cupertino.',
    technologies: ['Flutter', 'Cupertino'],
    image: '/projects/catalogo-flutter-inventario-3d.webp', imageKind: 'illustration', imageAlt: 'Ilustración conceptual de productos agrupados, cajas de inventario y una lupa para un catálogo móvil.', screenshots: [], featured: false,
  },
  {
    slug: 'autenticacion-web', title: 'Aplicación de autenticación web', shortTitle: 'Autenticación web', category: 'Desarrollo web · Autenticación',
    description: 'Proyecto de autenticación web desarrollado con Next.js y NextAuth.',
    objective: 'Comprender la autenticación web, la protección de rutas y la gestión segura de sesiones.',
    scopeNote: 'Proveedores, sesiones y protección de páginas documentados mediante revisión del código público. No se han probado los accesos OAuth ni la configuración de un despliegue.',
    participation: 'Trabajé en una aplicación web para implementar autenticación de usuarios con Next.js y NextAuth.',
    features: ['Configuración de proveedores Google, GitHub y correo/contraseña en NextAuth.', 'Estrategia de sesión JWT con callbacks para la información de sesión.', 'Comprobación de sesión en servidor para las páginas de dashboard y perfil.', 'Protección de rutas de dashboard y perfil mediante withAuth.'], technologies: ['Next.js', 'NextAuth v4', 'JWT'],
    githubUrl: 'https://github.com/adrianachinchayhuar-dev/next-auth-lab13',
    image: '/projects/autenticacion-web-acceso-3d.webp', imageKind: 'illustration', imageAlt: 'Ilustración conceptual de una puerta con candado, una llave y elementos de sesión para autenticación web.', screenshots: [], featured: false,
  },
];

export const personalInfo = {
  name: 'Adriana Camila Chinchayhuara Chumpitaz',
  shortName: 'Adriana Camila',
  title: 'Full Stack Developer en formación',
  description: 'Portafolio de Adriana Camila Chinchayhuara Chumpitaz, estudiante de Diseño y Desarrollo de Software en TECSUP. Proyectos web, backend, bases de datos y desarrollo móvil.',
  intro: 'Me interesa conectar la experiencia del frontend con la lógica del backend, los datos y el desarrollo móvil.',
  hero: {
    title: 'Estudiante de Diseño y Desarrollo de Software · TECSUP',
    description: 'Soy estudiante de Diseño y Desarrollo de Software en TECSUP. Me interesa desarrollar aplicaciones web y móviles, desde sus interfaces hasta la lógica del backend y las bases de datos.',
    image: '/illustrations/developer-hero.webp',
    imageAlt: 'Ilustración conceptual de una desarrolladora con lentes trabajando en una laptop; no es una fotografía de Adriana.',
  },
  bio: 'Soy Adriana Camila Chinchayhuara Chumpitaz, estudiante de Diseño y Desarrollo de Software en TECSUP. Mi formación está orientada al desarrollo Full Stack, con interés en backend, frontend, bases de datos y aplicaciones móviles.',
  education: 'Diseño y Desarrollo de Software · TECSUP',
  // Confirmar vigencia y consentimiento antes de publicar contactos o enlaces de los CV.
  email: 'adrichch1406@gmail.com', github: 'https://github.com/adrianachinchayhuar-dev', linkedin: '', cvUrl: '', avatar: '', location: '',
  skills: ['Java', 'JavaScript', 'Python', 'React', 'Node.js', 'Spring Boot', 'SQL', 'MySQL', 'Oracle', 'MongoDB', 'APIs REST', 'Git', 'Postman', 'Figma'],
  experience: [] as { role: string; organization: string; period: string }[],
  // Dominio existente conservado. Actualizar únicamente cuando Adriana lo solicite.
  siteUrl: 'https://adriana-portfolio.duckdns.org',
};

export const learningTopics = [
  { icon: 'code', title: 'Frontend', description: 'Interfaces web e integración con APIs.', stack: 'React · JavaScript' },
  { icon: 'layers', title: 'Backend', description: 'Lógica, servicios y comunicación entre sistemas.', stack: 'Node.js · Spring Boot' },
  { icon: 'globe', title: 'Bases de datos', description: 'Información que da soporte a las aplicaciones.', stack: 'SQL · MySQL · MongoDB' },
  { icon: 'phone', title: 'Desarrollo móvil', description: 'Proyectos y aprendizaje en entornos móviles.', stack: 'Swift · Flutter' },
] as const;

export function configuredUrl(value?: string) {
  if (!value) return undefined;
  try { const url = new URL(value); if (!['https:', 'http:'].includes(url.protocol)) return undefined; if (url.hostname === 'example.com' || url.hostname.endsWith('.example.com') || /\/(usuario|tuusuario)(\/|$)/.test(url.pathname)) return undefined; return value; } catch { return undefined; }
}
export const contactLinks = [
  { label: 'Correo electrónico', field: 'email', value: personalInfo.email, href: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalInfo.email) ? `mailto:${personalInfo.email}` : undefined },
  { label: 'GitHub', field: 'github', value: personalInfo.github, href: configuredUrl(personalInfo.github) },
  { label: 'LinkedIn', field: 'linkedin', value: personalInfo.linkedin, href: configuredUrl(personalInfo.linkedin) },
];
