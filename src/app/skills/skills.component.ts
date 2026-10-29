import { Component, OnInit } from '@angular/core';

interface Capability {
  title: string;
  titleEn?: string;
  category: string;
  categoryEn?: string;
  icon: string;
  description: string;
  descriptionEn?: string;
  highlights: string[];
  highlightsEn?: string[];
  tools: string[];
}

interface LearningSkill {
  title: string;
  titleEn?: string;
  category: string;
  categoryEn?: string;
  icon: string;
  badge: string;
  badgeEn?: string;
  badgeClass: string;
  description: string;
  descriptionEn?: string;
  keyTopics: string[];
  keyTopicsEn?: string[];
  goal: string;
  goalEn?: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  name = 'LuisFerGRomo';
  completeName = 'Luis Fernando Gutiérrez Romo';
  currentLang: 'es' | 'en' = 'es';
  isMenuCollapsed: boolean = true;

  capabilities: Capability[] = [
    {
      title: 'Arquitectura de Sistemas & LMS',
      titleEn: 'Systems & LMS Architecture',
      category: 'Sistemas Empresariales',
      categoryEn: 'Enterprise Systems',
      icon: 'fas fa-graduation-cap',
      description: 'Diseño, escalabilidad y mantenimiento de ecosistemas LMS institucionales de alto impacto.',
      descriptionEn: 'Design, scalability, and operations of mission-critical institutional LMS ecosystems.',
      highlights: [
        'Despliegue y administración integral de Canvas LMS y Canvas Catalog.',
        'Integraciones vía LTI, Webhooks y APIs REST para educación continua masiva.',
        'Garantía de continuidad operativa y alta disponibilidad de servicios.'
      ],
      highlightsEn: [
        'End-to-end deployment and administration of Canvas LMS and Canvas Catalog.',
        'Seamless integrations via LTI, Webhooks, and REST APIs for large-scale continuing education.',
        'High availability and business continuity for academic operations.'
      ],
      tools: ['Canvas LMS', 'Canvas Catalog', 'LTI', 'REST APIs', 'Webhooks']
    },
    {
      title: 'Pipelines de Datos & Automatización CRM',
      titleEn: 'Data Pipelines & CRM Automation',
      category: 'Integración & Flujos',
      categoryEn: 'Integration & Workflows',
      icon: 'fas fa-sync-alt',
      description: 'Construcción de canalizaciones de datos bidireccionales y automatización de procesos repetitivos.',
      descriptionEn: 'Building bidirectional data pipelines and automating repetitive institutional workflows.',
      highlights: [
        'Sincronización automatizada entre Canvas LMS y Salesforce CRM.',
        'Manejo de rate limits de APIs y validación de consistencia de datos.',
        'Eliminación de captura manual y orquestación con n8n y Data Loader.'
      ],
      highlightsEn: [
        'Automated synchronization between Canvas LMS and Salesforce CRM.',
        'API rate-limit handling and data consistency validation.',
        'Elimination of manual data entry via n8n and Salesforce Data Loader orchestration.'
      ],
      tools: ['n8n', 'Salesforce CRM', 'Salesforce Data Loader', 'Power Automate']
    },
    {
      title: 'Infraestructura Segura & Computación Edge',
      titleEn: 'Secure Infrastructure & Edge Computing',
      category: 'DevOps & Redes',
      categoryEn: 'DevOps & Networking',
      icon: 'fas fa-server',
      description: 'Aprovisionamiento de servicios contenerizados y redes seguras con enfoque Zero Trust.',
      descriptionEn: 'Provisioning containerized services and secure networks with a Zero Trust mindset.',
      highlights: [
        'Contenerización de microservicios e integraciones con Docker.',
        'Redes privadas Zero Trust mediante Tailscale (sin exponer puertos públicos a internet).',
        'Administración de servidores Linux (Debian, Kali) y Home Labs en Raspberry Pi.'
      ],
      highlightsEn: [
        'Microservice containerization and integration workloads with Docker.',
        'Zero Trust encrypted mesh networks via Tailscale without exposing public ports.',
        'Linux server administration (Debian, Kali) and edge homelabs with Raspberry Pi.'
      ],
      tools: ['Docker', 'Tailscale', 'Linux (Debian/Kali)', 'GCP Cloud Run', 'Raspberry Pi']
    },
    {
      title: 'Business Intelligence (BI) & Analítica DAX',
      titleEn: 'Business Intelligence (BI) & DAX Analytics',
      category: 'Datos & Toma de Decisiones',
      categoryEn: 'Data & Decision-Making',
      icon: 'fas fa-chart-line',
      description: 'Transformación de datos operativos masivos en tableros ejecutivos estratégicos.',
      descriptionEn: 'Transforming massive operational datasets into strategic executive dashboards.',
      highlights: [
        'Modelado relacional avanzado en Power BI con fórmulas y métricas DAX complejas.',
        'Consultas, agregaciones y modelado de datos en SQL Server / PostgreSQL.',
        'Diseño de dashboards para la toma de decisiones institucionales y directivas.'
      ],
      highlightsEn: [
        'Advanced relational data modeling in Power BI using complex DAX calculations.',
        'Data extraction, transformations, and querying in SQL Server / PostgreSQL.',
        'Executive dashboard design for strategic institutional decision-making.'
      ],
      tools: ['Power BI', 'DAX', 'SQL', 'Microsoft PowerApps', 'Excel Avanzado']
    },
    {
      title: 'Gestión de Proyectos TI & Aseguramiento de Calidad',
      titleEn: 'IT Project Management & Quality Assurance',
      category: 'Gestión & Metodologías',
      categoryEn: 'Management & Methodologies',
      icon: 'fas fa-tasks',
      description: 'Liderazgo técnico ágil, control de cronogramas y aseguramiento de calidad de software.',
      descriptionEn: 'Agile technical leadership, milestone delivery, and comprehensive QA testing.',
      highlights: [
        'Coordinación ágil (Scrum/Kanban) de apps móviles clave (Jalisco Sin Hambre, UNIMA, Mi ITESO).',
        'Diseño y ejecución de casos de prueba manuales, de regresión y end-to-end (QA).',
        'Publicación y despliegue final en tiendas oficiales (Apple App Store & Google Play).'
      ],
      highlightsEn: [
        'Agile sprint coordination (Scrum/Kanban) for core mobile apps (Jalisco Sin Hambre, UNIMA, Mi ITESO).',
        'Manual, regression, and end-to-end (QA) test plan design and execution.',
        'Store release management across Apple App Store and Google Play.'
      ],
      tools: ['Scrum / Agile', 'Jira', 'Asana', 'QA Manual & E2E', 'App Stores Publishing']
    },
    {
      title: 'Ingeniería de Audio & Transmisión',
      titleEn: 'Audio Engineering & Broadcasting',
      category: 'Medios & Divulgación',
      categoryEn: 'Media & Tech Outreach',
      icon: 'fas fa-broadcast-tower',
      description: 'Operación técnica de cabina de radio, edición profesional y divulgación tecnológica.',
      descriptionEn: 'Radio studio broadcast operations, professional post-production, and tech communication.',
      highlights: [
        'Creador, editor técnico y locutor de la cápsula "Ingeniería Inversa" en Radio ITESO 95.1 FM.',
        'Operación de consolas profesionales de radiodifusión AEQ CAPITOL IP12.',
        'Postproducción de audio y masterización con Adobe Audition.'
      ],
      highlightsEn: [
        'Creator, sound engineer, and host of "Ingeniería Inversa" tech show on Radio ITESO 95.1 FM.',
        'Operation of AEQ CAPITOL IP12 professional digital broadcast consoles.',
        'Audio post-production and mastering with Adobe Audition.'
      ],
      tools: ['AEQ CAPITOL IP12', 'Adobe Audition', 'Radio Broadcasting', 'Divulgación TI']
    }
  ];

