import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import earthquakeMap from '../assets/10_largest_earthquakes.png';
import lakeMap from '../assets/lake_classification.png';
import metroMap from '../assets/metro_station_accessibility.png';
import nycMap from '../assets/nyc_population_density.png';

const capabilities = [
  ['Spatial Analysis', 'Buffer · Dissolve · Zonal Statistics · Normalisation'],
  ['Vector GIS', 'Digitising · Attribute Editing · Spatial Processing'],
  ['Raster GIS', 'Georeferencing · Population Raster · Raster/Vector Analysis'],
  ['Cartography', 'Choropleth Maps · Data-Driven Symbology · Print Layouts'],
  ['Data Management', 'Filtering · Joins · Field Calculator · QGIS Expressions'],
];

const workflow = ['Data Acquisition', 'Data Cleaning', 'CRS & Spatial Referencing', 'Attribute Processing', 'Vector / Raster Processing', 'Spatial Analysis', 'Cartographic Visualisation', 'Print Layout'];

const demonstratedSkills = [
  ['QGIS & GIS', 'QGIS · Vector GIS · Raster GIS · Cartography'],
  ['Spatial Analysis', 'Buffer · Dissolve · Zonal Statistics · Normalisation'],
  ['Spatial Data', 'Vector · Raster · OpenStreetMap · Population Grids'],
  ['Data Processing', 'Attribute Joins · Field Calculator · QGIS Expressions · Data Filtering'],
  ['Spatial Referencing', 'CRS · Reprojection · Ground Control Points · Georeferencing'],
  ['Cartography', 'Choropleth Mapping · Graduated Symbology · Categorised Symbology · Labels · Print Layout'],
];

function Label({ children }) {
  return <p className="text-xs font-bold uppercase tracking-[0.22em] text-[rgb(144_224_239)]">{children}</p>;
}

function MapFigure({ src, alt, title }) {
  return (
    <figure className="overflow-hidden border border-white/10 bg-slate-900">
      <a href={src} target="_blank" rel="noreferrer" aria-label={`Open ${title} at full resolution`}>
        <img src={src} alt={alt} className="block h-auto w-full" loading="lazy" />
      </a>
      <figcaption className="border-t border-white/10 p-5 font-display font-semibold">{title}</figcaption>
    </figure>
  );
}

