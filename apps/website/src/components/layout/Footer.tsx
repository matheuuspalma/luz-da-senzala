export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-primary">Luz da Senzala</h3>
            <p className="text-sm text-gray-600">
              Projeto social dedicado à promoção da ancestralidade, solidariedade e
              segurança alimentar através da Cozinha Ancestral Velha Cambinda.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-primary">Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/sobre" className="hover:text-primary">Sobre</a></li>
              <li><a href="/filosofia" className="hover:text-primary">Filosofia</a></li>
              <li><a href="/galeria" className="hover:text-primary">Galeria</a></li>
              <li><a href="/doacoes" className="hover:text-primary">Doações</a></li>
              <li><a href="/contato" className="hover:text-primary">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-primary">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>(21) 97450-0716</li>
              <li>projetoluzdasenzala@gmail.com</li>
              <li>
                <a
                  href="https://instagram.com/projetoluzdasenzala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-secondary hover:underline"
                >
                  @projetoluzdasenzala
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Luz da Senzala. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
