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
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-slate-900/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/25">
      <div className="aspect-[16/10] overflow-hidden bg-slate-950"><ProjectVisual project={project} /></div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[rgb(144_224_239)]">{project.categories.join(' · ')}</p>
        <h2 className="font-display mt-3 text-xl font-semibold text-white">{project.title}</h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.tags.slice(0, 5).map((tag) => <span key={tag} className="rounded-full border border-white/[0.07] bg-slate-950/60 px-2.5 py-1 text-[0.68rem] text-slate-300">{tag}</span>)}</div>
        <Link to={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[rgb(144_224_239)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">View Case Study <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
    </article>
  );
}

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const visibleProjects = projects.filter((project) => activeCategory === 'All Projects' || project.categories.includes(activeCategory));
  const featured = projects.find((project) => project.featured);

  return (
    <main className="min-h-screen bg-slate-950 pt-20 text-white">
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[rgb(144_224_239)]">My work</p>
        <h1 className="font-display mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">Projects</h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">A collection of GIS, geospatial engineering, software development and deployment projects focused on solving practical problems with data and technology.</p>

        <div aria-label="Filter projects by category" className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => <button type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)} key={category} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 ${activeCategory === category ? 'border-[rgb(144_224_239)] bg-[rgb(144_224_239)] text-slate-950' : 'border-white/10 bg-slate-900 text-slate-300 hover:border-cyan-200/35'}`}>{category}</button>)}
        </div>

        {activeCategory === 'All Projects' && <article className="mt-10 grid overflow-hidden rounded-3xl border border-cyan-200/15 bg-slate-900/70 lg:grid-cols-2">
          <div className="min-h-72 overflow-hidden bg-slate-950"><ProjectVisual project={featured} large /></div>
          <div className="flex flex-col justify-center p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[rgb(144_224_239)]">Featured project · {featured.categories[0]}</p><h2 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">{featured.title}</h2><p className="mt-4 leading-7 text-slate-400">{featured.summary}</p><div className="mt-6 flex flex-wrap gap-2">{featured.tags.map((tag) => <span key={tag} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-slate-300">{tag}</span>)}</div><Link to={`/projects/${featured.slug}`} className="mt-7 inline-flex items-center gap-2 font-bold text-[rgb(144_224_239)]">View Case Study <ArrowUpRight className="h-4 w-4" /></Link></div>
        </article>}

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{visibleProjects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div>
      </section>
    </main>
  );
}

export default Projects;