  learningSkills: LearningSkill[] = [
    {
      title: 'Ciberseguridad Ofensiva & Pentesting',
      titleEn: 'Offensive Cybersecurity & Pentesting',
      category: 'Seguridad Digital',
      categoryEn: 'Digital Security',
      icon: 'fas fa-user-secret',
      badge: 'Certificación 2026',
      badgeEn: 'Certification 2026',
      badgeClass: 'badge-danger',
      description: 'Especialización en análisis de vulnerabilidades, pruebas de intrusión y marcos de seguridad modernos.',
      descriptionEn: 'Specialization in vulnerability assessments, penetration testing, and modern security frameworks.',
      keyTopics: [
        'Framework MITRE ATT&CK para modelado de amenazas y detección.',
        'Herramientas de reconocimiento y explotación: Nmap, ffuf, Metasploit, Burp Suite.',
        'Principios de seguridad Shift-Left y arquitectura Zero Trust.'
      ],
      keyTopicsEn: [
        'MITRE ATT&CK framework for threat modeling and adversary simulation.',
        'Reconnaissance and exploitation tools: Nmap, ffuf, Metasploit, Burp Suite.',
        'Shift-Left security mindset and Zero Trust network defense.'
      ],
      goal: 'Obtención de la Certificación Profesional en Ciberseguridad (ITESO) y auditorías preventivas de infraestructura.',
      goalEn: 'Achieve Professional Cybersecurity Certification (ITESO) and conduct proactive infrastructure security audits.'
    },
    {
      title: 'Inteligencia Artificial Local & LLMs en el Edge',
      titleEn: 'Local AI & Edge LLM Deployment',
      category: 'Inteligencia Artificial',
      categoryEn: 'Artificial Intelligence',
      icon: 'fas fa-brain',
      badge: 'En Producción Propia',
      badgeEn: 'Self-Hosted Production',
      badgeClass: 'badge-success',
      description: 'Ejecución y afinación de modelos de lenguaje abiertos directamente en servidores locales autohospedados.',
      descriptionEn: 'Running and fine-tuning open-source LLMs directly on self-hosted local hardware.',
      keyTopics: [
        'Orquestación de LLMs locales con Ollama en hardware dedicado.',
        'Privacidad de datos y procesamiento sin dependencia de APIs externas en la nube.',
        'Integración de modelos con flujos de automatización y agentes de código.'
      ],
      keyTopicsEn: [
        'Orchestration of local LLMs using Ollama on dedicated edge hardware.',
        'Complete data privacy and offline processing without third-party cloud API dependencies.',
        'Model integration with automation workflows and developer coding agents.'
      ],
      goal: 'Construir un ecosistema de agentes locales privados para análisis seguro de datos institucionales.',
      goalEn: 'Build an ecosystem of private local agents for secure institutional and research data analysis.'
    },
    {
      title: 'Telemetría Biométrica & Analítica Wearable',
      titleEn: 'Biometric Telemetry & Wearable Analytics',
      category: 'IoT & Telemetría',
      categoryEn: 'IoT & Telemetry',
      icon: 'fas fa-heartbeat',
      badge: 'Investigación Activa',
      badgeEn: 'Active Research',
      badgeClass: 'badge-primary',
      description: 'Captura y análisis de flujos telemétricos en tiempo real desde dispositivos wearables de alto rendimiento.',
      descriptionEn: 'Real-time telemetry capture and sports performance analysis from high-grade wearables.',
      keyTopics: [
        'Extracción de métricas telemétricas del ecosistema Garmin (Epix Gen 2, HRM-Pro Plus).',
        'Zonas de frecuencia cardíaca, variabilidad de frecuencia (HRV) y carga de entrenamiento.',
        'Automatización del almacenamiento y modelado de datos biométricos para optimización deportiva.'
      ],
      keyTopicsEn: [
        'Telemetry extraction from the Garmin wearable ecosystem (Epix Gen 2, HRM-Pro Plus).',
        'Heart rate training zones, heart rate variability (HRV), and acute training load.',
        'Automated storage and modeling of biometric streams for athletic performance optimization.'
      ],
      goal: 'Integrar dashboards analíticos predictivos de fatiga y adaptación neuromuscular.',
      goalEn: 'Deploy predictive fatigue and neuromuscular recovery dashboards.'
    },
    {
      title: 'Arquitecturas Cloud Nativas & CI/CD Continuo',
      titleEn: 'Cloud-Native Architectures & Continuous CI/CD',
      category: 'Cloud & Modern Ops',
      categoryEn: 'Cloud & Modern Ops',
      icon: 'fas fa-cloud-upload-alt',
      badge: 'Ampliación Constante',
      badgeEn: 'Continuous Learning',
      badgeClass: 'badge-warning',
      description: 'Evolución continua de prácticas DevOps para despliegue automatizado y cómputo sin servidor.',
      descriptionEn: 'Continuous advancement of DevOps workflows for automated deployments and serverless compute.',
      keyTopics: [
        'Google Cloud Platform (Cloud Run, gestión de accesos IAM, Cloud Storage).',
        'Automatización de pruebas y despliegues con GitHub Actions.',
        'Infraestructura inmutable y despliegues sin tiempo de inactividad.'
      ],
      keyTopicsEn: [
        'Google Cloud Platform (Cloud Run, IAM identity management, Cloud Storage).',
        'Automated CI/CD build, test, and release pipelines with GitHub Actions.',
        'Immutable infrastructure patterns and zero-downtime releases.'
      ],
      goal: 'Optimizar costos y resiliencia en arquitecturas híbridas cloud/edge.',
      goalEn: 'Maximize resilience and cost efficiency across hybrid cloud/edge deployments.'
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
}
