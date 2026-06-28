export function Contact() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">
            Contato
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Quer saber mais, participar ou contribuir? Entre em contato conosco.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-card p-6">
              <h2 className="text-xl font-bold text-primary">Informações</h2>
              <ul className="mt-4 space-y-4">
                <li>
                  <span className="block text-sm font-semibold text-gray-700">Endereço</span>
                  <span className="text-sm text-gray-600">Rua Paraná, 13 — Piedade, Rio de Janeiro/RJ</span>
                </li>
                <li>
                  <span className="block text-sm font-semibold text-gray-700">WhatsApp / Telefone</span>
                  <a
                    href="tel:+5521974500716"
                    className="text-sm text-secondary hover:underline"
                  >
                    (21) 97450-0716
                  </a>
                </li>
                <li>
                  <span className="block text-sm font-semibold text-gray-700">E-mail</span>
                  <a
                    href="mailto:projetoluzdasenzala@gmail.com"
                    className="text-sm text-secondary hover:underline"
                  >
                    projetoluzdasenzala@gmail.com
                  </a>
                </li>
                <li>
                  <span className="block text-sm font-semibold text-gray-700">Redes Sociais</span>
                  <div className="mt-1 flex gap-3">
                    <a
                      href="https://www.instagram.com/projetoluzdasenzala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-secondary hover:underline"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://facebook.com/projetoluzdasenzala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-secondary hover:underline"
                    >
                      Facebook
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-card p-6">
              <h2 className="text-xl font-bold text-primary">Envie uma mensagem</h2>
              <form className="mt-4 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none"
                    placeholder="Sua mensagem"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-6 text-center text-xl font-bold text-primary">Onde Estamos</h2>
          <div className="mx-auto h-64 max-w-4xl overflow-hidden rounded-lg bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0!2d-43.3!3d-22.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzM2LjAiUyA0M8KwMTgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - Piedade, Rio de Janeiro"
            />
          </div>
          <p className="mt-3 text-center text-sm text-gray-500">
            Rua Paraná, 13 — Piedade, Rio de Janeiro/RJ
          </p>
        </div>
      </section>
    </div>
  );
}
