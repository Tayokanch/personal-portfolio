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
      <span className="grid h-11 w-11 shrink-0 place-items-center text-[var(--color-accent)]">
        <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--color-ink-2)]">
          {item.label}
        </span>
        <span className="mt-1 block truncate text-sm text-[var(--color-ink-2)] transition group-hover:text-[var(--color-accent)]">
          {item.value}
        </span>
      </span>
    </>
  );
  const className =
    'group flex min-w-0 items-center gap-3 border-b border-[var(--color-rule)] p-3';

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
    <main className="min-h-screen overflow-hidden bg-[var(--color-paper)] pt-20 text-[var(--color-ink)]">
      <section className="relative isolate">
        <div className="w-full px-[clamp(var(--space-sm),6vw,var(--space-3xl))] pb-[var(--space-4xl)] pt-[var(--space-3xl)]">
          <div className="grid grid-cols-[minmax(0,1.45fr)_minmax(16rem,.55fr)] items-start gap-14 max-[900px]:grid-cols-1 lg:gap-20">
            <div>
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[rgb(144_224_239)]">
                <span className="h-px w-10 bg-[rgb(144_224_239)]" />
                About me
              </p>
              <h1 className="mt-5 max-w-2xl text-[length:clamp(3.5rem,7vw,7rem)] font-semibold leading-[.9] tracking-[-0.035em] text-[var(--color-skill-card-blue)]">
                Bringing GIS, data and technology together.
              </h1>

              <div className="mt-8 space-y-6 text-base leading-8 text-[var(--color-ink-2)]">
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
              <figure className="relative overflow-hidden">
                <img
                  src={profileImage}
                  alt="Omotayo Quadri"
                  className="aspect-[4/5] h-full w-full object-cover object-top grayscale"
                />
                <figcaption className="border-t border-[var(--color-rule)] py-[var(--space-sm)]">
                  <p className="font-display text-xl font-semibold text-[var(--color-ink)]">
                    Omotayo Quadri
                  </p>
                  <p className="mt-1 text-sm text-[rgb(144_224_239)]">
                    GIS Professional · Manchester, UK
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="mt-20 border-t border-[var(--color-rule)] p-5 sm:p-7">
            <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[rgb(144_224_239)]">
                  Connect
                </p>
                <h2 className="font-display mt-2 text-2xl font-semibold text-[var(--color-ink)]">
                  Let’s start a conversation.
                </h2>
              </div>
              <p className="text-sm text-[var(--color-ink-2)]">
                Open to geospatial opportunities and collaborations.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 max-[520px]:grid-cols-1">
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
