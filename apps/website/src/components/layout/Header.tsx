import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/cozinha-velha-cambinda', label: 'Cozinha Velha Cambinda' },
  { to: '/filhas-da-terra', label: 'Filhas da Terra' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/doacoes', label: 'Doações' },
  { to: '/contato', label: 'Contato' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
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

        <div className="flex items-center gap-3">
          <Link
            to="/doacoes"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 sm:inline-block"
          >
            Doe agora
          </Link>
          <button
            className="flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <nav className="flex flex-col px-4 pb-4 pt-2">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/doacoes"
              className="mt-2 rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-primary/90 sm:hidden"
              onClick={() => setOpen(false)}
            >
              Doe agora
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
