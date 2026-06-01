import React from 'react';
import type { ProjectArchitecture } from '../data/projects';

type Props = {
  architecture: ProjectArchitecture;
};

/** SVG vertical connector with an arrowhead, drawn between two HLD tiers. */
const FlowConnector: React.FC = () => (
  <div className="arch-connector" aria-hidden="true">
    <svg viewBox="0 0 24 40" width="24" height="40" preserveAspectRatio="none">
      <defs>
        <marker
          id="arch-arrowhead"
          markerWidth="8"
          markerHeight="8"
          refX="4"
          refY="6"
          orient="auto"
        >
          <path d="M1 1 L4 6 L7 1" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </marker>
      </defs>
      <line
        x1="12"
        y1="0"
        x2="12"
        y2="34"
        stroke="currentColor"
        strokeWidth="1.4"
        markerEnd="url(#arch-arrowhead)"
      />
    </svg>
  </div>
);

/**
 * Renders a project's core architecture:
 *  1. HLD  — a top-down layered flow diagram (tiers of node boxes, SVG arrows).
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
                    <span className="arch-node" key={node}>{node}</span>
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
