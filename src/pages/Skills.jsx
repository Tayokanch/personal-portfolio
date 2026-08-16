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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-cyan-200/10 bg-slate-900/70 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.35)] transition duration-500 hover:-translate-y-2 hover:border-cyan-200/30 hover:shadow-[0_22px_70px_rgba(8,145,178,0.12)] sm:p-7">
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-300/[0.06] blur-3xl transition duration-500 group-hover:bg-cyan-300/[0.12]" />

      <div className="relative flex items-start justify-between">
        <span className="grid h-13 w-13 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-[rgb(144_224_239)]">
          <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.6} />
        </span>
        <span className="font-display text-4xl font-semibold text-white/[0.06]">0{number}</span>
      </div>

      <h3 className="font-display relative mt-6 text-xl font-semibold leading-snug text-white">{group.title}</h3>
      <p className="relative mt-3 min-h-20 text-sm leading-6 text-slate-400">{group.description}</p>

      <div className="relative mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6">
        {group.skills.map((skill) => (
          <span key={skill} className="rounded-full border border-cyan-200/10 bg-slate-950/55 px-3 py-1.5 text-xs font-medium text-cyan-50/80 transition group-hover:border-cyan-200/20">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

function Skills() {
  return (
    <section id="skills" className="portfolio-skills scroll-mt-20">
      <div
        aria-label="Aerial geographic landscape"
        className="relative"
      >
        <img src={skillsBanner} alt="Aerial geographic landscape" className="block h-auto w-full" />
        <div className="absolute inset-0 bg-slate-950/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0.08),rgba(2,6,23,0.68))]" />
        <div className="relative rounded-2xl border border-cyan-100/55 bg-slate-950/65 px-8 py-5 shadow-[0_0_0_1px_rgba(15,23,42,0.5),0_20px_70px_rgba(2,6,23,0.55)] backdrop-blur-md sm:px-12 sm:py-7">
          <p className="font-display text-center text-4xl font-semibold uppercase tracking-[0.1em] text-[rgb(144_224_239)] [text-shadow:0_2px_18px_rgba(2,6,23,0.9)] sm:text-6xl">
            My Skill Sets
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mb-12 max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[rgb(144_224_239)]">
            <span className="h-px w-10 bg-[rgb(144_224_239)]" />
            Technical expertise
          </p>
          <h2 className="font-display mt-5 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">Tools that turn spatial data into solutions.</h2>
          <p className="mt-5 text-base leading-7 text-slate-400">A multidisciplinary toolkit spanning geospatial analysis, application development and production infrastructure.</p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => <SkillCard group={group} number={index + 1} key={group.title} />)}
        </div>
      </div>

    </section>
  );
}

export default Skills;
