import React from 'react';
import type { PortfolioProject, ProjectMetric } from '../data/projects';

type Props = {
  project: PortfolioProject;
};

/**
 * A compact "by the numbers" strip. Real outcome metrics (architecture.metrics)
 * come first; the rest is filled with scope numbers derived directly from the
 * project's own data, so every figure shown is true by construction.
 */
const ProjectStats: React.FC<Props> = ({ project }) => {
  const { architecture, tech } = project;
  if (!architecture) return null;

  const componentCount = architecture.tiers.reduce((sum, tier) => sum + tier.nodes.length, 0);

  const derived: ProjectMetric[] = [
    { value: String(architecture.tiers.length), label: 'architecture tiers' },
    { value: String(componentCount), label: 'components' },
    { value: String(tech.length), label: 'technologies' },
    { value: String(architecture.patterns.length), label: 'design patterns' },
  ];

  const metrics = [...(architecture.metrics ?? []), ...derived].slice(0, 4);

  return (
    <dl className="metric-strip" aria-label="Project by the numbers">
      {metrics.map(metric => (
        <div className="metric" key={`${metric.value}-${metric.label}`}>
          <dt className="metric-value">{metric.value}</dt>
          <dd className="metric-label">{metric.label}</dd>
        </div>
      ))}
    </dl>
  );
};

export default ProjectStats;
