import React from 'react';
import type { ProjectArchitecture } from '../data/projects';

type Props = {
  architecture: ProjectArchitecture;
};

/* ── Component icons ─────────────────────────────────────────────
   Small inline SVGs that give each node a system-design glyph. The
   right glyph is inferred from the node's text, so the data model
   (plain strings) stays unchanged. */

type IconKey =
  | 'client' | 'stream' | 'ai' | 'tool' | 'sandbox'
  | 'security' | 'queue' | 'cache' | 'database' | 'server' | 'box';

const ICONS: Record<IconKey, React.ReactNode> = {
  client: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.6" />
      <path d="M9 20h6M12 16v4" />
    </>
  ),
  stream: <path d="M3 12h3l2.5-6 4 13 2.5-7H21" />,
  ai: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.6" />
      <path d="M10 3v2M14 3v2M10 19v2M14 19v2M3 10h2M3 14h2M19 10h2M19 14h2" />
    </>
  ),
  tool: <path d="M14.5 6a3.5 3.5 0 0 0-4.6 4.3l-5.6 5.6 2 2 5.6-5.6A3.5 3.5 0 0 0 18 8l-2.2 2.2-1.8-1.8L16.2 6.2A3.5 3.5 0 0 0 14.5 6Z" />,
  sandbox: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.8" />
      <path d="M7 9l3 3-3 3M13 15h4" />
    </>
  ),
  security: <path d="M12 3l7 3v5c0 4.2-2.8 7.6-7 9-4.2-1.4-7-4.8-7-9V6l7-3Z" />,
  queue: (
    <>
      <rect x="3" y="4" width="18" height="4" rx="1" />
      <rect x="3" y="10" width="18" height="4" rx="1" />
      <rect x="3" y="16" width="18" height="4" rx="1" />
    </>
  ),
  cache: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8Z" />,
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="1.6" />
      <rect x="3" y="13" width="18" height="7" rx="1.6" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  box: <rect x="4" y="4" width="16" height="16" rx="2.4" />,
};

const MATCHERS: Array<[RegExp, IconKey]> = [
  [/client|storefront|react|canvas|editor|cli|ui|browser|telegram|interface|store|center|console|panel|dashboard|chat/i, 'client'],
  [/stream|websocket|channel|realtime|real-time/i, 'stream'],
  [/agent|langgraph|llm|model|king|recommender|rag|knn|template|fusion|net|former|regression|classif|ink|feature|train/i, 'ai'],
  [/http|mcp|logic|rest|api|endpoint|tool|probe|test|matching|tailoring|grill/i, 'tool'],
  [/sandbox|ast|wasm|wasi|execution|post-?process|morphology|threshold|component/i, 'sandbox'],
  [/credential|hitl|approval|otp|rbac|auth|permission|scope|security|triage|safety|workflow|boundar/i, 'security'],
  [/celery|queue|async|ingest|pipeline/i, 'queue'],
  [/redis|cache|pgbouncer|pool/i, 'cache'],
  [/postgre|sql|s3|storage|media|database|\bdata\b|cycle|signal|volume|sample|metadata|clinical|audio|spectro|mfcc/i, 'database'],
  [/nginx|docker|ec2|server|deploy|edge|infra|distribution|hub|image|config|script|input|output|decision/i, 'server'],
];

const iconFor = (node: string): React.ReactNode => {
  const key = MATCHERS.find(([re]) => re.test(node))?.[1] ?? 'box';
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {ICONS[key]}
    </svg>
  );
};

/** SVG flow arrow with a filled triangle head, drawn between HLD tiers. */
const FlowConnector: React.FC = () => (
  <div className="arch-connector" aria-hidden="true">
    <svg viewBox="0 0 24 34" width="24" height="34">
      <line x1="12" y1="1" x2="12" y2="24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6.5 22 L12 31 L17.5 22 Z" fill="currentColor" />
    </svg>
  </div>
);

/**
 * Renders a project's core architecture:
 *  1. HLD  — a top-down layered flow diagram (tiers of node boxes with
 *            component icons, joined by SVG flow arrows).
 *  2. LLD  — the engineering / design patterns utilised.
 *  3. Scalability — how the system grows and where the limits sit.
 * Purely presentational; driven by data from projects.json.
 */
const ArchitectureDiagram: React.FC<Props> = ({ architecture }) => {
  const { caption, tiers, patterns, scalability } = architecture;

  return (
    <div className="arch">
      {caption && <p className="arch-caption">{caption}</p>}

      <figure className="arch-diagram" aria-label="High-level design diagram">
        <figcaption className="arch-block-label mini">High-level design</figcaption>
        <div className="arch-flow">
          {tiers.map((tier, index) => (
            <React.Fragment key={tier.label}>
              <div className="arch-tier">
                <p className="arch-tier-label mini">{tier.label}</p>
                <div className="arch-nodes">
                  {tier.nodes.map(node => (
                    <span className="arch-node" key={node}>
                      <span className="arch-node-icon" aria-hidden="true">{iconFor(node)}</span>
                      {node}
                    </span>
                  ))}
                </div>
              </div>
              {index < tiers.length - 1 && <FlowConnector />}
            </React.Fragment>
          ))}
        </div>
      </figure>

      <div className="arch-detail-grid">
        <div className="arch-detail">
          <p className="arch-block-label mini">Low-level design &amp; patterns</p>
          <ul className="arch-pattern-list">
            {patterns.map(pattern => (
              <li className="arch-pattern" key={pattern.name}>
                <span className="arch-pattern-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="8.5" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M6.5 10v2.5h11V10M12 12.5V14" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </span>
                <span className="arch-pattern-body">
                  <strong>{pattern.name}</strong>
                  <span>{pattern.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="arch-detail">
          <p className="arch-block-label mini">Scalability</p>
          <ul className="arch-scale-list">
            {scalability.map(point => (
              <li className="arch-scale" key={point}>
                <span className="arch-scale-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                    <path d="M3 17l5-5 4 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 8h4v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