function Checklist({ items }) {
  return <ul className="mt-6 grid gap-3 sm:grid-cols-2">{items.map((item) => <li key={item} className="flex gap-3 border border-white/[0.07] p-4 text-sm leading-6"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[rgb(144_224_239)]" />{item}</li>)}</ul>;
}

function SkillList({ children }) {
  return <p className="mt-6 border-t border-white/10 pt-5 text-sm font-semibold leading-7 text-[rgb(144_224_239)]">{children}</p>;
}

function PracticalQgisCaseStudy() {
  return (
    <main className="min-h-screen pt-20 bg-[var(--color-paper)] text-[var(--color-ink)] [&_h1]:text-[var(--color-skill-card-blue)]! [&_h2]:text-[var(--color-ink)]! [&_h3]:text-[var(--color-ink)]! [&_p]:text-[var(--color-ink-2)] [&_span]:text-[var(--color-ink-2)] [&_[class*='text-cyan']]:text-[var(--color-accent)]! [&_[class*='text-[rgb']]:text-[var(--color-accent)]! [&_[class*='bg-cyan']]:bg-transparent! [&_[class*='bg-slate-900']]:bg-transparent! [&_[class*='border-white']]:border-[var(--color-rule)]! [&_[class*='border-cyan']]:border-[var(--color-rule)]! [&_[class*='rounded-3xl']]:rounded-none! [&_[class*='rounded-2xl']]:rounded-none! [&_[class*='rounded-full']]:rounded-none! [&_figure]:rounded-none! [&_figure]:border-0! [&_figure]:bg-transparent! [&_figure]:shadow-none! [&_figure_img]:saturate-75 [&_figcaption]:border-[var(--color-rule)]!">
      <article>
        <header className="w-full px-[clamp(var(--space-sm),6vw,var(--space-3xl))] pb-[var(--space-2xl)] pt-[var(--space-3xl)]">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400"><Link to="/projects">Projects</Link><span className="mx-2">/</span><span>Practical QGIS</span></nav>
          <div className="mt-10 grid grid-cols-[minmax(0,.65fr)_minmax(0,1.35fr)] items-end gap-10 max-[900px]:grid-cols-1">
            <div>
              <Label>01 · GIS · QGIS · Spatial Analysis · Cartography</Label>
              <h1 className="font-display mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Practical QGIS: Hands-On GIS Projects & Spatial Analysis</h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">A collection of practical GIS projects exploring core QGIS workflows including spatial data processing, thematic mapping, georeferencing, digitising, geoprocessing, raster analysis and cartographic visualisation.</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[earthquakeMap, nycMap, lakeMap, metroMap].map((src, index) => <img key={src} src={src} alt={['Deadliest earthquakes map', 'NYC population density map', 'Bangalore historical lakes classification map', 'Bangalore Metro population accessibility map'][index]} className="aspect-[4/3] h-full w-full object-cover" />)}
            </div>
          </div>
          <div className="mt-10 grid gap-4 border-y border-white/10 py-7 sm:grid-cols-2 lg:grid-cols-4">{[['Software', 'QGIS'], ['Projects', '5'], ['Training', 'Spatial Thoughts'], ['Focus', 'GIS Fundamentals · Spatial Analysis · Cartography']].map(([label, value]) => <div key={label}><p className="text-[0.65rem] font-bold uppercase tracking-[0.18em]">{label}</p><p className="mt-2 text-sm font-semibold">{value}</p></div>)}</div>
        </header>

        <div className="mx-auto w-full max-w-312 space-y-28 px-5 pb-24 sm:px-8 lg:px-12 [&>section]:border-t [&>section]:border-[var(--color-rule)] [&>section]:pt-[var(--space-xl)]">
          <section>
            <Label>02 · Context</Label>
            <h2 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">Building Practical GIS Foundations</h2>
            <div className="mt-5 max-w-3xl space-y-4 leading-8"><p>These projects were completed as part of the <strong>Spatial Thoughts Introduction to QGIS</strong> course and provided hands-on experience working with real spatial datasets.</p><p>Each exercise focused on a different GIS workflow, progressing from data visualisation and attribute processing to georeferencing, digitising, raster analysis and population accessibility modelling.</p><p>The aim of this portfolio page is to show the practical GIS techniques applied across the course rather than simply present the course itself.</p></div>
          </section>

          <section>
            <Label>03 · Capabilities</Label>
            <h2 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">Vector · Raster · Spatial Analysis · Cartography</h2>
            <div className="mt-8 grid gap-0 border-t border-white/10 sm:grid-cols-2">{capabilities.map(([title, text]) => <div key={title} className="border-b border-white/10 p-5"><h3 className="font-display text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6">{text}</p></div>)}</div>
          </section>

          <section>
            <Label>04 · Project 01 · Earthquake Mapping</Label>
            <h2 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">Mapping the 10 Deadliest Earthquakes, 2000–2020</h2>
            <p className="mt-3 font-semibold">Focus: Data Filtering · Data-Driven Symbology · Labelling · Cartography</p>
            <div className="mt-8"><MapFigure src={earthquakeMap} alt="Map showing the ten deadliest earthquakes between 2000 and 2020 with global active faults" title="10 Deadliest Earthquakes" /></div>
            <h3 className="font-display mt-8 text-2xl font-semibold">Challenge</h3><p className="mt-3 max-w-3xl leading-8">Identify and visualise the ten deadliest earthquake events between 2000 and 2020 while providing tectonic context using global active fault data.</p>
            <h3 className="font-display mt-8 text-2xl font-semibold">What I Did</h3><Checklist items={['Filtered earthquake records to the required 2000–2020 period.', 'Ranked events using total recorded deaths.', 'Applied data-defined symbol sizing to communicate differences between events.', 'Integrated GEM active fault data for geological context.', 'Created dynamic labels and a final QGIS print layout.']} />
            <SkillList>Filtering · QGIS Expressions · Proportional Symbols · Labelling · Print Layout</SkillList>
          </section>

          <section>
            <Label>05 · Project 02 · Thematic Mapping</Label>
            <h2 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">NYC Population Density</h2>
            <p className="mt-3 font-semibold">Focus: Attribute Joins · Normalisation · Choropleth Mapping</p>
            <div className="mt-8"><MapFigure src={nycMap} alt="Choropleth map of New York City population density" title="NYC Population Density" /></div>
            <h3 className="font-display mt-8 text-2xl font-semibold">Challenge</h3><p className="mt-3 max-w-3xl leading-8">Compare population concentration across geographical areas without allowing differences in polygon size to distort the analysis.</p>
            <h3 className="font-display mt-8 text-2xl font-semibold">What I Did</h3><Checklist items={['Joined population attributes to spatial boundary data.', 'Calculated the geographical area of each polygon.', 'Normalised population using population divided by area.', 'Converted the result into population per square mile.', 'Used QGIS Field Calculator and the round() function to prepare the density field.', 'Created a graduated choropleth map.']} />
            <p className="font-display mt-8 border-l-2 border-cyan-200 pl-5 text-2xl">Population Density = Population ÷ Area</p>
            <SkillList>Attribute Joins · Field Calculator · Normalisation · Choropleth Mapping · Graduated Symbology</SkillList>
          </section>

          <section>
            <Label>06 · Project 03 · Georeferencing</Label>
            <h2 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">Georeferencing a Historical Map of Bangalore (1924)</h2>
            <p className="mt-3 font-semibold">Focus: Raster GIS · GCPs · Georeferencing · Historical GIS</p>
            <div className="mt-8"><MapFigure src={lakeMap} alt="Bangalore historical map used for georeferencing and lake analysis" title="Bangalore Historical Map Georeferencing" /></div>
            <h3 className="font-display mt-8 text-2xl font-semibold">Challenge</h3><p className="mt-3 max-w-3xl leading-8">Transform a historical scanned map without modern geographic coordinates into a spatially referenced raster that could be compared with present-day mapping.</p>
            <h3 className="font-display mt-8 text-2xl font-semibold">What I Did</h3><Checklist items={['Used OpenStreetMap as a modern spatial reference.', 'Identified matching locations as Ground Control Points (GCPs).', 'Applied an appropriate transformation.', 'Aligned the historical raster with modern geographical coordinates.', 'Compared historical and present-day Bangalore.']} />
            <SkillList>Raster GIS · Ground Control Points · Georeferencing · CRS · Historical GIS</SkillList>
          </section>

          <section>
            <Label>07 · Project 04 · Digitising</Label>
            <h2 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">Digitising & Classifying Bangalore&apos;s Historical Lakes</h2>
            <p className="mt-3 font-semibold">Focus: Digitising · Attribute Design · Feature Classification</p>
            <div className="mt-8"><MapFigure src={lakeMap} alt="Map classifying Bangalore historical lakes as healthy, partially lost or lost" title="Bangalore Historical Lakes Digitisation" /></div>
            <h3 className="font-display mt-8 text-2xl font-semibold">Challenge</h3><p className="mt-3 max-w-3xl leading-8">Convert historical lake features visible on the georeferenced 1924 Bangalore map into structured vector GIS data.</p>
            <h3 className="font-display mt-8 text-2xl font-semibold">What I Did</h3><Checklist items={['Digitised historical lake boundaries as polygon features.', 'Designed attributes for the new vector dataset.', 'Used predefined dropdown/value-map values to maintain consistent data entry.', 'Compared historical lake locations against modern mapping.', 'Classified lakes as Healthy, Partially Lost, or Lost.', 'Applied categorised symbology to visualise lake condition.']} />
            <p className="mt-8 border-y border-white/10 py-5 text-sm font-semibold">Historical Raster → Interpretation → Digitisation → Vector Dataset → Classification</p>
            <SkillList>Digitising · Vector Editing · Attribute Design · Classification · Categorised Symbology</SkillList>
          </section>

          <section>
            <Label>08 · Project 05 · Spatial Analysis</Label>
            <h2 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">Population Accessibility to Bangalore Metro Stations</h2>
            <p className="mt-3 font-semibold">Focus: Buffering · Raster Analysis · Zonal Statistics · Population Accessibility</p>
            <div className="mt-8"><MapFigure src={metroMap} alt="Map showing population accessibility within one kilometre of Bangalore Metro stations" title="Bangalore Metro Population Accessibility" /></div>
            <h3 className="font-display mt-8 text-2xl font-semibold">Question</h3><p className="font-display mt-3 text-2xl">How many people in Bangalore live within 1 km of a Metro station?</p>
            <p className="mt-8 border-y border-white/10 py-5 text-sm font-semibold">Metro Stations → 1 km Buffer → Dissolve → Population Raster → Zonal Statistics → Accessibility Estimate</p>
            <h3 className="font-display mt-8 text-2xl font-semibold">What I Did</h3><Checklist items={['Obtained and prepared Bangalore Metro station data.', 'Ensured the analysis used an appropriate projected coordinate reference system for distance-based analysis.', 'Created 1 km accessibility buffers around Metro stations.', 'Dissolved overlapping buffers into a single accessibility zone.', 'Used gridded population data to represent population distribution.', 'Applied Zonal Statistics to estimate population within the accessibility area.']} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2"><div className="border border-white/10 p-6"><p className="font-display text-4xl font-semibold text-[rgb(144_224_239)]">3.51 million</p><p className="mt-2">Residents estimated to live within 1 km of a Metro station.</p></div><div className="border border-white/10 p-6"><p className="font-display text-4xl font-semibold text-[rgb(144_224_239)]">29.8%</p><p className="mt-2">Of Bangalore&apos;s estimated population.</p></div></div>
            <p className="mt-5 max-w-3xl leading-8">Approximately <strong>3.51 million of an estimated 11.78 million residents</strong> were located within the defined 1 km Metro accessibility zone.</p>
            <SkillList>Buffer · Dissolve · Raster Analysis · Zonal Statistics · Population Estimation · Accessibility Analysis</SkillList>
          </section>

          <section>
            <Label>09 · Overall GIS Workflow</Label>
            <div className="mt-8 grid gap-0 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">{workflow.map((step, index) => <div key={step} className="flex items-center justify-between border-b border-white/10 p-5"><span className="font-semibold">{step}</span>{index < workflow.length - 1 && <ArrowRight aria-hidden="true" className="h-4 w-4 text-cyan-200" />}</div>)}</div>
          </section>

          <section>
            <Label>10 · Skills Demonstrated</Label>
            <div className="mt-8 grid gap-0 border-t border-white/10 sm:grid-cols-2">{demonstratedSkills.map(([title, text]) => <div key={title} className="border-b border-white/10 p-5"><h3 className="font-display text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6">{text}</p></div>)}</div>
          </section>

          <section>
            <Label>11 · Learning Outcome</Label>
            <div className="mt-5 max-w-3xl space-y-4 leading-8"><p>The project series strengthened my practical understanding of <strong>end-to-end GIS workflows</strong>, from preparing and transforming spatial data through vector and raster analysis to interpreting results and communicating them through professional map layouts.</p><p>These foundations have since supported more advanced independent work involving transport accessibility, population analysis, spatial databases and geospatial development.</p></div>
          </section>

          <section>
            <Label>12 · Training / Course Attribution</Label>
            <h2 className="font-display mt-4 text-3xl font-semibold">Spatial Thoughts — Introduction to QGIS</h2>
            <dl className="mt-7 grid gap-0 border-y border-white/10 sm:grid-cols-2">{[['Course', 'Introduction to QGIS'], ['Provider', 'Spatial Thoughts'], ['Software', 'QGIS'], ['Status', 'Completed']].map(([term, description]) => <div key={term} className="border-b border-white/10 p-5"><dt className="text-xs font-bold uppercase tracking-widest">{term}</dt><dd className="mt-2 font-semibold">{description}</dd></div>)}</dl>
          </section>

          <footer>
            <Label>13 · Project Navigation</Label>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-7"><Link to="/projects/greater-manchester-transport-coverage" className="inline-flex items-center gap-2 font-bold"><ArrowLeft className="h-4 w-4" /> Previous Project</Link><Link to="/projects" className="font-bold">Back to All Projects</Link><Link to="/projects/diary-api" className="inline-flex items-center gap-2 font-bold">Next Project <ArrowRight className="h-4 w-4" /></Link></div>
          </footer>
        </div>
      </article>
    </main>
  );
}

export default PracticalQgisCaseStudy;
