import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import profileImage from '../assets/my_image.jpg';

const contactLinks = [
  {
    label: 'Email',
    value: 'hello@yourdomain.com',
    href: 'mailto:hello@yourdomain.com',
    icon: Mail,
  },
  { label: 'Location', value: 'Manchester, United Kingdom', icon: MapPin },
  {
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    value: 'Explore my work',
    href: 'https://github.com/',
    icon: FaGithub,
  },
];

function ContactLink({ item }) {
  const Icon = item.icon;
  const content = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-200/20 bg-cyan-200/10 text-[rgb(144_224_239)] transition group-hover:border-cyan-200/50 group-hover:bg-cyan-200/15">
        <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-cyan-100/45">
          {item.label}
        </span>
        <span className="mt-1 block truncate text-sm text-slate-100 transition group-hover:text-[rgb(144_224_239)]">
          {item.value}
        </span>
      </span>
    </>
  );
  const className =
    'group flex min-w-0 items-center gap-3 rounded-2xl border border-white/[0.06] bg-slate-950/45 p-3 transition hover:-translate-y-0.5 hover:border-cyan-200/20';

  return item.href ? (
    <a className={className} href={item.href}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}

function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 pt-20 text-white">
      <section className="relative isolate">
        <div className="absolute left-[-12rem] top-24 -z-10 h-96 w-96 rounded-full bg-cyan-400/[0.07] blur-3xl" />
        <div className="absolute right-[-10rem] top-1/3 -z-10 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-3xl" />

        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[rgb(144_224_239)]">
                <span className="h-px w-10 bg-[rgb(144_224_239)]" />
                About me
              </p>
              <h1 className="font-display mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Bringing GIS, data and technology together.
              </h1>

              <div className="mt-8 space-y-6 text-base leading-8 text-slate-300">
                <p>
                  I am a Manchester-based GIS professional with a BSc in
                  Geography and Planning and an MSc in Geographic Information
                  Systems. My background has given me a strong understanding of
                  spatial relationships and how geographic data can support
                  planning and decision-making.
                </p>
                <p>
                  Alongside GIS, I have developed skills in software
                  development, data engineering, DevOps and cloud technologies,
                  including Python, JavaScript, React, Node.js, SQL, PostgreSQL,
                  Linux, Docker, CI/CD and AWS fundamentals. I use these skills
                  in spatial analysis, geoprocessing, spatial databases,
                  cartographic visualisation, automation and data-driven
                  applications.
                </p>
                <p>
                  My goal is to become a{' '}
                  <span className="font-semibold text-[rgb(144_224_239)]">
                    Geospatial Engineer
                  </span>
                  . I am developing my knowledge of Python, PostGIS, GeoPandas,
                  Shapely, Rasterio, GDAL, Leaflet and MapLibre to build spatial
                  data pipelines, geospatial APIs, interactive maps and
                  cloud-deployed GIS solutions. I aim to combine my geographic
                  and technical knowledge to address challenges across
                  transport, utilities, infrastructure, environmental planning
                  and location intelligence, turning complex spatial data into
                  useful products and practical insights.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] border border-cyan-200/10" />
              <div className="absolute -bottom-7 -right-7 -z-10 h-40 w-40 rounded-full bg-cyan-300/15 blur-3xl" />
              <figure className="relative overflow-hidden rounded-[1.75rem] border border-cyan-100/20 bg-slate-900 shadow-[0_30px_90px_rgba(2,6,23,0.6)]">
                <img
                  src={profileImage}
                  alt="Omotayo Quadri"
                  className="aspect-[4/5] h-full w-full object-cover object-top"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent px-6 pb-6 pt-20">
                  <p className="font-display text-xl font-semibold text-white">
                    Omotayo Quadri
                  </p>
                  <p className="mt-1 text-sm text-[rgb(144_224_239)]">
                    GIS Professional · Manchester, UK
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="mt-20 rounded-3xl border border-cyan-200/10 bg-slate-900/60 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-7">
            <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[rgb(144_224_239)]">
                  Connect
                </p>
                <h2 className="font-display mt-2 text-2xl font-semibold text-white">
                  Let’s start a conversation.
                </h2>
              </div>
              <p className="text-sm text-slate-400">
                Open to geospatial opportunities and collaborations.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {contactLinks.map((item) => (
                <ContactLink item={item} key={item.label} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
