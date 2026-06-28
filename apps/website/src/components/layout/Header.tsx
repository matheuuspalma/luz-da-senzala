import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/filosofia', label: 'Filosofia' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/doacoes', label: 'Doações' },
  { to: '/contato', label: 'Contato' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">Luz da Senzala</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          to="/doacoes"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
        >
          Doe agora
        </Link>
      </div>
    </header>
  );
}
