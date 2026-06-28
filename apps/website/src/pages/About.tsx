export function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">
            Sobre Nós
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Conheça a história, os dados e os territórios da Cozinha Ancestral Velha Cambinda,
            integrada ao Projeto Luz da Senzala.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-primary">Dados Institucionais</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/20 bg-card p-6">
              <h3 className="font-semibold text-primary">Cozinha Ancestral Velha Cambinda</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><strong>Organização:</strong> Projeto Luz da Senzala</li>
                <li><strong>Início:</strong> 2021 (formalizada)</li>
                <li><strong>Localização:</strong> Rua Paraná, 13 — Piedade, Rio de Janeiro/RJ</li>
                <li><strong>Contato:</strong> (21) 97450-0716</li>
                <li><strong>E-mail:</strong> projetoluzdasenzala@gmail.com</li>
              </ul>
            </div>
            <div className="rounded-lg border border-secondary/20 bg-card p-6">
              <h3 className="font-semibold text-primary">Territórios de Atuação</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><strong>Madureira — Viaduto:</strong> 2x por mês</li>
                <li><strong>Méier — Quartel dos Bombeiros:</strong> 2x por mês</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-primary">Histórico</h2>
          <div className="mt-6 space-y-6">
            {[
              {
                year: 'Março de 2020',
                title: 'Descendentes das Senzalas',
                text: 'Pandemia da COVID-19 intensifica vulnerabilidade no subúrbio carioca. O Projeto Luz da Senzala nasceu da vontade coletiva de cuidar. Herdeiros de senzala, conhecemos a fome. Essa dor nos moveu.',
              },
              {
                year: 'Julho de 2021',
                title: 'Comida Excedente',
                text: 'Percebemos que a comida que sobrava de nossas festividades comunitárias e rituais de terreiro podia ir além. Transformou-se em quentinhas vivas, cheias de ancestralidade, distribuídas à população em situação de rua.',
              },
              {
                year: '2021 — 2024',
                title: 'Consolidação',
                text: '300+ refeições por ação mensal. 10+ voluntários. Início da busca por parcerias e formalização.',
              },
              {
                year: '2024 — 2026',
                title: 'Institucionalização',
                text: 'Habilitação da Cozinha Ancestral Velha Cambinda junto ao MDS, estruturação de novo modelo de trabalho alinhado às diretrizes de órgãos e parceiros.',
              },
            ].map(({ year, title, text }) => (
              <div key={year} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-secondary" />
                  <div className="h-full w-px bg-secondary/30" />
                </div>
                <div className="pb-6">
                  <span className="text-sm font-bold text-secondary">{year}</span>
                  <h3 className="text-lg font-semibold text-primary">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-primary">Quem Somos</h2>
          <div className="mt-6 space-y-4 text-gray-600">
            <p>
              Somos descendentes de mulheres e homens que viveram à margem de uma
              sociedade construída sobre exclusões. Herdamos uma história atravessada
              pela escravidão, pelo racismo estrutural e por desigualdades que ainda
              moldam o presente.
            </p>
            <p>
              Pessoas diversas, caminhamos lado a lado, em igualdade, atuando e
              reconhecendo nossa responsabilidade social nas causas sociais, nas lutas
              LGBTQIA+ e nas demandas da periferia; conscientes de que nossas diferenças
              nos fortalecem e que nossa ancestralidade nos une.
            </p>
            <p>
              Entendemos que <strong>segurança alimentar é reparação histórica</strong>.
              Alimentar é cuidar, é reconstruir, é devolver dignidade onde ela foi negada.
              Nossa cozinha é território de acolhimento, resistência e transformação social.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
