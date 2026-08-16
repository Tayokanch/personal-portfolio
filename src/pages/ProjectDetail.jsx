import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getProject } from '../data/projects';
import { ProjectVisual } from './Projects';
import GreaterManchesterCaseStudy from './GreaterManchesterCaseStudy';
import PracticalQgisCaseStudy from './PracticalQgisCaseStudy';

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <Navigate to="/projects" replace />;
  if (project.caseStudyType === 'greater-manchester') return <GreaterManchesterCaseStudy />;
  if (project.caseStudyType === 'practical-qgis') return <PracticalQgisCaseStudy />;

  if (project.placeholder) return (
    <main className="grid min-h-screen place-items-center bg-[var(--color-paper)] px-5 pt-20 text-[var(--color-ink)] [&_h1]:text-[var(--color-skill-card-blue)]">
      <div className="max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[rgb(144_224_239)]">{project.categories[0]}</p><h1 className="font-display mt-5 text-4xl font-semibold sm:text-6xl">{project.title}</h1><p className="mt-6 leading-7 text-slate-400">This route is ready. The complete case study will be added when the project information and final visuals are available.</p><Link to="/projects" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[rgb(144_224_239)] px-5 py-3 text-sm font-bold text-slate-950"><ArrowLeft className="h-4 w-4" /> Back to projects</Link></div>
    </main>
  );

  return (
    <main className="min-h-screen pt-20 bg-[var(--color-paper)] text-[var(--color-ink)] [&_h1]:text-[var(--color-skill-card-blue)]! [&_h2]:text-[var(--color-ink)]! [&_h3]:text-[var(--color-ink)]! [&_p]:text-[var(--color-ink-2)] [&_span]:text-[var(--color-ink-2)] [&_[class*='text-cyan']]:text-[var(--color-accent)]! [&_[class*='text-[rgb']]:text-[var(--color-accent)]! [&_[class*='bg-cyan']]:bg-transparent! [&_[class*='bg-slate-900']]:bg-transparent! [&_[class*='border-white']]:border-[var(--color-rule)]! [&_[class*='border-cyan']]:border-[var(--color-rule)]! [&_[class*='rounded-3xl']]:rounded-none! [&_[class*='rounded-2xl']]:rounded-none! [&_[class*='rounded-full']]:rounded-none! [&_figure]:rounded-none! [&_figure]:border-0! [&_figure]:bg-transparent! [&_figure]:shadow-none! [&_figure_img]:saturate-75 [&_figcaption]:border-[var(--color-rule)]!">
      <article>
        <header className="w-full px-[clamp(var(--space-sm),6vw,var(--space-3xl))] pb-[var(--space-2xl)] pt-[var(--space-3xl)]">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400"><Link to="/projects" className="hover:text-cyan-200">Projects</Link><span className="mx-2">/</span><span className="text-slate-200">{project.shortTitle}</span></nav>
          <div className="mt-10 grid grid-cols-[minmax(0,.65fr)_minmax(0,1.35fr)] items-end gap-10 max-[900px]:grid-cols-1">
            <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[rgb(144_224_239)]">{project.categories.join(' · ')}</p><h1 className="font-display mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">{project.title}</h1><p className="mt-5 text-lg leading-8 text-slate-400">{project.summary}</p><div className="mt-7 flex flex-wrap gap-3"><a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[rgb(144_224_239)] px-5 py-3 text-sm font-bold text-slate-950"><FaGithub className="h-4 w-4" /> View repository</a>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-[rgb(144_224_239)] hover:border-cyan-200/40">Live project <ArrowUpRight className="h-4 w-4" /></a>}</div></div>
            <div className="aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl"><ProjectVisual project={project} large /></div>
          </div>
        </header>

        <section className="border-y border-white/[0.07] bg-slate-900/50"><div className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">{[['Role', project.role], ['Status', project.status], ['Year', project.year], ['Core stack', project.tags.slice(0, 3).join(', ')]].map(([label, value]) => <div key={label}><p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#90E0EF]">{label}</p><p className="mt-2 text-sm font-semibold text-slate-100">{value}</p></div>)}</div></section>

        <div className="mx-auto w-full max-w-312 space-y-16 px-5 py-20 sm:px-8 lg:py-28 [&>section]:border-t [&>section]:border-[var(--color-rule)] [&>section]:pt-[var(--space-xl)]">
          <section><p className="text-xs font-bold uppercase tracking-[0.22em] text-[rgb(144_224_239)]">01 · Overview</p><h2 className="font-display mt-3 text-3xl font-semibold">The project</h2><p className="mt-5 text-base leading-8 text-slate-300">{project.overview}</p></section>
          <section><p className="text-xs font-bold uppercase tracking-[0.22em] text-[rgb(144_224_239)]">02 · Features</p><h2 className="font-display mt-3 text-3xl font-semibold">What it delivers</h2><div className="mt-6 grid gap-3 sm:grid-cols-2">{project.features.map((feature) => <div key={feature} className="flex gap-3 rounded-2xl border border-white/[0.07] bg-slate-900/60 p-4 text-sm leading-6 text-slate-300"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[rgb(144_224_239)]" />{feature}</div>)}</div></section>
          <section className="grid gap-10 md:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[rgb(144_224_239)]">03 · Architecture</p><h2 className="font-display mt-3 text-3xl font-semibold">Technical design</h2><p className="mt-5 leading-8 text-slate-300">{project.architecture}</p></div><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[rgb(144_224_239)]">04 · Deployment</p><h2 className="font-display mt-3 text-3xl font-semibold">Delivery</h2><p className="mt-5 leading-8 text-slate-300">{project.deployment}</p></div></section>
          <section className="rounded-3xl border border-cyan-200/15 bg-cyan-200/[0.06] p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[rgb(144_224_239)]">Outcome</p><p className="font-display mt-4 text-2xl leading-relaxed text-white">{project.outcome}</p></section>
          <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8"><Link to="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-[rgb(144_224_239)]"><ArrowLeft className="h-4 w-4" /> All projects</Link><a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white">View source <ArrowUpRight className="h-4 w-4" /></a></footer>
        </div>
      </article>
    </main>
  );
}

export default ProjectDetail;
