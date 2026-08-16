import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/', scrollTo: 'home' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/', scrollTo: 'skills' },
  { label: 'Project', to: '/projects' },
];

function GlobeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7 animate-[spin_10s_linear_infinite] motion-reduce:animate-none"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.25 2.47 3.4 5.47 3.4 9S14.25 18.53 12 21M12 3C9.75 5.47 8.6 8.47 8.6 12s1.15 6.53 3.4 9" />
    </svg>
  );
}

function Navbar() {
  return (
    <header className="portfolio-nav fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <Link
          to="/"
          aria-label="Go to home"
          className="group relative grid h-12 w-12 shrink-0 place-items-center rounded-full border border-cyan-200/30 text-[rgb(144_224_239)] shadow-[0_0_25px_rgba(144,224,239,0.14)] transition hover:border-cyan-200/70 hover:bg-cyan-200/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
        >
          <span className="absolute inset-1 animate-[spin_6s_linear_infinite] rounded-full border border-dashed border-cyan-200/35 motion-reduce:animate-none" />
          <GlobeIcon />
        </Link>

        <ul className="flex items-center gap-4 sm:gap-8 md:gap-12">
          {navLinks.map(({ label, to, scrollTo }) => (
            <li key={label}>
              <Link
                to={to}
                state={scrollTo ? { scrollTo } : undefined}
                className="group relative block py-2 text-sm font-medium tracking-wide text-rgb(144_224_239)] transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 sm:text-base"
              >
                {label}
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[rgb(144_224_239)] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
