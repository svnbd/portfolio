import { SkillItem, Project, ApiEndpointDemo, SecurityCheckItem, ServiceOffering, ExperienceItem, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Md Shovon',
  title: 'Full Stack Developer',
  subtitle: 'PHP, Laravel, React, Node.js & MySQL Specialist',
  tagline: 'Architecting High-Performance Web Applications & Secure Scalable APIs',
  shortBio: 'Full Stack Engineer with deep expertise in PHP (Laravel), modern JavaScript (React & Node.js), and MySQL database optimization. Specialized in crafting enterprise-grade RESTful APIs, bulletproof web security architectures, and scalable full-stack digital solutions.',
  email: 'itbd24hrs@gmail.com',
  location: 'Dhaka, Bangladesh (Available Worldwide Remote)',
  availability: 'Available for Full-time & High-Impact Contracts',
  yearsExperience: '5+',
  projectsCompleted: '45+',
  happyClients: '30+',
  uptimeRecord: '99.98%',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  whatsapp: 'https://wa.me/?text=Hello%20Md%20Shovon',
};

export const CORE_SKILLS: SkillItem[] = [
  // Backend & Frameworks
  {
    name: 'PHP & Laravel',
    level: 96,
    experience: '5+ Years',
    iconName: 'Server',
    category: 'backend',
    description: 'Expertise in Laravel 11/10/9 ecosystem, Eloquent ORM, Service Repositories, Sanctum/Passport, Queues, Events, and Artisan custom commands.',
    highlights: ['Multi-tenant SaaS Architecture', 'Eloquent Query Optimization', 'RESTful API & Sanctum Auth', 'Microservices & Background Jobs']
  },
  {
    name: 'Node.js & Express',
    level: 90,
    experience: '4+ Years',
    iconName: 'Cpu',
    category: 'backend',
    description: 'Building asynchronous, event-driven backends, RESTful microservices, WebSockets, streaming APIs, and middleware pipelines.',
    highlights: ['High-throughput API endpoints', 'JWT & OAuth2 Authentication', 'Socket.io Real-time Streams', 'Rate Limiting & CORS Shields']
  },
  // Frontend
  {
    name: 'React.js',
    level: 92,
    experience: '4+ Years',
    iconName: 'Code2',
    category: 'frontend',
    description: 'Modern component-driven UI development using React 18/19, Custom Hooks, Context API, Redux/Zustand, Tailwind CSS, and optimized rendering.',
    highlights: ['Dynamic Single Page Applications', 'State Management & Performance', 'Responsive & Accessible Design', 'Seamless API State Hydration']
  },
  {
    name: 'Modern JavaScript (ES6+)',
    level: 94,
    experience: '5+ Years',
    iconName: 'FileCode',
    category: 'frontend',
    description: 'Deep mastery of asynchronous JavaScript (Promises, async/await), DOM manipulation, modular architecture, and TypeScript tooling.',
    highlights: ['Asynchronous Event Handling', 'TypeScript Static Typing', 'Client-side Security & Sanitization', 'Modular Component Patterns']
  },
  // Database
  {
    name: 'MySQL & Database Design',
    level: 95,
    experience: '5+ Years',
    iconName: 'Database',
    category: 'database',
    description: 'Relational database architecture, normalized schema design, compound indexing, transaction locks (ACID), and query execution plan tuning.',
    highlights: ['B-Tree & Fulltext Indexing', 'Stored Procedures & Triggers', 'ACID Transactions & Row Locking', 'Slow Query Analysis & Optimization']
  },
  // Security & APIs
  {
    name: 'Web Security & OWASP Hardening',
    level: 93,
    experience: '4+ Years',
    iconName: 'ShieldCheck',
    category: 'security',
    description: 'Comprehensive web security defense against OWASP Top 10 vulnerabilities, parameterized SQL protection, CSRF tokens, XSS filtering, and SSL/TLS headers.',
    highlights: ['SQL Injection & XSS Mitigation', 'CSRF & Clickjacking Protection', 'CORS & Content Security Policy (CSP)', 'Encrypted Vaults & Sensitive Data Hashing']
  },
  {
    name: 'API Engineering & 3rd Party Integrations',
    level: 95,
    experience: '5+ Years',
    iconName: 'Network',
    category: 'security',
    description: 'Architecting robust RESTful APIs, webhook delivery engines, HMAC SHA-256 signature verification, and seamless third-party gateway integrations.',
    highlights: ['Payment Gateways (Stripe, PayPal, SSLCommerz, bKash)', 'SMS & Email Gateway Integrations', 'Webhook Verification & Idempotency', 'API Rate Limiting & Throttling']
  },
  // DevOps & Tools
  {
    name: 'Git, Docker & Linux DevOps',
    level: 88,
    experience: '4+ Years',
    iconName: 'Terminal',
    category: 'tools',
    description: 'Containerized environments with Docker, Nginx reverse proxy configuration, Linux server administration, and Git CI/CD workflows.',
    highlights: ['Docker & Docker Compose', 'Nginx & Apache Web Server Config', 'Git Version Control & Branching', 'Linux Ubuntu/Debian Server Management']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'saas-enterprise-core',
    title: 'OmniSaaS - Multi-Tenant Enterprise Platform',
    tagline: 'High-Scale Subscription SaaS with Role-Based Access Control (RBAC)',
    category: 'laravel',
    description: 'A robust multi-tenant enterprise management application with isolated tenant databases, subscription billing via Stripe webhooks, and granular permissions.',
    longDescription: 'Engineered a full-featured multi-tenant SaaS application in Laravel and React. Implemented automated tenant provisioning with isolated MySQL database schemas, automated subscription invoicing via Stripe Webhook handlers with idempotent transaction safety, and a lightning-fast React dashboard with real-time audit logging.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['PHP', 'Laravel 11', 'React.js', 'MySQL', 'Stripe API', 'Tailwind CSS', 'Redis'],
    metrics: [
      { label: 'Active Users', value: '15,000+' },
      { label: 'API Response Time', value: '< 65ms' },
      { label: 'Transaction Volume', value: '$1.2M+' }
    ],
    architecture: {
      backend: 'Laravel 11 REST API with Repository Pattern & Sanctum',
      frontend: 'React 19 SPA with Tailwind CSS & Motion animations',
      database: 'MySQL 8 with Multi-schema isolation & Redis Caching',
      security: 'RBAC with strict middleware policies, HMAC webhooks & 2FA'
    },
    features: [
      'Multi-tenant database tenancy with automatic subdomain routing',
      'Stripe recurring billing, automated tax calculation & invoices',
      'Granular Role-Based Access Control (Super Admin, Manager, Member)',
      'Exportable financial analytics with real-time CSV/PDF generation',
      'Comprehensive security audit logs tracking every critical API request'
    ],
    securityImplementations: [
      'HMAC-SHA256 signature verification on inbound payment webhooks',
      'Strict tenant isolation preventing horizontal privilege escalation',
      'Rate-limiting middleware (60 req/min per IP with Redis key throttling)',
      'Argon2id password hashing and enforced Multi-Factor Authentication'
    ],
    apiEndpoints: [
      'POST /api/v1/auth/token-exchange',
      'GET /api/v1/tenant/metrics',
      'POST /api/v1/billing/webhook-listener'
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'paysecure-payment-engine',
    title: 'PayShield - Secure Payment & Merchant API Engine',
    tagline: 'High-Throughput Financial API with Idempotency & Fraud Mitigation',
    category: 'security-api',
    description: 'A mission-critical payment aggregator engine processing multi-gateway transactions (Stripe, PayPal, SSLCommerz, bKash) with zero data loss.',
    longDescription: 'Architected a resilient financial API service using Node.js, Express, and MySQL. Provides merchants with single-unified API endpoints for multi-currency processing. Incorporates strict idempotency keys to prevent duplicate charges, IP whitelisting, and automated webhook retries with exponential backoff.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    tags: ['Node.js', 'Express', 'MySQL', 'Web Security', 'Payment Gateways', 'JWT', 'REST API'],
    metrics: [
      { label: 'Payment Success Rate', value: '99.99%' },
      { label: 'Daily API Calls', value: '250,000+' },
      { label: 'Latency', value: '42ms' }
    ],
    architecture: {
      backend: 'Node.js Express microservice with strict middleware pipelines',
      frontend: 'React Merchant Console with live transaction streaming',
      database: 'MySQL 8 with ACID transactions & row-level locking',
      security: 'End-to-End Payload Encryption, Idempotency & IP Firewalls'
    },
    features: [
      'Unified REST API for Stripe, SSLCommerz, bKash & PayPal',
      'Idempotent payment capture with Redis & MySQL lock states',
      'Automated webhook dispatch with retry queues & signature headers',
      'Real-time fraud anomaly scoring and velocity checks'
    ],
    securityImplementations: [
      'Zero card data storage — strict PCI-DSS compliant tokenization',
      'Dual-signature verification on all incoming merchant requests',
      'Encrypted transaction logs using AES-256-GCM',
      'Brute-force protection with dynamic IP blacklisting'
    ],
    apiEndpoints: [
      'POST /api/v1/payments/create-intent',
      'POST /api/v1/payments/verify-signature',
      'GET /api/v1/merchants/settlements'
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'logitrack-fleet-system',
    title: 'LogiFleet - Real-Time Logistics & Dispatch Platform',
    tagline: 'Enterprise Fleet Monitoring & Route Optimization Ecosystem',
    category: 'fullstack',
    description: 'Full-stack logistics tracking system featuring PHP/Laravel backend, React live dispatch board, MySQL spatial indexing, and real-time updates.',
    longDescription: 'Built an end-to-end supply chain logistics portal. Handled thousands of delivery updates per minute by utilizing MySQL Spatial GIS indexes for rapid geofence calculations. Designed an intuitive React dashboard with interactive mapping and automated SMS notifications to customers.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    tags: ['PHP', 'Laravel', 'React.js', 'MySQL Spatial', 'WebSockets', 'REST API', 'Node.js'],
    metrics: [
      { label: 'Vehicles Tracked', value: '1,200+' },
      { label: 'Trips Dispatched', value: '85,000+' },
      { label: 'ETA Accuracy', value: '96.4%' }
    ],
    architecture: {
      backend: 'Laravel 10 API with Queued Dispatch Jobs',
      frontend: 'React.js with custom Map Layering & Real-time Feeds',
      database: 'MySQL 8 with Spatial Indexing for coordinates',
      security: 'Token-based device authentication & encrypted telemetry'
    },
    features: [
      'Live GPS telemetry streaming with sub-second dashboard updates',
      'Automated driver assignment using proximity and load metrics',
      'Integrated SMS & WhatsApp customer delivery alerts',
      'Fuel consumption and trip efficiency analytics'
    ],
    securityImplementations: [
      'Device API key rotation with expiration timestamps',
      'Sanitized GPS telemetry to reject spoofed coordinates',
      'Encrypted driver and customer PII data at rest'
    ],
    apiEndpoints: [
      'POST /api/v1/telemetry/ingest',
      'GET /api/v1/fleet/live-positions',
      'POST /api/v1/dispatch/assign'
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'medicare-patient-portal',
    title: 'HealthVault - Secure Clinical Records & Consultation Portal',
    tagline: 'HIPAA-Aligned Patient Medical Records with End-to-End Privacy',
    category: 'laravel',
    description: 'A secure healthcare management platform with encrypted patient records, doctor scheduling, automated prescriptions, and audit trails.',
    longDescription: 'Developed a high-security healthcare web application in Laravel and React. Applied strict field-level encryption for sensitive diagnostic history, role-based doctor/patient access segregation, and digital prescription generation with tamper-proof QR verification.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Laravel', 'PHP', 'React', 'MySQL', 'Web Security', 'Sanctum', 'Tailwind CSS'],
    metrics: [
      { label: 'Patients Managed', value: '45,000+' },
      { label: 'Consultations', value: '120,000+' },
      { label: 'Security Score', value: 'A+ (100%)' }
    ],
    architecture: {
      backend: 'Laravel Enterprise Service Architecture with Sanctum Auth',
      frontend: 'React UI with accessible HIPAA-compliant workflows',
      database: 'MySQL with encrypted column-level vaults',
      security: 'Strict RBAC, immutable audit logging & encrypted files'
    },
    features: [
      'Doctor appointment booking & live video consultation gateway',
      'Digital prescription generator with cryptographic verification QR',
      'Laboratory report uploads with anti-malware MIME sanitization',
      'Patient health timeline with historical vitals tracking'
    ],
    securityImplementations: [
      'Field-level AES-256 database encryption for patient medical records',
      'Immutable audit trail recording every read, write, and export action',
      'Strict Content Security Policy (CSP) blocking XSS and frame hijacking',
      'Session timeouts with automatic memory cache clearing'
    ],
    apiEndpoints: [
      'GET /api/v1/patient/records',
      'POST /api/v1/prescriptions/generate',
      'POST /api/v1/doctor/availability'
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 'shopsphere-ecommerce-scale',
    title: 'ApexMart - High-Concurrency E-Commerce Engine',
    tagline: 'High-Volume Online Storefront with Sub-50ms Catalog Queries',
    category: 'react-node',
    description: 'A high-performance e-commerce backend and frontend handling heavy flash sales with MySQL query optimization and Redis caching.',
    longDescription: 'Engineered a scalable multi-vendor shopping engine. Optimized complex MySQL inventory queries by introducing composite indexes and Redis cache layers, successfully supporting thousands of simultaneous checkout attempts during flash promotional sales.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['PHP', 'Laravel', 'React', 'Node.js', 'MySQL', 'Redis', 'Payment API'],
    metrics: [
      { label: 'Concurrent Users', value: '10,000+' },
      { label: 'Checkout Latency', value: '85ms' },
      { label: 'Catalog Size', value: '250,000 SKUs' }
    ],
    architecture: {
      backend: 'Laravel REST API with Node.js microservices for flash cart',
      frontend: 'React 19 High-Speed Catalog with Instant Search',
      database: 'MySQL 8 with read-replicas & Redis caching layer',
      security: 'Bot protection, rate limiting, and secure checkout sessions'
    },
    features: [
      'Instant faceted product filtering across 250k+ inventory items',
      'Concurrency-safe inventory reservation system preventing overselling',
      'Multi-currency checkout with local & international payment gateways',
      'Automated email/SMS order tracking updates'
    ],
    securityImplementations: [
      'Bot and scraper throttling using fingerprint verification',
      'Strict CSRF validation on all cart mutation endpoints',
      'Sanitized user reviews and feedback preventing stored XSS'
    ],
    apiEndpoints: [
      'GET /api/v1/products/search',
      'POST /api/v1/cart/reserve-inventory',
      'POST /api/v1/orders/checkout'
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 'api-shield-middleware',
    title: 'ShieldCore - Enterprise API Security & Rate Limiter Gateway',
    tagline: 'Lightweight Security Middleware for Laravel & Node.js Applications',
    category: 'security-api',
    description: 'A specialized security gateway package providing OWASP protection, token validation, dynamic rate-limiting, and bad bot blocking.',
    longDescription: 'Authored an open-architecture security middleware suite. Features automated IP reputation checks, payload threat analysis (detecting SQLi / XSS payloads in request bodies before hitting application controllers), and token bucket rate limiting.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    tags: ['Web Security', 'PHP', 'Laravel', 'Node.js', 'API Gateway', 'OWASP'],
    metrics: [
      { label: 'Attacks Blocked', value: '1.5M+' },
      { label: 'Middleware Overhead', value: '< 1.8ms' },
      { label: 'Threat Signatures', value: '140+' }
    ],
    architecture: {
      backend: 'Dual implementation for PHP (Laravel Middleware) & Node.js',
      frontend: 'Security Dashboard with live attack visualization in React',
      database: 'MySQL security incident log table with automated purging',
      security: 'Deep packet inspection, Regex threat signatures & IP scoring'
    },
    features: [
      'Real-time SQLi, XSS, and Path Traversal payload detection',
      'Sliding window rate-limiter with configurable burst limits',
      'Automated IP jail for malicious repeat offenders',
      'Live attack telemetry dashboard with GeoIP country metrics'
    ],
    securityImplementations: [
      'Heuristic threat detection engine running in sub-2ms time',
      'HSTS, CSP, and X-Content-Type-Options automatic header injection',
      'Zero external dependency footprint for lightning execution'
    ],
    apiEndpoints: [
      'POST /api/v1/shield/inspect-payload',
      'GET /api/v1/shield/threat-metrics',
      'POST /api/v1/shield/whitelist-ip'
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

export const API_DEMOS: ApiEndpointDemo[] = [
  {
    id: 'auth-login',
    title: 'Secure Sanctum/JWT Auth with Rate Limiter',
    method: 'POST',
    path: '/api/v1/auth/secure-token',
    category: 'Authentication',
    description: 'Generates hardened Bearer tokens with expiration, user scopes, and brute-force throttling.',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'X-Forwarded-For': '203.0.113.42'
    },
    requestBody: {
      email: 'client@enterprise.com',
      password: '••••••••••••',
      device_name: 'Workstation-Client-01'
    },
    responseStatus: 200,
    responseHeaders: {
      'Content-Type': 'application/json; charset=UTF-8',
      'X-RateLimit-Limit': '60',
      'X-RateLimit-Remaining': '59',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY'
    },
    responseBody: {
      status: 'success',
      token_type: 'Bearer',
      expires_in: 86400,
      user: {
        id: 'usr_98a72b',
        name: 'Enterprise Client',
        email: 'client@enterprise.com',
        role: 'tenant_admin',
        permissions: ['read:analytics', 'write:orders', 'manage:team']
      },
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c3JfOThhNzJiIiwiaWF0IjoxNzA5MzAwMDAwLCJleHAiOjE3MDkzODY0MDB9.s8f72aB_kL92jX...'
    },
    securityFeature: 'Brute-force throttle (5 attempts / 60s), bcrypt hash validation & scoped JWT permissions'
  },
  {
    id: 'payment-webhook',
    title: 'Idempotent Payment Webhook Verification',
    method: 'POST',
    path: '/api/v1/payments/verify-webhook',
    category: 'Payment Integration',
    description: 'Verifies cryptographic HMAC SHA-256 signatures before processing gateway webhook dispatches.',
    headers: {
      'Content-Type': 'application/json',
      'X-Signature-SHA256': 'd85f2b8471c39029a73812837bcdae94021389bc7e63b482937402f...',
      'X-Idempotency-Key': 'idemp_pay_99213884'
    },
    requestBody: {
      event: 'payment_intent.succeeded',
      transaction_id: 'txn_ssl_9824001',
      amount: 45000,
      currency: 'USD',
      customer_email: 'finance@megacorp.com'
    },
    responseStatus: 200,
    responseHeaders: {
      'Content-Type': 'application/json',
      'X-Idempotency-Status': 'PROCESSED_NEW',
      'X-Processed-Time': '34ms'
    },
    responseBody: {
      status: 'verified_and_settled',
      order_id: 'ord_849204',
      settlement_status: 'PAID',
      ledger_entry_id: 'ledg_00941',
      signature_valid: true,
      timestamp: '2026-09-02T12:56:00Z'
    },
    securityFeature: 'HMAC SHA-256 signature verification & Redis key-lock idempotency to prevent duplicate charging'
  },
  {
    id: 'mysql-query',
    title: 'High-Speed MySQL Query with Indexing',
    method: 'GET',
    path: '/api/v1/analytics/orders?range=30d&tenant_id=tnt_402',
    category: 'Data & MySQL',
    description: 'Retrieves aggregated sales metrics with optimized composite indexing & sub-40ms execution time.',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1Ni...',
      'Accept': 'application/json'
    },
    responseStatus: 200,
    responseHeaders: {
      'Content-Type': 'application/json',
      'X-Query-Execution-Time': '24.6ms',
      'X-Cache': 'HIT (Redis L2)'
    },
    responseBody: {
      status: 'success',
      tenant_id: 'tnt_402',
      metrics: {
        total_revenue: 124500.80,
        completed_orders: 3420,
        average_order_value: 36.40,
        fulfillment_rate: '99.4%'
      },
      query_meta: {
        index_used: 'idx_tenant_created_status',
        rows_examined: 3420,
        execution_engine: 'MySQL 8 InnoDB Optimized'
      }
    },
    securityFeature: 'Parameterized PDO query bindings preventing SQL Injection & tenant schema scoping'
  },
  {
    id: 'security-threat-scan',
    title: 'Real-time Request Threat Inspection',
    method: 'POST',
    path: '/api/v1/security/inspect-traffic',
    category: 'API Security',
    description: 'Evaluates payload against known SQL Injection, XSS, and command injection patterns.',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Client-Inspector)'
    },
    requestBody: {
      search_query: "products' OR '1'='1' --",
      user_input_comment: '<script>alert("xss")</script>'
    },
    responseStatus: 422,
    responseHeaders: {
      'Content-Type': 'application/json',
      'X-Security-Action': 'PAYLOAD_FLAGGED_AND_SANITIZED',
      'X-Threat-Score': '98/100'
    },
    responseBody: {
      status: 'threat_detected',
      message: 'Malicious payload signature detected and blocked prior to controller execution.',
      flagged_rules: [
        'OWASP-SQLi-Rule-004: Boolean based SQL injection attempt',
        'OWASP-XSS-Rule-012: Script tag execution vector in string body'
      ],
      client_ip: '198.51.100.18',
      action_taken: 'Request Terminated (422 Unprocessable Entity) & Logged to Security Vault'
    },
    securityFeature: 'Deep regex signature scanning, HTML escaping, and automatic IP threat score increment'
  }
];

export const SECURITY_CHECKLIST: SecurityCheckItem[] = [
  {
    id: 'sql-injection',
    title: 'SQL Injection Defense (SQLi)',
    standard: 'OWASP Top 10 - A03:2021',
    status: 'Strict Enforced',
    description: '100% parameterization of database queries via Laravel Eloquent ORM & prepared MySQL PDO statements.',
    implementationDetail: 'Never concatenate raw input into queries. Strict column typing and escaped wildcard matching.',
    techUsed: ['Laravel Eloquent', 'MySQL PDO', 'Strict Type Checking']
  },
  {
    id: 'csrf-protection',
    title: 'Cross-Site Request Forgery (CSRF)',
    standard: 'OWASP Top 10 - A01:2021',
    status: 'Active Protection',
    description: 'Cryptographic CSRF tokens on all mutating HTTP methods (POST, PUT, DELETE) with SameSite=Strict cookies.',
    implementationDetail: 'Verify-CSRF token middleware on web routes & scoped bearer tokens on REST API endpoints.',
    techUsed: ['Laravel Middleware', 'SameSite Cookie Flags', 'Anti-CSRF Tokens']
  },
  {
    id: 'xss-sanitization',
    title: 'Cross-Site Scripting (XSS) Mitigation',
    standard: 'OWASP Top 10 - A03:2021',
    status: 'Hardened',
    description: 'Automatic HTML entity encoding in React Virtual DOM, Laravel Blade escaping, and DOMPurify sanitization.',
    implementationDetail: 'Enforcing strict Content Security Policy (CSP) headers to block unauthorized script sources.',
    techUsed: ['React JSX Auto-Escape', 'DOMPurify', 'Content Security Policy (CSP)']
  },
  {
    id: 'api-rate-limiting',
    title: 'API Abuse & DDoS Throttling',
    standard: 'OWASP Top 10 - A04:2021',
    status: 'Hardened',
    description: 'Sliding-window rate limiting per IP and authenticated API key using Redis memory store.',
    implementationDetail: 'Custom throttle tiers: 60 req/min for public routes, 300 req/min for authenticated enterprise tier.',
    techUsed: ['Laravel Throttle', 'Redis Memory Store', 'Node.js Express-Rate-Limit']
  },
  {
    id: 'jwt-auth-hardening',
    title: 'JWT & OAuth2 Token Lifecycle',
    standard: 'RFC 7519 & RFC 6749',
    status: 'Strict Enforced',
    description: 'Short-lived access tokens (15m - 24h) with secure HTTP-only refresh tokens and instant token revocation.',
    implementationDetail: 'Laravel Sanctum personal access tokens with custom ability scopes and database blacklisting.',
    techUsed: ['Laravel Sanctum', 'JWT Tokens', 'HTTP-Only Cookies']
  },
  {
    id: 'payment-hmac',
    title: 'Payment Gateway Webhook Validation',
    standard: 'PCI-DSS Compliance Principle',
    status: 'Hardened',
    description: 'HMAC SHA-256 cryptographic signature validation for all inbound payment provider webhooks.',
    implementationDetail: 'Timing-safe string comparison preventing timing attacks; raw body buffer verification.',
    techUsed: ['Node.js Crypto', 'PHP hash_hmac()', 'Timing-Safe Comparison']
  }
];

export const SERVICES: ServiceOffering[] = [
  {
    id: 'custom-web-apps',
    title: 'Full Stack Web Applications',
    shortDesc: 'End-to-end bespoke web software engineered with Laravel & React for high performance and scalability.',
    iconName: 'Layout',
    deliverables: [
      'Tailored business logic & MVC architecture',
      'Responsive React frontend with smooth UX',
      'Robust Laravel REST backend with Sanctum',
      'Optimized MySQL database schema & migrations'
    ],
    technologies: ['PHP', 'Laravel', 'React.js', 'MySQL', 'Tailwind CSS'],
    idealFor: 'Startups, SaaS founders & businesses needing reliable custom platforms.'
  },
  {
    id: 'api-integrations',
    title: 'Secure API Engineering & Integrations',
    shortDesc: 'High-throughput RESTful APIs, third-party gateway integrations, and real-time webhook architectures.',
    iconName: 'Network',
    deliverables: [
      'Payment gateways (Stripe, PayPal, SSLCommerz, bKash)',
      'Third-party CRM, ERP, and SMS gateway bridges',
      'Comprehensive OpenAPI / Postman documentation',
      'Rate limiting, HMAC security & token authentication'
    ],
    technologies: ['Laravel', 'Node.js', 'Express', 'JWT', 'REST API'],
    idealFor: 'E-commerce, fintech, and businesses connecting disjointed digital services.'
  },
  {
    id: 'database-optimization',
    title: 'MySQL Architecture & Query Optimization',
    shortDesc: 'Database schema modeling, query execution plan tuning, and caching strategies for sub-second speeds.',
    iconName: 'Database',
    deliverables: [
      'Schema normalization & relational indexing',
      'Slow query debugging with EXPLAIN ANALYZE',
      'Redis cache layer integration for heavy queries',
      'ACID transaction locks preventing race conditions'
    ],
    technologies: ['MySQL 8', 'Redis', 'Eloquent ORM', 'Database Indexing'],
    idealFor: 'Platforms experiencing slow load times, high database load, or scaling bottlenecks.'
  },
  {
    id: 'security-hardening',
    title: 'Web Security Audits & Hardening',
    shortDesc: 'Comprehensive security review, vulnerability patching (OWASP Top 10), and server shield configuration.',
    iconName: 'ShieldAlert',
    deliverables: [
      'OWASP Top 10 vulnerability assessment',
      'SQLi, XSS, CSRF patch implementation',
      'Security headers (CSP, HSTS, X-Frame-Options)',
      'API authentication & token security tightening'
    ],
    technologies: ['Web Security', 'OWASP Standards', 'Laravel Sanctum', 'Nginx Config'],
    idealFor: 'Enterprises handling sensitive customer data, payments, or compliance needs.'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2023 - Present',
    role: 'Senior Full Stack Engineer',
    company: 'Enterprise Digital Solutions',
    location: 'Remote / Dhaka',
    type: 'Full-time',
    description: 'Leading backend architecture and frontend engineering for multi-tenant SaaS platforms and secure fintech portals.',
    responsibilities: [
      'Architected Laravel 11 REST API microservices serving over 200k daily requests.',
      'Constructed React 19 single-page apps with dynamic state management and sub-100ms UI responses.',
      'Engineered multi-currency payment integration pipeline supporting Stripe, bKash, and SSLCommerz.',
      'Hardened web security posture across 12+ production applications, achieving zero security incidents.'
    ],
    techStack: ['Laravel 11', 'React.js', 'Node.js', 'MySQL 8', 'Redis', 'Docker', 'Tailwind CSS']
  },
  {
    period: '2021 - 2023',
    role: 'Full Stack Web Developer',
    company: 'TechFlow Systems',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    description: 'Developed scalable e-commerce portals, custom ERP management software, and high-volume API integrations.',
    responsibilities: [
      'Built high-concurrency Laravel e-commerce engines handling flash sale traffic spikes.',
      'Redesigned legacy MySQL database schemas with composite indexes, reducing query times by 68%.',
      'Implemented real-time logistics tracking dashboards using Node.js WebSockets and React.',
      'Authored automated testing suites and CI/CD deployment pipelines on Linux servers.'
    ],
    techStack: ['PHP', 'Laravel', 'JavaScript', 'React', 'MySQL', 'Git', 'REST APIs']
  },
  {
    period: '2019 - 2021',
    role: 'PHP & Web Developer',
    company: 'Apex Code Studio',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    description: 'Created custom business management systems, content portals, and API integrations for domestic & international clients.',
    responsibilities: [
      'Developed custom PHP & Laravel web applications from scratch following clean MVC conventions.',
      'Integrated SMS, email, and localized payment gateways for smooth transaction flows.',
      'Built responsive frontends using HTML5, CSS3, modern JavaScript, and Bootstrap/Tailwind.'
    ],
    techStack: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'AJAX', 'REST APIs']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Tariq Al-Mansoor',
    role: 'CTO & Co-Founder',
    company: 'CloudVentures MENA',
    content: 'Md Shovon is an outstanding Full Stack Engineer. He architected our multi-tenant SaaS in Laravel and React with exceptional attention to web security and database performance. His API integration expertise saved us months of engineering time.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    projectType: 'Multi-tenant SaaS Architecture'
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Head of Product',
    company: 'FinTech Nexus',
    content: 'We hired Shovon to build our payment gateway aggregation layer. His implementation of HMAC verification, idempotency, and rate limiting was flawless. The system has processed over $1M with 100% uptime and zero discrepancies.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    projectType: 'Payment API & Security Hardening'
  },
  {
    id: '3',
    name: 'Rafiqul Islam',
    role: 'Managing Director',
    company: 'Prime Logistics Hub',
    content: 'Shovon built our real-time fleet dispatch platform using Laravel, React, and Node.js. His MySQL spatial indexing optimizations made route queries lightning fast. Highly recommended for any serious web development project.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    projectType: 'Real-time Logistics Platform'
  }
];
