import bannerImage from '../assets/gis-banner4.webp';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

const contactDetails = [
  { label: 'Phone', value: '+44 (0) 70466 2016', href: 'tel:+447466072016', icon: Phone },
  { label: 'Email', value: 'hello@yourdomain.com', href: 'quadrimotayo@gmail,com', icon: Mail },
  { label: 'Location', value: 'London, United Kingdom', icon: MapPin },
  { label: 'LinkedIn', value: 'Connect with me', href: 'www.linkedin.com/in/omotayoqua', icon: FaLinkedinIn },
  { label: 'GitHub', value: 'View my code', href: 'https://github.com/Tayokanch', icon: FaGithub },
];

function ContactItem({ item }) {
  const Icon = item.icon;
  const content = <><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-200/20 bg-cyan-200/10 text-[rgb(144_224_239)] transition group-hover:border-cyan-200/50 group-hover:bg-cyan-200/15"><Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} /></span><span className="min-w-0"><span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-cyan-100/50">{item.label}</span><span className="mt-0.5 block truncate text-sm text-slate-100 transition group-hover:text-[rgb(144_224_239)]">{item.value}</span></span></>;
  const className = 'group flex min-w-0 items-center gap-3 rounded-xl p-2 transition hover:bg-white/[0.04]';
  return item.href ? <a className={className} href={item.href}>{content}</a> : <div className={className}>{content}</div>;
}

function HomePage() {
  return (
    <section id="home" className="portfolio-home relative isolate min-h-screen overflow-hidden bg-cover bg-center pt-20" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="absolute inset-0 -z-10 bg-slate-950/50" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,6,23,0.9)_0%,rgba(2,6,23,0.7)_45%,rgba(2,6,23,0.3)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_35%,rgba(144,224,239,0.08),transparent_35%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:px-12 lg:py-20">
        <div className="max-w-3xl">
          <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#34cee9]"><span className="h-px w-10 bg-[#90e0ef]" />Mapping ideas into impact</div>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">Hi, I’m <span className="text-[#90E0EF]">Omotayo Quadri.</span></h1>
          <p className="font-display mt-7 max-w-2xl text-xl font-medium leading-relaxed text-cyan-50 sm:text-2xl">GIS Analyst <span className="text-[#90E0EF]">|</span> Geospatial Developer <span className="text-[#90E0EF]">|</span> Geospatial Engineer</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">I combine GIS, software development and cloud technologies to analyse spatial data, build geospatial applications and deliver deployable solutions to real-world problems.</p>
          <a href="#contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[rgb(144_224_239)] px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_12px_35px_rgba(144,224,239,0.2)] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">Get in touch <ArrowRight aria-hidden="true" className="h-4 w-4" /></a>
        </div>

        <aside id="contact" className="relative scroll-mt-28 overflow-hidden rounded-3xl border border-cyan-200/15 bg-slate-950/65 p-5 shadow-2xl shadow-slate-950/50 backdrop-blur-xl sm:p-7">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[rgb(144_224_239)]">Contact</p>
          <h2 className="font-display mt-3 text-2xl font-semibold text-white">Let’s build something spatial.</h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">Have a project or opportunity in mind? I’d love to hear about it.</p>
          <div className="mt-6 grid gap-1">{contactDetails.map((item) => <ContactItem item={item} key={item.label} />)}</div>
        </aside>
      </div>
    </section>
  );
}

export default HomePage;
