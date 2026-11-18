/**
 * Logix Software House - Initial Sample Data Store
 * Stores data in localStorage for cross-page persistence & dynamic dashboard management.
 */

const DEFAULT_JOBS = [
  {
    id: "job-001",
    title: "Senior Full Stack TypeScript Engineer",
    department: "Engineering",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    experience: "5+ Years",
    salary: "$130k - $160k",
    postedDate: "2026-11-10",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "Next.js"],
    isFeatured: true,
    description: "We are seeking an experienced Senior Full-Stack Engineer who thrives in building modern, scalable web applications with TypeScript, React, and Node.js microservices.",
    responsibilities: [
      "Architect and build high-performance web applications using TypeScript and Next.js.",
      "Design robust REST and GraphQL APIs using Node.js and NestJS.",
      "Collaborate with product managers and designers to implement delightful customer experiences.",
      "Conduct code reviews, mentor junior engineers, and drive technical excellence.",
      "Optimize web applications for maximum speed, scalability, and security."
    ],
    requirements: [
      "5+ years of production experience in full-stack web development.",
      "Strong proficiency in TypeScript, React, Next.js, and Node.js.",
      "Experience with relational databases (PostgreSQL/MySQL) and ORMs (Prisma/TypeORM).",
      "Familiarity with containerization (Docker) and cloud deployments (AWS/Vercel).",
      "Excellent problem-solving, communication, and architectural thinking."
    ],
    benefits: [
      "Competitive salary & equity package",
      "Health, dental, and vision insurance coverage",
      "$2,500 annual learning & conference budget",
      "Flexible hybrid/remote schedule and generous PTO",
      "Latest M3 Max MacBook Pro workstation setup"
    ]
  },
  {
    id: "job-002",
    title: "AI & Machine Learning Solutions Architect",
    department: "AI & ML",
    location: "New York, NY (Remote friendly)",
    type: "Full-time",
    experience: "4+ Years",
    salary: "$145k - $185k",
    postedDate: "2026-11-12",
    tags: ["Python", "PyTorch", "LLMs", "RAG", "LangChain", "Vector DBs"],
    isFeatured: true,
    description: "Lead the innovation of custom AI agents, Retrieval-Augmented Generation (RAG) pipelines, and intelligent enterprise automation for our high-profile clients.",
    responsibilities: [
      "Build custom generative AI systems, agentic workflows, and semantic search architectures.",
      "Fine-tune open-weights models and integrate commercial LLM APIs securely.",
      "Optimize vector embeddings, vector databases (Pinecone/Milvus/Qdrant), and retrieval pipelines.",
      "Work closely with clients to discover enterprise AI use cases and deploy proof-of-concepts to production.",
      "Establish evaluation metrics and benchmarks for LLM hallucination reduction."
    ],
    requirements: [
      "Strong background in Python, PyTorch/TensorFlow, and NLP/transformers.",
      "Proven experience deploying production-grade LLM applications, embeddings, and vector stores.",
      "Understanding of model fine-tuning (LoRA/QLoRA) and prompt engineering best practices.",
      "Solid knowledge of cloud infrastructure (AWS SageMaker, GCP Vertex AI).",
      "B.S./M.S. in Computer Science, Data Science, or related field."
    ],
    benefits: [
      "Top-tier compensation + performance bonuses",
      "Full remote flexibility across US timezones",
      "Access to GPU clusters and cutting-edge AI compute",
      "Comprehensive medical benefits & 401(k) matching",
      "Annual company retreats in tropical locations"
    ]
  },
  {
    id: "job-003",
    title: "Lead UI/UX Product Designer",
    department: "Design",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    experience: "4+ Years",
    salary: "$105k - $135k",
    postedDate: "2026-11-14",
    tags: ["Figma", "Design Systems", "Prototyping", "User Research", "Wireframing"],
    isFeatured: true,
    description: "Craft modern, intuitive, and award-winning digital experiences. You will lead UI/UX design from user research, wireframing, to complete component design systems.",
    responsibilities: [
      "Translate complex business challenges into elegant, clean user-centered design solutions.",
      "Create high-fidelity interactive prototypes in Figma.",
      "Maintain and expand our core Design System used across web and mobile products.",
      "Conduct user interviews, usability tests, and synthesize qualitative feedback.",
      "Partner seamlessly with frontend developers to ensure pixel-perfect implementation."
    ],
    requirements: [
      "4+ years of UX/UI product design experience for SaaS, Web, or Mobile platforms.",
      "Exceptional portfolio showcasing typography, micro-interactions, and design systems.",
      "Mastery of Figma, auto-layout, interactive components, and prototyping tools.",
      "Strong understanding of modern frontend technologies (HTML/CSS limitations and capabilities).",
      "Passionate about micro-animations and clean visual hierarchy."
    ],
    benefits: [
      "Competitive salary + annual profit-sharing bonus",
      "Full creative autonomy over design direction",
      "Flexible working hours and remote days",
      "Gym & wellness monthly stipend ($150/mo)",
      "Continuous design mentorship and workshop sponsorship"
    ]
  },
  {
    id: "job-004",
    title: "Senior Mobile Application Developer (React Native / Flutter)",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Remote",
    experience: "3+ Years",
    salary: "$95k - $125k",
    postedDate: "2026-11-15",
    tags: ["React Native", "Flutter", "iOS", "Android", "TypeScript"],
    isFeatured: false,
    description: "Join our mobile squad to build fluid, high-performance cross-platform mobile apps for iOS and Android with thousands of active daily users.",
    responsibilities: [
      "Develop cross-platform apps using React Native and Flutter with native bridge integrations.",
      "Publish and manage releases on Apple App Store and Google Play Store.",
      "Integrate push notifications, background tasks, biometric auth, and offline data sync.",
      "Diagnose and optimize memory leaks, render cycles, and animation stutters."
    ],
    requirements: [
      "3+ years building and shipping production React Native or Flutter apps.",
      "Proficient in TypeScript, JavaScript ES6+, and state management (Zustand/Redux).",
      "Experience interacting with native iOS (Swift) and Android (Kotlin) codebases.",
      "Solid understanding of RESTful APIs, WebSockets, and OAuth flows."
    ],
    benefits: [
      "100% remote work from anywhere",
      "Flexible schedule and asynchronous team culture",
      "Home office setup stipend ($1,000)",
      "Co-working space membership reimbursement"
    ]
  },
  {
    id: "job-005",
    title: "DevOps & Cloud Infrastructure Specialist",
    department: "DevOps & Cloud",
    location: "Chicago, IL (Hybrid)",
    type: "Full-time",
    experience: "4+ Years",
    salary: "$120k - $150k",
    postedDate: "2026-11-08",
    tags: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "Monitoring"],
    isFeatured: false,
    description: "Build, automate, and safeguard our mission-critical multi-cloud infrastructure, CI/CD pipelines, and zero-downtime microservices architectures.",
    responsibilities: [
      "Manage scalable infrastructure on AWS and GCP using Terraform and Infrastructure as Code.",
      "Maintain Kubernetes (EKS/GKE) clusters, ingress controllers, and service meshes.",
      "Design zero-downtime CI/CD deployment pipelines using GitHub Actions and ArgoCD.",
      "Implement automated alerting, Prometheus/Grafana dashboards, and incident response runbooks."
    ],
    requirements: [
      "4+ years of DevOps/SRE experience managing cloud-native production environments.",
      "Hands-on expertise with AWS, Docker, Kubernetes, and Terraform.",
      "Strong Linux administration and shell scripting skills (Bash/Python).",
      "In-depth knowledge of network security, IAM, SSL certificates, and WAF."
    ],
    benefits: [
      "Comprehensive medical, dental, and life insurance",
      "401k with 5% immediate company match",
      "Annual certifications sponsorship (AWS, CKA)",
      "Generous on-call bonus structure"
    ]
  },
  {
    id: "job-006",
    title: "Senior QA Automation Engineer",
    department: "Quality Assurance",
    location: "Remote (US/Canada)",
    type: "Contract",
    experience: "3+ Years",
    salary: "$85k - $110k",
    postedDate: "2026-11-05",
    tags: ["Playwright", "Cypress", "Jest", "TypeScript", "API Testing"],
    isFeatured: false,
    description: "Champion software reliability by writing resilient end-to-end and integration automation test suites that protect our deployments.",
    responsibilities: [
      "Build and maintain E2E test automation frameworks using Playwright and TypeScript.",
      "Create API test suites and load tests using Postman, Newman, and k6.",
      "Integrate automated test runs into CI/CD pull request validation pipelines.",
      "Collaborate with developers to define test criteria and edge cases early in the sprint."
    ],
    requirements: [
      "3+ years dedicated to automated software testing.",
      "Proficient in TypeScript/JavaScript, Playwright, or Cypress.",
      "Experience with API automated testing and load simulation.",
      "Detail-oriented mindset with a passion for software quality."
    ],
    benefits: [
      "Flexible contract duration with full-time conversion path",
      "Flexible hours and remote autonomy",
      "Hardware and software tool allowances"
    ]
  }
];

