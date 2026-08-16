import diaryImage from '../assets/projects/diaryhub.gif';
import fiatureImage from '../assets/fiature.png'
import vogueImage from '../assets/projects/voguenest.gif';
import manchesterHero from '../assets/hero_map.png';
import practicalQgisHero from '../assets/10_largest_earthquakes.png';

export const categories = ['All Projects', 'GIS & Spatial Analysis', 'Geospatial Engineering', 'Software Engineering', 'DevOps & Cloud'];

export const projects = [
  {
    slug: 'greater-manchester-transport-coverage', title: 'Greater Manchester Transport Accessibility', shortTitle: 'Transport Accessibility', categories: ['GIS & Spatial Analysis'], summary: 'Examining transport infrastructure, geographic coverage and population accessibility across Greater Manchester.', tags: ['QGIS', 'Spatial Analysis', 'Raster Analysis', 'Zonal Statistics', 'Cartography'], status: 'Completed', year: '2026', role: 'Geospatial Analyst', image: manchesterHero, imageAlt: 'Map from the Greater Manchester public transport accessibility study', caseStudyType: 'greater-manchester', featured: true,
  },
  {
    slug: 'practical-qgis-projects', title: 'Practical QGIS: Hands-On GIS Projects & Spatial Analysis', shortTitle: 'Practical QGIS', categories: ['GIS & Spatial Analysis', 'Geospatial Engineering'], summary: 'Five applied GIS projects covering thematic mapping, georeferencing, digitising, raster analysis and spatial accessibility.', tags: ['QGIS', 'Spatial Analysis', 'Cartography'], status: 'Completed', role: 'GIS Analyst', image: practicalQgisHero, imageAlt: 'Map of the ten deadliest earthquakes between 2000 and 2020', caseStudyType: 'practical-qgis', featured: false,
  },
  {
    slug: 'diary-api', title: 'DiaryHub API & Deployment Platform', shortTitle: 'DiaryHub API', categories: ['Software Engineering', 'DevOps & Cloud'], summary: 'A containerised journal API with JWT authentication, PostgreSQL persistence, automated delivery and load-balanced service replicas.', tags: ['Node.js', 'PostgreSQL', 'Docker', 'Jenkins', 'Nginx'], status: 'Completed', year: '2026', role: 'Backend & DevOps Engineer', image: diaryImage, imageAlt: 'DiaryHub container and deployment architecture diagram', githubUrl: 'https://github.com/Tayokanch/Diary-API', liveUrl: 'https://diaryhubapi.tayolabs.dev', featured: false,
    overview: 'DiaryHub is a production-inspired, microservices-based platform where authenticated users can create and manage private journal entries through a REST API.',
    features: ['JWT-protected journal CRUD operations', 'Three stateless API replicas behind Nginx', 'PostgreSQL isolated on an internal Docker network', 'Health endpoint for service availability checks'],
    architecture: 'Nginx receives API traffic and distributes requests across three interchangeable Node.js and Express containers. The replicas share PostgreSQL persistence while remaining stateless, allowing unhealthy instances to be bypassed.',
    deployment: 'A Git push triggers Jenkins through a webhook. The pipeline builds Docker images and uses Docker Compose to redeploy the services. Cloudflare Tunnel provides HTTPS access without exposing backend services or inbound server ports directly.',
    outcome: 'The project demonstrates a complete application-delivery path: secure authentication, persistent data, container isolation, reverse proxying, load balancing and repeatable CI/CD deployment.',
  },
  {
    slug: 'voguenest-fullstack-docker-deployment', title: 'VogueNest Full-Stack Docker Deployment', shortTitle: 'VogueNest', categories: ['Software Engineering', 'DevOps & Cloud'], summary: 'A full-stack e-commerce platform with authentication, Stripe test checkout and a production-inspired container deployment.', tags: ['React', 'TypeScript', 'MongoDB', 'Docker', 'Jenkins'], status: 'Completed', year: '2026', role: 'Full-Stack & DevOps Engineer', image: vogueImage, imageAlt: 'VogueNest full-stack Docker deployment architecture', githubUrl: 'https://github.com/Tayokanch/voguenest-fullstack-docker-deployment', liveUrl: 'https://voguenest.tayolabs.dev', featured: false,
    overview: 'VogueNest combines a responsive React storefront with a TypeScript and Express API, MongoDB persistence, authentication, order management and Stripe test payments.',
    features: ['Registration, login and protected routes', 'Product catalogue, basket and checkout flows', 'JWT access and refresh tokens', 'Stripe Checkout and authenticated order management'],
    architecture: 'Nginx serves the compiled React application and proxies internal API requests across three backend replicas. MongoDB and the API remain inside the Docker network rather than being publicly exposed.',
    deployment: 'Docker Compose coordinates the frontend, replicated API, database and proxy services. Jenkins automates deployment, while Cloudflare Tunnel provides secure public access to the self-hosted Linux environment.',
    outcome: 'The result is an end-to-end demonstration of frontend engineering, layered backend design, payment integration and secure container-based application delivery.',
  },
  {
    slug: 'fiature-dashboard', title: 'Fiature Cryptocurrency Dashboard', shortTitle: 'Fiature Dashboard', categories: ['Software Engineering', 'DevOps & Cloud'], summary: 'A responsive React dashboard for exploring cryptocurrency markets, portfolio activity, watchlists, news and price trends.', tags: ['React', 'Tailwind CSS', 'Recharts', 'Docker', 'Nginx'], status: 'Completed', year: '2026', role: 'Frontend & Deployment Engineer', image:fiatureImage,  imageAlt: 'Code-rendered preview of the Fiature cryptocurrency dashboard', githubUrl: 'https://github.com/Tayokanch/Fiature-Dashbaord', liveUrl: 'https://faiture.tayolabs.dev', featured: false,
    overview: 'Fiature is a single-page cryptocurrency dashboard designed to bring market information, portfolio tracking and visual analysis into one responsive interface.',
    features: ['Market overview and portfolio tracking', 'Watchlist and transaction views', 'Interactive historical charts with Recharts', 'News, alerts and responsive client-side navigation'],
    architecture: 'React Context and custom hooks manage client state and reusable data workflows. The production build is served by Nginx as a static SPA.',
    deployment: 'The application runs in Docker on a self-hosted Linux server. Nginx serves the frontend and Cloudflare Tunnel exposes it securely without opening inbound firewall ports.',
    outcome: 'The project brings UI composition, asynchronous data handling, chart-based visualisation and production deployment into a cohesive dashboard experience.',
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
