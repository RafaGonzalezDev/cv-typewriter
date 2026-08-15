const socialNetworks = [
  {
    network: 'LinkedIn',
    username: 'rafa-gonzalez-rubio',
  },
  {
    network: 'GitHub',
    username: 'RafaGonzalezDev',
  },
];

const projectUrls = {
  angularI18nTranslator: 'https://github.com/RafaGonzalezDev/angular-i18n-translator',
  mcpSchemaRunner: 'https://github.com/RafaGonzalezDev/mcp-schema-runner',
  strideAgentShowcase: 'https://github.com/RafaGonzalezDev/stride-agent-showcase',
  dotfilesOpencodeShowcase: 'https://github.com/RafaGonzalezDev/dotfiles-opencode-showcase',
  agenticPrReviewerAction: 'https://github.com/RafaGonzalezDev/agentic-pr-reviewer-action',
  cvTypewriter: 'https://github.com/RafaGonzalezDev/cv-typewriter',
};

const SAMPLE = {
  cv: {
    active_language: 'es',
    languages: {
      es: {
        name: 'Rafa González Rubio',
        location: 'Córdoba, España (ES)',
        email: 'rafagonzalezdeveloper@gmail.com',
        phone: '+34 618 09 62 35',
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
            'Frontend Engineer con más de 3 años en entornos enterprise bancarios, especializado en AI Developer Tooling y Developer Automation. Angular, TypeScript y microfrontends; workflows agénticos, Model Context Protocol (MCP), Playwright e inferencia local con LLMs para acelerar análisis, testing, documentación y entrega continua.',
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
                'Defino la gobernanza y evolución del ecosistema técnico frontend del banco desde el equipo de Arquitectura Frontend.',
                'Combino el diseño estratégico de arquitecturas con implementación hands-on en entornos enterprise.',
                'Despliego workflows agénticos propios (Pi/OpenCode, MCPs y extensiones custom) para acelerar análisis de código, documentación técnica y revisión de cambios.',
                'Automatizo flujos de CI/CD y revisión de cambios con agentes integrados en las herramientas colaborativas del entorno enterprise.',
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
                'Lideré end-to-end 2 microfrontends en un entorno bancario de alta disponibilidad (Angular, TypeScript): desarrollo, releases y despliegues.',
                'Diseñé e implementé una CLI (Node.js + TypeScript) para i18n end-to-end (.xlf → CSV → traducción por batches vía API → locales) que redujo el esfuerzo de internacionalización de días a minutos, adoptada como herramienta transversal del equipo.',
                'Implementé testing E2E asistido por agente mediante Playwright MCP para validar flujos críticos y reforzar la calidad funcional.',
                'Mentoricé 1:1 a compañeros en workflows con MCPs y agentes de coding, estandarizando los procesos de desarrollo del equipo.',
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
                'Mentoricé a una nueva incorporación, acelerando su ramp-up técnico y su alineación con los estándares del proyecto.',
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
              name: `[stride-agent-showcase](${projectUrls.strideAgentShowcase})`,
              highlights: [
                'Runtime de coding agent en TypeScript/Node con tools policy-gated, audit logging, redacción de secretos, proveedor fake/OpenAI-compatible y carga de plugins.',
              ],
            },
            {
              name: `[angular-i18n-translator](${projectUrls.angularI18nTranslator})`,
              highlights: [
                'CLI en Node.js para automatizar traducciones Angular XLF con LLMs, batch processing, preservación de interpolaciones y soporte multi-provider.',
              ],
            },
            {
              name: `[mcp-schema-runner](${projectUrls.mcpSchemaRunner})`,
              highlights: [
                'Herramienta local en TypeScript/React para depurar servidores MCP stdio con inspección de schemas de tools, tool calls manuales y traces request/response/error.',
              ],
            },
            {
              name: `[agentic-pr-reviewer-action](${projectUrls.agenticPrReviewerAction})`,
              highlights: [
                'GitHub Action agéntica para revisar Pull Requests sobre diffs acotados usando endpoints LLM OpenAI-compatible y feedback accionable dentro de CI/CD.',
              ],
            },
            {
              name: `[dotfiles-opencode-showcase](${projectUrls.dotfilesOpencodeShowcase})`,
              highlights: [
                'Instalador de perfiles OpenCode con CLI TypeScript/Ink, workflows agénticos por rol, backups/rollback transaccionales y verificación de configuración gestionada.',
              ],
            },
            {
              name: `[cv-typewriter](${projectUrls.cvTypewriter})`,
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
        email: 'rafagonzalezdeveloper@gmail.com',
        phone: '+34 618 09 62 35',
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
            'Frontend Engineer with 3+ years in enterprise banking environments, specialized in AI Developer Tooling and Developer Automation. Angular, TypeScript and microfrontends; agentic workflows, Model Context Protocol (MCP), Playwright and local LLM inference to accelerate analysis, testing, documentation and continuous delivery.',
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
                "Define the governance and evolution of the bank's frontend technical ecosystem from the Frontend Architecture team.",
                'Combine strategic architecture design with hands-on implementation in enterprise environments.',
                'Deploy custom agentic workflows (Pi/OpenCode, MCPs and custom extensions) to accelerate code analysis, technical documentation and change review.',
                'Automate CI/CD flows and change review with agents integrated into collaborative enterprise tooling.',
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
                'Led end-to-end 2 microfrontends in a high-availability banking environment (Angular, TypeScript): development, releases and deployments.',
                "Designed and implemented a CLI (Node.js + TypeScript) for end-to-end i18n (.xlf → CSV → batch API translation → locales) that reduced internationalization effort from days to minutes, adopted as the team's standard tool.",
                'Implemented agent-assisted E2E testing with Playwright MCP to validate critical flows and strengthen functional quality.',
                'Mentored teammates 1:1 on MCP workflows and coding agents, standardizing the team\'s development processes.',
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
              name: `[stride-agent-showcase](${projectUrls.strideAgentShowcase})`,
              highlights: [
                'TypeScript/Node coding-agent runtime with policy-gated tools, audit logging, secret redaction, fake/OpenAI-compatible providers and plugin loading.',
              ],
            },
            {
              name: `[angular-i18n-translator](${projectUrls.angularI18nTranslator})`,
              highlights: [
                'Node.js CLI for automating Angular XLF translations with LLMs, batch processing, interpolation preservation and multi-provider support.',
              ],
            },
            {
              name: `[mcp-schema-runner](${projectUrls.mcpSchemaRunner})`,
              highlights: [
                'Local TypeScript/React tool for debugging stdio MCP servers with tool schema inspection, manual tool calls and raw request/response/error traces.',
              ],
            },
            {
              name: `[agentic-pr-reviewer-action](${projectUrls.agenticPrReviewerAction})`,
              highlights: [
                'Agentic GitHub Action for diff-scoped Pull Request reviews using OpenAI-compatible LLM endpoints and actionable CI/CD code-review feedback.',
              ],
            },
            {
              name: `[dotfiles-opencode-showcase](${projectUrls.dotfilesOpencodeShowcase})`,
              highlights: [
                'OpenCode profile installer with a TypeScript/Ink CLI, role-based agentic workflows, transactional backups/rollback and managed config verification.',
              ],
            },
            {
              name: `[cv-typewriter](${projectUrls.cvTypewriter})`,
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
