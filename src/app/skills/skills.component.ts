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
      title: 'Arquitectura de Sistemas y LMS',
      titleEn: 'Systems & LMS Architecture',
      category: 'Sistemas Empresariales',
      categoryEn: 'Enterprise Systems',
      icon: 'fas fa-graduation-cap',
      description: 'Administración e integración de entornos LMS institucionales en operación continua.',
      descriptionEn: 'Administration and integration of institutional LMS platforms in production.',
      highlights: [
        'Despliegue y administración de Canvas LMS y Canvas Catalog.',
        'Integraciones vía LTI, Webhooks y APIs REST para educación continua.',
        'Operación diaria, soporte y continuidad del servicio.'
      ],
      highlightsEn: [
        'Deployment and administration of Canvas LMS and Canvas Catalog.',
        'Integrations via LTI, Webhooks, and REST APIs for continuing education.',
        'Day-to-day operations, support, and service continuity.'
      ],
      tools: ['Canvas LMS', 'Canvas Catalog', 'LTI', 'REST APIs', 'Webhooks']
    },
    {
      title: 'Integración de Datos y CRM',
      titleEn: 'Data Sync & CRM Automation',
      category: 'Integración y Flujos',
      categoryEn: 'Integration & Workflows',
      icon: 'fas fa-sync-alt',
      description: 'Sincronización de datos entre sistemas y automatización de tareas administrativas.',
      descriptionEn: 'Data synchronization across systems and automation of repetitive admin workflows.',
      highlights: [
        'Sincronización entre Canvas LMS y Salesforce CRM.',
        'Control de rate limits de APIs y validación de registros.',
        'Automatización con Microsoft Power Automate y Salesforce Data Loader.'
      ],
      highlightsEn: [
        'Automated sync between Canvas LMS and Salesforce CRM.',
        'API rate-limit handling and record consistency checks.',
        'Workflow automation via Microsoft Power Automate and Salesforce Data Loader.'
      ],
      tools: ['Power Automate', 'Salesforce CRM', 'Salesforce Data Loader', 'REST APIs']
    },
    {
      title: 'Infraestructura Contenerizada y Redes Privadas',
      titleEn: 'Containers & Private Networking',
      category: 'Infraestructura y Redes',
      categoryEn: 'Infrastructure & Networking',
      icon: 'fas fa-server',
      description: 'Servicios en Docker y acceso remoto cifrado sin exponer puertos públicos.',
      descriptionEn: 'Dockerized services and encrypted private networking without public port exposure.',
      highlights: [
        'Contenerización de servicios de integración con Docker.',
        'Redes privadas con Tailscale para acceder a APIs internas.',
        'Administración de servidores Linux (Debian, Kali) y Raspberry Pi.'
      ],
      highlightsEn: [
        'Containerization of integration services with Docker.',
        'Private Tailscale mesh networks for internal API access.',
        'Linux server administration (Debian, Kali) and Raspberry Pi nodes.'
      ],
      tools: ['Docker', 'Tailscale', 'Linux (Debian/Kali)', 'GCP Cloud Run', 'Raspberry Pi']
    },
    {
      title: 'Business Intelligence (BI) y DAX',
      titleEn: 'Business Intelligence (BI) & DAX',
      category: 'Datos y Reportes',
      categoryEn: 'Data & Reporting',
      icon: 'fas fa-chart-line',
      description: 'Modelado de datos y tableros en Power BI para seguimiento operativo y directivo.',
      descriptionEn: 'Data modeling and Power BI dashboards for operational and leadership tracking.',
      highlights: [
        'Modelado relacional en Power BI y medidas DAX.',
        'Consultas y preparación de datos en SQL Server y PostgreSQL.',
        'Tableros para seguimiento de metas e indicadores.'
      ],
      highlightsEn: [
        'Relational modeling in Power BI with DAX measures.',
        'SQL querying and data prep on SQL Server and PostgreSQL.',
        'Dashboards built for operational and leadership reporting.'
      ],
      tools: ['Power BI', 'DAX', 'SQL', 'Microsoft PowerApps', 'Excel Avanzado']
    },
    {
      title: 'Gestión de Proyectos TI y QA',
      titleEn: 'IT Project Management & QA',
      category: 'Gestión y Calidad',
      categoryEn: 'Management & QA',
      icon: 'fas fa-tasks',
      description: 'Coordinación de entregas ágiles, control de incidencias y pruebas de software.',
      descriptionEn: 'Agile delivery coordination, issue tracking, and software quality assurance.',
      highlights: [
        'Coordinación de apps móviles (Jalisco Sin Hambre, UNIMA, Mi ITESO).',
        'Casos de prueba manuales, regresión y end-to-end.',
        'Publicación y seguimiento en Apple App Store y Google Play.'
      ],
      highlightsEn: [
        'Agile coordination for mobile apps (Jalisco Sin Hambre, UNIMA, Mi ITESO).',
        'Manual, regression, and end-to-end test planning and execution.',
        'Release management on Apple App Store and Google Play.'
      ],
      tools: ['Scrum / Agile', 'Jira', 'Asana', 'QA Manual & E2E', 'App Stores Publishing']
    },
    {
      title: 'Producción de Audio y Radio',
      titleEn: 'Audio Production & Broadcasting',
      category: 'Medios y Divulgación',
      categoryEn: 'Media & Outreach',
      icon: 'fas fa-broadcast-tower',
      description: 'Operación de cabina, edición de audio y divulgación tecnológica.',
      descriptionEn: 'Studio broadcast operations, audio editing, and tech communication.',
      highlights: [
        'Productor técnico y conductor de "Ingeniería Inversa" en Radio ITESO 95.1 FM.',
        'Operación de consolas AEQ CAPITOL IP12.',
        'Edición y postproducción en Adobe Audition.'
      ],
      highlightsEn: [
        'Technical producer and host of "Ingeniería Inversa" on Radio ITESO 95.1 FM.',
        'Operation of AEQ CAPITOL IP12 broadcast consoles.',
        'Audio editing and post-production in Adobe Audition.'
      ],
      tools: ['AEQ CAPITOL IP12', 'Adobe Audition', 'Radio Broadcasting', 'Divulgación TI']
    }
  ];

  learningSkills: LearningSkill[] = [
    {
      title: 'Ciberseguridad y Pentesting',
      titleEn: 'Cybersecurity & Pentesting',
      category: 'Seguridad',
      categoryEn: 'Security',
      icon: 'fas fa-user-secret',
      badge: 'Certificación 2026',
      badgeEn: 'Certification 2026',
      badgeClass: 'badge-danger',
      description: 'Análisis de vulnerabilidades, laboratorios prácticos y marcos de seguridad.',
      descriptionEn: 'Vulnerability assessment, hands-on labs, and security frameworks.',
      keyTopics: [
        'Mapeo de amenazas con el marco MITRE ATT&CK.',
        'Práctica con Nmap, ffuf, Metasploit y Burp Suite.',
        'Controles Zero Trust y seguridad desde el diseño.'
      ],
      keyTopicsEn: [
        'Threat modeling with the MITRE ATT&CK framework.',
        'Hands-on practice with Nmap, ffuf, Metasploit, and Burp Suite.',
        'Zero Trust networking and Shift-Left security practices.'
      ],
      goal: 'Certificación en Ciberseguridad (ITESO) y revisión preventiva de servicios propios.',
      goalEn: 'ITESO Cybersecurity certification and proactive hardening of self-hosted services.'
    },
    {
      title: 'LLMs Locales y Automatización con Agentes',
      titleEn: 'Local LLMs & Agent Workflows',
      category: 'IA Aplicada',
      categoryEn: 'Applied AI',
      icon: 'fas fa-brain',
      badge: 'Lab Personal',
      badgeEn: 'Home Lab',
      badgeClass: 'badge-success',
      description: 'Ejecución de modelos abiertos en hardware propio y servidores MCP.',
      descriptionEn: 'Running open-weight models on local hardware and building MCP servers.',
      keyTopics: [
        'Modelos locales con Ollama sin depender de APIs externas.',
        'Servidores MCP en Python/Node para conectar herramientas reales.',
        'Automatización de tareas repetitivas con agentes locales.'
      ],
      keyTopicsEn: [
        'Running local models via Ollama without external cloud APIs.',
        'Building MCP servers in Python/Node for real tool integrations.',
        'Automating personal and ops workflows with local agents.'
      ],
      goal: 'Flujos privados de consulta y automatización sobre datos propios.',
      goalEn: 'Private local automation and data querying workflows.'
    },
    {
      title: 'Telemetría Biométrica Garmin',
      titleEn: 'Garmin Biometric Telemetry',
      category: 'IoT y Datos',
      categoryEn: 'IoT & Data',
      icon: 'fas fa-heartbeat',
      badge: 'Open Source',
      badgeEn: 'Open Source',
      badgeClass: 'badge-primary',
      description: 'Extracción y análisis de métricas deportivas desde relojes y sensores Garmin.',
      descriptionEn: 'Extracting and analyzing training metrics from Garmin wearables.',
      keyTopics: [
        'Lectura de métricas de Garmin (Epix Gen 2, HRM-Pro Plus).',
        'Seguimiento de zonas de pulso, HRV y carga semanal.',
        'Integración vía servidor MCP y bot de Telegram (garmin-health-mcp).'
      ],
      keyTopicsEn: [
        'Telemetry extraction from Garmin devices (Epix Gen 2, HRM-Pro Plus).',
        'Tracking heart-rate zones, HRV, and weekly training load.',
        'Integrated via MCP server and Telegram bot (garmin-health-mcp).'
      ],
      goal: 'Seguir mejorando garmin-health-mcp para análisis de recuperación y carga.',
      goalEn: 'Iterate on garmin-health-mcp for recovery and training load tracking.'
    },
    {
      title: 'Cloud Run y CI/CD',
      titleEn: 'Cloud Run & CI/CD',
      category: 'Cloud y Ops',
      categoryEn: 'Cloud & Ops',
      icon: 'fas fa-cloud-upload-alt',
      badge: 'En Curso',
      badgeEn: 'Ongoing',
      badgeClass: 'badge-warning',
      description: 'Despliegues automatizados y servicios sin servidor en GCP y GitHub.',
      descriptionEn: 'Automated deployments and serverless workloads on GCP and GitHub.',
      keyTopics: [
        'Google Cloud Platform (Cloud Run, IAM, Cloud Storage).',
        'Pipelines de pruebas y despliegue con GitHub Actions.',
        'Balance entre costos en nube pública y servicios en home lab.'
      ],
      keyTopicsEn: [
        'Google Cloud Platform (Cloud Run, IAM, Cloud Storage).',
        'Automated build and test pipelines with GitHub Actions.',
        'Cost and reliability balance across cloud and self-hosted setups.'
      ],
      goal: 'Mantener despliegues reproducibles y de bajo costo en proyectos personales y de trabajo.',
      goalEn: 'Keep personal and production deployments reproducible and cost-effective.'
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
