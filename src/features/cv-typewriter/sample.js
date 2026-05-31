const socialNetworks = [
  {
    network: 'LinkedIn',
    username: 'rafa-gonzález-rubio-2977aa171',
  },
  {
    network: 'GitHub',
    username: 'RafaGonzalezDev',
  },
];

const projectUrls = {
  angularI18nTranslator: 'https://github.com/RafaGonzalezDev/angular-i18n-translator',
  localLlmInferenceLab: 'https://github.com/RafaGonzalezDev/local-llm-inference-lab',
  cvTypewriter: 'https://github.com/RafaGonzalezDev/cv-typewriter',
};

const SAMPLE = {
  cv: {
    active_language: 'es',
    languages: {
      es: {
        name: 'Rafa González Rubio',
        location: 'Córdoba, España (ES)',
        social_networks: socialNetworks,
        labels: {
          present: 'Actualidad',
          location: 'Ubicación',
          sections: {
            experience: 'Experiencia',
            technologies: 'Stack técnico',
            projects: 'Proyectos destacados',
            education: 'Formación',
          },
        },
        sections: {
          professional_summary: [
            'Frontend Engineer en entornos enterprise bancarios, enfocado en AI Developer Tooling y Developer Automation. Trabajo con Angular, TypeScript y microfrontends, aplicando agentic workflows, Model Context Protocol (MCP), Playwright e inferencia local con LLMs para acelerar análisis técnico, testing, documentación y entrega continua.',
          ],
          experience: [
            {
              company: '.es formación y consultoría',
              position: 'Frontend Architect - Banc Sabadell',
              start_date: '2026-03',
              end_date: 'present',
              location: 'Madrid, España · En remoto',
              summary: null,
              highlights: [
                'Incorporación al equipo de Arquitectura Frontend con responsabilidad en la definición y gobernanza del ecosistema técnico del banco.',
                'Rol híbrido que combina diseño estratégico de arquitecturas con implementación hands-on en entornos enterprise.',
                'Uso de workflows agénticos propios con Pi/OpenCode, MCPs y extensiones custom para acelerar análisis de código, documentación técnica, revisión de cambios y tareas recurrentes de arquitectura frontend.',
                'Exploración de automatizaciones agénticas aplicadas a flujos de CI/CD, revisión de cambios e integración con herramientas colaborativas en entornos enterprise.',
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
                'Implementación de testing automatizado asistido por agente mediante Playwright MCP para validar flujos E2E y reforzar la calidad funcional.',
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
              details:
                'OpenCode, Pi, Model Context Protocol (MCP), Playwright MCP, coding agents, agentic workflows, prompt systems, tool permissions',
            },
            {
              label: 'Local LLM Inference',
              details:
                'llama.cpp, local model serving, concurrency control, token budgeting, CPU/GPU layer tuning, KV cache reuse, MTP configuration',
            },
            {
              label: 'Developer Tooling',
              details:
                'Node.js, TypeScript, CLI tools, Ink, automation workflows, audit logging, secret redaction',
            },
          ],
          projects: [
            {
              name: `[Angular i18n Translator](${projectUrls.angularI18nTranslator})`,
              highlights: [
                'CLI en Node.js para automatizar traducciones Angular XLF con LLMs, batch processing, preservación de interpolaciones y soporte multi-provider.',
              ],
            },
            {
              name: `[Local LLM Inference Lab](${projectUrls.localLlmInferenceLab})`,
              highlights: [
                'Repositorio público para ejecutar modelos GGUF locales con llama.cpp-compatible serving, perfiles reutilizables, checks OpenAI-compatible y documentación de integración con OpenWebUI.',
              ],
            },
            {
              name: `[CV Typewriter](${projectUrls.cvTypewriter})`,
              highlights: [
                'Editor de CV data-first en React/Vite con JSON bilingüe, preview A4 paginado y exportación PDF para iterar contenido profesional versionable.',
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
      },
      en: {
        name: 'Rafa González Rubio',
        location: 'Córdoba, Spain (ES)',
        social_networks: socialNetworks,
        labels: {
          present: 'Present',
          location: 'Location',
          sections: {
            experience: 'Experience',
            technologies: 'Technical Stack',
            projects: 'Selected Projects',
            education: 'Education',
          },
        },
        sections: {
          professional_summary: [
            'Frontend Engineer in enterprise banking environments, focused on AI Developer Tooling and Developer Automation. I work with Angular, TypeScript and microfrontends, applying agentic workflows, Model Context Protocol (MCP), Playwright and local LLM inference to accelerate technical analysis, testing, documentation and continuous delivery.',
          ],
          experience: [
            {
              company: '.es formación y consultoría',
              position: 'Frontend Architect - Banc Sabadell',
              start_date: '2026-03',
              end_date: 'present',
              location: 'Madrid, Spain · Remote',
              summary: null,
              highlights: [
                "Joined the Frontend Architecture team with responsibility for defining and governing the bank's technical frontend ecosystem.",
                'Hybrid role combining strategic architecture design with hands-on implementation in enterprise environments.',
                'Used custom agentic workflows with Pi/OpenCode, MCPs and custom extensions to accelerate code analysis, technical documentation, change review and recurring frontend architecture tasks.',
                'Explored agentic automations applied to CI/CD workflows, change review and integrations with collaborative tools in enterprise environments.',
              ],
            },
            {
              company: 'Banco Santander',
              position: 'Frontend Engineer',
              start_date: '2025-09',
              end_date: '2026-03',
              location: 'Madrid, Spain',
              summary: null,
              highlights: [
                'End-to-end ownership of 2 microfrontends: development, maintenance, releases and deployments.',
                'Designed and evolved frontend solutions in a high-availability banking environment with Angular and TypeScript.',
                'Designed and implemented a CLI tool (Node.js + TypeScript) for end-to-end microfrontend i18n, based on an .xlf → CSV → batch API translation → consolidation → locale generation pipeline.',
                'Reduced internationalization effort from days to minutes, enabling faster deliveries and broader adoption across the team.',
                'Implemented agent-assisted automated testing with Playwright MCP to validate E2E flows and strengthen functional quality.',
                'Collaborated cross-functionally with QA, development and business teams to ensure quality and continuous delivery.',
                'Applied custom agentic tooling to accelerate analysis, documentation, change generation and automation within the frontend development lifecycle.',
                'Provided 1:1 mentoring to standardize and speed up development processes through MCP workflows and coding agents.',
              ],
            },
            {
              company: 'UST Global | Banco Santander',
              position: 'Frontend Engineer',
              start_date: '2023-11',
              end_date: '2025-08',
              location: 'Madrid, Spain · Remote',
              summary: null,
              highlights: [
                'Led end-to-end development and optimization of an Angular and TypeScript microfrontend.',
                'Implemented NgRx and a custom state management system, improving performance and consistency.',
                'Designed a custom routing system for encapsulated microfrontends using Module Federation.',
                'Improved microfrontend stability and quality by reinforcing unit testing (Jasmine/Karma) to meet SonarQube quality gates and Jenkins pipeline validations.',
                'Onboarded and mentored a new team member, accelerating technical ramp-up and alignment with project standards.',
              ],
            },
            {
              company: 'GrayHats',
              position: 'Frontend Developer Intern',
              start_date: '2023-03',
              end_date: '2023-08',
              location: 'Córdoba, Spain · On-site',
              summary: null,
              highlights: [
                'Designed advanced solutions with React and GraphQL, optimizing operational efficiency.',
                'Developed backend services with AWS Amplify, ensuring secure integration and scalability.',
              ],
            },
          ],
          technologies: [
            {
              label: 'Frontend',
              details: 'Angular, TypeScript, React, NgRx',
            },
            {
              label: 'Architecture',
              details: 'Microfrontends, Module Federation',
            },
            {
              label: 'Backend / Cloud',
              details: 'Node.js, GraphQL/REST, AWS',
            },
            {
              label: 'AI Tooling',
              details:
                'OpenCode, Pi, Model Context Protocol (MCP), Playwright MCP, coding agents, agentic workflows, prompt systems, tool permissions',
            },
            {
              label: 'Local LLM Inference',
              details:
                'llama.cpp, local model serving, concurrency control, token budgeting, CPU/GPU layer tuning, KV cache reuse, MTP configuration',
            },
            {
              label: 'Developer Tooling',
              details:
                'Node.js, TypeScript, CLI tools, Ink, automation workflows, audit logging, secret redaction',
            },
          ],
          projects: [
            {
              name: `[Angular i18n Translator](${projectUrls.angularI18nTranslator})`,
              highlights: [
                'Node.js CLI for automating Angular XLF translations with LLMs, batch processing, interpolation preservation and multi-provider support.',
              ],
            },
            {
              name: `[Local LLM Inference Lab](${projectUrls.localLlmInferenceLab})`,
              highlights: [
                'Public repository for running local GGUF models with llama.cpp-compatible serving, reusable profiles, OpenAI-compatible checks and OpenWebUI integration docs.',
              ],
            },
            {
              name: `[CV Typewriter](${projectUrls.cvTypewriter})`,
              highlights: [
                'Data-first CV editor built with React/Vite, bilingual JSON content, paginated A4 preview and PDF export for version-controlled professional content.',
              ],
            },
          ],
          education: [
            {
              institution: 'MEDAC',
              area: 'Web Application Development',
              degree: 'Higher Vocational Training',
              start_date: '2021-09',
              end_date: '2023-06',
              location: '',
              summary: null,
              highlights: [],
            },
          ],
        },
      },
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
    language: 'es',
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
