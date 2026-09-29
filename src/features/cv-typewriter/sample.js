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
  cvTypewriter: 'https://github.com/RafaGonzalezDev/cv-typewriter',
  wcagDesign: 'https://github.com/RafaGonzalezDev/wcag_design',
  angularNativeFederation: 'https://github.com/RafaGonzalezDev/angular-native-federation',
  strideAgentShowcase: 'https://github.com/RafaGonzalezDev/stride-agent-showcase',
  dotfilesOpencodeShowcase: 'https://github.com/RafaGonzalezDev/dotfiles-opencode-showcase',
  agenticPrReviewerAction: 'https://github.com/RafaGonzalezDev/agentic-pr-reviewer-action',
  angularI18nTranslator: 'https://github.com/RafaGonzalezDev/angular-i18n-translator',
  mcpSchemaRunner: 'https://github.com/RafaGonzalezDev/mcp-schema-runner',
  localInferenceSetup: 'https://github.com/RafaGonzalezDev/local-inference-setup',
};

const SAMPLE = {
  cv: {
    active_language: 'en',
    // Both language variants cover the frontend engineering keyword set while
    // keeping custom agent orchestration as the differentiator
    // (see docs/changelog/cv-content.md).
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
            'Frontend Engineer con más de 3 años en banca, especializado en Angular y TypeScript. Enfocado en UI accesible y responsive, calidad frontend y entrega continua; diferenciado por diseñar frameworks propios de orquestación de agentes.',
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
                'Defino la gobernanza y evolución del ecosistema técnico frontend del banco desde el equipo de Arquitectura Frontend, incluyendo estándares Angular/TypeScript, requisitos de accesibilidad (WCAG/ARIA), fundamentos de UI compartidos y herramientas de build.',
                'Combino el diseño estratégico de arquitecturas con implementación práctica en entornos corporativos.',
                'Diseño y mantengo orquestaciones propias de agentes (perfiles por rol, integraciones MCP y extensiones a medida) aplicadas a análisis de código, documentación técnica y revisión de cambios.',
                'Automatizo flujos de CI/CD y revisión de cambios con agentes integrados en las herramientas colaborativas de la organización.',
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
                'Lideré de principio a fin 2 microfrontends en un entorno bancario de alta disponibilidad (Angular, TypeScript, HTML5/CSS3, RxJS): desarrollo, releases y despliegues.',
                'Construí interfaces responsive y accesibles con la librería de componentes corporativa del banco y su Storybook, cumpliendo requisitos cross-browser y WCAG/ARIA.',
                'Diseñé e implementé una CLI (Node.js + TypeScript) para i18n de principio a fin (.xlf → CSV → traducción por lotes vía API → locales) que redujo el esfuerzo de internacionalización de días a minutos, adoptada como herramienta transversal del equipo.',
                'Implementé testing E2E asistido por agente mediante Playwright MCP para validar flujos críticos y reforzar la calidad funcional.',
                'Mentoricé 1:1 a compañeros en flujos de desarrollo, prácticas de testing y agentes de coding, estandarizando los procesos de entrega del equipo.',
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
                'Lideré el desarrollo integral y la optimización de un microfrontend con Angular (TypeScript, HTML5/CSS3, SCSS, diseños responsive, Webpack, lazy loading) en un producto bancario de alta disponibilidad.',
                'Implementé NgRx (store, effects, selectors) y gestión de estado basada en RxJS, mejorando rendimiento y consistencia.',
                'Diseñé un sistema de routing a medida para microfrontends encapsulados mediante Module Federation y route guards.',
                'Mejoré la estabilidad y la calidad del microfrontend reforzando el testing unitario (Jasmine, Karma, TestBed) para cumplir con los umbrales de calidad de SonarQube y las validaciones del pipeline (Jenkins).',
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
              label: 'Core Frontend',
              details:
                'TypeScript, JavaScript (ES6+), Angular (standalone components, Signals), RxJS, NgRx',
            },
            {
              label: 'UI y Accesibilidad',
              details:
                'HTML5, CSS3, SCSS/Sass, diseño responsive, design systems, Storybook (librería de componentes corporativa), WCAG 2.2 AA / EN 301 549, ARIA, auditorías axe / Lighthouse',
            },
            {
              label: 'Calidad y Rendimiento',
              details:
                'Jasmine, Karma, TestBed, Playwright, Cypress, Jest, Vitest, SonarQube, lazy loading, code splitting, optimización de bundle, Core Web Vitals',
            },
            {
              label: 'Build y Tooling',
              details: 'Vite, Webpack, Nx, npm, ESLint, Prettier, Git',
            },
            {
              label: 'Backend, Cloud y Seguridad',
              details: 'Node.js, Express, REST APIs, GraphQL, AWS, OIDC / JWT, CSP, OWASP',
            },
            {
              label: 'Entrega y Proceso',
              details:
                'CI/CD (Jenkins, Bitbucket Pipelines, GitHub Actions), Docker, code review, Scrum',
            },
            {
              label: 'Ingeniería Agéntica',
              details:
                'Model Context Protocol (MCP), orquestación de agentes propia, agentes de coding, workflows agénticos, OpenCode, Pi, inferencia local de LLM (llama.cpp, GGUF)',
            },
            {
              label: 'Frontend Adicional',
              details: 'React, Vue.js, Next.js, Redux Toolkit, Tailwind CSS',
            },
          ],
          projects: [
            {
              name: `[cv-typewriter](${projectUrls.cvTypewriter})`,
              highlights: [
                'Editor de página única en React 19 + Vite para crear CVs con enfoque data-first: modelo de contenido JSON, paginación A4 en cliente y exportación a PDF, con Tailwind CSS.',
              ],
            },
            {
              name: `[angular-native-federation](${projectUrls.angularNativeFederation})`,
              highlights: [
                'Playground de Native Federation en Angular 21 que valida el runtime sharing de Angular como singleton entre shell y remotes y la resolución de versiones por dependencia.',
              ],
            },
            {
              name: `[wcag_design](${projectUrls.wcagDesign})`,
              highlights: [
                'Herramienta de accesibilidad que genera paletas de color conformes con WCAG 2.2 con validación automática de contraste.',
              ],
            },
            {
              name: `[stride-agent-showcase](${projectUrls.strideAgentShowcase})`,
              highlights: [
                'Runtime de agente de coding en TypeScript/Node: orquestación de agentes propia con tools policy-gated, audit logging, redacción de secretos y proveedores OpenAI-compatible.',
              ],
            },
            {
              name: `[dotfiles-opencode-showcase](${projectUrls.dotfilesOpencodeShowcase})`,
              highlights: [
                'Framework de orquestación de agentes distribuido como instalador: perfiles de agente por rol, rollback transaccional de configuración y CLI en TypeScript/Ink.',
              ],
            },
            {
              name: `[agentic-pr-reviewer-action](${projectUrls.agenticPrReviewerAction})`,
              highlights: [
                'GitHub Action agéntica que revisa Pull Requests sobre diffs acotados con endpoints LLM OpenAI-compatible y feedback accionable dentro de CI/CD.',
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
            'Frontend Engineer with 3+ years in enterprise banking, specialized in Angular and TypeScript. Focused on accessible, responsive UI, frontend quality and continuous delivery; differentiated by designing custom agent orchestration frameworks.',
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
                "Define the governance and evolution of the bank's frontend technical ecosystem from the Frontend Architecture team, including Angular/TypeScript standards, accessibility requirements (WCAG/ARIA), shared UI foundations and build tooling.",
                'Combine strategic architecture design with hands-on implementation in enterprise environments.',
                'Design and maintain custom agent orchestration frameworks (role-based agent profiles, MCP integrations and custom extensions) applied to code analysis, technical documentation and change review.',
                'Automate CI/CD and change review workflows with agents integrated into collaborative engineering tooling.',
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
                'Led 2 microfrontends end-to-end in a high-availability banking environment (Angular, TypeScript, HTML5/CSS3, RxJS): development, releases and deployments.',
                "Built responsive and accessible interfaces with the bank's corporate component library and its Storybook, meeting cross-browser and WCAG/ARIA requirements.",
                "Designed and implemented a CLI (Node.js + TypeScript) for end-to-end i18n (.xlf → CSV → batch API translation → locales) that reduced internationalization effort from days to minutes, adopted as the team's standard tool.",
                'Implemented agent-assisted E2E testing with Playwright MCP to validate critical flows and strengthen functional quality.',
                "Mentored teammates 1:1 on development workflows, testing practices and coding agents, standardizing the team's delivery processes.",
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
                'Led the development and optimization of an Angular microfrontend (TypeScript, HTML5/CSS3, SCSS, responsive layouts, Webpack, lazy loading) in a high-availability banking product.',
                'Implemented NgRx (store, effects, selectors) and RxJS-based state management, improving performance and consistency.',
                'Designed a custom routing system for encapsulated microfrontends using Module Federation and route guards.',
                'Improved microfrontend stability and quality by reinforcing unit testing (Jasmine, Karma, TestBed) to meet SonarQube quality gates and Jenkins pipeline validations.',
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
              label: 'Core Frontend',
              details:
                'TypeScript, JavaScript (ES6+), Angular (standalone components, Signals), RxJS, NgRx',
            },
            {
              label: 'UI & Accessibility',
              details:
                'HTML5, CSS3, SCSS/Sass, responsive design, design systems, Storybook (corporate component library), WCAG 2.2 AA / EN 301 549, ARIA, axe / Lighthouse audits',
            },
            {
              label: 'Quality & Performance',
              details:
                'Jasmine, Karma, TestBed, Playwright, Cypress, Jest, Vitest, SonarQube, lazy loading, code splitting, bundle optimization, Core Web Vitals',
            },
            {
              label: 'Build & Tooling',
              details: 'Vite, Webpack, Nx, npm, ESLint, Prettier, Git',
            },
            {
              label: 'Backend, Cloud & Security',
              details: 'Node.js, Express, REST APIs, GraphQL, AWS, OIDC / JWT, CSP, OWASP',
            },
            {
              label: 'Delivery & Process',
              details:
                'CI/CD (Jenkins, Bitbucket Pipelines, GitHub Actions), Docker, code review, Scrum',
            },
            {
              label: 'Agentic Engineering',
              details:
                'Model Context Protocol (MCP), custom agent orchestration, coding agents, agentic workflows, OpenCode, Pi, local LLM inference (llama.cpp, GGUF)',
            },
            {
              label: 'Additional Frontend',
              details: 'React, Vue.js, Next.js, Redux Toolkit, Tailwind CSS',
            },
          ],
          projects: [
            {
              name: `[cv-typewriter](${projectUrls.cvTypewriter})`,
              highlights: [
                'React 19 + Vite single-page editor for data-first CV authoring: JSON content model, client-side A4 pagination and print-to-PDF export, styled with Tailwind CSS.',
              ],
            },
            {
              name: `[angular-native-federation](${projectUrls.angularNativeFederation})`,
              highlights: [
                'Native Federation playground on Angular 21 validating Angular singleton runtime sharing between shell and remotes and per-dependency version resolution.',
              ],
            },
            {
              name: `[wcag_design](${projectUrls.wcagDesign})`,
              highlights: [
                'Accessibility tool that generates WCAG 2.2 compliant colour palettes with automated contrast validation.',
              ],
            },
            {
              name: `[stride-agent-showcase](${projectUrls.strideAgentShowcase})`,
              highlights: [
                'TypeScript/Node coding-agent runtime: custom agent orchestration with policy-gated tools, audit logging, secret redaction and OpenAI-compatible providers.',
              ],
            },
            {
              name: `[dotfiles-opencode-showcase](${projectUrls.dotfilesOpencodeShowcase})`,
              highlights: [
                'Agent orchestration framework shipped as an installer: role-based agent profiles, transactional configuration rollback and a TypeScript/Ink CLI.',
              ],
            },
            {
              name: `[agentic-pr-reviewer-action](${projectUrls.agenticPrReviewerAction})`,
              highlights: [
                'Agentic GitHub Action reviewing Pull Requests over scoped diffs with OpenAI-compatible LLM endpoints and actionable CI/CD feedback.',
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
