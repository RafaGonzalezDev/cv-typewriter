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
  dshCodexOauth: 'https://github.com/RafaGonzalezDev/dsh-codex-oauth',
  localInferenceSetup: 'https://github.com/RafaGonzalezDev/local-inference-setup',
};

const SAMPLE = {
  cv: {
    active_language: 'en',
    // Keep both languages aligned: Angular frontend engineering first,
    // with LLM-assisted development and agent tooling as the differentiator.
    // See docs/changelog/cv-content.md for content updates.
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
            'Frontend Engineer especializado en Angular, TypeScript y microfrontends en banca, con experiencia en arquitectura, testing y entrega; aporto desarrollo asistido por LLMs y herramientas agénticas propias para implementar, analizar y validar software.',
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
                'Desarrollo y evoluciono librerías basadas en arquitecturas de Angular 17 y Angular 22 desde el equipo de Arquitectura Frontend, combinando decisiones técnicas, implementación y tooling compartido.',
                'Trabajo con Signals, RxJS, microfrontends y herramientas de build; contribuyo a librerías y tooling utilizados por equipos y preparo propuestas para su evolución.',
                'Desarrollo herramientas y extensiones agénticas, servidores e integraciones MCP y coordinación de agentes con controles de permisos y aprobación; aplico agentes a implementación, análisis de código, pruebas y documentación.',
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
                'Asumí la responsabilidad técnica de 2 microfrontends con Angular 15/17 y TypeScript: desarrollo, decisiones de arquitectura y estado con RxJS/NgRx, releases y despliegues.',
                'Desarrollé una CLI de i18n en Node.js y JavaScript (XLIFF/CSV y traducción por lotes con LLMs) con validación de placeholders y revisión de resultados; redujo el proceso de días a minutos y se adoptó como herramienta estándar del equipo.',
                'Construí interfaces responsive y accesibles con componentes corporativos y Storybook, utilizando standalone components, Signals, routing e integración de APIs REST y atendiendo a compatibilidad entre navegadores.',
                'Escribí y mantuve pruebas unitarias con Jasmine/Karma y E2E con Playwright; utilicé Playwright MCP para explorar y validar flujos y agentes para generar pruebas, con revisión humana.',
                'Apliqué agentes a implementación, refactorización, debugging y documentación; ayudé a compañeros a utilizarlos y revisar sus resultados.',
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
                'Asumí la responsabilidad técnica de un microfrontend con Angular 15/17 y TypeScript: funcionalidades con NgModules, standalone components y Signals, interfaces responsive con HTML/SCSS, releases y despliegues.',
                'Implementé gestión de estado con NgRx (store, effects, selectors) y RxJS; optimicé selectors, suscripciones y detección de cambios, y ajusté lazy loading.',
                'Diseñé y evolucioné el routing interno y resolví problemas de navegación e integración en un entorno con Module Federation, Webpack, guards e interceptores HTTP para APIs REST.',
                'Desarrollé pruebas unitarias con Jasmine, Karma y TestBed y E2E con Playwright, trabajando con quality gates de SonarQube y pipelines Jenkins.',
                'Acompañé el onboarding de una nueva incorporación, apoyé al equipo en Angular y arquitectura y participé en revisiones de código y colaboración con backend, QA y UX.',
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
                'Diseñé soluciones frontend con React y GraphQL, optimizando la eficiencia operativa.',
                'Desarrollé servicios backend con AWS Amplify, asegurando integración segura y escalabilidad.',
              ],
            },
          ],
          technologies: [
            {
              label: 'Core Frontend',
              details:
                'TypeScript, JavaScript (ES6+), Angular (15, 17, 22; NgModules, standalone components, Signals), RxJS, NgRx, routing, HTTP interceptors',
            },
            {
              label: 'IA e Ingeniería Agéntica',
              details:
                'LLMs, desarrollo asistido por IA, orquestación de agentes, herramientas y extensiones propias, servidores e integraciones Model Context Protocol (MCP), permisos y aprobación, validación humana',
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
              details:
                'Module Federation, Native Federation, Vite, Webpack, Nx, npm, ESLint, Prettier, Git',
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
              label: 'Frontend Adicional',
              details: 'React, Vue.js, Next.js, Redux Toolkit, Tailwind CSS',
            },
            {
              label: 'Idiomas',
              details: 'Español (nativo) · Inglés (C1)',
            },
          ],
          projects: [
            {
              name: `[angular-i18n-translator](${projectUrls.angularI18nTranslator})`,
              highlights: [
                'CLI Node.js/JavaScript para traducciones XLIFF de Angular mediante APIs LLM compatibles con OpenAI: procesamiento por lotes, reanudación, validación de placeholders y pruebas con servidor simulado.',
              ],
            },
            {
              name: `[angular-native-federation](${projectUrls.angularNativeFederation})`,
              highlights: [
                'PoC de microfrontends con Angular 21 y Native Federation: carga diferida de componentes remotos y políticas de compartición del runtime Angular y resolución de dependencias.',
              ],
            },
            {
              name: `[dsh-codex-oauth](${projectUrls.dshCodexOauth})`,
              highlights: [
                'Plugin React/TypeScript para integrar modelos de OpenAI en DeepSeek Harness: onboarding OAuth/PKCE, gestión de conexión y catálogo de modelos, streaming con cancelación y tratamiento de errores.',
              ],
            },
            {
              name: `[mcp-schema-runner](${projectUrls.mcpSchemaRunner})`,
              highlights: [
                'Aplicación local React/TypeScript para inspeccionar esquemas y ejecutar llamadas manuales a servidores MCP stdio, con editor JSON y resultados, errores y duración; API Express y estado asíncrono con TanStack Query.',
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
            'Frontend Engineer specializing in Angular, TypeScript and banking microfrontends, with experience in architecture, testing and delivery; brings LLM-assisted development and custom agent tooling to software implementation, analysis and validation.',
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
                'Develop and evolve libraries based on Angular 17 and Angular 22 architectures within the Frontend Architecture team, combining technical decisions, hands-on implementation and shared tooling.',
                'Work with Signals, RxJS, microfrontends and build tools; contribute to libraries and tooling used by engineering teams and prepare proposals for their evolution.',
                'Develop agent tools and extensions, MCP servers and integrations, and agent coordination with permission and approval controls; apply agents to implementation, code analysis, testing and documentation.',
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
                'Owned technical delivery of 2 microfrontends with Angular 15/17 and TypeScript: development, architecture and RxJS/NgRx state management decisions, releases and deployments.',
                "Developed a Node.js/JavaScript i18n CLI (XLIFF/CSV and LLM batch translation) with placeholder validation and output review; reduced the workflow from days to minutes and became the team's standard tool.",
                'Built responsive, accessible interfaces with corporate components and Storybook, using standalone components, Signals, routing and REST API integration while addressing cross-browser compatibility.',
                'Wrote and maintained Jasmine/Karma unit tests and Playwright E2E tests; used Playwright MCP for flow exploration and validation and agents for test generation, with human review.',
                'Applied agents to implementation, refactoring, debugging and documentation; helped teammates use them and review their outputs.',
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
                'Owned technical delivery of an Angular 15/17 and TypeScript microfrontend: features using NgModules, standalone components and Signals, responsive HTML/SCSS interfaces, releases and deployments.',
                'Implemented NgRx state management (store, effects, selectors) and RxJS; optimized selectors, subscriptions and change detection, and adjusted lazy loading.',
                'Designed and evolved internal routing and resolved navigation and integration issues in an environment using Module Federation, Webpack, guards and HTTP interceptors for REST APIs.',
                'Developed Jasmine, Karma and TestBed unit tests and Playwright E2E tests, working with SonarQube quality gates and Jenkins pipelines.',
                'Supported onboarding of a new team member, helped the team with Angular and architecture, and participated in code reviews and collaboration with backend, QA and UX.',
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
                'Designed frontend solutions with React and GraphQL, optimizing operational efficiency.',
                'Developed backend services with AWS Amplify, ensuring secure integration and scalability.',
              ],
            },
          ],
          technologies: [
            {
              label: 'Core Frontend',
              details:
                'TypeScript, JavaScript (ES6+), Angular (15, 17, 22; NgModules, standalone components, Signals), RxJS, NgRx, routing, HTTP interceptors',
            },
            {
              label: 'AI & Agentic Engineering',
              details:
                'LLMs, AI-assisted development, agent orchestration, custom tools and extensions, Model Context Protocol (MCP) servers and integrations, permissions and approval, human validation',
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
              details:
                'Module Federation, Native Federation, Vite, Webpack, Nx, npm, ESLint, Prettier, Git',
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
              label: 'Additional Frontend',
              details: 'React, Vue.js, Next.js, Redux Toolkit, Tailwind CSS',
            },
            {
              label: 'Languages',
              details: 'Spanish (native) · English (C1)',
            },
          ],
          projects: [
            {
              name: `[angular-i18n-translator](${projectUrls.angularI18nTranslator})`,
              highlights: [
                'Node.js/JavaScript CLI for Angular XLIFF translation through OpenAI-compatible LLM APIs: batch processing, resumable runs, placeholder validation and tests with a simulated server.',
              ],
            },
            {
              name: `[angular-native-federation](${projectUrls.angularNativeFederation})`,
              highlights: [
                'Angular 21 and Native Federation microfrontend PoC: lazy loading of remote components and policies for sharing the Angular runtime and resolving dependencies.',
              ],
            },
            {
              name: `[dsh-codex-oauth](${projectUrls.dshCodexOauth})`,
              highlights: [
                'React/TypeScript plugin integrating OpenAI models into DeepSeek Harness: OAuth/PKCE onboarding, connection and model catalog management, streaming with cancellation and error handling.',
              ],
            },
            {
              name: `[mcp-schema-runner](${projectUrls.mcpSchemaRunner})`,
              highlights: [
                'Local React/TypeScript app for inspecting schemas and manually calling stdio MCP servers, with a JSON editor and results, errors and duration; Express API and asynchronous state with TanStack Query.',
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
    date: '2026-10-04',
    bold_keywords: [],
    sort_entries: 'none',
  },
};

export default SAMPLE;
