import { Component, OnInit } from '@angular/core';

interface Capability {
  title: string;
  category: string;
  icon: string;
  description: string;
  highlights: string[];
  tools: string[];
}

interface LearningSkill {
  title: string;
  category: string;
  icon: string;
  badge: string;
  badgeClass: string;
  description: string;
  keyTopics: string[];
  goal: string;
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

  capabilities: Capability[] = [
    {
      title: 'Arquitectura de Sistemas & LMS',
      category: 'Sistemas Empresariales',
      icon: 'fas fa-graduation-cap',
      description: 'Diseño, escalabilidad y mantenimiento de ecosistemas LMS institucionales de alto impacto.',
      highlights: [
        'Despliegue y administración integral de Canvas LMS y Canvas Catalog.',
        'Integraciones vía LTI, Webhooks y APIs REST para educación continua masiva.',
        'Garantía de continuidad operativa y alta disponibilidad de servicios.'
      ],
      tools: ['Canvas LMS', 'Canvas Catalog', 'LTI', 'REST APIs', 'Webhooks']
    },
    {
      title: 'Pipelines de Datos & Automatización CRM',
      category: 'Integración & Flujos',
      icon: 'fas fa-sync-alt',
      description: 'Construcción de canalizaciones de datos bidireccionales y automatización de procesos repetitivos.',
      highlights: [
        'Sincronización automatizada entre Canvas LMS y Salesforce CRM.',
        'Manejo de rate limits de APIs y validación de consistencia de datos.',
        'Eliminación de captura manual y orquestación con n8n y Data Loader.'
      ],
      tools: ['n8n', 'Salesforce CRM', 'Salesforce Data Loader', 'Power Automate']
    },
    {
      title: 'Infraestructura Segura & Computación Edge',
      category: 'DevOps & Redes',
      icon: 'fas fa-server',
      description: 'Aprovisionamiento de servicios contenerizados y redes seguras con enfoque Zero Trust.',
      highlights: [
        'Contenerización de microservicios e integraciones con Docker.',
        'Redes privadas Zero Trust mediante Tailscale (sin exponer puertos públicos a internet).',
        'Administración de servidores Linux (Debian, Kali) y Home Labs en Raspberry Pi.'
      ],
      tools: ['Docker', 'Tailscale', 'Linux (Debian/Kali)', 'GCP Cloud Run', 'Raspberry Pi']
    },
    {
      title: 'Business Intelligence (BI) & Analítica DAX',
      category: 'Datos & Toma de Decisiones',
      icon: 'fas fa-chart-line',
      description: 'Transformación de datos operativos masivos en tableros ejecutivos estratégicos.',
      highlights: [
        'Modelado relacional avanzado en Power BI con fórmulas y métricas DAX complejas.',
        'Consultas, agregaciones y modelado de datos en SQL Server / PostgreSQL.',
        'Diseño de dashboards para la toma de decisiones institucionales y directivas.'
      ],
      tools: ['Power BI', 'DAX', 'SQL', 'Microsoft PowerApps', 'Excel Avanzado']
    },
    {
      title: 'Gestión de Proyectos TI & Aseguramiento de Calidad',
      category: 'Gestión & Metodologías',
      icon: 'fas fa-tasks',
      description: 'Liderazgo técnico ágil, control de cronogramas y aseguramiento de calidad de software.',
      highlights: [
        'Coordinación ágil (Scrum/Kanban) de apps móviles clave (Jalisco Sin Hambre, UNIMA, Mi ITESO).',
        'Diseño y ejecución de casos de prueba manuales, de regresión y end-to-end (QA).',
        'Publicación y despliegue final en tiendas oficiales (Apple App Store & Google Play).'
      ],
      tools: ['Scrum / Agile', 'Jira', 'Asana', 'QA Manual & E2E', 'App Stores Publishing']
    },
    {
      title: 'Ingeniería de Audio & Transmisión',
      category: 'Medios & Divulgación',
      icon: 'fas fa-broadcast-tower',
      description: 'Operación técnica de cabina de radio, edición profesional y divulgación tecnológica.',
      highlights: [
        'Creador, editor técnico y locutor de la cápsula "Ingeniería Inversa" en Radio ITESO 95.1 FM.',
        'Operación de consolas profesionales de radiodifusión AEQ CAPITOL IP12.',
        'Postproducción de audio y masterización con Adobe Audition.'
      ],
      tools: ['AEQ CAPITOL IP12', 'Adobe Audition', 'Radio Broadcasting', 'Divulgación TI']
    }
  ];

  learningSkills: LearningSkill[] = [
    {
      title: 'Ciberseguridad Ofensiva & Pentesting',
      category: 'Seguridad Digital',
      icon: 'fas fa-user-secret',
      badge: 'Certificación 2026',
      badgeClass: 'badge-danger',
      description: 'Especialización en análisis de vulnerabilidades, pruebas de intrusión y marcos de seguridad modernos.',
      keyTopics: [
        'Framework MITRE ATT&CK para modelado de amenazas y detección.',
        'Herramientas de reconocimiento y explotación: Nmap, ffuf, Metasploit, Burp Suite.',
        'Principios de seguridad Shift-Left y arquitectura Zero Trust.'
      ],
      goal: 'Obtención de la Certificación Profesional en Ciberseguridad (ITESO) y auditorías preventivas de infraestructura.'
    },
    {
      title: 'Inteligencia Artificial Local & LLMs en el Edge',
      category: 'Inteligencia Artificial',
      icon: 'fas fa-brain',
      badge: 'En Producción Propia',
      badgeClass: 'badge-success',
      description: 'Ejecución y afinación de modelos de lenguaje abiertos directamente en servidores locales autohospedados.',
      keyTopics: [
        'Orquestación de LLMs locales con Ollama en hardware dedicado.',
        'Privacidad de datos y procesamiento sin dependencia de APIs externas en la nube.',
        'Integración de modelos con flujos de automatización y agentes de código.'
      ],
      goal: 'Construir un ecosistema de agentes locales privados para análisis seguro de datos institucionales.'
    },
    {
      title: 'Telemetría Biométrica & Analítica Wearable',
      category: 'IoT & Telemetría',
      icon: 'fas fa-heartbeat',
      badge: 'Investigación Activa',
      badgeClass: 'badge-primary',
      description: 'Captura y análisis de flujos telemétricos en tiempo real desde dispositivos wearables de alto rendimiento.',
      keyTopics: [
        'Extracción de métricas telemétricas del ecosistema Garmin (Epix Gen 2, HRM-Pro Plus).',
        'Zonas de frecuencia cardíaca, variabilidad de frecuencia (HRV) y carga de entrenamiento.',
        'Automatización del almacenamiento y modelado de datos biométricos para optimización deportiva.'
      ],
      goal: 'Integrar dashboards analíticos predictivos de fatiga y adaptación neuromuscular.'
    },
    {
      title: 'Arquitecturas Cloud Nativas & CI/CD Continuo',
      category: 'Cloud & Modern Ops',
      icon: 'fas fa-cloud-upload-alt',
      badge: 'Ampliación Constante',
      badgeClass: 'badge-warning',
      description: 'Evolución continua de prácticas DevOps para despliegue automatizado y cómputo sin servidor.',
      keyTopics: [
        'Google Cloud Platform (Cloud Run, gestión de accesos IAM, Cloud Storage).',
        'Automatización de pruebas y despliegues con GitHub Actions.',
        'Infraestructura inmutable y despliegues sin tiempo de inactividad.'
      ],
      goal: 'Optimizar costos y resiliencia en arquitecturas híbridas cloud/edge.'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
