import { Component, OnInit } from '@angular/core';

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Enterprise & Cloud' | 'Mobile & Software' | 'Labs & Difusión';
  categorySpa: 'Sistemas Empresariales & Cloud' | 'Desarrollo de Software & Móvil' | 'Laboratorios & Difusión';
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  techStack: string[];
  image?: string;
  icon?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  title = 'portfolio';
  name = 'LuisFerGRomo';
  completeName = 'Luis Fernando Gutiérrez Romo';
  selectedCategory: string = 'all';

  projects: PortfolioProject[] = [
    // ==================== NUEVOS / SISTEMAS EMPRESARIALES (2022 - 2026) ====================
    {
      id: 'canvas-catalog',
      title: 'Ecosistema Canvas LMS & Canvas Catalog',
      category: 'Enterprise & Cloud',
      categorySpa: 'Sistemas Empresariales & Cloud',
      organization: 'ITESO Universidad Jesuita de Guadalajara',
      period: '2022 – 2026',
      featured: true,
      description: 'Arquitectura, despliegue y administración integral de Canvas LMS y Canvas Catalog para programas de educación continua masiva e institucional.',
      highlights: [
        'Integración multiplataforma vía LTI, APIs REST y Webhooks para enrolamiento automatizado.',
        'Garantía de alta disponibilidad y soporte de procesos operativos académicos.',
        'Participación en Canvas Connect México City 2025.'
      ],
      techStack: ['Canvas LMS', 'Canvas Catalog', 'LTI', 'REST APIs', 'Cloud'],
      image: '../assets/images/EDC.png'
    },
    {
      id: 'salesforce-pipeline',
      title: 'Pipeline de Datos Canvas LMS ↔ Salesforce CRM',
      category: 'Enterprise & Cloud',
      categorySpa: 'Sistemas Empresariales & Cloud',
      organization: 'ITESO Universidad Jesuita de Guadalajara',
      period: '2022 – 2026',
      featured: true,
      description: 'Diseño e implementación de tuberías automáticas de datos entre el entorno LMS y Salesforce CRM para eliminar captura manual de leads y estudiantes.',
      highlights: [
        'Automatización con Salesforce Data Loader y flujos n8n programados.',
        'Manejo estricto de cuotas y rate limits de API garantizando consistencia de datos.',
        'Reducción drástica del tiempo de procesamiento administrativo.'
      ],
      techStack: ['Salesforce CRM', 'Data Loader', 'n8n', 'APIs', 'Automatización'],
      icon: 'fas fa-sync-alt'
    },
    {
      id: 'zero-trust-edge',
      title: 'Servicios de Integración Contenerizados & Zero Trust',
      category: 'Enterprise & Cloud',
      categorySpa: 'Sistemas Empresariales & Cloud',
      organization: 'ITESO / Infraestructura',
      period: '2023 – 2026',
      featured: true,
      description: 'Despliegue de microservicios de integración contenerizados mediante Docker, protegidos por redes perimetrales privadas Zero Trust.',
      highlights: [
        'Red de malla privada con Tailscale: acceso a APIs internas sin exponer puertos públicos a internet.',
        'Aislamiento de servicios, control de acceso basado en identidad y alta resiliencia.',
        'Implementación en servidores Linux (Debian) y entornos edge.'
      ],
      techStack: ['Docker', 'Tailscale', 'Zero Trust', 'Linux', 'GCP'],
      icon: 'fas fa-network-wired'
    },
    {
      id: 'powerbi-executive',
      title: 'Dashboards Ejecutivos en Power BI con Modelado DAX',
      category: 'Enterprise & Cloud',
      categorySpa: 'Sistemas Empresariales & Cloud',
      organization: 'ITESO Universidad Jesuita de Guadalajara',
      period: '2022 – 2026',
      featured: true,
      description: 'Tableros interactivos de inteligencia de negocios para toma de decisiones directivas, con modelado relacional complejo en DAX y consultas SQL.',
      highlights: [
        'Traducción de bases de datos operativas crudas en métricas de retención, matrícula e ingresos.',
        'Modelado analítico dimensional y optimización de rendimiento de consultas.',
        'Informes ejecutivos directos para comités y direcciones de área.'
      ],
      techStack: ['Power BI', 'DAX', 'SQL', 'Business Intelligence', 'Analytics'],
      icon: 'fas fa-chart-line'
    },
    {
      id: 'powerautomate-workflows',
      title: 'Automatización Multicanal & Credenciales Académicas',
      category: 'Enterprise & Cloud',
      categorySpa: 'Sistemas Empresariales & Cloud',
      organization: 'ITESO Universidad Jesuita de Guadalajara',
      period: '2023 – 2026',
      description: 'Orquestación de flujos de trabajo multicanal automatizados con Microsoft Power Automate y plantillas HTML dinámicas (Delivra).',
      highlights: [
        'Emisión automática de credenciales digitales y certificados académicos.',
        'Difusión y comunicación corporativa dirigida según avance del estudiante.',
        'Integración con formularios de Microsoft PowerApps y repositorios en la nube.'
      ],
      techStack: ['Power Automate', 'HTML Templates', 'Delivra', 'PowerApps'],
      icon: 'fas fa-cogs'
    },

    // ==================== LABORATORIOS & DIFUSIÓN ====================
    {
      id: 'radio-iteso',
      title: 'Radio ITESO 95.1 FM – Cápsula "Ingeniería Inversa"',
      category: 'Labs & Difusión',
      categorySpa: 'Laboratorios & Difusión',
      organization: 'Radio ITESO 95.1 FM',
      period: '2023 – 2026',
      description: 'Creador, editor técnico y locutor de la cápsula de divulgación tecnológica "Ingeniería Inversa", explorando tendencias de computación, seguridad e innovación.',
      highlights: [
        'Operación de consolas profesionales de radiodifusión digital AEQ CAPITOL IP12.',
        'Edición multitrack, masterización de audio y postproducción con Adobe Audition.',
        'Difusión de conceptos de código abierto, ciberseguridad e inteligencia artificial.'
      ],
      techStack: ['AEQ CAPITOL IP12', 'Adobe Audition', 'Broadcasting', 'Divulgación'],
      icon: 'fas fa-broadcast-tower'
    },
    {
      id: 'homelab-llm',
      title: 'Home Lab & Servidor de Inferencia Local de LLMs (Ollama)',
      category: 'Labs & Difusión',
      categorySpa: 'Laboratorios & Difusión',
      organization: 'Proyecto Personal / Home Lab',
      period: '2024 – 2026',
      description: 'Construcción de infraestructura autoalojada en clúster local para automatización residencial, telemetría IoT y ejecución de LLMs locales con soberanía de datos.',
      highlights: [
        'Inferencia de modelos de lenguaje abiertos (Llama, Mistral, Gemma) vía Ollama en servidor dedicado.',
        'Red privada Tailscale para acceso seguro desde cualquier dispositivo sin abrir puertos en el router.',
        'Despliegue de servicios en contenedores Docker supervisados con portainer y dashboards locales.'
      ],
      techStack: ['Raspberry Pi', 'Docker', 'Ollama (LLMs)', 'Tailscale', 'Home Lab'],
      icon: 'fas fa-server'
    },
    {
      id: 'tryhackme-labs',
      title: 'Laboratorios de Pentesting & Seguridad Ofensiva (TryHackMe)',
      category: 'Labs & Difusión',
      categorySpa: 'Laboratorios & Difusión',
      organization: 'TryHackMe (VidarTheFoehammer)',
      period: '2024 – 2026',
      description: 'Práctica constante y resolución de máquinas vulnerables en entornos de laboratorio controlados para preparación de certificación en ciberseguridad.',
      highlights: [
        'Pre Security Certificate y aplicación del framework MITRE ATT&CK.',
        'Escaneo y enumeración con Nmap, ffuf y Gobuster; explotación controlada con Metasploit y Burp Suite.',
        'Análisis de configuraciones deficientes en servidores Linux y aplicaciones web.'
      ],
      techStack: ['Nmap', 'ffuf', 'Metasploit', 'Linux (Kali)', 'MITRE ATT&CK'],
      icon: 'fas fa-shield-alt'
    },

    // ==================== PROYECTOS PREVIOS DE SOFTWARE & MÓVIL ====================
    {
      id: 'jsh',
      title: 'Jalisco Sin Hambre',
      category: 'Mobile & Software',
      categorySpa: 'Desarrollo de Software & Móvil',
      organization: 'ITESO / Gobierno de Jalisco & Banco de Alimentos',
      period: '2019 – 2021',
      description: 'Coordinación y aseguramiento de calidad de la aplicación móvil para la distribución de alimentos a familias vulnerables durante la contingencia.',
      highlights: [
        'Planificación ágil de requerimientos, gestión de cronogramas y coordinación de desarrolladores.',
        'Diseño y ejecución de casos de prueba manuales y de regresión (QA).',
        'Publicación y mantenimiento en tiendas oficiales App Store y Google Play.'
      ],
      techStack: ['Mobile App', 'QA Testing', 'Scrum', 'App Store', 'Google Play'],
      image: '../assets/images/JSH.png'
    },
    {
      id: 'mi-iteso',
      title: 'Mi ITESO (Aplicación Móvil Institucional)',
      category: 'Mobile & Software',
      categorySpa: 'Desarrollo de Software & Móvil',
      organization: 'ITESO Universidad Jesuita de Guadalajara',
      period: '2018 – 2022',
      description: 'Aplicación móvil oficial para la comunidad universitaria de ITESO (estudiantes, profesores y colaboradores).',
      highlights: [
        'Coordinación de sprints de desarrollo, control de incidencias y soporte especializado de nivel 2.',
        'Pruebas de regresión previa a cada publicación en tiendas oficiales.',
        'Integración con credenciales universitarias y servicios de campus.'
      ],
      techStack: ['iOS', 'Android', 'Mobile Lab', 'QA Manual', 'User Support'],
      image: '../assets/images/miiteso.png'
    },
    {
      id: 'unima',
      title: 'UNIMA – Diagnósticos Rápidos',
      category: 'Mobile & Software',
      categorySpa: 'Desarrollo de Software & Móvil',
      organization: 'Laboratorio de Aplicaciones Móviles ITESO / UNIMA Biotech',
      period: '2017 – 2020',
      description: 'Colaboración en el aseguramiento de calidad para la aplicación biotecnológica de lectura rápida de pruebas diagnósticas mediante cámara de smartphone.',
      highlights: [
        'Validación de algoritmos de procesamiento de imagen en diferentes condiciones de iluminación.',
        'Pruebas exhaustivas en dispositivos de gama baja y media en Android e iOS.'
      ],
      techStack: ['Biotech Mobile', 'Computer Vision QA', 'iOS', 'Android'],
      image: '../assets/images/Unima-Icon.png'
    },
    {
      id: 'transporte-universitario',
      title: 'Transporte Universitario ITESO',
      category: 'Mobile & Software',
      categorySpa: 'Desarrollo de Software & Móvil',
      organization: 'ITESO Universidad Jesuita de Guadalajara',
      period: '2017 – 2020',
      description: 'Plataforma para el seguimiento de rutas, paradas y horarios del sistema de transporte de autobuses universitarios de ITESO.',
      highlights: [
        'Pruebas de geolocalización y mapas en tiempo real.',
        'Validación de interfaces de usuario y experiencia de viaje para estudiantes.'
      ],
      techStack: ['Geolocation', 'Mobile Maps', 'QA Testing'],
      image: '../assets/images/TU.jpg'
    },
    {
      id: 'eres-mi-tipo',
      title: 'Eres Mi Tipo',
      category: 'Mobile & Software',
      categorySpa: 'Desarrollo de Software & Móvil',
      organization: 'Sector Social / ITESO',
      period: '2017 – 2019',
      description: 'Aplicación para incentivar y conectar donantes de sangre voluntarios con receptores en situaciones de emergencia médica.',
      highlights: [
        'Coordinación de pruebas de usabilidad y flujo de registro de donantes compatibles.',
        'Validación de compatibilidad y notificaciones push inmediatas.'
      ],
      techStack: ['Mobile App', 'Social Impact', 'Push Notifications'],
      image: '../assets/images/EMT.png'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  filterCategory(category: string): void {
    this.selectedCategory = category;
  }

  get filteredProjects(): PortfolioProject[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory);
  }
}
