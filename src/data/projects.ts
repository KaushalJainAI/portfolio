import projectData from './projects.json';

export type ProjectCategory = 'personal' | 'supporting' | 'research' | 'internship';

export type ArchitectureTier = {
  label: string;
  nodes: string[];
};

export type DesignPattern = {
  name: string;
  detail: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectArchitecture = {
  caption: string;
  tiers: ArchitectureTier[];
  patterns: DesignPattern[];
  scalability: string[];
  metrics?: ProjectMetric[];
};

export type CaseStudyItem = {
  title: string;
  detail: string;
};

export type ArchitectureView = {
  name: string;
  purpose: string;
  components: string[];
};

export type ProjectCaseStudy = {
  abstract: string;
  motivation: string;
  problemStatement: string;
  systemGoals: string[];
  architectureViews: ArchitectureView[];
  keyWorkflows: CaseStudyItem[];
  lowLevelDesign: CaseStudyItem[];
  securityAndReliability: CaseStudyItem[];
  tradeoffs: CaseStudyItem[];
  recruiterTakeaway: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: string;
  eyebrow: string;
  summary: string;
  why: string;
  impact: string;
  built: string[];
  tech: string[];
  liveLink?: string | null;
  githubLink?: string | null;
  codeLinks?: Array<{
    label: string;
    url: string;
  }>;
  highlights?: string[];
  architecture?: ProjectArchitecture;
  caseStudy?: ProjectCaseStudy;
};

const caseStudies: Record<string, ProjectCaseStudy> = {
  'ngu-spices': {
    abstract: 'NGU Spices is a production e-commerce and operations system for a real spice brand. The platform separates shopper experience, admin operations, backend APIs, media storage, caching, and deployment concerns so the business can manage catalogue, orders, customer flows, and support from one stack.',
    motivation: 'The goal was to move a real catalogue beyond a static brochure and into a system that can support daily business operations. That meant designing for customers, admins, permissions, product media, checkout workflows, deployment hygiene, and data consistency.',
    problemStatement: 'Build a commerce platform where public users can browse and order, authenticated users can manage their account, and admins can safely operate catalogue and order workflows without exposing privileged backend surfaces.',
    systemGoals: ['Clear public, authenticated, and admin-only boundaries', 'Fast catalogue reads for a product-heavy storefront', 'Stateless app deployment with externalized media', 'Operational admin workflows for a live business', 'Repeatable deployment on EC2 using Docker and nginx'],
    architectureViews: [
      { name: 'Runtime architecture', purpose: 'Normal request path from storefront/admin clients into the API and data services.', components: ['React customer storefront', 'Admin command center', 'nginx reverse proxy', 'Django REST API', 'Redis cache', 'PostgreSQL', 'S3 media storage'] },
      { name: 'Permission architecture', purpose: 'How the backend separates public browsing, logged-in user actions, and admin operations.', components: ['Public product/category APIs', 'Authenticated profile/cart/order APIs', 'Admin-only catalogue/order endpoints', 'DRF permission classes'] },
      { name: 'Deployment architecture', purpose: 'Production environment and why app containers remain stateless.', components: ['Docker images', 'EC2 host', 'nginx', 'S3 for media', 'Redis/PostgreSQL backing services'] }
    ],
    keyWorkflows: [
      { title: 'Catalogue browsing', detail: 'Customer opens the storefront, product/category data is served through the REST API, hot reads are cacheable through Redis, and product images are served from object storage instead of the app server.' },
      { title: 'Order journey', detail: 'User builds cart, checks out, backend validates authenticated user context and order data, persists the order in PostgreSQL, and exposes status through user/admin views.' },
      { title: 'Admin operations', detail: 'Admin client calls protected endpoints to manage catalogue, combos, orders, and business content under stricter permission scopes than the public storefront.' }
    ],
    lowLevelDesign: [
      { title: 'Layered API surface', detail: 'The backend is organized around separate public, authenticated, and admin-only endpoint behavior instead of mixing all actions behind one generic route layer.' },
      { title: 'Cache-aside catalogue reads', detail: 'Redis is used for hot read paths so common catalogue access does not repeatedly hit PostgreSQL.' },
      { title: 'External media ownership', detail: 'Product images are stored in S3, which keeps application containers lightweight and easier to redeploy.' },
      { title: 'Separate clients for separate users', detail: 'The shopper UI and admin command center are split so admin workflows can stay dense, operational, and permission-aware.' }
    ],
    securityAndReliability: [
      { title: 'Role-scoped access', detail: 'Admin-only workflows are separated from public and authenticated customer flows at the API permission level.' },
      { title: 'Stateless deployment', detail: 'Media and cache state live outside the app container, making redeploys and horizontal scaling simpler.' },
      { title: 'Operational recovery', detail: 'Dockerized deployment and external database/media services make the production environment easier to reproduce.' }
    ],
    tradeoffs: [
      { title: 'EC2 over managed platform', detail: 'Using EC2 gives hands-on control over nginx, Docker, and deployment internals, at the cost of more operational responsibility.' },
      { title: 'REST over GraphQL', detail: 'REST keeps commerce resources explicit and simple for separate frontend/admin clients, while giving up some client-side query flexibility.' },
      { title: 'Cache-aside over always-live database reads', detail: 'Cache-aside improves repeated catalogue reads but requires thought around invalidation when admins change products.' }
    ],
    recruiterTakeaway: 'This project shows production full-stack ownership: business requirements, commerce flows, admin tooling, API permissions, caching, media storage, and deployment all working together.'
  },
  aiaas: {
    abstract: 'AIAAS is a visual AI automation platform where users compose workflows from LLM, HTTP, MCP, logic, and execution nodes. The system turns AI automation into an inspectable graph with streaming execution, encrypted credentials, sandboxed code, and human approval gates.',
    motivation: 'Most AI tools hide execution inside a chat transcript. I wanted a system where every step is visible, reusable, controllable, and safer for sensitive actions.',
    problemStatement: 'Design an agentic workflow system that can execute tool-using AI graphs while controlling credentials, untrusted code, long-running jobs, realtime status, and human approvals.',
    systemGoals: ['Inspectable visual workflow execution', 'Safe handling of credentials and sensitive actions', 'Support for heterogeneous tools through a common node model', 'Realtime execution feedback', 'Async scaling for long-running agent workflows'],
    architectureViews: [
      { name: 'Product architecture', purpose: 'How the user builds, runs, and observes workflows.', components: ['ReactFlow editor', 'Workflow graph', 'Execution panel', 'Streaming results'] },
      { name: 'Agent architecture', purpose: 'How graph execution is supervised and delegated.', components: ['LangGraph engine', 'King Agent supervisor', 'Node workers', 'Tool registry', 'State transitions'] },
      { name: 'Security architecture', purpose: 'Where risky actions are controlled before execution.', components: ['Encrypted credentials', 'Just-in-time secret injection', 'HITL approval gates', 'AST static filter', 'WASM/WASI sandbox'] },
      { name: 'Async architecture', purpose: 'How long-running workflows avoid blocking the API.', components: ['Django API', 'Channels WebSockets', 'Celery workers', 'Redis broker/fan-out'] }
    ],
    keyWorkflows: [
      { title: 'Workflow execution', detail: 'User creates a graph in ReactFlow, the backend stores/validates the workflow, LangGraph executes nodes in order, and each state transition streams back to the client.' },
      { title: 'Tool call with credentials', detail: 'A node requests a tool, the runtime decrypts only the needed credential at execution time, injects it into that node, and avoids exposing it to the browser or unrelated nodes.' },
      { title: 'Sensitive action approval', detail: 'When a node reaches a risky operation, execution pauses, the user receives an approval prompt, and the graph resumes only after explicit confirmation.' },
      { title: 'Sandboxed code execution', detail: 'User code is first screened by static AST checks, then run inside a WASM/WASI sandbox with CPU and memory limits.' }
    ],
    lowLevelDesign: [
      { title: 'Common node contract', detail: 'LLM, HTTP, MCP, logic, and code nodes can be plugged into the graph because they share a runtime interface for inputs, outputs, validation, and execution.' },
      { title: 'Supervisor-worker orchestration', detail: 'The King Agent supervises workflow state while specialist nodes perform bounded tasks.' },
      { title: 'Event-streamed state', detail: 'Execution status is pushed over WebSockets so users see progress without polling.' },
      { title: 'Disposable execution contexts', detail: 'Sandboxed runs are isolated per execution so untrusted workloads do not share mutable state.' }
    ],
    securityAndReliability: [
      { title: 'Defense-in-depth sandbox', detail: 'Static filtering rejects obvious unsafe code before runtime limits provide a second containment layer.' },
      { title: 'Credential minimization', detail: 'Secrets are encrypted at rest and only decrypted into the node that needs them.' },
      { title: 'Human-in-the-loop control', detail: 'Irreversible or sensitive steps pause for approval, reducing blind agent autonomy.' },
      { title: 'Async resilience', detail: 'Celery separates execution from request handling, keeping the API responsive under long workflows.' }
    ],
    tradeoffs: [
      { title: 'Graph workflows over chat-only UX', detail: 'Graphs require more modeling effort, but they make execution inspectable, reusable, and easier to debug.' },
      { title: 'Sandbox restrictions over full Python freedom', detail: 'Restricting execution reduces flexibility but makes user-authored code safer to run.' },
      { title: 'HITL gates over full automation', detail: 'Approval gates add friction, but they protect users from high-risk autonomous actions.' }
    ],
    recruiterTakeaway: 'This project demonstrates serious AI systems engineering: agents, workflow orchestration, streaming, tool contracts, credentials, sandboxing, and human control.'
  },
  faultline: {
    abstract: 'Faultline is an AI-assisted QA and security control plane that analyzes projects, runs deterministic checks, indexes code, probes APIs, correlates logs, and proposes tests or patches. It is designed to attack software before users or attackers find the weak points.',
    motivation: 'I wanted a more rigorous way to test my own systems beyond happy-path manual checks. The core idea is to run cheap deterministic checks first, then spend agent reasoning only where it adds value.',
    problemStatement: 'Build a developer-facing system that can inspect a codebase, identify likely failure points, generate useful tests, and escalate to agentic API/security probing with human control.',
    systemGoals: ['Cheap deterministic checks before LLM reasoning', 'Grounded analysis over the real codebase', 'Human review before risky generated changes', 'Extensible probe/tool architecture', 'Clear findings suitable for debugging'],
    architectureViews: [
      { name: 'Analysis pipeline', purpose: 'The deterministic-to-agentic flow.', components: ['Syntax checks', 'Import checks', 'Pytest collection', 'Dependency root cause', 'FAISS index', 'LangGraph agent'] },
      { name: 'Tool architecture', purpose: 'How new testing/probing abilities attach.', components: ['API probe tools', 'Log correlation tools', 'Vulnerability report tools', 'Patch proposal tools'] },
      { name: 'Developer interaction', purpose: 'How findings and generated files stay reviewable.', components: ['Interactive CLI', 'Streamed reasoning', 'HITL prompts', 'Generated file review'] }
    ],
    keyWorkflows: [
      { title: 'Static triage', detail: 'Faultline scans syntax, imports, pytest collection, and dependency failures before invoking expensive agent reasoning.' },
      { title: 'Grounded agent run', detail: 'The codebase is semantically indexed with FAISS, and the LangGraph agent retrieves relevant context before planning probes or patch ideas.' },
      { title: 'API/security probe', detail: 'The agent generates targeted API tests, executes probes, correlates responses/logs, and reports potential reliability or vulnerability issues.' },
      { title: 'Human-reviewed output', detail: 'Generated tests, reports, and patch proposals are surfaced in the CLI for approval before adoption.' }
    ],
    lowLevelDesign: [
      { title: 'Deterministic-first pipeline', detail: 'Rule-based checks short-circuit common failures so the agent focuses on ambiguous or system-level issues.' },
      { title: 'Semantic code index', detail: 'FAISS retrieval gives the agent concrete project context instead of relying on model memory.' },
      { title: 'Tool-using agent loop', detail: 'The agent plans, calls tools, observes results, and revises its next step.' },
      { title: 'Findings-oriented output', detail: 'The system organizes results around actionable findings, generated tests, and proposed fixes.' }
    ],
    securityAndReliability: [
      { title: 'Human approval boundary', detail: 'Generated files and potentially risky actions are reviewed before they affect the target project.' },
      { title: 'Isolated per-run analysis', detail: 'Each scan can run independently, reducing cross-project coupling.' },
      { title: 'Deterministic baseline', detail: 'Basic correctness checks are reliable and repeatable even when the agent is not needed.' }
    ],
    tradeoffs: [
      { title: 'Cheap checks before agent depth', detail: 'This may miss some creative issues early, but it keeps runs faster and more predictable.' },
      { title: 'CLI-first interface', detail: 'The CLI gives precise developer feedback quickly, while a richer web UI can be added later.' },
      { title: 'Patch proposals over auto-patching', detail: 'Keeping changes reviewable reduces automation risk in security-sensitive workflows.' }
    ],
    recruiterTakeaway: 'Faultline shows reliability, testing, security, agent design, retrieval, and developer tooling thinking beyond normal product features.'
  },
  'career-navigator': {
    abstract: 'Career Navigator is a candidate-owned AI job-hunt platform for role discovery, profile onboarding, resume-to-JD scoring, truthful tailoring, alerts, applications, and interview preparation. It treats job hunting as a multi-step workflow where the candidate stays in control.',
    motivation: 'Job hunting is repetitive but sensitive. I wanted agents to help with discovery, tailoring, and preparation without letting them invent claims or take irreversible actions without approval.',
    problemStatement: 'Design a job-search system that coordinates profile data, resumes, job ingestion, matching, tailoring, applications, interview prep, streaming, and human approval across multiple domain modules.',
    systemGoals: ['Candidate control over agent actions', 'Truthful tailoring based on real profile evidence', 'Modular domain apps for each job-hunt stage', 'Async processing for ingestion/scoring/tailoring', 'Realtime visibility into agent progress'],
    architectureViews: [
      { name: 'Domain architecture', purpose: 'How the product is split by job-hunt responsibility.', components: ['Profiles', 'Resumes', 'Jobs/ingestion', 'Matching', 'Applications', 'Notifications', 'Tailoring', 'Interview', 'Credentials', 'Streaming'] },
      { name: 'Agent architecture', purpose: 'Where agents assist without taking uncontrolled action.', components: ['Interview Grill', 'Tailoring agent', 'Auto-apply flow', 'HITL gate'] },
      { name: 'Async architecture', purpose: 'How heavy work runs outside request/response.', components: ['Django API', 'Channels', 'Celery', 'PostgreSQL'] }
    ],
    keyWorkflows: [
      { title: 'Role discovery', detail: 'Jobs are ingested, normalized, stored, and scored against the candidate profile and resume evidence.' },
      { title: 'Resume-to-JD scoring', detail: 'The system compares structured candidate evidence against role requirements before recommending tailoring actions.' },
      { title: 'Truthful tailoring', detail: 'Tailoring uses existing profile/resume facts as constraints so generated content improves fit without fabricating experience.' },
      { title: 'Interview Grill', detail: 'The agent researches company/role context, builds a targeted question bank, runs grilling rounds, and produces a study plan.' },
      { title: 'Auto-apply approval', detail: 'Application actions pause at a human approval gate before anything irreversible is submitted.' }
    ],
    lowLevelDesign: [
      { title: 'Modular Django apps', detail: 'Each domain owns its models and workflows, which keeps ingestion, matching, tailoring, and interview prep from becoming one tangled service.' },
      { title: 'Evidence-constrained generation', detail: 'Tailoring logic is grounded in candidate facts so the system can help without making false claims.' },
      { title: 'Streaming progress model', detail: 'Channels push live agent progress to the UI during multi-step tasks.' },
      { title: 'Queue-backed heavy work', detail: 'Celery handles ingestion, scoring, notifications, and agent workloads that should not block API requests.' }
    ],
    securityAndReliability: [
      { title: 'HITL for irreversible steps', detail: 'The user must approve sensitive actions like applying to a job.' },
      { title: 'Credential boundaries', detail: 'Account/application credentials are modeled separately from normal profile data.' },
      { title: 'Domain separation', detail: 'Separate apps reduce accidental coupling and make permission boundaries easier to reason about.' }
    ],
    tradeoffs: [
      { title: 'Many domain apps over one monolith module', detail: 'More upfront structure, but much clearer ownership as the product grows.' },
      { title: 'Truth constraints over aggressive optimization', detail: 'The system may reject flashy tailoring if it is not supported by evidence, which protects user trust.' },
      { title: 'Approval gates over one-click automation', detail: 'Less friction-free, but safer for real job applications.' }
    ],
    recruiterTakeaway: 'Career Navigator shows product-level agent design, domain modeling, async workflows, trust boundaries, and user-centered automation.'
  },
  fitgenius: {
    abstract: 'FitGenius AI is a full-stack fitness and diet recommender that separates long-term health profile data from daily readiness check-ins. It combines recommendation signals, deterministic safety filtering, feedback loops, and contextual help.',
    motivation: 'Health recommendations should not behave like generic content ranking. I built this to model stable health constraints separately from daily context and to make safety rules able to override recommendations.',
    problemStatement: 'Build a recommender system that personalizes fitness/diet plans while respecting medical constraints, user preferences, daily readiness, and feedback.',
    systemGoals: ['Separate stable profile data from daily readiness', 'Blend multiple recommendation signals', 'Let deterministic safety rules override ranking', 'Support feedback-driven personalization', 'Keep auth/session behavior simple for a full-stack app'],
    architectureViews: [
      { name: 'Recommendation architecture', purpose: 'How candidate plans are generated, ranked, and filtered.', components: ['Templates', 'KNN signals', 'Collaborative priors', 'Preference memory', 'Reranker', 'Safety post-filter'] },
      { name: 'Data architecture', purpose: 'The split between persistent and volatile user context.', components: ['Health profile', 'Daily check-in', 'Preferences', 'Progress feedback'] },
      { name: 'Help architecture', purpose: 'How user help is grounded in app context.', components: ['Contextual RAG chat', 'User plan', 'Profile data', 'Plan explanations'] }
    ],
    keyWorkflows: [
      { title: 'Plan generation', detail: 'The API combines profile, preferences, and daily check-in context, generates candidate plans, reranks them, and then applies deterministic safety rules.' },
      { title: 'Safety triage', detail: 'Medical constraints are evaluated after ranking so unsafe recommendations can be removed even if they scored highly.' },
      { title: 'Feedback loop', detail: 'User progress and preferences update future recommendations without requiring a full retraining step.' },
      { title: 'Contextual help', detail: 'The help chat uses user-specific plan/profile context so answers stay relevant to the generated plan.' }
    ],
    lowLevelDesign: [
      { title: 'Hybrid recommender pipeline', detail: 'Templates, KNN-style signals, collaborative priors, and reranking are modeled as stages rather than one opaque model.' },
      { title: 'Safety-over-ranking rule layer', detail: 'Deterministic post-filters enforce constraints that should not be left to ranking probability.' },
      { title: 'Profile/readiness split', detail: 'Stable medical/profile data and volatile daily readiness are stored and interpreted separately.' },
      { title: 'JWT-authenticated API', detail: 'Stateless authentication keeps the full-stack app straightforward to deploy and scale.' }
    ],
    securityAndReliability: [
      { title: 'Deterministic safety checks', detail: 'Critical health constraints are handled by explicit rules instead of model preference alone.' },
      { title: 'Stateless auth', detail: 'JWT keeps API scaling simpler by avoiding server-side sessions.' },
      { title: 'User-specific context', detail: 'Plan explanations and chat responses stay grounded in the user context available to the system.' }
    ],
    tradeoffs: [
      { title: 'Rules plus recommender over pure ML', detail: 'Explicit rules reduce model elegance but make safety decisions more predictable.' },
      { title: 'Staged hybrid pipeline over one model', detail: 'More components to maintain, but easier to debug and extend.' },
      { title: 'RAG help over generic chatbot', detail: 'Grounded context requires more plumbing, but produces more relevant answers.' }
    ],
    recruiterTakeaway: 'FitGenius shows recommender-system thinking, safety constraints, full-stack implementation, and responsible handling of user-specific health context.'
  }
};

const buildFallbackCaseStudy = (item: PortfolioProject): ProjectCaseStudy => ({
  abstract: item.summary,
  motivation: item.why,
  problemStatement: `Design and explain ${item.title} as a system with clear inputs, processing stages, outputs, and engineering boundaries.`,
  systemGoals: [
    'Make the core system behavior easy to explain in an interview',
    'Separate high-level architecture from low-level implementation decisions',
    'Show the main data or control flow end to end',
    'Document scalability, reliability, and operational limits'
  ],
  architectureViews: item.architecture
    ? [
      {
        name: 'High-level architecture',
        purpose: item.architecture.caption,
        components: item.architecture.tiers.flatMap(tier => tier.nodes)
      }
    ]
    : [
      {
        name: 'System architecture',
        purpose: 'A recruiter-facing overview of the major system responsibilities.',
        components: item.built
      }
    ],
  keyWorkflows: item.built.map((detail, index) => ({
    title: `Workflow ${index + 1}`,
    detail
  })),
  lowLevelDesign: item.architecture?.patterns ?? item.built.map(detail => ({
    title: 'Implementation responsibility',
    detail
  })),
  securityAndReliability: item.architecture?.scalability.map((detail, index) => ({
    title: index === 0 ? 'Scalability path' : `Reliability note ${index + 1}`,
    detail
  })) ?? [
    {
      title: 'Reliability boundary',
      detail: 'The system is documented around clear responsibilities so future changes can be reasoned about safely.'
    }
  ],
  tradeoffs: [
    {
      title: 'Practical scope',
      detail: 'The design favors a clear, demonstrable system over unnecessary infrastructure complexity.'
    },
    {
      title: 'Extensibility',
      detail: 'The architecture is described in stages so new models, services, or workflows can be added without rewriting the whole system.'
    }
  ],
  recruiterTakeaway: item.impact
});

const attachCaseStudies = (items: PortfolioProject[]): PortfolioProject[] =>
  items.map(item => ({
    ...item,
    caseStudy: caseStudies[item.slug] ?? buildFallbackCaseStudy(item)
  }));

export const projects = attachCaseStudies(projectData.projects as PortfolioProject[]);
export const researchProjects = attachCaseStudies(projectData.researchProjects as PortfolioProject[]);
export const allProjects = [...projects, ...researchProjects];
