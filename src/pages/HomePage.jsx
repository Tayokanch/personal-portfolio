import bannerImage from '../assets/gis-banner4.webp';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

const contactDetails = [
  { label: 'Phone', value: '+44 (0) 70466 2016', href: 'tel:+447466072016', icon: Phone },
  { label: 'Email', value: 'quadrimotayo@gmail,com', href: 'quadrimotayo@gmail.com', icon: Mail },
  { label: 'Location', value: 'Manchester, United Kingdom', icon: MapPin },
  { label: 'LinkedIn', value: 'Connect with me', href: 'https://linkedin.com/in/omotayoqua', icon: FaLinkedinIn },
  { label: 'GitHub', value: 'View my code', href: 'https://github.com/Tayokanch', icon: FaGithub },
];

function ContactItem({ item }) {
  const Icon = item.icon;
  const content = <><span className="grid h-10 w-10 shrink-0 place-items-center text-[var(--color-skill-card)] transition group-hover:text-[var(--color-accent)]"><Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} /></span><span className="min-w-0"><span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--color-ink-2)]">{item.label}</span><span className="mt-0.5 block truncate text-sm text-[var(--color-ink-2)]">{item.value}</span></span></>;
  const className = 'group flex min-h-17 min-w-0 items-center gap-3 border-t border-[var(--color-rule)] px-0 transition hover:bg-[var(--color-paper-2)]';
  return item.href ? <a className={className} href={item.href}>{content}</a> : <div className={className}>{content}</div>;
}

function HomePage() {
  return (
    <section id="home" className="relative isolate min-h-svh overflow-hidden bg-cover bg-center pt-20 text-[var(--color-paper)] before:absolute before:inset-0 before:-z-10 before:bg-[color-mix(in_oklch,var(--color-ink)_68%,transparent)] after:absolute after:inset-0 after:-z-20 after:bg-[color-mix(in_oklch,var(--color-skill-card)_18%,transparent)] max-[900px]:before:bg-[color-mix(in_oklch,var(--color-ink)_74%,transparent)]" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="grid min-h-[calc(100svh-4.25rem)] w-full grid-cols-[minmax(0,3fr)_minmax(18rem,1fr)] items-end gap-[var(--space-3xl)] px-[clamp(var(--space-sm),4vw,var(--space-xl))] pb-[var(--space-4xl)] pt-[var(--space-3xl)] max-[900px]:grid-cols-1">
        <div className="relative z-0 max-w-4xl before:pointer-events-none before:absolute before:-inset-y-[var(--space-xl)] before:-left-[var(--space-lg)] before:-right-[var(--space-3xl)] before:-z-10 before:bg-[linear-gradient(90deg,color-mix(in_oklch,var(--color-ink)_76%,transparent),color-mix(in_oklch,var(--color-ink)_42%,transparent)_64%,transparent)]">
          <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]"><span className="h-px w-10 bg-[var(--color-accent)]" />Mapping ideas into impact</div>
          <h1 className="max-w-[8ch] text-[length:var(--text-display)] font-semibold leading-[.82] tracking-[-.055em] text-[var(--color-paper)] max-[520px]:text-[length:clamp(3.5rem,18vw,5rem)]">Hi, I’m <span className="text-[var(--color-highlight)]">Omotayo Quadri.</span></h1>
          <p className="font-display mt-7 max-w-2xl text-xl font-medium leading-relaxed text-[color-mix(in_oklch,var(--color-paper)_78%,var(--color-ink))] sm:text-2xl">GIS Analyst <span className="text-[var(--color-accent)]">|</span> Geospatial Developer <span className="text-[var(--color-accent)]">|</span> Geospatial Engineer</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[color-mix(in_oklch,var(--color-paper)_78%,var(--color-ink))] sm:text-lg">I combine GIS, software development and cloud technologies to analyse spatial data, build geospatial applications and deliver deployable solutions to real-world problems.</p>
          <a href="#contact" className="mt-9 inline-flex items-center gap-3 whitespace-nowrap border border-[color-mix(in_oklch,var(--color-paper)_48%,transparent)] bg-[var(--color-skill-card)] px-6 py-3 text-sm font-bold text-[var(--color-paper)] hover:-translate-y-0.5 hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)]">Get in touch <ArrowRight aria-hidden="true" className="h-4 w-4" /></a>
        </div>

        <aside id="contact" className="relative self-end scroll-mt-28 border border-[var(--color-rule)] border-t-4 border-t-[var(--color-skill-card)] bg-[color-mix(in_oklch,var(--color-paper)_96%,transparent)] p-[var(--space-xl)] text-[var(--color-ink)] backdrop-blur-xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-skill-card)]">Contact</p>
          <h2 className="mt-3 max-w-[12ch] text-[length:var(--text-xl)] font-semibold leading-[1.05] text-[var(--color-ink)]">Let’s build something spatial.</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--color-ink-2)]">Have a project or opportunity in mind? I’d love to hear about it.</p>
          <div className="mt-[var(--space-lg)] grid border-b border-[var(--color-rule)]">{contactDetails.map((item) => <ContactItem item={item} key={item.label} />)}</div>
        </aside>
      </div>
    </section>
  );
}

export default HomePage;
