import { CloudCog, Code2, Map } from 'lucide-react';
import skillsBanner from '../assets/gis-banner5.webp';

const skillGroups = [
  {
    title: 'GIS & Spatial Analysis',
    description: 'Analysing spatial patterns, measuring geographic coverage and communicating findings through professional maps.',
    icon: Map,
    skills: ['QGIS', 'ArcGIS Pro', 'ArcGIS Online', 'Spatial Analysis', 'Geoprocessing', 'Raster Analysis', 'Vector Analysis', 'Cartography', 'Zonal Statistics', 'Georeferencing', 'CRS & Reprojection', 'OpenStreetMap'],
  },
  {
    title: 'Software & Geospatial Engineer',
    description: 'Developing web applications, APIs and data workflows, with a growing focus on geospatial systems.',
    icon: Code2,
    skills: ['JavaScript', 'React', 'Node.js', 'Express', 'Python', 'SQL', 'PostgreSQL', 'PostGIS', 'REST APIs', 'Leaflet', 'MapLibre', 'HTML', 'CSS'],
  },
  {
    title: 'DevOps, Cloud & Deployment',
    description: 'Containerising applications, automating delivery workflows and deploying services on self-hosted infrastructure.',
    icon: CloudCog,
    skills: ['Linux', 'Docker', 'Docker Compose', 'Git', 'GitHub Actions', 'Jenkins', 'NGINX', 'Cloudflare Tunnel', 'Networking', 'AWS Fundamentals'],
  },
];

function SkillCard({ group, number }) {
  const Icon = group.icon;

  return (
    <article className="group relative flex min-h-120 h-full flex-col overflow-hidden border border-[var(--color-rule)] bg-[var(--color-skill-card-blue)] p-[var(--space-xl)] text-[var(--color-paper)] max-[900px]:min-h-0 max-[520px]:p-[var(--space-lg)]">
      <div className="relative flex items-start justify-between">
        <span className="grid h-13 w-13 place-items-center border border-[var(--color-rule)] text-[var(--color-paper)]">
          <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.6} />
        </span>
        <span className="font-display text-4xl font-semibold text-[var(--color-accent)]">0{number}</span>
      </div>

      <h3 className="font-display relative mt-6 text-[length:var(--text-xl)] font-semibold leading-snug text-[var(--color-paper)]">{group.title}</h3>
      <p className="relative mt-3 min-h-20 text-sm leading-6 text-[color-mix(in_oklch,var(--color-paper)_72%,var(--color-ink))]">{group.description}</p>

      <div className="relative mt-6 flex flex-wrap gap-2 border-t border-[color-mix(in_oklch,var(--color-paper)_22%,var(--color-ink))] pt-6">
        {group.skills.map((skill) => (
          <span key={skill} className="rounded-full border border-[color-mix(in_oklch,var(--color-paper)_20%,var(--color-ink))] bg-[color-mix(in_oklch,var(--color-paper)_6%,var(--color-ink))] px-3 py-1.5 text-xs font-medium text-[var(--color-paper)]">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-ink)]">
      <div
        aria-label="Aerial geographic landscape"
        className="relative h-[clamp(18rem,38vw,32rem)] bg-[var(--color-ink)] before:absolute before:inset-0 before:z-10 before:bg-[color-mix(in_oklch,var(--color-ink)_58%,transparent)]"
      >
        <img src={skillsBanner} alt="Aerial geographic landscape" className="block h-full w-full object-contain" />
        <div className="absolute start-[clamp(var(--space-sm),8vw,var(--space-3xl))] top-1/2 z-20 -translate-y-1/2">
          <p className="font-display max-w-[7ch] text-left text-[length:clamp(3.5rem,9vw,8rem)] font-semibold uppercase leading-[.86] tracking-[-.04em] text-[var(--color-paper)]">
            My Skill Sets
          </p>
        </div>
      </div>

      <div className="w-full px-[clamp(var(--space-sm),8vw,var(--space-3xl))] pb-[var(--space-4xl)] pt-[var(--space-3xl)]">
        <div className="mb-12 ml-[18%] max-w-2xl max-[900px]:ml-0">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[rgb(144_224_239)]">
            <span className="h-px w-10 bg-[rgb(144_224_239)]" />
            Technical expertise
          </p>
          <h2 className="font-display mt-5 text-[length:clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[.95] tracking-[-0.03em] text-[var(--color-ink)]">Tools that turn spatial data into solutions.</h2>
          <p className="mt-5 text-base leading-7 text-[var(--color-ink-2)]">A multidisciplinary toolkit spanning geospatial analysis, application development and production infrastructure.</p>
        </div>

        <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] items-stretch gap-[var(--space-lg)] max-[900px]:grid-cols-1 [&>article:nth-child(3)]:col-span-full [&>article:nth-child(3)]:ml-auto [&>article:nth-child(3)]:w-[72%] max-[900px]:[&>article:nth-child(3)]:col-auto max-[900px]:[&>article:nth-child(3)]:ml-0 max-[900px]:[&>article:nth-child(3)]:w-full">
          {skillGroups.map((group, index) => <SkillCard group={group} number={index + 1} key={group.title} />)}
        </div>
      </div>

    </section>
  );
}

export default Skills;
