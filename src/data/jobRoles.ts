export interface JobRole {
  id: string;
  title: string;
  category: string;
  description: string;
  keySkills: string[];
  sampleJobDescription: string;
}

export const JOB_CATEGORIES = [
  "All Categories",
  "Software & Web Engineering",
  "AI, Data & Machine Learning",
  "Cloud, DevOps & SRE",
  "Cybersecurity & Risk",
  "Product, Design & Agile",
  "IT Support, Systems & Operations",
  "Leadership & Consulting",
  "Emerging & Specialized Tech",
] as const;

export const IT_JOB_ROLES: JobRole[] = [
  // --- Page 1 ---
  {
    id: "software-engineer-developer",
    title: "Software Engineer / Developer",
    category: "Software & Web Engineering",
    description:
      "Designs, builds, tests, and maintains software applications or systems. Works with programming languages such as Python, Java, or C++ to create functional, efficient, and scalable code, and collaborates with cross-functional teams to deliver product features.",
    keySkills: ["Programming", "debugging", "data structures & algorithms", "version control (Git)"],
    sampleJobDescription: `Role: Software Engineer / Developer
Location: Remote / Hybrid

About the Role:
We are seeking a versatile Software Engineer / Developer to design, build, test, and maintain robust software applications and distributed systems. You will write clean, scalable code in Python, Java, or C++, collaborate with cross-functional product and engineering teams, and ensure high code quality through continuous debugging, testing, and CI/CD automation.

Key Responsibilities:
- Design, develop, and maintain high-performance software applications and reusable components.
- Apply foundational data structures & algorithms to solve complex computational and architectural problems.
- Implement automated unit tests, conduct code reviews, and debug critical software defects.
- Use Git version control and modern workflows to collaborate with product managers and QA teams.

Required Qualifications & Skills:
- Proficiency in core programming languages (Python, Java, C++, or modern equivalents).
- Strong command of data structures & algorithms, debugging, and system design principles.
- Hands-on experience with version control (Git/GitHub) and software testing methodologies.`,
  },
  {
    id: "front-end-developer",
    title: "Front-End Developer",
    category: "Software & Web Engineering",
    description:
      "Focuses on the visual and interactive parts of websites and applications that users see and interact with directly. Implements responsive designs using HTML, CSS, and JavaScript frameworks like React, Vue, or Angular.",
    keySkills: ["HTML/CSS/JavaScript", "React/Angular/Vue", "UI/UX principles", "responsive design"],
    sampleJobDescription: `Role: Front-End Developer
Location: Remote / Hybrid

About the Role:
We are looking for a creative and detail-oriented Front-End Developer to build intuitive, responsive web applications. You will translate UI/UX designs into high-performance web components using modern JavaScript frameworks (React, Vue, or Angular) while ensuring cross-browser compatibility and accessible design.

Key Responsibilities:
- Build responsive, mobile-first web user interfaces using HTML5, CSS3, and JavaScript/TypeScript.
- Develop modular UI components and stateful client-side logic in React, Vue, or Angular.
- Collaborate with UI/UX designers to implement modern design systems, micro-interactions, and accessibility standards.
- Optimize client-side rendering performance, bundle sizes, and Core Web Vitals.

Required Qualifications & Skills:
- Deep expertise in HTML/CSS/JavaScript and modern CSS frameworks (Tailwind, SCSS).
- Proven experience with modern front-end frameworks (React/Angular/Vue).
- Strong understanding of UI/UX principles, responsive layout techniques, and web accessibility.`,
  },
  {
    id: "back-end-developer",
    title: "Back-End Developer",
    category: "Software & Web Engineering",
    description:
      "Builds and maintains the server-side logic, databases, and APIs that power applications. Ensures data flows correctly between the server and front end, and optimizes performance and security.",
    keySkills: ["Server-side languages (Node.js, Java, Python)", "databases", "API design", "security"],
    sampleJobDescription: `Role: Back-End Developer
Location: Remote / Hybrid

About the Role:
We are hiring a Back-End Developer to architect and maintain server-side business logic, robust relational and NoSQL databases, and high-throughput RESTful/GraphQL APIs. You will ensure seamless data flow between back-end services and client applications with an emphasis on low latency, scalability, and security.

Key Responsibilities:
- Architect, build, and optimize scalable server-side microservices using Node.js, Java, or Python.
- Design clean, versioned REST/GraphQL APIs with robust authentication and input validation.
- Model, migrate, and query relational and NoSQL databases (PostgreSQL, MySQL, MongoDB, Redis).
- Enforce backend security best practices, data encryption, and rate limiting.

Required Qualifications & Skills:
- Proficiency in server-side languages (Node.js, Java, Python, Go).
- Hands-on experience with database design, schema migrations, and query tuning.
- Strong knowledge of API design principles, server security, and cloud deployment.`,
  },
  {
    id: "full-stack-developer",
    title: "Full-Stack Developer",
    category: "Software & Web Engineering",
    description:
      "Works across both front-end and back-end development, capable of handling an entire application's architecture from the user interface to the database layer.",
    keySkills: ["Front-end & back-end technologies", "databases", "DevOps basics"],
    sampleJobDescription: `Role: Full-Stack Developer
Location: Remote / Hybrid

About the Role:
We are looking for an adaptable Full-Stack Developer capable of steering complete features from intuitive client-side user interfaces to scalable back-end services and database schemas. You will work across the entire stack, integrating modern web technologies and basic DevOps deployment pipelines.

Key Responsibilities:
- Develop interactive user interfaces using React, Vue, or Next.js and integrate them with backend APIs.
- Build server-side services in Node.js, Python, or Java with database persistence (SQL/NoSQL).
- Configure build tools, containerized environments (Docker), and automated CI/CD deployment pipelines.
- Troubleshoot performance bottlenecks across both browser and server layers.

Required Qualifications & Skills:
- Strong command of both front-end (HTML/CSS/JavaScript, React/Vue) and back-end ecosystems.
- Experience with relational/NoSQL databases and database modeling.
- Working knowledge of basic DevOps practices, containerization (Docker), and Git workflows.`,
  },
  {
    id: "mobile-app-developer",
    title: "Mobile App Developer",
    category: "Software & Web Engineering",
    description:
      "Designs and develops applications for mobile devices such as smartphones and tablets, working with platforms like iOS (Swift) or Android (Kotlin/Java), or cross-platform frameworks like Flutter or React Native.",
    keySkills: ["Swift/Kotlin", "Flutter/React Native", "mobile UI design", "app store deployment"],
    sampleJobDescription: `Role: Mobile App Developer
Location: Remote / Hybrid

About the Role:
We are looking for a Mobile App Developer to build responsive, high-performance mobile applications for iOS and Android. You will build user-centric native or cross-platform experiences, integrate mobile backend APIs, and manage deployments to the Apple App Store and Google Play Store.

Key Responsibilities:
- Develop mobile applications using Swift (iOS), Kotlin (Android), or cross-platform frameworks (Flutter / React Native).
- Implement sleek mobile UI/UX layouts following Material Design and iOS Human Interface Guidelines.
- Optimize app memory consumption, battery usage, and offline caching capabilities.
- Oversee app packaging, signing, and release submission across Apple App Store and Google Play.

Required Qualifications & Skills:
- Proven experience with Swift, Kotlin, Flutter, or React Native.
- Deep familiarity with mobile UI design patterns, push notifications, and local storage.
- Experience with mobile build pipelines and app store deployment lifecycles.`,
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    category: "Cloud, DevOps & SRE",
    description:
      "Bridges development and operations teams by automating and streamlining software build, test, and deployment processes. Manages CI/CD pipelines, infrastructure as code, and cloud environments to improve release speed and reliability.",
    keySkills: ["CI/CD", "Docker", "Kubernetes", "cloud platforms (AWS/Azure/GCP)", "scripting"],
    sampleJobDescription: `Role: DevOps Engineer
Location: Remote / Hybrid

About the Role:
We are seeking an experienced DevOps Engineer to accelerate our software delivery lifecycle and maintain resilient cloud infrastructure. You will design automated CI/CD workflows, manage container orchestrations, and write infrastructure as code to guarantee high availability and rapid release velocity.

Key Responsibilities:
- Build and maintain continuous integration and continuous deployment (CI/CD) pipelines.
- Manage containerized microservices using Docker and Kubernetes clusters.
- Provision and automate cloud infrastructure across AWS, Microsoft Azure, or GCP using Terraform.
- Write automation scripts (Bash, Python, Go) for infrastructure monitoring and disaster recovery.

Required Qualifications & Skills:
- Expertise in CI/CD tools (GitHub Actions, GitLab CI, Jenkins).
- Solid experience with Docker containerization and Kubernetes orchestration.
- Hands-on mastery of cloud platforms (AWS/Azure/GCP) and Infrastructure as Code (Terraform).`,
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    category: "Cloud, DevOps & SRE",
    description:
      "Designs, implements, and manages cloud-based infrastructure and services. Ensures systems are scalable, secure, and cost-efficient across platforms like AWS, Microsoft Azure, or Google Cloud.",
    keySkills: ["Cloud architecture", "networking", "IaC (Terraform)", "security", "cost optimization"],
    sampleJobDescription: `Role: Cloud Engineer
Location: Remote / Hybrid

About the Role:
We are seeking a Cloud Engineer to architect, implement, and maintain enterprise cloud infrastructure. You will ensure our cloud workloads are highly available, securely partitioned, and cost-optimized across leading public cloud providers.

Key Responsibilities:
- Design and deploy cloud computing, networking, and storage architectures across AWS, Azure, or GCP.
- Implement Infrastructure as Code (IaC) using Terraform or CloudFormation.
- Configure cloud security groups, IAM policies, VPC peering, and encryption keys.
- Monitor cloud utilization metrics and execute cloud cost optimization strategies.

Required Qualifications & Skills:
- Proven experience architecting public cloud environments (AWS, Azure, GCP).
- Expertise in cloud networking, IAM security, and Infrastructure as Code (IaC).
- Strong track record in cloud cost management, capacity planning, and automated provisioning.`,
  },

  // --- Page 2 ---
  {
    id: "data-scientist",
    title: "Data Scientist",
    category: "AI, Data & Machine Learning",
    description:
      "Analyzes large and complex datasets to extract insights and build predictive models. Uses statistical methods, machine learning, and data visualization to help organizations make data-driven decisions.",
    keySkills: ["Python/R", "statistics", "machine learning", "SQL", "data visualization"],
    sampleJobDescription: `Role: Data Scientist
Location: Remote / Hybrid

About the Role:
We are hiring a Data Scientist to transform large, complex datasets into actionable predictive intelligence. You will develop statistical models, machine learning algorithms, and interactive visual dashboards to empower strategic decision-making across business and engineering units.

Key Responsibilities:
- Extract, clean, and preprocess structured and unstructured data using SQL and Python/R.
- Formulate statistical hypotheses, run exploratory data analyses (EDA), and design predictive ML models.
- Build production-ready predictive pipelines and evaluate model metrics (precision, recall, ROC-AUC).
- Translate complex statistical findings into intuitive visualizations and executive stakeholder reports.

Required Qualifications & Skills:
- Proficiency in Python/R, Pandas, NumPy, and scikit-learn.
- Strong grounding in mathematical statistics, probability, and machine learning techniques.
- Advanced SQL querying and visualization skills (Matplotlib, Seaborn, Tableau).`,
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    category: "AI, Data & Machine Learning",
    description:
      "Collects, processes, and interprets data to help businesses understand trends and make informed decisions. Creates reports and dashboards to communicate findings to stakeholders.",
    keySkills: ["SQL", "Excel", "data visualization tools (Power BI/Tableau)", "statistics"],
    sampleJobDescription: `Role: Data Analyst
Location: Remote / Hybrid

About the Role:
We are looking for a Data Analyst to collect, clean, and interpret operational and market data. You will uncover actionable business trends and design real-time dashboards in Power BI or Tableau to guide operational strategies.

Key Responsibilities:
- Write optimized SQL queries to aggregate and transform data from diverse relational data warehouses.
- Build interactive executive dashboards and KPI reports in Power BI, Tableau, or Looker.
- Conduct trend analyses and statistical variance checks in Excel and statistical packages.
- Collaborate with product and business stakeholders to identify key growth metrics and bottlenecks.

Required Qualifications & Skills:
- Strong proficiency in SQL database querying and relational data modeling.
- Advanced skills in data visualization tools (Power BI, Tableau) and spreadsheet modeling (Excel).
- Solid foundation in descriptive statistics and quantitative analysis.`,
  },
  {
    id: "machine-learning-engineer",
    title: "Machine Learning Engineer",
    category: "AI, Data & Machine Learning",
    description:
      "Designs and implements machine learning models and systems that can learn from and make predictions on data. Works closely with data scientists to deploy models into production environments.",
    keySkills: ["Python", "ML frameworks (TensorFlow/PyTorch)", "math & statistics", "MLOps"],
    sampleJobDescription: `Role: Machine Learning Engineer
Location: Remote / Hybrid

About the Role:
We are seeking an ML Engineer to take prototype algorithms into high-throughput production systems. You will train, optimize, and deploy deep learning models using PyTorch/TensorFlow and establish automated MLOps pipelines for continuous model monitoring.

Key Responsibilities:
- Build, train, and fine-tune scalable machine learning models using TensorFlow or PyTorch.
- Architect low-latency inference microservices and batch prediction workflows.
- Implement MLOps pipelines for automated dataset versioning, model evaluation, and deployment.
- Monitor model drift and accuracy in live production environments.

Required Qualifications & Skills:
- Strong programming background in Python, C++, and deep learning frameworks (PyTorch/TensorFlow).
- Deep knowledge of linear algebra, calculus, and mathematical statistics.
- Hands-on experience with MLOps tools (MLflow, Kubeflow, Docker) and model deployment.`,
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    category: "Cybersecurity & Risk",
    description:
      "Protects an organization's computer systems and networks from cyber threats. Monitors for security breaches, investigates incidents, and implements measures to safeguard sensitive information.",
    keySkills: ["Network security", "threat analysis", "SIEM tools", "risk assessment"],
    sampleJobDescription: `Role: Cybersecurity Analyst
Location: Remote / Hybrid

About the Role:
We are looking for a Cybersecurity Analyst to monitor, detect, and mitigate threats across our digital enterprise. You will analyze telemetry from SIEM platforms, investigate anomalies, and conduct risk assessments to safeguard critical assets and user privacy.

Key Responsibilities:
- Monitor security events in real-time across SIEM platforms (Splunk, Microsoft Sentinel, QRadar).
- Investigate security alerts, triage threat vectors, and execute incident containment procedures.
- Conduct vulnerability assessments, threat modeling, and internal security audits.
- Formulate defensive recommendations and train teams on security hygiene.

Required Qualifications & Skills:
- Experience with SIEM tools, network log analysis, and endpoint detection and response (EDR).
- Solid understanding of TCP/IP networking, firewalls, and cyber kill chains.
- Knowledge of cybersecurity frameworks (NIST, MITRE ATT&CK, ISO 27001).`,
  },
  {
    id: "network-engineer",
    title: "Network Engineer",
    category: "IT Support, Systems & Operations",
    description:
      "Designs, implements, and maintains computer networks that allow organizations to share data and resources. Ensures network performance, security, and reliability.",
    keySkills: ["Networking protocols", "routers/switches", "firewalls", "troubleshooting"],
    sampleJobDescription: `Role: Network Engineer
Location: Remote / Hybrid

About the Role:
We are hiring a Network Engineer to design, deploy, and maintain our enterprise local and wide area network infrastructure. You will configure enterprise switches, routers, and firewalls, ensuring seamless connectivity and peak uptime.

Key Responsibilities:
- Configure, monitor, and maintain enterprise routers, switches, and load balancers (Cisco, Juniper).
- Manage network routing protocols (BGP, OSPF, VLANs, TCP/IP, DNS, DHCP).
- Implement firewall policies, VPN tunnels, and network access control lists.
- Perform network packet analysis (Wireshark) to isolate and troubleshoot latency issues.

Required Qualifications & Skills:
- Deep expertise in core networking protocols (TCP/IP, BGP, OSPF, VPN, DNS).
- Hands-on experience configuring hardware routers, switches, and next-gen firewalls.
- Strong network troubleshooting and diagnostic abilities.`,
  },
  {
    id: "database-administrator-dba",
    title: "Database Administrator (DBA)",
    category: "IT Support, Systems & Operations",
    description:
      "Manages and maintains database systems, ensuring data is stored securely, efficiently, and is easily accessible. Handles backups, performance tuning, and database security.",
    keySkills: ["SQL", "database systems (MySQL/PostgreSQL/Oracle)", "backup & recovery"],
    sampleJobDescription: `Role: Database Administrator (DBA)
Location: Remote / Hybrid

About the Role:
We are seeking an experienced DBA to ensure the integrity, availability, and performance of mission-critical database clusters. You will manage schema migrations, automated backup/restore drills, indexing, and high-availability replication.

Key Responsibilities:
- Administer and optimize relational database servers (PostgreSQL, MySQL, Oracle, Microsoft SQL Server).
- Design and execute disaster recovery plans, point-in-time recoveries, and automated backups.
- Tune complex SQL queries, manage database locks, and optimize indexing strategies.
- Enforce strict database access controls, auditing, and encryption policies.

Required Qualifications & Skills:
- Advanced expertise in SQL and relational database engine administration.
- Proven experience with database clustering, replication, and failover architectures.
- Strong track record in database performance tuning and backup/recovery strategies.`,
  },
  {
    id: "qa-software-test-engineer",
    title: "QA / Software Test Engineer",
    category: "Software & Web Engineering",
    description:
      "Ensures software quality by designing and executing test plans to identify bugs and issues before release. May work with both manual and automated testing methods.",
    keySkills: ["Test planning", "automation tools (Selenium)", "bug tracking", "attention to detail"],
    sampleJobDescription: `Role: QA / Software Test Engineer
Location: Remote / Hybrid

About the Role:
We are looking for a QA / Software Test Engineer to design robust test strategies and ensure flawless software releases. You will build automated end-to-end and regression test suites, execute exploratory manual tests, and track defect lifecycles in Jira.

Key Responsibilities:
- Create detailed, comprehensive, and well-structured test plans and test cases.
- Develop automated UI and API test suites using Selenium, Cypress, Playwright, or Postman.
- Identify, document, and track software bugs with reproducible steps in tracking systems.
- Collaborate with developers in Agile sprints to ensure release readiness.

Required Qualifications & Skills:
- Experience in both automated and manual software quality assurance.
- Proficiency with test automation frameworks (Selenium, Playwright, Cypress) and API testing.
- Strong analytical mindset, bug reporting precision, and attention to detail.`,
  },

  // --- Page 3 ---
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    category: "Product, Design & Agile",
    description:
      "Designs user interfaces and experiences that are intuitive, accessible, and visually appealing. Conducts user research and creates wireframes and prototypes before development begins.",
    keySkills: ["Figma/Adobe XD", "wireframing", "user research", "prototyping"],
    sampleJobDescription: `Role: UI/UX Designer
Location: Remote / Hybrid

About the Role:
We are looking for a UI/UX Designer to craft seamless, accessible, and visually engaging user journeys. You will conduct user research, produce high-fidelity interactive Figma prototypes, and maintain a comprehensive design system for web and mobile platforms.

Key Responsibilities:
- Conduct user interviews, usability testing, and persona mapping to validate product concepts.
- Create wireframes, user flows, journey maps, and clickable interactive prototypes in Figma.
- Maintain and expand cohesive design systems, typography tokens, and UI component kits.
- Partner with engineers during sprint implementation to ensure high-fidelity UI execution.

Required Qualifications & Skills:
- Mastery of Figma, Adobe XD, and modern UI prototyping tools.
- Proven portfolio demonstrating user research, wireframing, and visual design craftsmanship.
- Deep understanding of accessibility (WCAG) and responsive design principles.`,
  },
  {
    id: "product-manager-technical",
    title: "Product Manager (Technical)",
    category: "Product, Design & Agile",
    description:
      "Oversees the development and lifecycle of a software product, defining its vision, strategy, and roadmap. Works with engineering, design, and business teams to prioritize features and ensure successful delivery.",
    keySkills: ["Roadmapping", "stakeholder communication", "Agile/Scrum", "market analysis"],
    sampleJobDescription: `Role: Technical Product Manager (TPM)
Location: Remote / Hybrid

About the Role:
We are seeking a Technical Product Manager to define product vision, align cross-functional engineering and design squads, and execute a data-driven product roadmap from inception through continuous release.

Key Responsibilities:
- Define product strategy, technical feature specs, PRDs, and prioritized backlog in Jira.
- Bridge technical engineering constraints with commercial business goals and market analysis.
- Lead Agile ceremonies (sprint planning, backlog grooming) alongside engineering leads.
- Analyze user metrics and qualitative feedback to iterate on feature value.

Required Qualifications & Skills:
- Proven product management track record in a software or technical product domain.
- Strong communication, technical specification drafting, and roadmap prioritization skills.
- Mastery of Agile/Scrum methodologies and quantitative user analytics.`,
  },
  {
    id: "it-support-specialist-helpdesk-technician",
    title: "IT Support Specialist / Helpdesk Technician",
    category: "IT Support, Systems & Operations",
    description:
      "Provides technical assistance to employees or customers, resolving hardware, software, and network issues. Handles ticketing systems and escalates complex problems as needed.",
    keySkills: ["Troubleshooting", "customer service", "ticketing systems", "basic networking"],
    sampleJobDescription: `Role: IT Support Specialist / Helpdesk Technician
Location: Remote / On-Site

About the Role:
We are looking for an IT Support Specialist to provide responsive technical troubleshooting for hardware, software, and local network issues. You will manage incoming support tickets, onboard workstations, and ensure maximum productivity for staff.

Key Responsibilities:
- Resolve technical support tickets across Windows, macOS, and Linux hardware and peripherals.
- Manage user identity, provisioning, and permissions in Active Directory / Google Workspace.
- Troubleshoot local LAN, Wi-Fi, VPN, and printer connectivity issues.
- Maintain IT asset inventory and document standard operating procedures.

Required Qualifications & Skills:
- Proven troubleshooting experience in hardware, OS, and client software environments.
- Experience with IT service management ticketing tools (Zendesk, ServiceNow, Jira Service Desk).
- Exceptional customer communication and fundamental networking knowledge.`,
  },
  {
    id: "systems-administrator",
    title: "Systems Administrator",
    category: "IT Support, Systems & Operations",
    description:
      "Manages and maintains an organization's computer systems and servers, ensuring uptime, performing updates, and managing user access and security policies.",
    keySkills: ["Server management (Windows/Linux)", "scripting", "security", "monitoring tools"],
    sampleJobDescription: `Role: Systems Administrator
Location: Remote / Hybrid

About the Role:
We are hiring a Systems Administrator to maintain our enterprise server environment, guarantee high system uptime, and automate routine administrative workflows across on-prem and cloud virtualization platforms.

Key Responsibilities:
- Administer, patch, and monitor Windows Server and Linux (RHEL, Ubuntu) server fleets.
- Automate configuration tasks and routine operations using PowerShell, Bash, or Python.
- Configure Active Directory, Group Policy Objects (GPO), and enterprise identity access.
- Monitor infrastructure telemetry, disk I/O, and server health using monitoring platforms.

Required Qualifications & Skills:
- In-depth administration experience with Linux and Windows server operating systems.
- Scripting proficiency in PowerShell or Bash for automation.
- Solid background in server security hardening, backup systems, and monitoring tools.`,
  },
  {
    id: "solutions-architect",
    title: "Solutions Architect",
    category: "Leadership & Consulting",
    description:
      "Designs high-level technical solutions to meet business needs, ensuring systems are scalable, secure, and integrate well with existing infrastructure. Often acts as a bridge between technical teams and business stakeholders.",
    keySkills: ["System design", "cloud architecture", "communication", "technical leadership"],
    sampleJobDescription: `Role: Solutions Architect
Location: Remote / Hybrid

About the Role:
We are seeking an experienced Solutions Architect to design scalable, resilient enterprise software architectures. You will bridge executive business objectives with concrete technical implementations, selecting technology stacks and ensuring optimal integration.

Key Responsibilities:
- Formulate high-level system architecture blueprints, integration patterns, and data schemas.
- Evaluate emerging technologies, conduct proof-of-concepts, and enforce architectural governance.
- Guide cross-functional development teams on system modularity, security, and scalability.
- Present architectural options and cost-benefit trade-offs to C-level stakeholders.

Required Qualifications & Skills:
- Extensive background in enterprise system design and cloud architecture (AWS/Azure/GCP).
- Proven ability to lead technical teams and communicate with non-technical executives.
- Deep understanding of microservices, event-driven architectures, and security frameworks.`,
  },
  {
    id: "blockchain-developer",
    title: "Blockchain Developer",
    category: "Emerging & Specialized Tech",
    description:
      "Builds decentralized applications and smart contracts using blockchain technology. Works with platforms like Ethereum and languages such as Solidity to create secure, transparent digital systems.",
    keySkills: ["Solidity", "smart contracts", "cryptography", "blockchain platforms"],
    sampleJobDescription: `Role: Blockchain Developer
Location: Remote

About the Role:
We are looking for a Blockchain Developer to architect and deploy decentralized applications (dApps) and secure smart contracts. You will work with EVM chains, design secure protocol mechanics, and integrate Web3 client interfaces.

Key Responsibilities:
- Write, test, and audit smart contracts in Solidity for Ethereum and EVM-compatible networks.
- Implement cryptographic signatures, token standards (ERC-20, ERC-721, ERC-1155), and DeFi logic.
- Integrate frontend dApps with Web3 providers (ethers.js, web3.js, viem).
- Execute security auditing and gas optimization drills to prevent reentrancy and exploit vectors.

Required Qualifications & Skills:
- Proven experience developing and deploying Solidity smart contracts.
- Strong grounding in cryptographic primitives, distributed consensus, and EVM internals.
- Familiarity with development tooling like Hardhat, Foundry, and Truffle.`,
  },
  {
    id: "site-reliability-engineer-sre",
    title: "Site Reliability Engineer (SRE)",
    category: "Cloud, DevOps & SRE",
    description:
      "Applies software engineering principles to infrastructure and operations, focusing on system reliability, scalability, and incident response. Builds automation to reduce manual work and improve uptime.",
    keySkills: ["Monitoring", "automation", "incident management", "cloud infrastructure"],
    sampleJobDescription: `Role: Site Reliability Engineer (SRE)
Location: Remote / Hybrid

About the Role:
We are seeking a Site Reliability Engineer to bridge software engineering with systems operations. You will define Service Level Objectives (SLOs), automate operational toil, and build resilient infrastructure to ensure 99.99% system availability.

Key Responsibilities:
- Establish and track SLIs, SLOs, and Error Budgets for critical distributed services.
- Build automated telemetry, alerting, and distributed tracing systems (Prometheus, Grafana, Datadog).
- Lead high-severity incident response, post-mortem root cause analyses, and disaster simulations.
- Develop automation tools in Go or Python to eliminate manual operational tasks.

Required Qualifications & Skills:
- Strong software engineering foundation (Go, Python) combined with Linux systems expertise.
- Deep experience with cloud infrastructure, Kubernetes, and observability tooling.
- Proven ability to handle live incident management and root-cause post-mortems.`,
  },
  {
    id: "embedded-systems-engineer",
    title: "Embedded Systems Engineer",
    category: "Emerging & Specialized Tech",
    description:
      "Develops software that runs on hardware devices such as sensors, appliances, and industrial equipment. Works close to the hardware layer, often in C or C++, to control device behavior efficiently.",
    keySkills: ["C/C++", "microcontrollers", "real-time operating systems", "hardware debugging"],
    sampleJobDescription: `Role: Embedded Systems Engineer
Location: Remote / On-Site

About the Role:
We are looking for an Embedded Systems Engineer to write low-level firmware and embedded software for IoT devices and microcontrollers. You will interact directly with hardware interfaces, debug timing constraints, and optimize battery and compute footprints.

Key Responsibilities:
- Develop firmware in C and C++ for ARM Cortex microcontrollers and embedded processors.
- Implement device drivers for communication protocols (I2C, SPI, UART, CAN, BLE).
- Develop multi-threaded real-time firmware using RTOS (FreeRTOS, Zephyr).
- Debug hardware and signal integrity using oscilloscopes, logic analyzers, and JTAG emulators.

Required Qualifications & Skills:
- Proficiency in C and C++ for embedded platforms and resource-constrained environments.
- Hands-on experience with RTOS architectures and low-level hardware debugging.
- Understanding of digital circuit schematics and peripheral communication buses.`,
  },

  // --- Page 4 ---
  {
    id: "game-developer",
    title: "Game Developer",
    category: "Software & Web Engineering",
    description:
      "Designs and codes video games, implementing gameplay mechanics, graphics, physics, and audio. Works with game engines to bring interactive experiences to life across platforms.",
    keySkills: ["Unity/Unreal Engine", "C#/C++", "game physics", "3D math"],
    sampleJobDescription: `Role: Game Developer
Location: Remote / Hybrid

About the Role:
We are hiring a Game Developer to build engaging gameplay mechanics, physics interactions, and visual effects in modern game engines. You will collaborate with artists and designers to bring immersive gaming experiences to market.

Key Responsibilities:
- Program gameplay systems, player character controls, and AI behaviors in Unity (C#) or Unreal Engine (C++).
- Implement 3D mathematical transformations, collision detection, and rigid-body physics simulation.
- Optimize frame rates, draw calls, and memory footprints for target consoles and mobile devices.
- Integrate game audio, animation states, and UI menus.

Required Qualifications & Skills:
- Proficiency in Unity (C#) or Unreal Engine (C++).
- Strong command of 3D math (linear algebra, vectors, quaternions) and physics systems.
- Experience with profiling, asset optimization, and game architecture patterns.`,
  },
  {
    id: "ar-vr-developer",
    title: "AR/VR Developer",
    category: "Emerging & Specialized Tech",
    description:
      "Creates immersive augmented and virtual reality experiences for gaming, training, or enterprise applications. Works with 3D environments, spatial tracking, and specialized hardware like headsets.",
    keySkills: ["Unity/Unreal", "3D modeling", "spatial computing", "C#"],
    sampleJobDescription: `Role: AR/VR Developer
Location: Remote / Hybrid

About the Role:
We are seeking an AR/VR Developer to build next-generation spatial computing experiences for headsets (Meta Quest, Apple Vision Pro, VisionOS). You will design interactive 3D interfaces, spatial tracking, and haptic feedback loops.

Key Responsibilities:
- Develop spatial computing applications using Unity, Unreal Engine, or native spatial SDKs.
- Implement 6-DoF hand tracking, eye tracking, spatial audio, and room-scale environmental anchors.
- Optimize 3D graphics rendering pipelines for low-latency stereoscopic displays.
- Collaborate with 3D artists to integrate optimized meshes, textures, and shaders.

Required Qualifications & Skills:
- Strong experience in Unity (C#) or Unreal Engine for XR/VR/AR platforms.
- Working knowledge of spatial tracking SDKs (OpenXR, ARKit, ARCore).
- Understanding of 3D math and performance optimization for head-mounted displays.`,
  },
  {
    id: "ai-research-engineer",
    title: "AI Research Engineer",
    category: "AI, Data & Machine Learning",
    description:
      "Conducts research into new artificial intelligence techniques and algorithms, often publishing findings and prototyping novel models. Bridges academic research with practical engineering implementation.",
    keySkills: ["Deep learning", "research methodology", "Python", "mathematics"],
    sampleJobDescription: `Role: AI Research Engineer
Location: Remote / Hybrid

About the Role:
We are looking for an AI Research Engineer to explore cutting-edge neural architectures, generative AI models, and foundation algorithm advances. You will prototype novel deep learning techniques and bridge theoretical discoveries into practical implementations.

Key Responsibilities:
- Formulate, implement, and benchmark experimental deep learning architectures in PyTorch.
- Conduct rigorous empirical research into generative models, attention mechanisms, and representation learning.
- Write research papers, document reproducible methodologies, and present breakthroughs.
- Collaborate with engineering teams to scale prototype algorithms across multi-GPU compute clusters.

Required Qualifications & Skills:
- Advanced degree (MS/PhD) or equivalent research experience in Computer Science, AI, or Mathematics.
- Deep expertise in PyTorch, distributed training (DeepSpeed, Megatron), and advanced calculus.
- Proven research publication record or novel model contribution history.`,
  },
  {
    id: "nlp-engineer",
    title: "NLP Engineer",
    category: "AI, Data & Machine Learning",
    description:
      "Specializes in building systems that understand and generate human language, such as chatbots, translators, and sentiment analysis tools, using natural language processing techniques.",
    keySkills: ["NLP libraries (spaCy, Hugging Face)", "Python", "linguistics basics", "ML"],
    sampleJobDescription: `Role: NLP Engineer
Location: Remote / Hybrid

About the Role:
We are seeking an NLP Engineer to design and deploy state-of-the-art Natural Language Processing pipelines and Large Language Model applications. You will build conversational systems, semantic search engines, and automated text extraction workflows.

Key Responsibilities:
- Build tokenization, NER, and sentiment analysis pipelines using Hugging Face Transformers and spaCy.
- Fine-tune transformer language models (BERT, LLaMA, Mistral) for domain-specific tasks.
- Construct Retrieval-Augmented Generation (RAG) knowledge retrieval systems using vector databases.
- Evaluate semantic similarity, hallucinations, and language model benchmark scores.

Required Qualifications & Skills:
- Strong background in Python, PyTorch, Hugging Face, and spaCy.
- Deep understanding of modern Transformer architectures, embeddings, and tokenizers.
- Experience building practical NLP applications and conversational agents.`,
  },
  {
    id: "computer-vision-engineer",
    title: "Computer Vision Engineer",
    category: "AI, Data & Machine Learning",
    description:
      "Builds systems that interpret and process visual data from the world, such as image recognition, object detection, and facial recognition applications.",
    keySkills: ["OpenCV", "deep learning", "image processing", "Python"],
    sampleJobDescription: `Role: Computer Vision Engineer
Location: Remote / Hybrid

About the Role:
We are hiring a Computer Vision Engineer to develop visual perception algorithms and deep learning models for object detection, segmentation, and video analytics. You will work on real-time visual inspection and autonomous perception pipelines.

Key Responsibilities:
- Implement image processing and feature extraction algorithms using OpenCV and Python/C++.
- Train and deploy convolutional neural networks (YOLO, ResNet, Mask R-CNN) and Vision Transformers (ViT).
- Optimize models for edge inference using TensorRT, ONNX, and OpenVINO.
- Manage image dataset annotation, data augmentation, and model benchmarking.

Required Qualifications & Skills:
- Expertise in OpenCV, PyTorch, and deep learning vision architectures.
- Experience with image processing pipelines and real-time video stream processing.
- Knowledge of model optimization for GPU and edge acceleration.`,
  },
  {
    id: "mlops-engineer",
    title: "MLOps Engineer",
    category: "Cloud, DevOps & SRE",
    description:
      "Focuses on deploying, monitoring, and maintaining machine learning models in production. Builds pipelines to automate model training, testing, and versioning.",
    keySkills: ["CI/CD for ML", "containerization", "model monitoring", "cloud platforms"],
    sampleJobDescription: `Role: MLOps Engineer
Location: Remote / Hybrid

About the Role:
We are looking for an MLOps Engineer to build the automated infrastructure powering continuous machine learning training, validation, and serving. You will unify data science workflows with robust software delivery practices.

Key Responsibilities:
- Build automated CI/CD pipelines for model training, testing, and registry versioning (MLflow, Kubeflow).
- Deploy scalable model inference APIs using Docker, Kubernetes, and GPU clusters.
- Implement monitoring for data drift, concept drift, latency, and prediction degradation.
- Manage feature stores and reproducible training dataset pipelines.

Required Qualifications & Skills:
- Strong software engineering and scripting background (Python, Bash).
- Experience with container orchestration (Kubernetes, Docker) and cloud ML platforms (SageMaker, Vertex AI).
- Hands-on expertise with MLOps frameworks (MLflow, DVC, Feast, Triton Inference Server).`,
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    category: "AI, Data & Machine Learning",
    description:
      "Designs and builds the infrastructure and pipelines that collect, store, and process large volumes of data, making it accessible for analysts and data scientists.",
    keySkills: ["ETL pipelines", "SQL", "big data tools (Spark/Hadoop)", "cloud data warehouses"],
    sampleJobDescription: `Role: Data Engineer
Location: Remote / Hybrid

About the Role:
We are seeking a Data Engineer to construct reliable, high-throughput ETL/ELT pipelines and centralized data warehouse architectures. You will ensure data quality, low ingestion latency, and clean analytics datasets for business intelligence and machine learning.

Key Responsibilities:
- Design, build, and maintain automated batch and streaming ETL pipelines using Python and SQL.
- Manage distributed data processing using Apache Spark, Kafka, and Airflow.
- Model and optimize cloud data warehouses (Snowflake, BigQuery, Databricks, Redshift).
- Implement data validation rules, metadata catalogs, and data governance frameworks.

Required Qualifications & Skills:
- Advanced SQL proficiency and Python data pipeline development experience.
- Hands-on experience with Apache Spark, Airflow orchestration, and cloud data warehouses.
- Deep knowledge of relational modeling, dimensional modeling (Star Schema), and data lake architectures.`,
  },

  // --- Page 5 ---
  {
    id: "big-data-engineer",
    title: "Big Data Engineer",
    category: "AI, Data & Machine Learning",
    description:
      "Works with massive datasets that exceed traditional processing capabilities, using distributed computing frameworks to store, process, and analyze data at scale.",
    keySkills: ["Hadoop", "Spark", "Kafka", "distributed systems"],
    sampleJobDescription: `Role: Big Data Engineer
Location: Remote / Hybrid

About the Role:
We are looking for a Big Data Engineer to architect petabyte-scale distributed computing systems. You will build high-concurrency stream processing pipelines and distributed storage engines capable of handling millions of events per second.

Key Responsibilities:
- Architect distributed data systems using Apache Spark, Hadoop, Kafka, and Flink.
- Optimize distributed cluster resources, memory partitioning, and shuffle operations.
- Build fault-tolerant real-time event streaming architectures.
- Scale distributed NoSQL and columnar databases (Cassandra, HBase, ClickHouse).

Required Qualifications & Skills:
- Extensive experience with distributed frameworks (Apache Spark, Kafka, Hadoop).
- Strong programming skills in Scala, Java, or Python.
- Deep understanding of distributed systems theory, consensus, and horizontal partitioning.`,
  },
  {
    id: "business-intelligence-bi-developer",
    title: "Business Intelligence (BI) Developer",
    category: "AI, Data & Machine Learning",
    description:
      "Builds reporting tools and dashboards that transform raw business data into actionable insights for decision-makers, often using specialized BI software.",
    keySkills: ["Power BI/Tableau", "SQL", "data modeling", "ETL"],
    sampleJobDescription: `Role: Business Intelligence (BI) Developer
Location: Remote / Hybrid

About the Role:
We are hiring a BI Developer to transform complex business datasets into intuitive executive dashboards and automated reporting suites. You will collaborate with commercial stakeholders to define KPIs and deliver self-service analytics.

Key Responsibilities:
- Design, build, and optimize enterprise dashboards in Power BI, Tableau, or Looker.
- Develop DAX expressions, Power Query transformations, and complex SQL views.
- Build semantic data models and star schema data marts for analytics reporting.
- Automate report distribution and establish data refresh schedules.

Required Qualifications & Skills:
- Mastery of Power BI, Tableau, or Looker and advanced DAX / calculated fields.
- Strong SQL querying and data warehouse modeling experience.
- Proven track record translating business requirements into impactful executive visual reports.`,
  },
  {
    id: "penetration-tester-ethical-hacker",
    title: "Penetration Tester (Ethical Hacker)",
    category: "Cybersecurity & Risk",
    description:
      "Simulates cyberattacks on systems and networks to identify vulnerabilities before malicious hackers can exploit them, then reports findings to improve security posture.",
    keySkills: ["Penetration testing tools (Metasploit, Burp Suite)", "networking", "scripting"],
    sampleJobDescription: `Role: Penetration Tester (Ethical Hacker)
Location: Remote / Hybrid

About the Role:
We are seeking a Penetration Tester to conduct proactive offensive security assessments across web apps, APIs, cloud environments, and internal networks. You will uncover critical vulnerabilities and author remediation roadmaps before adversaries exploit them.

Key Responsibilities:
- Conduct authorized penetration tests on web applications, internal/external networks, and mobile apps.
- Utilize security tools (Burp Suite Pro, Metasploit, Nmap, Wireshark) and craft custom exploit scripts.
- Perform black-box, gray-box, and white-box security assessments.
- Author detailed technical vulnerability reports with CVSS scoring and remediation guidance.

Required Qualifications & Skills:
- Proven penetration testing experience and offensive security certifications (OSCP, CEH, GPEN).
- Deep expertise in web application security testing (OWASP Top 10) and network protocols.
- Scripting capability in Python, Bash, or PowerShell for custom exploit automation.`,
  },
  {
    id: "security-engineer",
    title: "Security Engineer",
    category: "Cybersecurity & Risk",
    description:
      "Designs and implements security systems and protocols to protect an organization's infrastructure, applications, and data from threats and vulnerabilities.",
    keySkills: ["Security architecture", "firewalls", "encryption", "vulnerability management"],
    sampleJobDescription: `Role: Security Engineer
Location: Remote / Hybrid

About the Role:
We are looking for a Security Engineer to build and maintain defense-in-depth security architectures. You will deploy security tooling, enforce cryptographic standards, and manage vulnerability lifecycles across cloud and on-premise infrastructure.

Key Responsibilities:
- Design and deploy security controls, next-generation firewalls, and endpoint protection.
- Implement encryption at rest and in transit, TLS/SSL certificates, and key management (KMS).
- Oversee automated vulnerability scanning and collaborate with DevOps on patching.
- Enforce security hardening standards across Linux/Windows hosts and cloud environments.

Required Qualifications & Skills:
- Hands-on experience with enterprise security architecture, firewalls, and vulnerability management.
- Deep knowledge of cryptographic standards, IAM policies, and cloud security controls.
- Strong scripting and automation skills for security orchestration.`,
  },
  {
    id: "incident-response-analyst",
    title: "Incident Response Analyst",
    category: "Cybersecurity & Risk",
    description:
      "Investigates and responds to security breaches and cyber incidents, working to contain damage, identify root causes, and prevent future occurrences.",
    keySkills: ["Digital forensics", "threat hunting", "log analysis", "incident handling"],
    sampleJobDescription: `Role: Incident Response Analyst
Location: Remote / Hybrid

About the Role:
We are hiring an Incident Response Analyst to lead rapid containment, digital forensics, and root-cause analysis during active cybersecurity events. You will preserve digital evidence, hunt for persistent threats, and build incident playbooks.

Key Responsibilities:
- Lead the containment, eradication, and recovery phases of cyber security incidents.
- Perform forensic disk, memory, and network artifact analysis using EnCase, FTK, or Volatility.
- Execute threat hunting across endpoints and analyze adversary tactics (MITRE ATT&CK).
- Author detailed incident post-mortems and refine CSIRT response playbooks.

Required Qualifications & Skills:
- Proven experience in incident response, SOC operations, and digital forensics.
- Strong knowledge of Windows/Linux memory forensics, malware triage, and event log analysis.
- Relevant security certifications (GCIH, GCFA, GNFA) preferred.`,
  },
  {
    id: "cryptographer-cryptography-engineer",
    title: "Cryptographer / Cryptography Engineer",
    category: "Cybersecurity & Risk",
    description:
      "Develops and analyzes algorithms used to secure data through encryption, ensuring confidentiality and integrity of sensitive information across systems.",
    keySkills: ["Cryptographic algorithms", "mathematics", "secure protocol design"],
    sampleJobDescription: `Role: Cryptographer / Cryptography Engineer
Location: Remote / Hybrid

About the Role:
We are seeking a Cryptography Engineer to design, analyze, and implement cryptographic protocols, zero-knowledge proofs, and secure key distribution frameworks across our security and blockchain products.

Key Responsibilities:
- Implement and audit cryptographic primitives (symmetric/asymmetric ciphers, elliptic curves, hashing).
- Design secure end-to-end encryption protocols and key exchange mechanisms.
- Research and test post-quantum cryptography algorithms and zero-knowledge proof systems.
- Analyze side-channel resistance and cryptographic implementation flaws in production code.

Required Qualifications & Skills:
- Advanced background in Mathematics, Computer Science, or Cryptography.
- Deep knowledge of standard cryptographic algorithms (AES, RSA, ECC, SHA-3) and protocols (TLS, Noise).
- Proficiency in secure low-level coding (C, Rust, C++, Python).`,
  },
  {
    id: "compliance-risk-analyst-it",
    title: "Compliance & Risk Analyst (IT)",
    category: "Cybersecurity & Risk",
    description:
      "Ensures an organization's IT systems and processes comply with relevant regulations and standards, assessing risks and recommending mitigation strategies.",
    keySkills: ["Regulatory frameworks (GDPR, HIPAA)", "risk assessment", "auditing"],
    sampleJobDescription: `Role: Compliance & Risk Analyst (IT)
Location: Remote / Hybrid

About the Role:
We are seeking an IT Compliance & Risk Analyst to manage our information security governance, regulatory adherence, and risk register. You will lead compliance audits against SOC 2, ISO 27001, GDPR, and HIPAA standards.

Key Responsibilities:
- Conduct periodic IT risk assessments, vendor security reviews, and gap analyses.
- Manage compliance audit readiness for SOC 2 Type II, ISO 27001, GDPR, and HIPAA.
- Maintain corporate IT security policies, control matrices, and data privacy procedures.
- Partner with engineering to implement technical compliance guardrails.

Required Qualifications & Skills:
- Deep familiarity with regulatory frameworks (SOC 2, ISO 27001, GDPR, HIPAA, PCI-DSS).
- Proven track record managing audit evidence collection and IT risk registers.
- Certifications such as CISA, CRISC, or CISM are highly valued.`,
  },
  {
    id: "it-auditor",
    title: "IT Auditor",
    category: "Cybersecurity & Risk",
    description:
      "Reviews and evaluates an organization's IT infrastructure, policies, and operations to ensure effectiveness, security, and regulatory compliance.",
    keySkills: ["Auditing standards", "risk analysis", "IT governance", "reporting"],
    sampleJobDescription: `Role: IT Auditor
Location: Remote / Hybrid

About the Role:
We are looking for an IT Auditor to evaluate the effectiveness of IT controls, security policies, and internal operating frameworks. You will execute independent audit programs and prepare executive reports on control deficiencies and remediation steps.

Key Responsibilities:
- Plan and execute IT General Controls (ITGC) audits across systems, applications, and databases.
- Evaluate logical access, change management, backup protocols, and IT disaster recovery controls.
- Draft clear audit findings, risk impact assessments, and remediation recommendations.
- Present audit conclusions to audit committees and executive leadership.

Required Qualifications & Skills:
- Proven experience conducting formal IT audits and ITGC evaluations.
- Knowledge of COBIT, NIST, and standard auditing frameworks.
- CISA (Certified Information Systems Auditor) or equivalent designation preferred.`,
  },

  // --- Page 6 ---
  {
    id: "cloud-solutions-architect",
    title: "Cloud Solutions Architect",
    category: "Leadership & Consulting",
    description:
      "Designs comprehensive cloud strategies and infrastructure blueprints tailored to business needs, ensuring scalability, cost-efficiency, and security across multi-cloud or hybrid environments.",
    keySkills: ["Multi-cloud design", "cost management", "security", "migration planning"],
    sampleJobDescription: `Role: Cloud Solutions Architect
Location: Remote / Hybrid

About the Role:
We are seeking an experienced Cloud Solutions Architect to define enterprise multi-cloud architectures. You will lead cloud migration roadmaps, container modernization, and multi-region resilience across AWS, Azure, and Google Cloud.

Key Responsibilities:
- Design enterprise-scale cloud architecture blueprints spanning multi-cloud or hybrid infrastructure.
- Lead legacy application migration strategies (re-host, re-platform, refactor) to cloud-native models.
- Establish architectural security baselines, disaster recovery, and multi-region failover.
- Model total cost of ownership (TCO) and guide executive stakeholders on cloud investments.

Required Qualifications & Skills:
- Professional Cloud Architect certification (AWS Certified Solutions Architect Pro, Google Cloud PCA, Azure Solutions Architect).
- Extensive experience designing multi-cloud, microservices, and hybrid cloud infrastructures.
- Strong consultative communication and stakeholder leadership capabilities.`,
  },
  {
    id: "platform-engineer",
    title: "Platform Engineer",
    category: "Cloud, DevOps & SRE",
    description:
      "Builds and maintains internal developer platforms and tools that streamline how engineering teams build, test, and deploy software.",
    keySkills: ["Kubernetes", "infrastructure automation", "developer tooling", "CI/CD"],
    sampleJobDescription: `Role: Platform Engineer
Location: Remote / Hybrid

About the Role:
We are hiring a Platform Engineer to build and maintain an Internal Developer Platform (IDP) that empowers hundreds of product engineers to deploy autonomously with zero friction. You will build self-service developer tooling and golden path pipelines.

Key Responsibilities:
- Design and operate internal developer platforms using Kubernetes, Backstage, and Terraform.
- Create automated golden-path templates for provisioning services, databases, and CI/CD pipelines.
- Improve developer productivity, reduce onboarding time, and streamline deployment workflows.
- Maintain shared platform infrastructure, secrets management (Vault), and service meshes.

Required Qualifications & Skills:
- Deep expertise in Kubernetes, Helm, Docker, and Infrastructure as Code.
- Strong software development skills (Go, Python, TypeScript) for building internal CLI tools and web portals.
- Passion for developer experience (DevEx) and self-service automation.`,
  },
  {
    id: "infrastructure-engineer",
    title: "Infrastructure Engineer",
    category: "Cloud, DevOps & SRE",
    description:
      "Designs, deploys, and manages the physical and virtual infrastructure that supports an organization's IT operations, including servers, storage, and networking.",
    keySkills: ["Virtualization", "networking", "server management", "automation"],
    sampleJobDescription: `Role: Infrastructure Engineer
Location: Remote / Hybrid

About the Role:
We are seeking an Infrastructure Engineer to manage our virtualized server infrastructure, enterprise storage arrays, and hybrid networking environments. You will ensure maximum reliability and capacity scaling for all underlying compute resources.

Key Responsibilities:
- Deploy, maintain, and upgrade virtualized hypervisors (VMware ESXi, KVM, Proxmox, Hyper-V).
- Manage enterprise SAN/NAS storage arrays, Fibre Channel networking, and backup storage targets.
- Automate configuration management using Ansible, Puppet, or Terraform.
- Monitor hardware health, power redundancy, and data center environment metrics.

Required Qualifications & Skills:
- Extensive experience in server virtualization, storage fabric management, and Linux/Windows systems.
- Proficiency with configuration automation (Ansible, Terraform).
- Strong understanding of enterprise networking and hardware provisioning.`,
  },
  {
    id: "release-manager",
    title: "Release Manager",
    category: "Product, Design & Agile",
    description:
      "Coordinates and oversees the process of deploying software releases, ensuring changes are tested, scheduled, and rolled out smoothly with minimal disruption.",
    keySkills: ["Release planning", "CI/CD", "risk management", "coordination"],
    sampleJobDescription: `Role: Release Manager
Location: Remote / Hybrid

About the Role:
We are looking for a Release Manager to coordinate software release trains across multiple engineering teams. You will manage release calendars, evaluate deployment risk, and ensure zero-downtime production rollouts.

Key Responsibilities:
- Manage the end-to-end software release schedule, tracking feature dependencies and deployment gates.
- Coordinate cross-functional teams (Dev, QA, SecOps, Support) during staging verification and production deployments.
- Conduct release risk assessments, maintain rollback plans, and oversee canary deployments.
- Drive continuous improvement of release automation and deployment metrics.

Required Qualifications & Skills:
- Proven experience managing complex enterprise software releases.
- Deep familiarity with CI/CD tools, versioning strategies (SemVer), and deployment patterns (Blue/Green, Canary).
- Outstanding cross-functional coordination and communication skills.`,
  },
  {
    id: "build-release-engineer",
    title: "Build & Release Engineer",
    category: "Cloud, DevOps & SRE",
    description:
      "Manages the build automation and deployment pipelines that compile source code into deployable software, ensuring consistency and reliability across environments.",
    keySkills: ["Build tools (Jenkins, Maven)", "scripting", "version control", "automation"],
    sampleJobDescription: `Role: Build & Release Engineer
Location: Remote / Hybrid

About the Role:
We are seeking a Build & Release Engineer to optimize compile, test, and packaging pipelines. You will manage build artifacts, build farm caching, and ensure fast, deterministic builds across our software stack.

Key Responsibilities:
- Configure, optimize, and maintain build systems (Jenkins, GitHub Actions, Maven, Gradle, Bazel, Webpack).
- Manage artifact repositories (Artifactory, Nexus) and software packaging.
- Automate branching strategies, code tagging, and changelog generation in Git.
- Troubleshoot compilation errors and accelerate build caching and test execution times.

Required Qualifications & Skills:
- Strong experience with build automation tools (Jenkins, Maven, Gradle, Bazel).
- Scripting mastery in Python, Bash, or Groovy.
- Deep expertise in Git version control and artifact lifecycle management.`,
  },
  {
    id: "automation-engineer",
    title: "Automation Engineer",
    category: "Software & Web Engineering",
    description:
      "Designs and implements automated testing and process frameworks to reduce manual effort and increase efficiency across development and operations workflows.",
    keySkills: ["Test automation frameworks", "scripting", "CI/CD", "tools like Selenium"],
    sampleJobDescription: `Role: Automation Engineer
Location: Remote / Hybrid

About the Role:
We are looking for an Automation Engineer to eliminate manual operational friction by developing automated testing frameworks and robotic process workflows. You will design reliable automation that scales.

Key Responsibilities:
- Architect and maintain end-to-end automated test suites using Selenium, Playwright, or Cypress.
- Automate repetitive operational tasks and data synchronization flows via Python/Node.js scripts.
- Integrate automated testing into CI/CD pipelines to provide instantaneous quality feedback.
- Build reporting dashboards to monitor test execution pass rates and execution duration.

Required Qualifications & Skills:
- Strong proficiency in test automation tools (Selenium, Playwright, Appium, Cypress).
- Scripting and software engineering capability in Python, JavaScript, or Java.
- Solid understanding of CI/CD integration and automated quality gates.`,
  },
  {
    id: "performance-test-engineer",
    title: "Performance Test Engineer",
    category: "Software & Web Engineering",
    description:
      "Evaluates how software applications perform under various load conditions, identifying bottlenecks and ensuring systems can handle expected traffic and usage.",
    keySkills: ["Load testing tools (JMeter, LoadRunner)", "performance analysis"],
    sampleJobDescription: `Role: Performance Test Engineer
Location: Remote / Hybrid

About the Role:
We are seeking a Performance Test Engineer to stress-test high-traffic applications. You will simulate realistic peak concurrency, isolate database and memory bottlenecks, and ensure systems meet strict latency SLAs under extreme load.

Key Responsibilities:
- Design and execute load, stress, spike, and soak testing scenarios using Apache JMeter, k6, or Gatling.
- Analyze CPU, memory, database query duration, and network throughput during test runs.
- Identify architectural bottlenecks and partner with engineering on performance optimizations.
- Establish automated performance regression benchmarking within CI/CD pipelines.

Required Qualifications & Skills:
- Extensive experience with load testing tools (JMeter, k6, Gatling, Locust, LoadRunner).
- Deep knowledge of APM profiling tools (Datadog, New Relic, Dynatrace).
- Strong understanding of web protocols, concurrency models, and database query optimization.`,
  },
  {
    id: "technical-writer",
    title: "Technical Writer",
    category: "Product, Design & Agile",
    description:
      "Creates clear documentation such as user manuals, API references, and technical guides that help users and developers understand and use software products effectively.",
    keySkills: ["Technical writing", "documentation tools", "understanding of software concepts"],
    sampleJobDescription: `Role: Technical Writer
Location: Remote / Hybrid

About the Role:
We are looking for a Technical Writer to create developer documentation, comprehensive API references, and user guides. You will distill complex software architectures into clear, developer-friendly documentation.

Key Responsibilities:
- Write and maintain developer documentation, SDK guides, and OpenAPI/Swagger API specifications.
- Create user guides, release notes, onboarding tutorials, and architecture diagrams.
- Work within Docs-as-Code workflows using Markdown, Git, static site generators (Docusaurus, MkDocs).
- Collaborate with engineers and product managers to clarify technical workflows.

Required Qualifications & Skills:
- Proven experience writing technical documentation for software engineers or technical audiences.
- Familiarity with Docs-as-Code tooling (Git, Markdown, OpenAPI/Swagger, Docusaurus).
- Ability to read code and understand API payloads, parameters, and architectural diagrams.`,
  },

  // --- Page 7 ---
  {
    id: "developer-advocate-developer-relations",
    title: "Developer Advocate / Developer Relations",
    category: "Product, Design & Agile",
    description:
      "Bridges the gap between a company's technical products and its developer community, creating content, demos, and support to drive adoption and gather feedback.",
    keySkills: ["Public speaking", "technical writing", "coding", "community engagement"],
    sampleJobDescription: `Role: Developer Advocate / DevRel
Location: Remote / Hybrid

About the Role:
We are seeking a Developer Advocate to champion our developer platform and inspire engineering communities worldwide. You will build open-source code samples, speak at tech conferences, author technical tutorials, and channel developer feedback back into product teams.

Key Responsibilities:
- Build compelling demo applications, starter kits, and code tutorials demonstrating platform capabilities.
- Present keynotes, workshops, and technical talks at industry conferences and meetups.
- Engage with developers across Discord, GitHub, Stack Overflow, and social channels.
- Advocate for developer needs by collaborating with product and engineering teams on API DX.

Required Qualifications & Skills:
- Strong software engineering foundation with multi-language fluency (JavaScript/TypeScript, Python, Go).
- Exceptional technical writing and public speaking experience.
- Genuine passion for community building and developer advocacy.`,
  },
  {
    id: "scrum-master",
    title: "Scrum Master",
    category: "Product, Design & Agile",
    description:
      "Facilitates Agile development processes, removing obstacles for the development team, running sprint ceremonies, and ensuring the team follows Scrum practices effectively.",
    keySkills: ["Agile/Scrum methodology", "facilitation", "conflict resolution"],
    sampleJobDescription: `Role: Scrum Master
Location: Remote / Hybrid

About the Role:
We are hiring a certified Scrum Master to guide cross-functional engineering teams in executing Agile/Scrum methodologies. You will facilitate sprint ceremonies, clear blockers, and foster continuous team improvement.

Key Responsibilities:
- Facilitate daily stand-ups, sprint planning, sprint reviews, and sprint retrospectives.
- Protect the team from external distractions and actively resolve cross-team blockers.
- Track sprint velocity, burndown charts, and lead-time metrics to drive continuous improvement.
- Coach team members and product owners on Agile values, user story estimation, and backlog grooming.

Required Qualifications & Skills:
- Certified Scrum Master (CSM, PSM I/II) with proven experience facilitating software teams.
- Strong conflict resolution, mediation, and servant leadership abilities.
- Expertise in Agile project management tools (Jira, Confluence).`,
  },
  {
    id: "engineering-manager",
    title: "Engineering Manager",
    category: "Leadership & Consulting",
    description:
      "Leads a team of software engineers, overseeing project delivery, mentoring team members, and aligning technical work with broader business goals.",
    keySkills: ["Leadership", "technical background", "project management", "mentoring"],
    sampleJobDescription: `Role: Engineering Manager
Location: Remote / Hybrid

About the Role:
We are seeking an Engineering Manager to lead and mentor a high-performing software engineering squad. You will oversee technical execution, guide career development, and partner with product leadership to deliver key roadmap milestones.

Key Responsibilities:
- Lead, hire, and mentor a team of 6–10 software engineers, conducting regular 1:1s and career coaching.
- Oversee sprint delivery, code quality standards, and architectural alignment.
- Partner with product managers, designers, and business leaders to translate roadmap into achievable engineering plans.
- Foster an inclusive, high-trust engineering culture focused on ownership and operational excellence.

Required Qualifications & Skills:
- Prior software engineering background with transition into engineering management.
- Demonstrated success hiring, mentoring, and retaining engineering talent.
- Strong technical decision-making and cross-functional leadership skills.`,
  },
  {
    id: "cto-chief-technology-officer",
    title: "CTO (Chief Technology Officer)",
    category: "Leadership & Consulting",
    description:
      "Sets the overall technology vision and strategy for an organization, making high-level decisions about technology investments, architecture, and innovation.",
    keySkills: ["Strategic planning", "leadership", "technical expertise", "business acumen"],
    sampleJobDescription: `Role: Chief Technology Officer (CTO)
Location: Remote / Hybrid

About the Role:
We are seeking an executive Chief Technology Officer to set the long-term technological vision, scale our engineering organization, and align innovation initiatives with overarching corporate goals.

Key Responsibilities:
- Establish the technology roadmap, architectural direction, and R&D strategy for the enterprise.
- Scale and lead multi-disciplinary engineering, infrastructure, and cybersecurity organizations.
- Manage engineering budgets, vendor partnerships, and capital allocation for tech infrastructure.
- Represent technology strategy to the Board of Directors, investors, and key enterprise clients.

Required Qualifications & Skills:
- Proven executive track record as CTO, VP of Engineering, or Head of Technology.
- Deep technical mastery across distributed systems, cloud architecture, and modern AI/data stacks.
- Strong business acumen, strategic financial management, and executive presence.`,
  },
  {
    id: "it-project-manager",
    title: "IT Project Manager",
    category: "Product, Design & Agile",
    description:
      "Plans, executes, and oversees IT projects from initiation to completion, managing timelines, budgets, resources, and stakeholder communication.",
    keySkills: ["Project planning", "budgeting", "risk management", "stakeholder communication"],
    sampleJobDescription: `Role: IT Project Manager
Location: Remote / Hybrid

About the Role:
We are hiring an IT Project Manager to steer large-scale infrastructure, software rollout, and migration projects. You will control project schedules, budgets, risk registers, and cross-functional communications.

Key Responsibilities:
- Define project scope, milestones, deliverable schedules, and budget allocations.
- Manage cross-functional technical teams and third-party vendors to maintain project momentum.
- Identify project risks early, develop mitigation strategies, and resolve resource conflicts.
- Deliver regular executive status reports and stakeholder steering committee briefings.

Required Qualifications & Skills:
- Proven experience managing complex IT projects and infrastructure migrations.
- PMP, CAPM, or Agile certification preferred.
- Strong financial acumen, risk analysis, and stakeholder management skills.`,
  },
  {
    id: "business-analyst-it",
    title: "Business Analyst (IT)",
    category: "Product, Design & Agile",
    description:
      "Analyzes business processes and requirements, translating them into technical specifications that guide software development and system improvements.",
    keySkills: ["Requirements gathering", "process modeling", "communication", "documentation"],
    sampleJobDescription: `Role: Business Analyst (IT)
Location: Remote / Hybrid

About the Role:
We are looking for an IT Business Analyst to bridge business operations with technical engineering teams. You will elicit requirements, map complex business workflows, and author technical specifications (BRDs/FRDs) that guide software development.

Key Responsibilities:
- Conduct stakeholder workshops to elicit, analyze, and document functional and non-functional requirements.
- Create business process models, swimlane diagrams (BPMN), use cases, and user stories.
- Collaborate with developers and QA to ensure developed solutions fulfill the original business requirements.
- Participate in User Acceptance Testing (UAT) planning and test execution.

Required Qualifications & Skills:
- Proven experience as an IT Business Analyst on software or enterprise application initiatives.
- Strong proficiency in process mapping tools (Visio, Lucidchart) and Jira/Confluence.
- Excellent analytical, interview, and structured documentation skills.`,
  },
  {
    id: "systems-analyst",
    title: "Systems Analyst",
    category: "IT Support, Systems & Operations",
    description:
      "Studies an organization's current computer systems and procedures, designing solutions to improve efficiency and integrating new technologies as needed.",
    keySkills: ["System design", "requirements analysis", "troubleshooting", "documentation"],
    sampleJobDescription: `Role: Systems Analyst
Location: Remote / Hybrid

About the Role:
We are hiring a Systems Analyst to evaluate current computing systems, diagnose inefficiencies, and design optimal technical integration architectures that support evolving business needs.

Key Responsibilities:
- Analyze existing software and hardware system configurations to identify technical bottlenecks.
- Design data interfaces, system integration specs, and functional technical blueprints.
- Collaborate with database engineers and software developers on system enhancements.
- Conduct feasibility studies, cost-benefit analyses, and technical risk evaluations.

Required Qualifications & Skills:
- Strong background in computer systems analysis, data modeling, and software integration.
- Ability to read system logs, SQL queries, and architectural data-flow diagrams.
- Solid technical documentation and systems troubleshooting capabilities.`,
  },
  {
    id: "erp-consultant",
    title: "ERP Consultant",
    category: "Leadership & Consulting",
    description:
      "Implements and customizes Enterprise Resource Planning software (like SAP or Oracle) to fit an organization's business processes, and provides ongoing support.",
    keySkills: ["ERP platforms (SAP/Oracle)", "business process knowledge", "configuration"],
    sampleJobDescription: `Role: ERP Consultant
Location: Remote / Hybrid

About the Role:
We are seeking an ERP Consultant to lead the implementation, customization, and integration of enterprise ERP platforms (SAP, Oracle ERP Cloud, Microsoft Dynamics). You will configure ERP modules to streamline core supply chain, financial, and operational processes.

Key Responsibilities:
- Lead end-to-end ERP implementation lifecycles from gap analysis through go-live and support.
- Configure core ERP functional modules (Finance, Supply Chain, Manufacturing, HR) to business requirements.
- Design data migration scripts, master data governance, and third-party system integrations.
- Train business key-users and deliver functional design documents.

Required Qualifications & Skills:
- In-depth experience with leading ERP suites (SAP S/4HANA, Oracle Cloud ERP, NetSuite, Dynamics 365).
- Strong understanding of enterprise business processes (Order-to-Cash, Procure-to-Pay, Record-to-Report).
- Proven track record in ERP configuration, testing, and user change management.`,
  },

  // --- Page 8 ---
  {
    id: "crm-developer",
    title: "CRM Developer",
    category: "Software & Web Engineering",
    description:
      "Customizes and integrates Customer Relationship Management platforms such as Salesforce to help businesses manage customer interactions, sales, and marketing data.",
    keySkills: ["Salesforce/CRM platforms", "Apex/JavaScript", "integrations"],
    sampleJobDescription: `Role: CRM Developer
Location: Remote / Hybrid

About the Role:
We are looking for a CRM Developer to design, customize, and integrate enterprise CRM platforms (Salesforce, HubSpot, Microsoft Dynamics). You will build custom business workflows, integrate APIs, and optimize sales/marketing pipeline automation.

Key Responsibilities:
- Develop custom CRM components, plugins, and automations (Apex, JavaScript, Lightning Web Components).
- Build bidirectional REST/SOAP API integrations connecting the CRM with backend ERP and billing systems.
- Customize CRM data models, custom objects, validation rules, and automated flow triggers.
- Optimize CRM database queries and enforce strict data security and role hierarchies.

Required Qualifications & Skills:
- Hands-on development experience on Salesforce or major enterprise CRM platforms.
- Proficiency in Apex, JavaScript, and RESTful API integration techniques.
- Relevant CRM developer certifications preferred.`,
  },
  {
    id: "salesforce-developer",
    title: "Salesforce Developer",
    category: "Software & Web Engineering",
    description:
      "Builds custom applications, workflows, and integrations on the Salesforce platform to extend its functionality and meet specific business needs.",
    keySkills: ["Apex", "Visualforce", "Lightning Components", "Salesforce APIs"],
    sampleJobDescription: `Role: Salesforce Developer
Location: Remote / Hybrid

About the Role:
We are seeking a certified Salesforce Developer to build scalable custom applications and integrations on the Salesforce Cloud platform (Sales Cloud, Service Cloud, Experience Cloud).

Key Responsibilities:
- Develop modular Lightning Web Components (LWC) and Apex classes/triggers adhering to governor limits.
- Integrate external systems with Salesforce using REST/SOAP APIs and Salesforce Platform Events.
- Build automated workflows using Salesforce Flow, Process Builder, and custom asynchronous Apex.
- Write unit test classes ensuring >85% code coverage for seamless deployment through Salesforce DX.

Required Qualifications & Skills:
- Proven Salesforce development experience with Apex, LWC, and SOQL.
- Salesforce Platform Developer I or II certification.
- Deep knowledge of Salesforce architecture, governor limits, and security models.`,
  },
  {
    id: "sap-consultant",
    title: "SAP Consultant",
    category: "Leadership & Consulting",
    description:
      "Configures and supports SAP enterprise software modules, helping organizations streamline operations like finance, supply chain, and human resources.",
    keySkills: ["SAP modules", "ABAP", "business process configuration"],
    sampleJobDescription: `Role: SAP Consultant
Location: Remote / Hybrid

About the Role:
We are hiring an SAP Consultant to configure, customize, and support SAP S/4HANA modules (FICO, MM, SD, or SuccessFactors). You will optimize business processes and collaborate with ABAP developers on custom enhancements.

Key Responsibilities:
- Configure SAP functional modules to align with organizational business processes.
- Create functional specifications for ABAP reports, user exits, BADIs, and IDoc interfaces.
- Perform master data migration, integration testing, and cutover execution.
- Provide post-implementation hypercare support and troubleshoot transaction errors.

Required Qualifications & Skills:
- Extensive experience configuring SAP modules (FICO / MM / SD / PP).
- Understanding of ABAP programming concepts and SAP integration technologies (OData, RFC, IDocs).
- SAP S/4HANA certification preferred.`,
  },
  {
    id: "it-trainer",
    title: "IT Trainer",
    category: "Leadership & Consulting",
    description:
      "Teaches employees or clients how to use software, systems, or technical tools effectively through structured training sessions and materials.",
    keySkills: ["Instructional design", "communication", "subject matter expertise"],
    sampleJobDescription: `Role: IT Trainer
Location: Remote / Hybrid

About the Role:
We are seeking an IT Trainer to develop and deliver comprehensive technical training programs across enterprise software, cloud applications, and cybersecurity standards. You will empower employees and clients to master technical tools efficiently.

Key Responsibilities:
- Design structured curriculum, e-learning modules, and hands-on lab exercises for technical systems.
- Deliver engaging in-person and virtual training workshops for diverse audience skill levels.
- Evaluate training effectiveness through assessments, feedback surveys, and performance metrics.
- Maintain up-to-date documentation and quick-reference guides as systems evolve.

Required Qualifications & Skills:
- Strong background in technical training, instructional design, and adult learning principles.
- Exceptional verbal presentation, facilitation, and communication skills.
- Proficiency with LMS platforms and technical authoring tools.`,
  },
  {
    id: "web-developer",
    title: "Web Developer",
    category: "Software & Web Engineering",
    description:
      "Builds and maintains websites, combining design and functionality using web technologies. May specialize in front-end, back-end, or work across the full stack.",
    keySkills: ["HTML/CSS/JavaScript", "web frameworks", "browser compatibility"],
    sampleJobDescription: `Role: Web Developer
Location: Remote / Hybrid

About the Role:
We are looking for a Web Developer to design, build, and optimize high-traffic web applications and digital experiences. You will ensure cross-browser responsiveness, search engine optimization (SEO), and robust interactivity.

Key Responsibilities:
- Develop modern web pages and applications using HTML5, CSS3, JavaScript, and modern frameworks.
- Ensure cross-browser compatibility, responsive mobile layouts, and high web performance scores.
- Integrate third-party APIs, analytics tracking, and backend services.
- Collaborate with marketing and design teams to launch landing pages and web properties.

Required Qualifications & Skills:
- Strong proficiency in HTML, CSS, JavaScript, and popular CSS/JS frameworks.
- Deep understanding of DOM manipulation, web standards, and responsive design.
- Familiarity with version control (Git) and SEO best practices.`,
  },
  {
    id: "wordpress-developer",
    title: "WordPress Developer",
    category: "Software & Web Engineering",
    description:
      "Specializes in building and customizing websites using the WordPress content management system, including themes, plugins, and site performance optimization.",
    keySkills: ["WordPress", "PHP", "theme/plugin development", "site optimization"],
    sampleJobDescription: `Role: WordPress Developer
Location: Remote / Hybrid

About the Role:
We are hiring a WordPress Developer to build custom themes, develop tailored plugins, and optimize WordPress site speed and security for high-traffic digital publications.

Key Responsibilities:
- Develop custom WordPress themes from scratch and build custom plugins using PHP and JavaScript.
- Optimize WordPress database queries, server-side caching (Redis, Varnish), and PageSpeed metrics.
- Maintain security hardening, plugin updates, and backup protocols across WordPress multisite networks.
- Integrate custom REST API endpoints with third-party CRM and e-commerce services.

Required Qualifications & Skills:
- Advanced proficiency in PHP, WordPress core hooks/filters, and MySQL.
- Strong front-end skills in HTML, CSS/Sass, JavaScript, and Gutenberg block development (React).
- Proven track record of performance tuning and securing WordPress installations.`,
  },
  {
    id: "e-commerce-developer",
    title: "E-commerce Developer",
    category: "Software & Web Engineering",
    description:
      "Builds and maintains online store platforms, integrating payment gateways, inventory systems, and shopping cart functionality using platforms like Shopify or Magento.",
    keySkills: ["Shopify/Magento", "payment integrations", "web development"],
    sampleJobDescription: `Role: E-commerce Developer
Location: Remote / Hybrid

About the Role:
We are seeking an E-commerce Developer to build and optimize high-converting storefronts on Shopify Plus or Adobe Commerce (Magento). You will integrate payment gateways, optimize checkout flows, and synchronize inventory management systems.

Key Responsibilities:
- Build and customize e-commerce themes and apps using Shopify Liquid, GraphQL API, or Magento PHP.
- Integrate secure payment gateways (Stripe, PayPal, Apple Pay) and ERP inventory sync APIs.
- Optimize checkout conversion funnel speed, mobile responsiveness, and microdata schema.
- Implement personalized product recommendations and subscription billing models.

Required Qualifications & Skills:
- Deep experience developing on Shopify (Liquid, Storefront API) or Magento.
- Strong full-stack web development skills (JavaScript, HTML/CSS, PHP/Node.js).
- Solid knowledge of e-commerce security standards (PCI-DSS compliance) and payment gateways.`,
  },

  // --- Page 9 ---
  {
    id: "cms-developer",
    title: "CMS Developer",
    category: "Software & Web Engineering",
    description:
      "Develops and customizes content management systems that allow organizations to create, manage, and publish digital content without deep technical knowledge.",
    keySkills: ["CMS platforms", "PHP/JavaScript", "templating", "database integration"],
    sampleJobDescription: `Role: CMS Developer
Location: Remote / Hybrid

About the Role:
We are looking for a CMS Developer to design and maintain headless and traditional Content Management Systems (Contentful, Strapi, Drupal, Sanity). You will empower content editors with flexible schemas and fast publishing workflows.

Key Responsibilities:
- Architect content models, custom content types, and editorial workflows in headless CMS platforms.
- Build serverless front-end integrations querying CMS APIs using GraphQL and REST.
- Develop custom CMS plugins, modules, and role-based editorial permission schemes.
- Maintain data migration scripts and automated static site generation (SSG) pipelines.

Required Qualifications & Skills:
- Experience with modern headless CMS tools (Contentful, Strapi, Sanity) or enterprise CMS (Drupal).
- Strong web development skills in JavaScript/TypeScript, PHP, and template engines.
- Understanding of JAMstack architectures, CDN caching, and GraphQL querying.`,
  },
  {
    id: "api-developer",
    title: "API Developer",
    category: "Software & Web Engineering",
    description:
      "Designs, builds, and maintains application programming interfaces that allow different software systems to communicate and share data with each other.",
    keySkills: ["REST/GraphQL", "API documentation", "authentication", "backend languages"],
    sampleJobDescription: `Role: API Developer
Location: Remote / Hybrid

About the Role:
We are seeking an API Developer to design, build, and maintain high-throughput, secure REST and GraphQL APIs. You will create public and internal API surfaces that enable seamless interoperability across diverse client apps and partner ecosystems.

Key Responsibilities:
- Design intuitive, RESTful and GraphQL API schemas following OpenAPI / Swagger standards.
- Implement robust authentication and authorization schemes (OAuth 2.0, OpenID Connect, JWT, API Keys).
- Optimize API gateway routing, rate limiting, and distributed caching in Redis.
- Author clear, developer-facing interactive API documentation and Postman collections.

Required Qualifications & Skills:
- Deep expertise in backend languages (Node.js, Go, Python, Java) and API architecture.
- Mastery of RESTful design principles, GraphQL schemas, and OpenAPI specifications.
- Strong understanding of API security protocols, rate limiting, and token management.`,
  },
  {
    id: "integration-engineer",
    title: "Integration Engineer",
    category: "Software & Web Engineering",
    description:
      "Connects disparate software systems and applications so they can work together seamlessly, often using middleware and integration platforms.",
    keySkills: ["Middleware", "APIs", "ETL", "system architecture"],
    sampleJobDescription: `Role: Integration Engineer
Location: Remote / Hybrid

About the Role:
We are hiring an Integration Engineer to connect disparate SaaS, enterprise ERP, and internal systems using modern integration middleware (MuleSoft, Boomi, Apache Camel, Zapier/Workato).

Key Responsibilities:
- Design and deploy enterprise integration flows and data transformation mappings.
- Implement reliable message queueing (Kafka, RabbitMQ) for asynchronous system sync.
- Monitor integration health, handle API timeouts, and build automated retry/dead-letter queues.
- Maintain comprehensive data flow diagrams and API interface catalogs.

Required Qualifications & Skills:
- Proven experience with enterprise integration platforms (MuleSoft, Dell Boomi, Workato).
- Solid programming background (Java, Python, JavaScript) and XML/JSON transformation mastery.
- Strong knowledge of API protocols, message brokers, and enterprise integration patterns.`,
  },
  {
    id: "iot-developer",
    title: "IoT Developer",
    category: "Emerging & Specialized Tech",
    description:
      "Builds software and systems for Internet of Things devices, enabling connected sensors and smart devices to collect, transmit, and act on data.",
    keySkills: ["Embedded programming", "networking protocols (MQTT)", "cloud IoT platforms"],
    sampleJobDescription: `Role: IoT Developer
Location: Remote / Hybrid

About the Role:
We are looking for an IoT Developer to build connected edge device software and cloud ingestion pipelines. You will connect smart sensors to cloud IoT platforms using lightweight protocols, ensuring secure, energy-efficient telemetry.

Key Responsibilities:
- Develop edge device software and sensor drivers in C/C++ or Python for IoT microcontrollers.
- Implement lightweight messaging protocols (MQTT, CoAP, WebSockets) with TLS encryption.
- Connect fleets of devices to AWS IoT Core, Azure IoT Hub, or Google Cloud IoT.
- Manage over-the-air (OTA) firmware updates and remote device provisioning.

Required Qualifications & Skills:
- Hands-on experience with embedded programming (C/C++, MicroPython) and IoT hardware.
- Deep familiarity with MQTT protocol, device certificates, and cloud IoT hubs.
- Understanding of low-power wireless communications (BLE, Zigbee, LoRaWAN, Cellular IoT).`,
  },
  {
    id: "robotics-software-engineer",
    title: "Robotics Software Engineer",
    category: "Emerging & Specialized Tech",
    description:
      "Develops software that controls robotic systems, including motion planning, sensor integration, and autonomous decision-making capabilities.",
    keySkills: ["ROS", "C++/Python", "control systems", "sensor fusion"],
    sampleJobDescription: `Role: Robotics Software Engineer
Location: Remote / Hybrid

About the Role:
We are seeking a Robotics Software Engineer to develop autonomy, motion planning, and perception algorithms for autonomous robotic systems. You will build ROS/ROS2 nodes and integrate LiDAR, cameras, and IMU sensor fusion.

Key Responsibilities:
- Develop robotics software packages in C++ and Python using Robot Operating System (ROS / ROS2).
- Implement sensor fusion algorithms (Kalman Filters) combining LiDAR, IMU, GPS, and stereo cameras.
- Design motion planning, kinematics, trajectory generation, and obstacle avoidance systems.
- Test and validate autonomous behaviors in simulation environments (Gazebo) and on physical robots.

Required Qualifications & Skills:
- Strong experience with ROS/ROS2, C++, and Python for robotics.
- Deep mathematical understanding of robotics kinematics, coordinate frames, and control systems.
- Experience with SLAM algorithms and 3D spatial perception.`,
  },
  {
    id: "firmware-engineer",
    title: "Firmware Engineer",
    category: "Emerging & Specialized Tech",
    description:
      "Writes low-level software that runs directly on hardware devices, controlling their core functions and enabling communication with other system components.",
    keySkills: ["C/C++", "hardware interfaces", "debugging tools", "real-time systems"],
    sampleJobDescription: `Role: Firmware Engineer
Location: Remote / On-Site

About the Role:
We are hiring a Firmware Engineer to author bare-metal and RTOS firmware for cutting-edge hardware products. You will write device drivers, optimize hardware power states, and ensure rock-solid hardware stability.

Key Responsibilities:
- Write optimized, memory-safe C and C++ firmware for microcontrollers (ARM Cortex, RISC-V).
- Develop low-level drivers for hardware peripherals (I2C, SPI, UART, PCIe, DMA, Timers).
- Debug hardware and firmware integration issues using logic analyzers, JTAG debuggers, and oscilloscopes.
- Implement secure bootloaders, cryptographic signature validation, and OTA firmware updates.

Required Qualifications & Skills:
- Mastery of C and C++ for bare-metal and real-time operating system (RTOS) platforms.
- Deep knowledge of hardware interfaces, memory maps, interrupts, and registers.
- Strong proficiency with lab test equipment and embedded debugging tools.`,
  },
  {
    id: "quantum-computing-engineer",
    title: "Quantum Computing Engineer",
    category: "Emerging & Specialized Tech",
    description:
      "Researches and develops algorithms and applications for quantum computers, working at the intersection of physics, mathematics, and computer science.",
    keySkills: ["Quantum algorithms", "linear algebra", "Qiskit/Python", "physics fundamentals"],
    sampleJobDescription: `Role: Quantum Computing Engineer
Location: Remote / Hybrid

About the Role:
We are seeking a Quantum Computing Engineer to explore quantum algorithms, circuit optimization, and hybrid quantum-classical computing frameworks. You will model complex quantum circuits and advance computational speedups in optimization, chemistry, and cryptography.

Key Responsibilities:
- Design, simulate, and benchmark quantum circuits using Qiskit, Cirq, or PennyLane in Python.
- Develop variational quantum algorithms (VQE, QAOA) for optimization and material simulation.
- Optimize quantum gate depth and implement quantum error mitigation techniques.
- Collaborate with research scientists on theoretical physics and quantum advantage proofs.

Required Qualifications & Skills:
- Advanced degree in Quantum Computing, Physics, Mathematics, or Computer Science.
- Deep expertise in linear algebra, quantum mechanics principles, and quantum gates.
- Proficiency in Python and quantum development SDKs (Qiskit, Cirq, PennyLane).`,
  },
  {
    id: "bioinformatics-engineer",
    title: "Bioinformatics Engineer",
    category: "Emerging & Specialized Tech",
    description:
      "Applies computational tools and techniques to analyze biological data, such as genomic sequences, supporting research in medicine and life sciences.",
    keySkills: ["Python/R", "biology fundamentals", "data analysis", "bioinformatics tools"],
    sampleJobDescription: `Role: Bioinformatics Engineer
Location: Remote / Hybrid

About the Role:
We are looking for a Bioinformatics Engineer to build computational pipelines analyzing high-throughput genomic, transcriptomic, and proteomic datasets. You will accelerate clinical research and life sciences discoveries.

Key Responsibilities:
- Build automated Next-Generation Sequencing (NGS) analysis pipelines (Nextflow, Snakemake).
- Analyze large biological datasets using Biopython, R/Bioconductor, and specialized bioinformatics tools (BLAST, SAMtools).
- Maintain genomic databases, variant calling pipelines, and biological data repositories.
- Collaborate with computational biologists and researchers to interpret experimental results.

Required Qualifications & Skills:
- Degree in Bioinformatics, Computational Biology, or Computer Science with life sciences focus.
- Proficiency in Python/R and workflow managers (Nextflow, Snakemake).
- Strong grounding in molecular genetics, NGS data formats (FASTQ, BAM, VCF), and statistical analysis.`,
  },

  // --- Page 10 ---
  {
    id: "digital-forensics-analyst",
    title: "Digital Forensics Analyst",
    category: "Cybersecurity & Risk",
    description:
      "Investigates cybercrimes by recovering and analyzing data from computers and digital devices, often supporting legal cases and internal investigations.",
    keySkills: ["Forensic tools", "evidence handling", "legal knowledge", "attention to detail"],
    sampleJobDescription: `Role: Digital Forensics Analyst
Location: Remote / Hybrid

About the Role:
We are seeking a Digital Forensics Analyst to conduct rigorous forensic examinations of compromised endpoints, mobile devices, and storage media. You will preserve chain of custody, recover deleted artifacts, and produce court-ready forensic reports.

Key Responsibilities:
- Acquire forensic disk and memory images adhering strictly to legal chain of custody protocols.
- Analyze file systems, registry artifacts, browser histories, and event logs using EnCase, FTK, or Autopsy.
- Reconstruct attacker timelines during insider threat and external cyber breach investigations.
- Author clear, defensible forensic reports and provide expert witness testimony when required.

Required Qualifications & Skills:
- Proven experience in digital forensics and cyber incident investigations.
- Mastery of forensic suites (EnCase, Axiom, FTK, Volatility) and file system internals.
- Certifications such as EnCE, GCFE, GCFA, or CCE preferred.`,
  },
  {
    id: "network-security-engineer",
    title: "Network Security Engineer",
    category: "Cybersecurity & Risk",
    description:
      "Focuses specifically on securing an organization's network infrastructure against intrusions, using firewalls, VPNs, and intrusion detection systems.",
    keySkills: ["Firewalls", "VPNs", "IDS/IPS", "network protocols"],
    sampleJobDescription: `Role: Network Security Engineer
Location: Remote / Hybrid

About the Role:
We are hiring a Network Security Engineer to protect our global network perimeters and internal segmentation. You will deploy Next-Generation Firewalls (NGFW), manage intrusion detection systems (IDS/IPS), and enforce Zero Trust network access.

Key Responsibilities:
- Configure and manage enterprise firewalls (Palo Alto, Fortinet, Cisco ASA) and IDS/IPS systems (Snort, Suricata).
- Implement secure VPN gateways, IPsec tunnels, and Zero Trust Network Access (ZTNA) solutions.
- Monitor network perimeter traffic for malicious scans, DDoS attacks, and unauthorized egress.
- Perform firewall rule reviews and network architecture security assessments.

Required Qualifications & Skills:
- In-depth expertise in enterprise firewall platforms (Palo Alto, Fortinet) and IDS/IPS tuning.
- Mastery of networking protocols (TCP/IP, BGP, TLS, IPsec, DNS).
- Strong background in network access control, DDoS mitigation, and packet inspection.`,
  },
  {
    id: "cloud-security-engineer",
    title: "Cloud Security Engineer",
    category: "Cybersecurity & Risk",
    description:
      "Specializes in securing cloud-based infrastructure and applications, implementing identity management, encryption, and compliance controls in cloud environments.",
    keySkills: ["Cloud security tools", "IAM", "encryption", "compliance frameworks"],
    sampleJobDescription: `Role: Cloud Security Engineer
Location: Remote / Hybrid

About the Role:
We are looking for a Cloud Security Engineer to safeguard multi-cloud infrastructure across AWS, GCP, and Azure. You will implement cloud security posture management (CSPM), least-privilege IAM policies, and automated security guardrails.

Key Responsibilities:
- Design and enforce IAM permissions, least-privilege access, and cloud credential rotation.
- Deploy Cloud Security Posture Management (CSPM) and Cloud Workload Protection (CWPP) tools (Prisma Cloud, Wiz, GuardDuty).
- Secure containerized Kubernetes workloads, Docker images, and cloud serverless functions.
- Automate cloud security remediation policies using Terraform and cloud-native serverless triggers.

Required Qualifications & Skills:
- Proven experience securing public cloud environments (AWS, Azure, GCP).
- Expertise in cloud IAM, key management services (KMS), and infrastructure as code security.
- Cloud security certifications (AWS Certified Security Specialty, CCSP) preferred.`,
  },
  {
    id: "application-security-engineer",
    title: "Application Security Engineer",
    category: "Cybersecurity & Risk",
    description:
      "Focuses on identifying and fixing security vulnerabilities within software applications throughout the development lifecycle, often through code review and testing.",
    keySkills: ["Secure coding", "SAST/DAST tools", "code review", "threat modeling"],
    sampleJobDescription: `Role: Application Security Engineer (AppSec)
Location: Remote / Hybrid

About the Role:
We are seeking an AppSec Engineer to embed security directly into the software development lifecycle (DevSecOps). You will conduct threat modeling, manage SAST/DAST pipelines, and partner with developers to remediate code vulnerabilities.

Key Responsibilities:
- Conduct architectural threat modeling and security design reviews on new product features.
- Integrate automated Static and Dynamic Application Security Testing (SAST/DAST/SCA) into CI/CD pipelines (Snyk, SonarQube, Checkmarx).
- Perform manual security code reviews across JavaScript/TypeScript, Python, and Go codebases.
- Manage vulnerability triage and run internal developer security training programs.

Required Qualifications & Skills:
- Strong software engineering foundation with deep knowledge of OWASP Top 10 vulnerabilities.
- Hands-on experience integrating SAST, DAST, and dependency scanning into CI/CD pipelines.
- Excellent developer empathy and remediation guidance capabilities.`,
  },
  {
    id: "video-game-qa-tester",
    title: "Video Game QA Tester",
    category: "Software & Web Engineering",
    description:
      "Tests video games for bugs, glitches, and gameplay issues before release, providing detailed feedback to development teams to improve game quality.",
    keySkills: ["Attention to detail", "bug reporting", "gaming knowledge", "patience"],
    sampleJobDescription: `Role: Video Game QA Tester
Location: Remote / Hybrid

About the Role:
We are looking for a Video Game QA Tester to rigorously test video game builds across consoles, PC, and mobile platforms. You will identify gameplay glitches, collision bugs, and localization issues, reporting defects with detailed reproduction steps.

Key Responsibilities:
- Execute exploratory and scripted test passes across diverse game levels and hardware platforms.
- Document and categorize bugs in Jira with video captures, logs, and exact reproduction steps.
- Perform sanity, smoke, and regression testing following daily development builds.
- Provide structured feedback on game balance, user experience, and visual polish.

Required Qualifications & Skills:
- Strong attention to detail, persistence, and passion for video game quality.
- Familiarity with bug tracking software (Jira, Confluence) and capturing debug crash logs.
- Excellent written communication skills describing complex in-game bug states.`,
  },
  {
    id: "localization-engineer",
    title: "Localization Engineer",
    category: "Software & Web Engineering",
    description:
      "Adapts software and content for different languages and regions, managing translation workflows and ensuring applications function correctly across locales.",
    keySkills: ["Internationalization (i18n)", "scripting", "localization tools"],
    sampleJobDescription: `Role: Localization Engineer (L10n / i18n)
Location: Remote / Hybrid

About the Role:
We are hiring a Localization Engineer to manage our internationalization (i18n) pipelines and translation workflows. You will ensure our web and mobile applications render seamlessly in 30+ international languages and cultural locales.

Key Responsibilities:
- Architect i18n frameworks, string extraction pipelines, and locale resource management.
- Integrate Translation Management Systems (TMS like Phrase, Smartling, Lokalise) with GitHub CI/CD.
- Automate pseudo-localization testing and validate right-to-left (RTL) text layouts and dynamic pluralization.
- Troubleshoot character encoding (UTF-8) issues, string truncation, and date/currency formatting bugs.

Required Qualifications & Skills:
- Strong scripting skills (Python, JavaScript/TypeScript, Shell) for automating translation workflows.
- Deep expertise in internationalization (i18n) standards and translation memory file formats (XLIFF, JSON).
- Experience with web/mobile UI localization and TMS platform integrations.`,
  },
  {
    id: "accessibility-engineer",
    title: "Accessibility Engineer",
    category: "Software & Web Engineering",
    description:
      "Ensures digital products are usable by people with disabilities, implementing and testing features that comply with accessibility standards like WCAG.",
    keySkills: ["WCAG standards", "screen readers", "semantic HTML", "testing tools"],
    sampleJobDescription: `Role: Accessibility Engineer (a11y)
Location: Remote / Hybrid

About the Role:
We are looking for an Accessibility Engineer to guarantee our digital products meet WCAG 2.1/2.2 AA standards and provide inclusive experiences for users of all abilities. You will audit web components, test with assistive technologies, and guide engineers on accessible design patterns.

Key Responsibilities:
- Audit web and mobile applications using screen readers (NVDA, JAWS, VoiceOver) and keyboard navigation.
- Implement semantic HTML, ARIA attributes, color contrast standards, and focus management in React components.
- Integrate automated accessibility linting (axe-core, Lighthouse) into build pipelines.
- Train designers and developers on inclusive design and Section 508 / ADA compliance requirements.

Required Qualifications & Skills:
- Deep expertise in WCAG guidelines, WAI-ARIA specifications, and semantic HTML5.
- Hands-on mastery of screen reader software (VoiceOver, NVDA, JAWS).
- CPACC or WAS accessibility certification preferred.`,
  },
  {
    id: "growth-engineer",
    title: "Growth Engineer",
    category: "Software & Web Engineering",
    description:
      "Combines engineering and marketing skills to build features and run experiments aimed at driving user acquisition, engagement, and retention.",
    keySkills: ["A/B testing", "analytics", "front-end development", "experimentation"],
    sampleJobDescription: `Role: Growth Engineer
Location: Remote / Hybrid

About the Role:
We are seeking a Growth Engineer to optimize the user acquisition, onboarding, and conversion funnels. You will rapidly build, ship, and measure A/B experiments combining full-stack development speed with data-driven curiosity.

Key Responsibilities:
- Design and implement high-velocity A/B tests and multivariate experiments using LaunchDarkly or Statsig.
- Optimize landing pages, signup flows, onboarding journeys, and referral loops.
- Integrate client and server event telemetry (Segment, Amplitude, Mixpanel, Google Analytics).
- Partner with product marketers and data scientists to analyze statistical experiment outcomes.

Required Qualifications & Skills:
- Strong full-stack engineering skills (React/Next.js, TypeScript, Node.js/Python).
- Experience implementing A/B testing frameworks and product analytics SDKs.
- Analytical mindset with rapid prototyping agility and focus on conversion metrics.`,
  },

  // --- Page 11 ---
  {
    id: "site-merchandiser-ecommerce-analyst",
    title: "Site Merchandiser / E-commerce Analyst",
    category: "AI, Data & Machine Learning",
    description:
      "Analyzes online store performance and customer behavior data to optimize product placement, pricing, and promotions for e-commerce platforms.",
    keySkills: ["Analytics tools", "e-commerce platforms", "data interpretation"],
    sampleJobDescription: `Role: Site Merchandiser / E-commerce Analyst
Location: Remote / Hybrid

About the Role:
We are looking for a Site Merchandiser / E-commerce Analyst to drive revenue growth through data-backed product categorization, search merchandising, and promotional pricing strategies on our digital storefront.

Key Responsibilities:
- Analyze customer shopping journeys, conversion rates, and cart abandonment trends using Google Analytics and e-commerce analytics.
- Optimize on-site search results, product taxonomy, and personalized recommendation carousels.
- Plan and execute seasonal promotional campaigns, bundle pricing, and promotional banners.
- Deliver weekly commercial performance reporting on revenue, average order value (AOV), and inventory sell-through.

Required Qualifications & Skills:
- Proven experience in digital merchandising or e-commerce analytics.
- Strong knowledge of e-commerce platforms (Shopify Plus, Magento, Salesforce Commerce Cloud).
- Proficiency with web analytics tools (GA4, Looker, Excel) and data interpretation.`,
  },
  {
    id: "it-procurement-specialist",
    title: "IT Procurement Specialist",
    category: "IT Support, Systems & Operations",
    description:
      "Manages the sourcing and purchasing of hardware, software, and IT services for an organization, negotiating with vendors and managing budgets.",
    keySkills: ["Vendor management", "negotiation", "budgeting", "IT knowledge"],
    sampleJobDescription: `Role: IT Procurement Specialist
Location: Remote / Hybrid

About the Role:
We are seeking an IT Procurement Specialist to manage our technology hardware, SaaS software licenses, and IT vendor contracts. You will lead vendor negotiations, control IT budgets, and ensure cost-efficient procurement.

Key Responsibilities:
- Manage the procurement lifecycle for laptops, servers, networking gear, and SaaS enterprise subscriptions.
- Negotiate pricing, SLAs, and commercial contract terms with hardware and software vendors.
- Maintain accurate software license tracking, renewals calendar, and asset lifecycle schedules.
- Align procurement requisitions with departmental IT budgets and finance approval policies.

Required Qualifications & Skills:
- Proven track record in IT procurement, vendor management, and contract negotiation.
- Strong understanding of enterprise SaaS licensing models and hardware lifecycle management.
- Excellent financial modeling and supplier relationship skills.`,
  },
  {
    id: "help-desk-manager",
    title: "Help Desk Manager",
    category: "IT Support, Systems & Operations",
    description:
      "Oversees a team of IT support technicians, ensuring timely resolution of technical issues and managing support processes and customer satisfaction.",
    keySkills: ["Team leadership", "ticketing systems", "process improvement"],
    sampleJobDescription: `Role: Help Desk Manager
Location: Remote / Hybrid

About the Role:
We are hiring a Help Desk Manager to lead our global IT service desk team. You will drive high first-contact resolution rates, establish robust SLA targets, and continuously optimize internal support workflows.

Key Responsibilities:
- Lead, mentor, and schedule a team of IT support technicians and helpdesk specialists.
- Monitor service desk KPIs: ticket resolution time, First Contact Resolution (FCR), and CSAT scores.
- Standardize incident escalation paths and maintain the internal IT knowledge base.
- Evaluate helpdesk software configurations (ServiceNow, Jira Service Desk, Zendesk) and automate workflows.

Required Qualifications & Skills:
- Proven leadership experience managing an IT support or helpdesk team.
- Deep expertise in ITIL service management frameworks and ticketing systems.
- Strong communication, coaching, and operational problem-solving abilities.`,
  },
  {
    id: "technical-support-engineer",
    title: "Technical Support Engineer",
    category: "IT Support, Systems & Operations",
    description:
      "Provides in-depth technical assistance for complex software or hardware issues, often working directly with customers or escalated internal tickets.",
    keySkills: ["Troubleshooting", "product knowledge", "communication", "scripting basics"],
    sampleJobDescription: `Role: Technical Support Engineer (Tier 2/3)
Location: Remote / Hybrid

About the Role:
We are looking for a Technical Support Engineer to diagnose and resolve complex technical escalations for enterprise customers. You will analyze error logs, reproduce edge-case bugs, and liaise directly with product engineering.

Key Responsibilities:
- Investigate and resolve escalated Tier 2/3 technical support tickets for complex SaaS/API products.
- Inspect application logs, network traces (HAR files), database records, and API payloads to pinpoint root causes.
- Write reproduction test scripts and file well-documented bug reports for engineering teams.
- Author technical knowledge base articles and troubleshooting runbooks.

Required Qualifications & Skills:
- Prior experience in advanced technical support or customer solutions engineering.
- Ability to read application code, SQL queries, and API payloads (JSON/XML).
- Exceptional empathetic customer communication and analytical troubleshooting skills.`,
  },
  {
    id: "sales-engineer-technical",
    title: "Sales Engineer (Technical)",
    category: "Leadership & Consulting",
    description:
      "Supports the sales process by providing technical expertise, demonstrating products, and helping potential customers understand how a solution meets their needs.",
    keySkills: ["Technical knowledge", "presentation skills", "customer engagement"],
    sampleJobDescription: `Role: Sales Engineer (Solutions Engineer)
Location: Remote / Hybrid

About the Role:
We are seeking a Sales Engineer to partner with account executives in closing enterprise software deals. You will deliver deep-dive product demonstrations, answer technical RFPs, and explain technical architecture to prospective CTOs and VP-level buyers.

Key Responsibilities:
- Conduct technical product demos and tailor technical presentations to prospect requirements.
- Respond to technical questionnaires, RFPs, and information security security assessments.
- Build quick proof-of-concept (PoC) integrations demonstrating product fit.
- Address customer technical objections regarding scalability, API integration, and security.

Required Qualifications & Skills:
- Experience as a Sales Engineer or Solutions Architect in B2B SaaS or technical software.
- Strong technical background with ability to write code snippets and understand API architectures.
- Outstanding presentation and consultative storytelling abilities.`,
  },
  {
    id: "pre-sales-consultant",
    title: "Pre-Sales Consultant",
    category: "Leadership & Consulting",
    description:
      "Works with sales teams to design tailored technical solutions for prospective clients, often creating proposals, demos, and proof-of-concept implementations.",
    keySkills: ["Solution design", "presentation", "technical consulting", "client relations"],
    sampleJobDescription: `Role: Pre-Sales Consultant
Location: Remote / Hybrid

About the Role:
We are hiring a Pre-Sales Consultant to evaluate client requirements and design tailored enterprise software solution architectures during the sales cycle. You will author comprehensive solution proposals and lead proof-of-concept implementations.

Key Responsibilities:
- Lead technical discovery sessions with prospective clients to identify operational pain points.
- Architect customized solution blueprints and write detailed statements of work (SOW).
- Deliver hands-on Proof of Concept (PoC) implementations validating business value.
- Partner with sales leadership to guide deal pricing and technical feasibility.

Required Qualifications & Skills:
- Proven experience in pre-sales consulting for enterprise software or IT services.
- Strong solution architecture, presentation, and client advisory skills.
- Ability to bridge business ROI with technical infrastructure capabilities.`,
  },
  {
    id: "it-consultant",
    title: "IT Consultant",
    category: "Leadership & Consulting",
    description:
      "Advises organizations on how to use technology to meet business objectives, often working on specific projects like system upgrades, migrations, or strategy.",
    keySkills: ["Technical breadth", "problem-solving", "client communication"],
    sampleJobDescription: `Role: IT Consultant
Location: Remote / Hybrid

About the Role:
We are seeking an IT Consultant to advise enterprise clients on technology modernization, cloud migration, and IT operational efficiency. You will assess IT landscapes and execute strategic technology transformation programs.

Key Responsibilities:
- Conduct comprehensive IT infrastructure, application portfolio, and process assessments.
- Formulate strategic technology roadmaps, system migration plans, and digital transformation blueprints.
- Guide clients through vendor selections, software rollouts, and change management.
- Present findings and strategic recommendations to client C-suite executives.

Required Qualifications & Skills:
- Broad technological breadth across cloud computing, enterprise software, and cybersecurity.
- Strong consulting toolkit: structured problem solving, stakeholder interviews, and financial modeling.
- Excellent client presentation and project leadership capabilities.`,
  },
  {
    id: "enterprise-architect",
    title: "Enterprise Architect",
    category: "Leadership & Consulting",
    description:
      "Designs the overall structure of an organization's IT systems and processes, aligning technology strategy with long-term business goals across the enterprise.",
    keySkills: ["Enterprise architecture frameworks", "strategic planning", "systems thinking"],
    sampleJobDescription: `Role: Enterprise Architect (EA)
Location: Remote / Hybrid

About the Role:
We are looking for an Enterprise Architect to govern and align our technology landscape with overarching strategic enterprise goals. You will define enterprise standards (TOGAF), application lifecycles, and future-state technology roadmaps.

Key Responsibilities:
- Define and govern the enterprise-wide architecture framework across applications, data, and infrastructure.
- Establish architectural standards, technology radars, and reference architectures.
- Partner with business executives to ensure IT investments enable future corporate agility and growth.
- Lead the architectural review board (ARB) and evaluate enterprise-wide system integration patterns.

Required Qualifications & Skills:
- Deep experience in enterprise architecture using frameworks like TOGAF or Zachman.
- Systems-thinking mastery spanning cloud, legacy modernization, and data ecosystems.
- Executive communication and strategic influence across diverse organizational divisions.`,
  },

  // --- Page 12 ---
  {
    id: "chief-information-security-officer-ciso",
    title: "Chief Information Security Officer (CISO)",
    category: "Leadership & Consulting",
    description:
      "Leads an organization's information security strategy, overseeing policies, risk management, and incident response to protect against cyber threats.",
    keySkills: ["Security leadership", "risk management", "compliance", "strategic planning"],
    sampleJobDescription: `Role: Chief Information Security Officer (CISO)
Location: Remote / Hybrid

About the Role:
We are seeking an executive Chief Information Security Officer to own our enterprise-wide cybersecurity strategy, governance, and risk posture. You will lead security engineering, compliance, and threat defense operations.

Key Responsibilities:
- Establish the comprehensive information security vision, policies, and risk management framework.
- Lead the security operations center (SOC), incident response, and threat defense teams.
- Ensure rigorous compliance across global regulatory standards (SOC 2, ISO 27001, GDPR, FedRAMP).
- Report cybersecurity posture, threat landscape, and risk mitigation to the Board of Directors.

Required Qualifications & Skills:
- Proven executive security leadership as CISO, VP of Security, or Head of Information Security.
- CISSP, CISM, or equivalent executive security credentials.
- Deep expertise in modern cloud security, Zero Trust architecture, and enterprise risk management.`,
  },
  {
    id: "chief-information-officer-cio",
    title: "Chief Information Officer (CIO)",
    category: "Leadership & Consulting",
    description:
      "Oversees an organization's information technology strategy and operations, ensuring IT systems align with and support overall business objectives.",
    keySkills: ["IT strategy", "leadership", "budgeting", "business alignment"],
    sampleJobDescription: `Role: Chief Information Officer (CIO)
Location: Remote / Hybrid

About the Role:
We are hiring a Chief Information Officer to lead our global IT strategy, digital transformation, and business systems operations. You will ensure technology drives operational agility and strategic enterprise value.

Key Responsibilities:
- Direct global IT operations, enterprise systems (ERP, CRM), and workforce technology.
- Manage corporate IT budgets, capital investments, and vendor contracts.
- Champion digital transformation programs that automate and modernize business workflows.
- Align technological capability with core business growth metrics and market competitiveness.

Required Qualifications & Skills:
- Executive leadership experience as CIO, VP of IT, or Head of Technology Operations.
- Strong track record managing large IT budgets and global cross-functional teams.
- Exceptional executive communication, business alignment, and vendor negotiation skills.`,
  },
  {
    id: "freelance-software-consultant",
    title: "Freelance Software Consultant",
    category: "Leadership & Consulting",
    description:
      "Provides independent software development or consulting services to multiple clients, often specializing in a niche technology or industry.",
    keySkills: ["Self-management", "client communication", "broad technical expertise"],
    sampleJobDescription: `Role: Freelance Software Consultant / Contractor
Location: Remote

About the Role:
We are seeking a senior Freelance Software Consultant to provide expert architecture, rapid prototyping, and specialized engineering delivery across multiple client engagements.

Key Responsibilities:
- Deliver end-to-end software engineering, architecture audits, and code optimizations for client projects.
- Manage client expectations, deliverable timelines, and scope specifications independently.
- Provide targeted technical consulting on niche technologies and modernized cloud stacks.
- Maintain high code quality, documentation, and handover processes for client teams.

Required Qualifications & Skills:
- Senior-level engineering track record with deep technical breadth.
- Excellent self-management, project delivery pacing, and written client communication.
- Proven portfolio of successfully delivered software projects and client consultations.`,
  },
  {
    id: "open-source-contributor-maintainer",
    title: "Open Source Contributor / Maintainer",
    category: "Software & Web Engineering",
    description:
      "Develops and maintains publicly available software projects, reviewing contributions from a community of developers and guiding the project's technical direction.",
    keySkills: ["Git/GitHub", "community management", "coding", "documentation"],
    sampleJobDescription: `Role: Open Source Maintainer / Core Contributor
Location: Remote

About the Role:
We are looking for an Open Source Maintainer to guide the technical roadmap, review pull requests, and foster an active developer community around our open-source software libraries.

Key Responsibilities:
- Maintain open-source repositories, review community pull requests, and manage issue triage on GitHub.
- Architect core library features, establish release schedules, and write comprehensive technical docs.
- Foster an inclusive, welcoming open-source community by enforcing contributor codes of conduct.
- Present project updates, benchmark performance improvements, and drive developer adoption.

Required Qualifications & Skills:
- Proven track record maintaining or contributing significantly to popular open-source repositories.
- Mastery of Git/GitHub workflows, CI/CD automation, and semantic release versioning.
- Outstanding empathetic communication and technical documentation skills.`,
  },
  {
    id: "prompt-engineer",
    title: "Prompt Engineer",
    category: "AI, Data & Machine Learning",
    description:
      "Designs and refines prompts to effectively interact with and extract desired outputs from AI language models, optimizing for accuracy, safety, and usefulness.",
    keySkills: ["Understanding of LLMs", "writing skills", "experimentation", "prompt design patterns"],
    sampleJobDescription: `Role: Prompt Engineer & LLM Specialist
Location: Remote / Hybrid

About the Role:
We are hiring a Prompt Engineer to design, evaluate, and optimize system prompts and few-shot reasoning chains across frontier Large Language Models (Gemini, GPT-4, Claude). You will ensure reliable, hallucination-resistant structured outputs for AI products.

Key Responsibilities:
- Design and benchmark prompt architectures (Chain-of-Thought, ReAct, Few-Shot, Directional Stimulus).
- Evaluate LLM performance, response latency, token consumption, and edge-case safety.
- Build automated prompt evaluation datasets and scoring rubrics for quality validation.
- Collaborate with software engineers to integrate system prompts into RAG and agentic workflows.

Required Qualifications & Skills:
- Deep understanding of LLM capabilities, attention mechanics, context windows, and tokenization.
- Strong experimentation mindset with rigorous qualitative and quantitative evaluation rubrics.
- Experience with prompt evaluation tools, Python scripting, and structured JSON generation.`,
  },
  {
    id: "ai-ethics-specialist",
    title: "AI Ethics Specialist",
    category: "AI, Data & Machine Learning",
    description:
      "Evaluates the ethical implications of AI systems, working to ensure fairness, transparency, and accountability in how artificial intelligence is designed and deployed.",
    keySkills: ["Ethics frameworks", "AI/ML understanding", "policy analysis", "communication"],
    sampleJobDescription: `Role: AI Ethics Specialist / AI Governance Lead
Location: Remote / Hybrid

About the Role:
We are seeking an AI Ethics Specialist to evaluate the societal, bias, and privacy implications of machine learning and generative AI applications. You will establish responsible AI governance frameworks and conduct algorithmic fairness audits.

Key Responsibilities:
- Conduct ethical risk assessments and algorithmic bias audits across training datasets and deployed models.
- Develop corporate Responsible AI guidelines aligning with NIST AI RMF and global AI regulatory acts.
- Partner with data scientists and ML engineers to implement fairness metrics and explainability tools (SHAP/LIME).
- Educate internal teams and communicate ethical AI principles to stakeholders and regulatory bodies.

Required Qualifications & Skills:
- Deep expertise in AI ethics frameworks, algorithmic fairness, and AI governance policies.
- Solid technical understanding of machine learning algorithms, dataset biases, and model explainability.
- Strong analytical writing, policy formulation, and stakeholder communication skills.`,
  },
];
