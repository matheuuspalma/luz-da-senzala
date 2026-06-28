export function Donations() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">
            Doe Agora
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Sua contribuição transforma comida em dignidade, cuidado e
            esperança para quem mais precisa.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-card p-8 text-center">
              <h2 className="text-xl font-bold text-primary">
                Contribua com qualquer valor
              </h2>
              <p className="mt-3 text-gray-600">
                Sua doação nos ajuda a produzir e distribuir refeições
                nutritivas e cheias de ancestralidade para quem vive em
                situação de vulnerabilidade.
              </p>
              <a
                href="https://vaquinhadorazoes.com/vaquinha/1406266321"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-md bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                Doar via Vaquinha
              </a>
              <p className="mt-3 text-xs text-gray-400">
                Link seguro — Vakinha do Razões
              </p>
            </div>

            <div className="rounded-lg bg-card p-8 text-center">
              <h2 className="text-xl font-bold text-primary">PIX</h2>
              <div className="mt-4 flex justify-center">
                <img
                  src="/assets/qrcode-doacao.jpeg"
                  alt="QR Code PIX"
                  className="h-48 w-48 rounded-lg shadow-md"
                />
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Aponte seu celular para o QR Code ou copie a chave PIX abaixo
              </p>
              <div className="mt-3 rounded-md bg-white p-3 text-sm font-mono text-gray-700">
                projetoluzdasenzala@gmail.com
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('projetoluzdasenzala@gmail.com');
                }}
                className="mt-2 text-xs text-secondary hover:underline"
              >
                Copiar chave PIX
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl font-bold text-primary">
            Outras Formas de Ajudar
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Voluntariado',
                text: 'Contribua com seu tempo e talento. Precisamos de voluntários para cozinhar, organizar e distribuir as refeições.',
              },
              {
                title: 'Alimentos',
                text: 'Doação de alimentos não perecíveis, legumes e verduras frescas para nossas ações mensais.',
              },
              {
                title: 'Divulgação',
                text: 'Compartilhe nosso trabalho nas redes sociais. Quanto mais pessoas conhecerem, mais forte será nossa rede de apoio.',
              },
            ].map(({ title, text }) => (
              <div key={title} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
