import { useState } from 'react';
import { ArrowUpRight, Cloud, Code2, Map, MapPinned } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories, projects } from '../data/projects';

const categoryIcons = { 'GIS & Spatial Analysis': Map, 'Geospatial Engineering': MapPinned, 'Software Engineering': Code2, 'DevOps & Cloud': Cloud };

export function ProjectVisual({ project, large = false }) {
  if (project.image) return <img src={project.image} alt={project.imageAlt} className="h-full w-full object-cover" />;
  if (project.imageType === 'dashboard') return (
    <div role="img" aria-label={project.imageAlt} className="relative h-full min-h-52 overflow-hidden bg-[linear-gradient(135deg,#172554,#020617)] p-6">
      <div className="flex items-center justify-between"><span className="font-display text-lg font-bold text-white">fiature</span><span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">Market live</span></div>
      <div className="mt-7 grid grid-cols-3 gap-3"><span className="h-14 rounded-xl bg-white/10" /><span className="h-14 rounded-xl bg-white/10" /><span className="h-14 rounded-xl bg-white/10" /></div>
      <svg aria-hidden="true" viewBox="0 0 400 100" className={`mt-5 w-full text-cyan-300 ${large ? 'h-32' : 'h-20'}`}><polyline points="0,78 42,65 75,72 112,38 145,50 190,25 230,43 270,18 315,34 360,10 400,22" fill="none" stroke="currentColor" strokeWidth="4" /></svg>
    </div>
  );
  const Icon = categoryIcons[project.categories[0]] || Code2;
  return <div role="img" aria-label={`${project.title} placeholder illustration`} className="grid h-full min-h-52 place-items-center bg-[radial-gradient(circle_at_center,rgba(144,224,239,0.16),transparent_55%)]"><Icon className="h-14 w-14 text-cyan-200/35" strokeWidth={1.2} /></div>;
}

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden border border-[var(--color-rule)] bg-[var(--color-paper-2)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]">
      <div className="aspect-[16/10] overflow-hidden bg-slate-950"><ProjectVisual project={project} /></div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--color-skill-card-blue)]">{project.categories.join(' · ')}</p>
        <h2 className="font-display mt-3 text-xl font-semibold text-[var(--color-ink)]">{project.title}</h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-[var(--color-ink-2)]">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.tags.slice(0, 5).map((tag) => <span key={tag} className="rounded-full border border-[var(--color-rule)] bg-[var(--color-paper)] px-2.5 py-1 text-[0.68rem] text-[var(--color-ink-2)]">{tag}</span>)}</div>
        <Link to={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-skill-card-blue)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">View Case Study <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
    </article>
  );
}

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const visibleProjects = projects.filter((project) => activeCategory === 'All Projects' || project.categories.includes(activeCategory));
  const featured = projects.find((project) => project.featured);

  return (
    <main className="min-h-screen bg-[var(--color-paper)] pt-20 text-[var(--color-ink)]">
      <section className="mx-auto w-full max-w-320 px-[clamp(var(--space-sm),4vw,var(--space-xl))] pb-[var(--space-4xl)] pt-[var(--space-3xl)]">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-accent)]">My work</p>
        <h1 className="mt-4 pb-2 text-[length:var(--text-display)] font-semibold leading-[.8] tracking-[-0.04em] text-[var(--color-skill-card-blue)]">Projects</h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--color-ink-2)] sm:text-lg">A collection of GIS, geospatial engineering, software development and deployment projects focused on solving practical problems with data and technology.</p>

        <div aria-label="Filter projects by category" className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => <button type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)} key={category} className={`shrink-0 whitespace-nowrap border-0 border-b bg-transparent px-4 py-2 text-sm font-semibold text-[var(--color-ink-2)] ${activeCategory === category ? 'border-b-3 border-[var(--color-accent)] text-[var(--color-ink)]' : 'border-[var(--color-rule)]'}`}>{category}</button>)}
        </div>

        {activeCategory === 'All Projects' && <article className="mt-10 grid grid-cols-2 overflow-hidden border border-[var(--color-rule)] bg-[var(--color-paper-2)] max-[900px]:grid-cols-1">
          <div className="min-h-72 overflow-hidden bg-slate-950"><ProjectVisual project={featured} large /></div>
          <div className="flex flex-col justify-center p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-skill-card-blue)]">Featured project · {featured.categories[0]}</p><h2 className="font-display mt-4 text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">{featured.title}</h2><p className="mt-4 leading-7 text-[var(--color-ink-2)]">{featured.summary}</p><div className="mt-6 flex flex-wrap gap-2">{featured.tags.map((tag) => <span key={tag} className="rounded-full border border-[var(--color-rule)] bg-[var(--color-paper)] px-3 py-1.5 text-xs text-[var(--color-ink-2)]">{tag}</span>)}</div><Link to={`/projects/${featured.slug}`} className="mt-7 inline-flex items-center gap-2 font-bold text-[var(--color-skill-card-blue)]">View Case Study <ArrowUpRight className="h-4 w-4" /></Link></div>
        </article>}

        <div className="mt-10 grid grid-cols-3 gap-[var(--space-lg)] max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">{visibleProjects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div>
      </section>
    </main>
  );
}

export default Projects;
