const SAMPLE = {
  cv: {
    name: 'John Doe',
    location: 'San Francisco, CA',
    social_networks: [
      {
        network: 'LinkedIn',
        username: 'johndoe',
      },
      {
        network: 'GitHub',
        username: 'johndoe',
      },
    ],
    sections: {
      professional_summary: [
        'Full-stack software engineer with 5+ years of experience building scalable web applications. Passionate about clean code, performance optimization, and mentoring junior developers. Strong background in React, Node.js, and cloud infrastructure.',
      ],
      experience: [
        {
          company: 'TechCorp Inc.',
          position: 'Senior Software Engineer',
          start_date: '2023-01',
          end_date: 'present',
          location: 'San Francisco, CA',
          summary: null,
          highlights: [
            'Led migration of legacy monolith to microservices architecture, reducing deployment time by 60%.',
            'Implemented real-time analytics dashboard using React and WebSockets, serving 50k+ daily active users.',
            'Mentored 3 junior developers through code reviews and pair programming sessions.',
            'Introduced automated testing pipeline increasing test coverage from 45% to 85%.',
          ],
        },
        {
          company: 'StartupXYZ',
          position: 'Full-stack Developer',
          start_date: '2021-03',
          end_date: '2022-12',
          location: 'Remote',
          summary: null,
          highlights: [
            'Built customer-facing dashboard with React and TypeScript, improving user engagement by 30%.',
            'Designed and implemented RESTful APIs using Node.js and PostgreSQL.',
            'Optimized database queries reducing average response time from 800ms to 120ms.',
            'Collaborated with product team to define technical requirements and roadmap.',
          ],
        },
        {
          company: 'Digital Solutions LLC',
          position: 'Frontend Developer',
          start_date: '2019-06',
          end_date: '2021-02',
          location: 'New York, NY',
          summary: null,
          highlights: [
            'Developed responsive web applications using React and Redux for enterprise clients.',
            'Created reusable component library used across 5+ projects.',
            'Implemented CI/CD pipeline with GitHub Actions reducing manual deployment effort.',
            'Participated in agile ceremonies and sprint planning with cross-functional teams.',
          ],
        },
      ],
      technologies: [
        {
          label: 'Frontend',
          details: 'React, TypeScript, Next.js, Redux, Tailwind CSS',
        },
        {
          label: 'Backend',
          details: 'Node.js, Express, Python, Django, REST APIs, GraphQL',
        },
        {
          label: 'Databases',
          details: 'PostgreSQL, MongoDB, Redis, Elasticsearch',
        },
        {
          label: 'Cloud & DevOps',
          details: 'AWS (EC2, S3, Lambda), Docker, Kubernetes, CI/CD, Terraform',
        },
        {
          label: 'Tools & Methodologies',
          details: 'Git, Agile/Scrum, Jira, Figma, Jest, Cypress',
        },
      ],
      projects: [
        {
          name: '[E-commerce Platform](https://github.com/johndoe/ecommerce)',
          highlights: [
            'Full-stack e-commerce solution with cart, checkout, and payment integration.',
            'Built with React, Node.js, and Stripe API handling 100+ daily transactions.',
            'Implemented real-time inventory management and order tracking.',
          ],
        },
        {
          name: '[Task Management App](https://github.com/johndoe/task-manager)',
          highlights: [
            'Collaborative task management tool with drag-and-drop interface.',
            'Real-time updates using Socket.io and offline-first capabilities.',
            'Deployed on AWS with auto-scaling for handling peak loads.',
          ],
        },
        {
          name: '[Weather Dashboard](https://github.com/johndoe/weather-dashboard)',
          highlights: [
            'Interactive weather visualization dashboard with historical data analysis.',
            'Uses multiple weather APIs with caching layer for performance.',
            'Responsive design with PWA support for mobile devices.',
          ],
        },
      ],
      education: [
        {
          institution: 'Stanford University',
          area: 'Computer Science',
          degree: 'Master of Science (MS)',
          start_date: '2017-09',
          end_date: '2019-05',
          location: 'Stanford, CA',
          summary: null,
          highlights: [
            'Specialized in Distributed Systems and Machine Learning',
            'Graduated with honors (GPA 3.8/4.0)',
            'Teaching Assistant for Algorithms course',
          ],
        },
        {
          institution: 'MIT',
          area: 'Computer Engineering',
          degree: 'Bachelor of Science (BS)',
          start_date: '2013-09',
          end_date: '2017-05',
          location: 'Cambridge, MA',
          summary: null,
          highlights: [
            'Minor in Mathematics',
            'President of Computer Science Club',
            'Capstone project: Real-time traffic prediction system',
          ],
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
    date: '2026-01-19',
    bold_keywords: [],
    sort_entries: 'none',
  },
};

export default SAMPLE;
