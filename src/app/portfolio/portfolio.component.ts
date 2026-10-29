import { Component, OnInit } from '@angular/core';

export interface PortfolioProject {
  id: string;
  title: string;
  titleEn?: string;
  category: 'Enterprise & Cloud' | 'Mobile & Software' | 'Labs & Difusión';
  categorySpa: 'Sistemas Empresariales & Cloud' | 'Desarrollo de Software & Móvil' | 'Laboratorios & Difusión';
  organization: string;
  organizationEn?: string;
  period: string;
  periodEn?: string;
  description: string;
  descriptionEn?: string;
  highlights: string[];
  highlightsEn?: string[];
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
  isMenuCollapsed: boolean = true;
  currentLang: 'es' | 'en' = 'es';

  projects: PortfolioProject[] = [
    // ==================== NUEVOS / SISTEMAS EMPRESARIALES (2022 - 2026) ====================
    {
      id: 'canvas-catalog',
      title: 'Ecosistema Canvas LMS & Canvas Catalog',
      titleEn: 'Canvas LMS & Canvas Catalog Ecosystem',
      category: 'Enterprise & Cloud',
      categorySpa: 'Sistemas Empresariales & Cloud',
      organization: 'ITESO Universidad Jesuita de Guadalajara',
      organizationEn: 'ITESO Jesuit University of Guadalajara',
      period: '2022 – 2026',
      periodEn: '2022 – 2026',
      featured: true,
      description: 'Arquitectura, despliegue y administración integral de Canvas LMS y Canvas Catalog para programas de educación continua masiva e institucional.',
      descriptionEn: 'End-to-end architecture, deployment, and administration of Canvas LMS and Canvas Catalog for enterprise continuing education and institutional academic programs.',
      highlights: [
        'Integración multiplataforma vía LTI, APIs REST y Webhooks para enrolamiento automatizado.',
        'Garantía de alta disponibilidad y soporte de procesos operativos académicos.',
        'Participación en Canvas Connect México City 2025.'
      ],
      highlightsEn: [
        'Multi-platform integration via LTI, REST APIs, and Webhooks for automated student enrollments.',
        'Guaranteed high availability and operational continuity for academic business processes.',
        'Presenter / Participant at Canvas Connect Mexico City 2025.'
      ],
      techStack: ['Canvas LMS', 'Canvas Catalog', 'LTI', 'REST APIs', 'Cloud'],
      image: '../assets/images/EDC.png'
    },
    {
      id: 'salesforce-pipeline',
      title: 'Pipeline de Datos Canvas LMS ↔ Salesforce CRM',
      titleEn: 'Canvas LMS ↔ Salesforce CRM Data Pipeline',
      category: 'Enterprise & Cloud',
      categorySpa: 'Sistemas Empresariales & Cloud',
      organization: 'ITESO Universidad Jesuita de Guadalajara',
      organizationEn: 'ITESO Jesuit University of Guadalajara',
      period: '2022 – 2026',
      periodEn: '2022 – 2026',
      featured: true,
      description: 'Diseño e implementación de tuberías automáticas de datos entre el entorno LMS y Salesforce CRM para eliminar captura manual de leads y estudiantes.',
      descriptionEn: 'Design and implementation of automated data pipelines between Canvas LMS and Salesforce CRM to eliminate manual student and lead data entry.',
      highlights: [
        'Automatización con Salesforce Data Loader y flujos n8n programados.',
        'Manejo estricto de cuotas y rate limits de API garantizando consistencia de datos.',
        'Reducción drástica del tiempo de procesamiento administrativo.'
      ],
      highlightsEn: [
        'Automated ETL using Salesforce Data Loader and scheduled n8n workflows.',
        'Strict rate-limit handling and API quota management ensuring data consistency.',
        'Drastic reduction in administrative processing time.'
      ],
      techStack: ['Salesforce CRM', 'Data Loader', 'n8n', 'APIs', 'Automatización'],
      icon: 'fas fa-sync-alt'
    },
    {
      id: 'zero-trust-edge',
      title: 'Servicios de Integración Contenerizados & Zero Trust',
      titleEn: 'Containerized Integration Services & Zero Trust Edge',
      category: 'Enterprise & Cloud',
      categorySpa: 'Sistemas Empresariales & Cloud',
      organization: 'ITESO / Infraestructura',
      organizationEn: 'ITESO / Infrastructure',
      period: '2023 – 2026',
      periodEn: '2023 – 2026',
      featured: true,
      description: 'Despliegue de microservicios de integración contenerizados mediante Docker, protegidos por redes perimetrales privadas Zero Trust.',
      descriptionEn: 'Deployment of containerized integration microservices using Docker, secured with Zero Trust private perimeter networking.',
      highlights: [
        'Red de malla privada con Tailscale: acceso a APIs internas sin exponer puertos públicos a internet.',
        'Aislamiento de servicios, control de acceso basado en identidad y alta resiliencia.',
        'Implementación en servidores Linux (Debian) y entornos edge.'
      ],
      highlightsEn: [
        'Private mesh network with Tailscale: secure internal API access without exposing public internet ports.',
        'Service isolation, identity-based access control, and high operational resilience.',
        'Production Linux (Debian) and edge server deployments.'
      ],
      techStack: ['Docker', 'Tailscale', 'Zero Trust', 'Linux', 'GCP'],
      icon: 'fas fa-network-wired'
    },
    {
      id: 'power-bi-dashboards',
      title: 'Analítica Ejecutiva & Modelado DAX en Power BI',
      titleEn: 'Executive Power BI Analytics & DAX Modeling',
      category: 'Enterprise & Cloud',
      categorySpa: 'Sistemas Empresariales & Cloud',
      organization: 'ITESO Universidad Jesuita de Guadalajara',
      organizationEn: 'ITESO Jesuit University of Guadalajara',
      period: '2023 – 2026',
      periodEn: '2023 – 2026',
      featured: true,
      description: 'Modelado y desarrollo de tableros de control ejecutivos interactivos y métricas DAX avanzadas para la toma de decisiones institucionales.',
      descriptionEn: 'Modeling and development of interactive executive dashboards and advanced DAX measures for academic retention and operational decision-making.',
      highlights: [
        'Consolidación de bases de datos relacionales, métricas del LMS y captación de CRM en modelos unificados.',
        'Visualización en tiempo real de indicadores académicos, tasas de abandono y avance de cohortes.',
        'Eliminación de reportes manuales en hojas de cálculo para la dirección.'
      ],
      highlightsEn: [
        'Consolidation of relational databases, LMS metrics, and CRM leads into unified models.',
        'Real-time visualization of academic indicators, student drop-off rates, and cohort progress.',
        'Elimination of manual spreadsheets for executive reporting.'
      ],
      techStack: ['Power BI', 'DAX Modeling', 'SQL', 'Data Analytics', 'Dashboards'],
      icon: 'fas fa-chart-line'
    },
    {
      id: 'power-automate-workflows',
      title: 'Automatización de Flujos Académicos con Power Automate',
      titleEn: 'Academic Workflow Automation with Power Automate',
      category: 'Enterprise & Cloud',
      categorySpa: 'Sistemas Empresariales & Cloud',
      organization: 'ITESO Universidad Jesuita de Guadalajara',
      organizationEn: 'ITESO Jesuit University of Guadalajara',
      period: '2022 – 2024',
      periodEn: '2022 – 2024',
      description: 'Automatizaciones institucionales para agilizar aprobaciones de cursos, comunicaciones a estudiantes y emisión de constancias.',
      descriptionEn: 'Institutional workflow automations to streamline course approvals, student communications, and badge credential issuance.',
      highlights: [
        'Notificaciones automáticas, escalamiento de tickets y generación de constancias por finalización de cursos.',
        'Integración con el ecosistema Microsoft 365, SharePoint y Teams.',
        'Alta confiabilidad y trazabilidad operativa en procesos académicos.'
      ],
      highlightsEn: [
        'Automated notifications, ticket escalation, and credential generation for course completions.',
        'Integration across Microsoft 365, SharePoint, and Teams ecosystem.',
        'High reliability and auditability for institutional academic operations.'
      ],
      techStack: ['Power Automate', 'Microsoft 365', 'SharePoint', 'Workflows'],
      icon: 'fas fa-cogs'
    },

    // ==================== LABORATORIOS, DIFUSIÓN & INVESTIGACIÓN (2023 - 2026) ====================
    {
      id: 'radio-iteso',
      title: 'Radio ITESO 95.1 FM – Conducción "Ingeniería Inversa"',
      titleEn: 'Radio ITESO 95.1 FM – "Ingeniería Inversa" Show',
      category: 'Labs & Difusión',
      categorySpa: 'Laboratorios & Difusión',
      organization: 'Radio ITESO 95.1 FM / ITESO',
      organizationEn: 'Radio ITESO 95.1 FM / ITESO',
      period: '2023 – Presente',
      periodEn: '2023 – Present',
      featured: true,
      description: 'Producción, ingeniería técnica y locución de la cápsula semanal de divulgación tecnológica y podcast "Ingeniería Inversa".',
      descriptionEn: 'Production, technical engineering, and hosting of the weekly technology and culture radio segment and podcast "Ingeniería Inversa".',
      highlights: [
        'Análisis de ciberseguridad, soberanía digital, IA ética e impacto de la tecnología en la sociedad.',
        'Operación en cabina de consolas de audio digitales AEQ CAPITOL IP12 y edición en Adobe Audition.',
        'Distribución de contenidos en formato podcast multiplataforma.'
      ],
      highlightsEn: [
        'Analysis of cybersecurity, data sovereignty, ethical AI, and technology impact.',
        'Live broadcasting on AEQ CAPITOL IP12 digital consoles and post-production in Adobe Audition.',
        'Podcast distribution across major digital streaming platforms.'
      ],
      techStack: ['Radio Broadcasting', 'AEQ CAPITOL IP12', 'Adobe Audition', 'Divulgación Tech'],
      icon: 'fas fa-microphone-alt'
    },
    {
      id: 'home-lab-llm',
      title: 'Home Lab Edge Compute, LLMs Locales & Telemetría IoT',
      titleEn: 'Homelab Edge Compute, Local LLMs & IoT Telemetry',
      category: 'Labs & Difusión',
      categorySpa: 'Laboratorios & Difusión',
      organization: 'Laboratorio Personal de I+D',
      organizationEn: 'Personal R&D Lab',
      period: '2024 – Presente',
      periodEn: '2024 – Present',
      featured: true,
      description: 'Infraestructura autoalojada con microservicios contenerizados, ejecución de modelos de lenguaje locales (Ollama) y telemetría deportiva Garmin.',
      descriptionEn: 'Self-hosted homelab environment running local language models with Ollama, containerized microservices, and Garmin sports biometric telemetry.',
      highlights: [
        'Inferencia local de modelos Mistral y Llama sin enviar datos a la nube pública vía APIs FastAPI.',
        'Captura y procesamiento de métricas biométricas en tiempo real (HRV, zonas de frecuencia, carga de fatiga) con sensores Garmin.',
        'Acceso remoto cifrado con Tailscale y filtrado de red local con Pi-hole.'
      ],
      highlightsEn: [
        'Local inference of Mistral and Llama models via FastAPI endpoints without cloud data leakage.',
        'Real-time processing of biometric streams (HRV, heart rate zones, training load) from Garmin sensors.',
        'Encrypted mesh connectivity with Tailscale and local network filtering via Pi-hole.'
      ],
      techStack: ['Ollama', 'Local LLMs', 'Docker', 'FastAPI', 'Garmin Telemetry', 'Raspberry Pi'],
      icon: 'fas fa-server'
    },
    {
      id: 'tryhackme-labs',
      title: 'Laboratorios Prácticos de Ciberseguridad & Pentesting',
      titleEn: 'TryHackMe Cybersecurity & Pentesting Labs',
      category: 'Labs & Difusión',
      categorySpa: 'Laboratorios & Difusión',
      organization: 'Práctica Ofensiva y Defensiva Continua',
      organizationEn: 'Offensive & Defensive Security Practice',
      period: '2024 – Presente',
      periodEn: '2024 – Present',
      description: 'Entrenamiento continuo en técnicas de seguridad ofensiva/defensiva, análisis de vulnerabilidades y mapeo al marco MITRE ATT&CK.',
      descriptionEn: 'Continuous hands-on offensive and defensive cybersecurity training, practical penetration testing, and MITRE ATT&CK framework mapping.',
      highlights: [
        'Evaluación de vulnerabilidades con Nmap, ffuf, Metasploit y Burp Suite.',
        'Resolución de escenarios de intrusión controlada, análisis de tráfico y explotación ética.',
        'Enfoque de seguridad "Shift-Left" aplicado a arquitecturas e integraciones empresariales.'
      ],
      highlightsEn: [
        'Vulnerability assessments with Nmap, ffuf, Metasploit, and Burp Suite.',
        'CTF challenge resolutions, network security analysis, and privilege escalation labs.',
        'Shift-Left security mindset applied to software architectures and integrations.'
      ],
      techStack: ['Kali Linux', 'Burp Suite', 'Nmap', 'MITRE ATT&CK', 'OWASP Top 10'],
      icon: 'fas fa-shield-alt'
    },

    // ==================== DESARROLLO DE SOFTWARE & APPS MÓVILES (HISTÓRICO) ====================
    {
      id: 'jalisco-sin-hambre',
      title: 'Jalisco Sin Hambre',
      titleEn: 'Jalisco Sin Hambre (Mobile App)',
      category: 'Mobile & Software',
      categorySpa: 'Desarrollo de Software & Móvil',
      organization: 'Laboratorio de Aplicaciones Móviles ITESO / Gobierno de Jalisco & Banco de Alimentos',
      organizationEn: 'ITESO Mobile Lab / Jalisco Government & Food Bank',
      period: '2020 – 2021',
      periodEn: '2020 – 2021',
      description: 'Aplicación móvil de apoyo logístico y social desarrollada durante la emergencia sanitaria por COVID-19 para la canalización de despensas a familias vulnerables.',
      descriptionEn: 'Emergency logistics mobile application to distribute humanitarian food aid to vulnerable families during the COVID-19 pandemic.',
      highlights: [
        'Liderazgo en pruebas de calidad (QA), coordinación de despliegues y control de versiones.',
        'Verificación de flujos de asignación y trazabilidad de paquetes alimentarios en campo.'
      ],
      highlightsEn: [
        'Led QA testing, sprint coordination, and field deployment verification.',
        'Tracked food parcel delivery statuses and route tracing across Jalisco.'
      ],
      techStack: ['Mobile App', 'QA Testing', 'Logística Social', 'Android', 'iOS'],
      image: '../assets/images/JSH.png'
    },
    {
      id: 'mi-iteso',
      title: 'Mi ITESO',
      titleEn: 'Mi ITESO (Official University Mobile App)',
      category: 'Mobile & Software',
      categorySpa: 'Desarrollo de Software & Móvil',
      organization: 'ITESO Universidad Jesuita de Guadalajara',
      organizationEn: 'ITESO Jesuit University of Guadalajara',
      period: '2018 – 2022',
      periodEn: '2018 – 2022',
      description: 'Aplicación móvil oficial para la comunidad universitaria de ITESO (estudiantes, profesores y colaboradores).',
      descriptionEn: 'Official mobile application for the ITESO university community (students, faculty, and administrative staff).',
      highlights: [
        'Coordinación de sprints de desarrollo, control de incidencias y soporte especializado de nivel 2.',
        'Pruebas de regresión previa a cada publicación en tiendas oficiales.',
        'Integración con credenciales universitarias y servicios de campus.'
      ],
      highlightsEn: [
        'Coordinated development sprints, bug tracking, and Tier 2 user support.',
        'Full regression testing prior to store releases on iOS and Android.',
        'Integration with campus credentials, schedules, and university services.'
      ],
      techStack: ['iOS', 'Android', 'Mobile Lab', 'QA Manual', 'User Support'],
      image: '../assets/images/miiteso.png'
    },
    {
      id: 'unima',
      title: 'UNIMA – Diagnósticos Rápidos',
      titleEn: 'UNIMA – Fast Diagnostic Testing App',
      category: 'Mobile & Software',
      categorySpa: 'Desarrollo de Software & Móvil',
      organization: 'Laboratorio de Aplicaciones Móviles ITESO / UNIMA Biotech',
      organizationEn: 'ITESO Mobile Applications Lab / UNIMA Biotech',
      period: '2017 – 2020',
      periodEn: '2017 – 2020',
      description: 'Colaboración en el aseguramiento de calidad para la aplicación biotecnológica de lectura rápida de pruebas diagnósticas mediante cámara de smartphone.',
      descriptionEn: 'Quality assurance and testing collaboration for biotech app enabling fast diagnostic test reading via smartphone camera.',
      highlights: [
        'Validación de algoritmos de procesamiento de imagen en diferentes condiciones de iluminación.',
        'Pruebas exhaustivas en dispositivos de gama baja y media en Android e iOS.'
      ],
      highlightsEn: [
        'Validated computer vision algorithms across diverse lighting conditions.',
        'Comprehensive device testing on entry-level and mid-range Android and iOS devices.'
      ],
      techStack: ['Biotech Mobile', 'Computer Vision QA', 'iOS', 'Android'],
      image: '../assets/images/Unima-Icon.png'
    },
    {
      id: 'transporte-universitario',
      title: 'Transporte Universitario ITESO',
      titleEn: 'ITESO Campus Transportation App',
      category: 'Mobile & Software',
      categorySpa: 'Desarrollo de Software & Móvil',
      organization: 'ITESO Universidad Jesuita de Guadalajara',
      organizationEn: 'ITESO Jesuit University of Guadalajara',
      period: '2017 – 2020',
      periodEn: '2017 – 2020',
      description: 'Plataforma para el seguimiento de rutas, paradas y horarios del sistema de transporte de autobuses universitarios de ITESO.',
      descriptionEn: 'Real-time bus tracking application for routes, stops, and schedules of the ITESO university transportation system.',
      highlights: [
        'Pruebas de geolocalización y mapas en tiempo real.',
        'Validación de interfaces de usuario y experiencia de viaje para estudiantes.'
      ],
      highlightsEn: [
        'Field validation of live GPS tracking and route mapping.',
        'User interface usability and route timing verification for student commuters.'
      ],
      techStack: ['Geolocation', 'Mobile Maps', 'QA Testing'],
      image: '../assets/images/TU.jpg'
    },
    {
      id: 'eres-mi-tipo',
      title: 'Eres Mi Tipo',
      titleEn: 'Eres Mi Tipo (Blood Donor Matching)',
      category: 'Mobile & Software',
      categorySpa: 'Desarrollo de Software & Móvil',
      organization: 'Sector Social / ITESO',
      organizationEn: 'Social Sector / ITESO',
      period: '2017 – 2019',
      periodEn: '2017 – 2019',
      description: 'Aplicación para incentivar y conectar donantes de sangre voluntarios con receptores en situaciones de emergencia médica.',
      descriptionEn: 'Social impact mobile application connecting voluntary blood donors with recipients during medical emergencies.',
      highlights: [
        'Coordinación de pruebas de usabilidad y flujo de registro de donantes compatibles.',
        'Validación de compatibilidad y notificaciones push inmediatas.'
      ],
      highlightsEn: [
        'Coordinated usability testing and donor-recipient compatibility workflow.',
        'Push notification alert verification for urgent hospital blood requests.'
      ],
      techStack: ['Mobile App', 'Social Impact', 'Push Notifications'],
      image: '../assets/images/EMT.png'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang === 'en' || savedLang === 'es') {
      this.currentLang = savedLang;
    }
  }

  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  closeMenu(): void {
    this.isMenuCollapsed = true;
  }

  switchLanguage(): void {
    this.closeMenu();
    this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('preferredLang', this.currentLang);
  }

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
