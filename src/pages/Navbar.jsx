import { Link } from 'react-router-dom';
import saturnIcon from '../assets/planet-saturn-space-icon.svg';

const navLinks = [
  { label: 'Home', to: '/', scrollTo: 'home' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/', scrollTo: 'skills' },
  { label: 'Project', to: '/projects' },
];

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-rule)] bg-[color-mix(in_oklch,var(--color-paper)_94%,transparent)] backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="flex h-17 w-full items-center justify-between px-[clamp(var(--space-sm),4vw,var(--space-xl))] max-[520px]:px-[var(--space-sm)]"
      >
        <Link
          to="/"
          aria-label="Go to home"
          className="group relative grid h-12 w-12 shrink-0 place-items-center max-[520px]:hidden"
        >
          <span className="absolute inset-1 border border-dashed border-[var(--color-accent)]" />
          <img src={saturnIcon} alt="" aria-hidden="true" className="h-9 w-9 animate-[spin_10s_linear_infinite] object-contain motion-reduce:animate-none" />
        </Link>

        <ul className="flex items-center gap-[clamp(var(--space-xs),2.5vw,var(--space-xl))] max-[520px]:w-full max-[520px]:justify-between max-[520px]:gap-[var(--space-2xs)]">
          {navLinks.map(({ label, to, scrollTo }) => (
            <li key={label}>
              <Link
                to={to}
                state={scrollTo ? { scrollTo } : undefined}
                className="group relative block whitespace-nowrap py-2 text-lg font-medium tracking-wide text-[var(--color-ink)] max-[520px]:text-base"
              >
                {label}
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[var(--color-accent)] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
