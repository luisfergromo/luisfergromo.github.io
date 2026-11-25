import { Component, OnInit } from '@angular/core';

interface Pillar {
  icon: string;
  title: string;
  titleEn: string;
  items: string;
  itemsEn: string;
}

interface QuickLink {
  icon: string;
  label: string;
  labelEn: string;
  sublabel: string;
  sublabelEn: string;
  url: string;
  urlEn?: string;
  isExternal: boolean;
  isRouterLink?: boolean;
  action?: 'email' | 'vcard' | 'share';
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  name = 'LuisFerGRomo';
  completeName = 'Luis Fernando Gutiérrez Romo';
  titleEs = 'IT Manager | Technical PM | Senior Systems Integrator';
  titleEn = 'IT Manager | Technical PM | Senior Systems Integrator';
  workModesEs = 'Remoto Global · Híbrido / Presencial GDL · Bilingüe (ES/EN)';
  workModesEn = 'Remote Global · Hybrid / On-site GDL · Bilingual (ES/EN)';
  location = 'Zapopan, Jalisco, México';
  email = 'luisfernando.gutierrezr@outlook.com';
  currentLang: 'es' | 'en' = 'es';

  toastMessage: string | null = null;
  toastTimeout: any = null;
  showQrModal: boolean = false;

  pillars: Pillar[] = [
    {
      icon: 'fas fa-cloud',
      title: 'Cloud & Zero Trust',
      titleEn: 'Cloud & Zero Trust',
      items: 'Docker · GCP · Tailscale · Linux',
      itemsEn: 'Docker · GCP · Tailscale · Linux'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Automatización & CRM',
      titleEn: 'Automation & CRM',
      items: 'Power Automate · Salesforce · REST APIs',
      itemsEn: 'Power Automate · Salesforce · REST APIs'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Business Intelligence',
      titleEn: 'Business Intelligence',
      items: 'Power BI · DAX · Modelado SQL',
      itemsEn: 'Power BI · DAX · SQL Modeling'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Ciberseguridad',
      titleEn: 'Cybersecurity',
      items: 'Pentesting · MITRE ATT&CK · Shift-Left',
      itemsEn: 'Pentesting · MITRE ATT&CK · Shift-Left'
    }
  ];