const DEFAULT_EMPLOYEES = [
  {
    id: "emp-101",
    name: "Muhammad Anas",
    role: "Founder & Chief Executive Officer",
    department: "Executive",
    email: "anas@logix.dev",
    phone: "+1 (555) 019-2831",
    joinDate: "2021-01-15",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    skills: ["Strategic Leadership", "Enterprise Architecture", "Product Vision", "Team Building"],
    salary: "$180,000"
  },
  {
    id: "emp-102",
    name: "Sarah Jenkins",
    role: "Chief Technology Officer",
    department: "Engineering",
    email: "sarah.j@logix.dev",
    phone: "+1 (555) 019-4422",
    joinDate: "2021-06-01",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
    skills: ["System Architecture", "Cloud Infrastructure", "Kubernetes", "TypeScript", "Node.js"],
    salary: "$165,000"
  },
  {
    id: "emp-103",
    name: "David Chen",
    role: "Head of AI Research & Solutions",
    department: "AI & ML",
    email: "david.c@logix.dev",
    phone: "+1 (555) 019-8811",
    joinDate: "2022-03-10",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    skills: ["Deep Learning", "LLMs", "PyTorch", "Python", "Autonomous Agents"],
    salary: "$155,000"
  },
  {
    id: "emp-104",
    name: "Elena Rostova",
    role: "Director of Product & UI/UX Design",
    department: "Design",
    email: "elena.r@logix.dev",
    phone: "+1 (555) 019-3399",
    joinDate: "2022-08-15",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
    skills: ["Design Systems", "Figma", "User Psychology", "Motion Design", "Design Thinking"],
    salary: "$140,000"
  },
  {
    id: "emp-105",
    name: "Marcus Vance",
    role: "Lead DevOps & Security Engineer",
    department: "DevOps & Cloud",
    email: "marcus.v@logix.dev",
    phone: "+1 (555) 019-5561",
    joinDate: "2023-01-20",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    skills: ["AWS Solutions", "Docker", "Terraform", "CI/CD", "Zero-Trust Security"],
    salary: "$135,000"
  },
  {
    id: "emp-106",
    name: "Amina Al-Mansoor",
    role: "Senior Full Stack Developer",
    department: "Engineering",
    email: "amina.m@logix.dev",
    phone: "+1 (555) 019-7722",
    joinDate: "2023-05-12",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=300",
    skills: ["React", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    salary: "$125,000"
  },
  {
    id: "emp-107",
    name: "Carlos Mendez",
    role: "Head of Talent & Recruitment",
    department: "HR & Ops",
    email: "carlos.m@logix.dev",
    phone: "+1 (555) 019-6633",
    joinDate: "2022-11-01",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    skills: ["Tech Recruiting", "People Operations", "Interview Coaching", "Culture Building"],
    salary: "$110,000"
  }
];

const DEFAULT_APPLICATIONS = [
  {
    id: "app-201",
    jobId: "job-001",
    jobTitle: "Senior Full Stack TypeScript Engineer",
    applicantName: "Liam O'Connor",
    email: "liam.oconnor@example.com",
    phone: "+1 (555) 234-5678",
    experience: "6 Years",
    skills: "React, Next.js, TypeScript, PostgreSQL, GraphQL",
    portfolioUrl: "https://github.com/liam-dev",
    cvFileName: "Liam_OConnor_Senior_FullStack_Resume.pdf",
    appliedDate: "2026-11-15",
    status: "Shortlisted",
    coverNote: "I have 6 years of experience building TypeScript microservices and love building high performance interfaces."
  },
  {
    id: "app-202",
    jobId: "job-002",
    jobTitle: "AI & Machine Learning Solutions Architect",
    applicantName: "Sophia Zhang",
    email: "sophia.zhang@example.com",
    phone: "+1 (555) 345-6789",
    experience: "5 Years",
    skills: "Python, PyTorch, RAG Pipelines, LangChain, Pinecone",
    portfolioUrl: "https://huggingface.co/sophia-ml",
    cvFileName: "Sophia_Zhang_AI_Architect_CV.pdf",
    appliedDate: "2026-11-16",
    status: "Interviewed",
    coverNote: "Previously architected enterprise search pipelines and fine-tuned domain-specific LLMs for healthcare."
  },
  {
    id: "app-203",
    jobId: "job-003",
    jobTitle: "Lead UI/UX Product Designer",
    applicantName: "Julian Perez",
    email: "julian.perez@example.com",
    phone: "+1 (555) 456-7890",
    experience: "4 Years",
    skills: "Figma, Design Systems, Auto-layout, User Research",
    portfolioUrl: "https://dribbble.com/julian-designs",
    cvFileName: "Julian_Perez_Product_Designer.pdf",
    appliedDate: "2026-11-17",
    status: "Under Review",
    coverNote: "Passionate about creating modern SaaS software with thoughtful micro-interactions and accessible components."
  },
  {
    id: "app-204",
    jobId: "job-004",
    jobTitle: "Senior Mobile Application Developer",
    applicantName: "Kavita Sharma",
    email: "kavita.sharma@example.com",
    phone: "+1 (555) 567-8901",
    experience: "4.5 Years",
    skills: "React Native, Flutter, Swift, TypeScript, Redux",
    portfolioUrl: "https://github.com/kavita-mobile",
    cvFileName: "Kavita_Sharma_Mobile_Developer.pdf",
    appliedDate: "2026-11-18",
    status: "New",
    coverNote: "Have published 5+ top-rated applications to iOS App Store and Google Play with over 200k downloads."
  }
];

// Helper functions for LocalStorage management
const LogixStore = {
  getJobs: function() {
    const data = localStorage.getItem("logix_jobs");
    if (!data) {
      localStorage.setItem("logix_jobs", JSON.stringify(DEFAULT_JOBS));
      return DEFAULT_JOBS;
    }
    try {
      return JSON.parse(data);
    } catch (e) {
      return DEFAULT_JOBS;
    }
  },

  saveJobs: function(jobs) {
    localStorage.setItem("logix_jobs", JSON.stringify(jobs));
  },

  getJobById: function(id) {
    const jobs = this.getJobs();
    return jobs.find(j => j.id === id) || null;
  },

  addJob: function(job) {
    const jobs = this.getJobs();
    jobs.unshift(job);
    this.saveJobs(jobs);
    return job;
  },

  deleteJob: function(id) {
    let jobs = this.getJobs();
    jobs = jobs.filter(j => j.id !== id);
    this.saveJobs(jobs);
    return jobs;
  },

  getEmployees: function() {
    const data = localStorage.getItem("logix_employees");
    if (!data) {
      localStorage.setItem("logix_employees", JSON.stringify(DEFAULT_EMPLOYEES));
      return DEFAULT_EMPLOYEES;
    }
    try {
      return JSON.parse(data);
    } catch (e) {
      return DEFAULT_EMPLOYEES;
    }
  },

  saveEmployees: function(employees) {
    localStorage.setItem("logix_employees", JSON.stringify(employees));
  },

  addEmployee: function(employee) {
    const employees = this.getEmployees();
    employees.unshift(employee);
    this.saveEmployees(employees);
    return employee;
  },

  deleteEmployee: function(id) {
    let employees = this.getEmployees();
    employees = employees.filter(e => e.id !== id);
    this.saveEmployees(employees);
    return employees;
  },

  getApplications: function() {
    const data = localStorage.getItem("logix_applications");
    if (!data) {
      localStorage.setItem("logix_applications", JSON.stringify(DEFAULT_APPLICATIONS));
      return DEFAULT_APPLICATIONS;
    }
    try {
      return JSON.parse(data);
    } catch (e) {
      return DEFAULT_APPLICATIONS;
    }
  },

  saveApplications: function(apps) {
    localStorage.setItem("logix_applications", JSON.stringify(apps));
  },

  addApplication: function(application) {
    const apps = this.getApplications();
    apps.unshift(application);
    this.saveApplications(apps);
    return application;
  },

  updateApplicationStatus: function(id, status) {
    const apps = this.getApplications();
    const target = apps.find(a => a.id === id);
    if (target) {
      target.status = status;
      this.saveApplications(apps);
    }
    return apps;
  },

  deleteApplication: function(id) {
    let apps = this.getApplications();
    apps = apps.filter(a => a.id !== id);
    this.saveApplications(apps);
    return apps;
  },

  getStats: function() {
    const jobs = this.getJobs();
    const employees = this.getEmployees();
    const applications = this.getApplications();

    return {
      totalEmployees: employees.length,
      activeJobs: jobs.length,
      totalApplications: applications.length,
      hiredCount: applications.filter(a => a.status === 'Hired').length,
      shortlistedCount: applications.filter(a => a.status === 'Shortlisted').length,
      pendingCount: applications.filter(a => a.status === 'New' || a.status === 'Under Review').length
    };
  }
};

// Initialize if empty
if (typeof window !== "undefined") {
  LogixStore.getJobs();
  LogixStore.getEmployees();
  LogixStore.getApplications();
}
