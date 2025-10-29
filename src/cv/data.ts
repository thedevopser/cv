export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  summary: string;
  photoUrl?: string;
};

export type Experience = {
  company: string;
  role: string;
  start: string; // e.g., '01/2022'
  end: string; // 'Présent' or '06/2024'
  location?: string;
  achievements: string[];
  tech?: string[];
};

export type Education = {
  school: string;
  degree: string;
  year: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  url?: string;
};

export type SkillCategory = {
  name: string;
  items: string[];
};

export type CV = {
  profile: Profile;
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: SkillCategory[];
};

const cv: CV = {
  profile: {
    name: 'Sylvain ANGLADE',
    title: 'Expert Technique Développement',
    location: '36 Rue de l’Ancienne Écluse – 33450 Saint-Sulpice-et-Cameyrac',
    email: 'sylvain.anglade@gmail.com',
    phone: '06.12.19.19.46',
    linkedin: 'https://www.linkedin.com/in/sylvain-anglade-4ab1191b4',
    github: 'https://github.com/thedevopser',
    website: undefined,
    summary:
      "Autodidacte passionné par les technologies et la transmission du savoir, j’ai évolué du support technique au rôle d’expert développement à la CPAM de la Gironde. Fort de plus de 10 ans d’expérience dans la conception d’applications, le soutien technique auprès de l’équipe et la mise en place de socles techniques, je souhaite aujourd’hui poursuivre mon évolution en tant que Responsable d’Équipe Développement.",
  },
  experiences: [
    {
      company: 'CPAM de la Gironde',
      role: 'Expert Technique Développement',
      start: '2024',
      end: 'Aujourd’hui',
      location: undefined,
      achievements: [
        'Assiste le N+2 dans la gestion de l’unité en l’absence du responsable d’équipe',
        'Supervision technique et accompagnement des concepteurs-développeurs',
        'Animation de points techniques internes (CRON, Symfony Scheduler, WSL, CI/CD…)',
        'Délégation de tâches pour favoriser la montée en compétences de l’équipe',
        'Référent technique sur Docker, Symfony, GitLab CI et Ansible',
        'Mise en place d’outils internes (SonarQube, Gotenberg, Mercure)',
      ],
      tech: ['Symfony', 'Docker', 'GitLab CI', 'Ansible', 'WSL', 'SonarQube', 'Mercure'],
    },
    {
      company: 'CPAM de la Gironde',
      role: 'Concepteur Développeur',
      start: '2017',
      end: '2024',
      location: undefined,
      achievements: [
        'Développement et maintenance d’applications métiers Symfony et Legacy',
        'Mise en place du socle technique pour les nouveaux projets de développement',
        'Tutorat et accompagnement de développeurs externes (projets FILIGRAME)',
        'Participation à l’élaboration des normes et bonnes pratiques internes (qualité, sécurité)',
      ],
      tech: ['PHP', 'Symfony', 'API REST', 'Docker', 'Traefik', 'Ansible', 'GitLab CI', 'SonarQube', 'Cypress', 'Allure', 'Vue.js'],
    },
    {
      company: 'SDN – CPAM de la Gironde',
      role: 'Support Technique Niveau 1',
      start: '2013',
      end: '2017',
      achievements: [
        'Assistance utilisateurs de niveau 1',
        'Résolution d’incidents N2',
        "Participation à la mise en place d’un intranet et d’un wiki technique (XWiki)",
      ],
      tech: ['GLPI', 'OCS Inventory', 'XWiki'],
    },
    {
      company: 'Carrosserie DBC, St Loubès',
      role: 'Voiturier & Gestionnaire de parc',
      start: '2011',
      end: '2013',
      achievements: [
        'Gestion logistique du parc de véhicules de location',
        'Relation client et coordination des interventions techniques',
      ],
    },
    { company: 'Conseil Général de la Gironde', role: 'Chef Cuisinier', start: '2007', end: '2010', achievements: [] },
    { company: 'CHU de Bordeaux', role: 'Cuisinier', start: '2005', end: '2007', achievements: [] },
    { company: '—', role: 'Intérimaire – Monteur/Chaudronnier', start: '2004', end: '2005', achievements: [] },
    { company: 'Château de Lalande (24)', role: 'Maître d’Hôtel', start: '2002', end: '2004', achievements: [] },
  ],
  education: [
    { school: 'CRP Tour de Gassies', degree: 'TAI – Technicien d’Assistance en Informatique', year: '2011' },
    { school: 'Cisco', degree: 'IT Essentials 1 & 2', year: '2011' },
    { school: 'BTS Hôtellerie-Restauration', degree: 'Option Gestion & Management', year: '2002' },
    { school: '—', degree: 'Baccalauréat Technologique Hôtellerie-Restauration', year: '2000' },
    { school: '—', degree: 'BEP / CAP Cuisine', year: '1998' },
  ],
  certifications: [
    // Aucune certif spécifique fournie, conserver vide ou compléter plus tard
  ],
  skills: [
    { name: 'Management & Coordination', items: [
      'Animation et pilotage d’équipe',
      'Transmission des savoirs, tutorat et accompagnement',
      'Planification, priorisation et suivi des charges',
      'Communication interservices (MOE, MOA, INFRA)'
    ] },
    { name: 'Développement & Architecture', items: [
      'PHP / Symfony / API REST',
      'Docker / Traefik / Ansible / Harbor',
      'GitLab CI/CD, SonarQube, Allure, Cypress',
      'Frontend : HTML, JS, Webpack Encore, Vue.js'
    ] },
    { name: 'Environnements & Outils', items: [
      'Linux (AlmaLinux, Debian, Ubuntu), Windows Server',
      'WSL2, mkcert, Traefik, Apache/FrankenPHP',
      'GLPI, OCS Inventory, XWiki, Intranet internes'
    ] },
    { name: 'Langues & Divers', items: [
      'Anglais : technique professionnel',
      'Permis B – Véhicule personnel',
      'Autodidacte confirmé, esprit d’équipe, sens du service'
    ] }
  ],
};

export default cv;
