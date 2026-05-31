const SAMPLE = {
  cv: {
    name: 'Rafa González Rubio',
    location: 'Córdoba, España (ES)',
    social_networks: [
      {
        network: 'LinkedIn',
        username: 'rafa-gonzález-rubio-2977aa171',
      },
      {
        network: 'GitHub',
        username: 'RafaGonzalezDev',
      },
    ],
    sections: {
      professional_summary: [
        'Frontend Engineer en entornos enterprise bancarios. Trabajo con Angular, TypeScript y microfrontends, aplicando tooling agéntico, MCPs e inferencia local con LLMs para acelerar análisis técnico, desarrollo y entrega continua.',
      ],
      experience: [
        {
          company: '.es formación y consultoría',
          position: 'Frontend Architect - Banco Sabadell',
          start_date: '2026-03',
          end_date: 'present',
          location: 'Madrid, España · En remoto',
          summary: null,
          highlights: [
            'Incorporación al equipo de Arquitectura Frontend con responsabilidad en la definición y gobernanza del ecosistema técnico del banco.',
            'Rol híbrido que combina diseño estratégico de arquitecturas con implementación hands-on en entornos enterprise.',
            'Uso de workflows agénticos propios con Pi/OpenCode, MCPs y extensiones custom para acelerar análisis de código, documentación técnica, revisión de cambios y tareas recurrentes de arquitectura frontend.',
          ],
        },
        {
          company: 'Banco Santander',
          position: 'Frontend Engineer',
          start_date: '2025-09',
          end_date: '2026-03',
          location: 'Madrid, España',
          summary: null,
          highlights: [
            'Ownership end-to-end de 2 microfrontends: desarrollo, mantenimiento, releases y despliegues.',
            'Diseño y evolución de soluciones frontend en entorno bancario de alta disponibilidad con Angular y TypeScript.',
            'Diseño e implementación de una herramienta CLI (Node.js + TypeScript) para i18n end-to-end de microfrontends, basada en pipeline .xlf → CSV → traducción por batches vía API → consolidación → generación de locales.',
            'Reducción drástica del esfuerzo de internacionalización de días a minutos, habilitando entregas rápidas y adopción transversal en el equipo.',
            'Colaboración transversal con equipos de QA, desarrollo y negocio para asegurar calidad y entrega continua.',
            'Aplicación de tooling agéntico propio para acelerar tareas de análisis, documentación, generación de cambios y automatización dentro del ciclo de desarrollo frontend.',
            'Mentorización 1:1 a compañeros para estandarizar y agilizar procesos de desarrollo mediante workflows con MCPs y agentes de coding.',
          ],
        },
        {
          company: 'UST Global | Banco Santander',
          position: 'Frontend Engineer',
          start_date: '2023-11',
          end_date: '2025-08',
          location: 'Madrid, España · En remoto',
          summary: null,
          highlights: [
            'Lideré el desarrollo integral y optimización de un micro frontend con Angular y TypeScript.',
            'Implementé NgRx y un sistema de estado propio, mejorando rendimiento y consistencia.',
            'Diseñé un sistema de routing a medida para micro frontends encapsulados mediante Module Federation.',
            'Mejoré estabilidad y calidad del microfrontend reforzando el testing unitario (Jasmine/Karma) para cumplir con quality gates de SonarQube y validaciones del pipeline (Jenkins).',
            'Onboarding y mentorización de una nueva incorporación, facilitando ramp-up técnico y alineación con estándares del proyecto.',
          ],
        },
        {
          company: 'GrayHats',
          position: 'Frontend Developer Intern',
          start_date: '2023-03',
          end_date: '2023-08',
          location: 'Córdoba, España · Presencial',
          summary: null,
          highlights: [
            'Diseñé soluciones avanzadas con React y GraphQL, optimizando la eficiencia operativa.',
            'Desarrollé servicios backend con AWS Amplify, asegurando integración segura y escalabilidad.',
          ],
        },
      ],
      technologies: [
        {
          label: 'Frontend',
          details: 'Angular, TypeScript, React, NgRx',
        },
        {
          label: 'Arquitectura',
          details: 'Microfrontends, Module Federation',
        },
        {
          label: 'Backend / Cloud',
          details: 'Node.js, GraphQL/REST, AWS',
        },
        {
          label: 'AI Tooling',
          details: 'OpenCode, Pi, MCPs, coding agents, AGENTS.md, prompt systems, tool permissions',
        },
        {
          label: 'Local AI Inference',
          details: 'llama.cpp, local LLM serving, concurrency control, token budgeting, CPU/GPU layer tuning, KV cache reuse, MTP configuration',
        },
        {
          label: 'Developer Tooling',
          details: 'Node.js, TypeScript, CLI tools, Ink, automation workflows, audit logging, secret redaction',
        },
      ],
      projects: [
        {
          name: 'Stride Agent',
          highlights: [
            'Diseño e implementación de un coding-agent MVP en TypeScript/Node.js con provider OpenAI-compatible, CLI auditable, ejecución de herramientas bajo política y salida JSON estable para automatización.',
            'Implementación de runtime con herramientas de filesystem/bash, permisos allow/ask/deny, sesiones append-only, audit logging, redacción de secretos y soporte para plugins.',
          ],
        },
        {
          name: 'Local LLM Inference Lab',
          highlights: [
            'Experimentación sirviendo modelos locales con llama.cpp para varios usuarios en la misma red, controlando concurrencia, presupuesto de tokens y parámetros de ejecución.',
            'Ajuste de flags para reparto CPU/GPU, reutilización de caché en chunks y configuración MTP para acelerar la inferencia en escenarios locales.',
          ],
        },
        {
          name: 'Pi Agent Extensions & Setup',
          highlights: [
            'Desarrollo de extensiones para Pi, incluyendo carga de servidores MCP, herramienta web_fetch, renderers compactos y security-guard para bloquear paths sensibles y comandos peligrosos.',
            'Construcción de una CLI interactiva en TypeScript/Ink para instalar, verificar y mantener configuraciones reproducibles de Pi con backups y validación de extensiones.',
          ],
        },
        {
          name: 'OpenCode Agentic Frameworks',
          highlights: [
            'Diseño de frameworks reutilizables para OpenCode con workflows multiagente orientados a planificación, exploración, implementación, testing, debugging y review.',
            'Construcción de una CLI interactiva para distribuir configuraciones de equipo con instalación transaccional, backups, rollback y verificación automática.',
          ],
        },
      ],
      education: [
        {
          institution: 'MEDAC',
          area: 'Desarrollo de Aplicaciones Web',
          degree: 'C.F.G.S.',
          start_date: '2021-09',
          end_date: '2023-06',
          location: '',
          summary: null,
          highlights: [],
        },
      ],
    },
    sort_entries: 'none',
  },
  design: {
    theme: 'engineeringresumes',
    page: {
      size: 'a4',
      top_margin: '1.0cm',
      bottom_margin: '1.5cm',
      left_margin: '1.5cm',
      right_margin: '1.5cm',
      show_page_numbering: false,
      show_last_updated_date: true,
    },
  },
  locale: {
    language: 'en',
    phone_number_format: 'national',
    page_numbering_template: 'NAME - Page PAGE_NUMBER of TOTAL_PAGES',
    last_updated_date_template: 'Last updated in TODAY',
    date_template: 'MONTH_ABBREVIATION YEAR',
    month: 'month',
    months: 'months',
    year: 'year',
    years: 'years',
    present: 'present',
    to: '–',
    abbreviations_for_months: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    full_names_of_months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  rendercv_settings: {
    date: '2026-05-31',
    bold_keywords: [],
    sort_entries: 'none',
  },
};

export default SAMPLE;