  links: QuickLink[] = [
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      labelEn: 'LinkedIn',
      sublabel: 'Conectar en red profesional',
      sublabelEn: 'Connect on professional network',
      url: 'https://www.linkedin.com/in/LuisFerGRomo/',
      isExternal: true
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      labelEn: 'GitHub',
      sublabel: 'Código, scripts e integraciones',
      sublabelEn: 'Code, scripts & integrations',
      url: 'https://github.com/luisfergromo/',
      isExternal: true
    },
    {
      icon: 'fas fa-award',
      label: 'Credly',
      labelEn: 'Credly',
      sublabel: 'Insignias y certificaciones oficiales',
      sublabelEn: 'Official verified certifications',
      url: 'https://www.credly.com/users/luisfergromo',
      isExternal: true
    },
    {
      icon: 'fab fa-google',
      label: 'Google Cloud Skills',
      labelEn: 'Google Cloud Skills',
      sublabel: 'Perfil público de habilidades Google Cloud',
      sublabelEn: 'Public Google Cloud skill badges',
      url: 'https://www.skills.google/public_profiles/4c860249-ffdf-40a0-ba83-58268e0313e7',
      isExternal: true
    },
    {
      icon: 'fas fa-user-secret',
      label: 'TryHackMe',
      labelEn: 'TryHackMe',
      sublabel: 'Laboratorios de ciberseguridad (VidarTheFoehammer)',
      sublabelEn: 'Hands-on security labs (VidarTheFoehammer)',
      url: 'https://tryhackme.com/p/VidarTheFoehammer',
      isExternal: true
    },
    {
      icon: 'fas fa-briefcase',
      label: 'Portafolio de Proyectos',
      labelEn: 'Projects Portfolio',
      sublabel: '13+ proyectos empresariales y móviles',
      sublabelEn: '13+ enterprise & mobile projects',
      url: '/portfolio',
      isExternal: false,
      isRouterLink: true
    },
    {
      icon: 'fas fa-layer-group',
      label: 'Habilidades & Capacidades',
      labelEn: 'Capabilities & Skills',
      sublabel: 'Stack técnico y áreas de especialidad',
      sublabelEn: 'Technical stack & specialty areas',
      url: '/skills',
      isExternal: false,
      isRouterLink: true
    },
    {
      icon: 'fas fa-file-alt',
      label: 'Currículum Vitae (Web)',
      labelEn: 'Full Resume (Web)',
      sublabel: 'Experiencia laboral completa y trayectoria',
      sublabelEn: 'Full professional experience & trajectory',
      url: '/spa',
      urlEn: '/eng',
      isExternal: false,
      isRouterLink: true
    }
  ];

  ngOnInit(): void {
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang === 'en' || savedLang === 'es') {
      this.currentLang = savedLang;
    }
  }

  switchLanguage(lang?: 'es' | 'en'): void {
    if (lang) {
      this.currentLang = lang;
    } else {
      this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
    }
    localStorage.setItem('preferredLang', this.currentLang);
  }

  downloadVCard(): void {
    const vcardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Luis Fernando Gutiérrez Romo',
      'N:Gutiérrez Romo;Luis Fernando;;;',
      'TITLE:IT Manager | Technical PM | Senior Systems Integrator',
      'EMAIL;TYPE=INTERNET,WORK,PREF:luisfernando.gutierrezr@outlook.com',
      'URL;TYPE=WORK:https://luisfergromo.vercel.app/',
      'X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/LuisFerGRomo/',
      'X-SOCIALPROFILE;TYPE=github:https://github.com/luisfergromo/',
      'X-SOCIALPROFILE;TYPE=credly:https://www.credly.com/users/luisfergromo',
      'X-SOCIALPROFILE;TYPE=google-skills:https://www.skills.google/public_profiles/4c860249-ffdf-40a0-ba83-58268e0313e7',
      'X-SOCIALPROFILE;TYPE=tryhackme:https://tryhackme.com/p/VidarTheFoehammer',
      'ADR;TYPE=WORK:;;;Zapopan;Jalisco;;Mexico',
      'NOTE:IT Manager, Technical PM & Senior Systems Integrator. Microsoft Power Automate, Salesforce, Power BI & DAX, Cloud (Docker, GCP, Tailscale), Ciberseguridad (TryHackMe, Credly).',
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'LuisFernandoGutierrezRomo.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    this.showToast(this.currentLang === 'es' ? '¡Contacto descargado (vCard)!' : 'Contact file downloaded (vCard)!');
  }

  async shareCard(): Promise<void> {
    const title = 'Tarjeta Digital - Luis Fernando Gutiérrez Romo';
    const text = this.currentLang === 'es'
      ? 'Tarjeta de presentación digital de Luis Fernando Gutiérrez Romo | IT Manager, Technical PM & Senior Systems Integrator'
      : 'Digital Business Card of Luis Fernando Gutiérrez Romo | IT Manager, Technical PM & Senior Systems Integrator';
    const url = 'https://luisfergromo.vercel.app/card';

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (err) {
        // Fallback if dismissed
      }
    }

    this.copyToClipboard(url, this.currentLang === 'es' ? '¡Enlace de tarjeta copiado!' : 'Card link copied to clipboard!');
  }

  copyEmail(): void {
    this.copyToClipboard(this.email, this.currentLang === 'es' ? '¡Correo copiado al portapapeles!' : 'Email copied to clipboard!');
  }

  copyToClipboard(text: string, successMessage: string): void {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => this.showToast(successMessage))
        .catch(() => this.fallbackCopy(text, successMessage));
    } else {
      this.fallbackCopy(text, successMessage);
    }
  }

  private fallbackCopy(text: string, successMessage: string): void {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      this.showToast(successMessage);
    } catch (err) {
      this.showToast(this.currentLang === 'es' ? 'No se pudo copiar automáticamente' : 'Could not copy automatically');
    }
    document.body.removeChild(textArea);
  }

  toggleQrModal(): void {
    this.showQrModal = !this.showQrModal;
  }

  showToast(message: string): void {
    this.toastMessage = message;
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
    this.toastTimeout = setTimeout(() => {
      this.toastMessage = null;
    }, 3200);
  }
}
