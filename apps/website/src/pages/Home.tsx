import { InstagramEmbed } from '@/components/InstagramEmbed';

const instagramPostUrl =
  'https://www.instagram.com/p/COLE_AQUI_O_ID_DO_POST/';

export function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Luz da Senzala
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Projeto social dedicado à promoção da ancestralidade, solidariedade e
            segurança alimentar através da Cozinha Ancestral Velha Cambinda.
          </p>
          <blockquote className="mx-auto mt-6 max-w-xl border-l-4 border-secondary bg-card/50 py-3 pl-4 text-left italic text-gray-600">
            "A cozinha é um altar. Cada refeição é uma reza. Cada ingrediente
            carrega a memória dos nossos antepassados. Solidariedade é reparação
            social e cuidado sagrado."
          </blockquote>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/sobre"
              className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              Conheça o projeto
            </a>
            <a
              href="/doacoes"
              className="rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Doe agora
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-primary">Nossa História</h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                Somos descendentes de mulheres e homens que viveram à margem de
                uma sociedade construída sobre exclusões. Herdamos uma história
                atravessada pela escravidão, pelo racismo estrutural e por
                desigualdades que ainda moldam o presente.
              </p>
              <p className="mt-3 leading-relaxed text-gray-600">
                A Cozinha Ancestral Velha Cambinda, integrada ao Projeto Luz da
                Senzala, nasce da compreensão profunda de que a cozinha
                ancestral, além de alimentação, é um ato político, cultural e de
                cuidado, capaz de devolver dignidade e fortalecer vínculos.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6">
              <h3 className="text-lg font-semibold text-primary">Missão</h3>
              <p className="mt-2 leading-relaxed text-gray-600">
                Promover a segurança alimentar como reparação histórica, o
                fortalecimento cultural e a transformação social através da
                cozinha ancestral, valorizando a memória dos antepassados e a
                solidariedade comunitária.
              </p>
              <h3 className="mt-6 text-lg font-semibold text-primary">
                Visão
              </h3>
              <p className="mt-2 leading-relaxed text-gray-600">
                Ser referência de segurança alimentar como reparação histórica,
                consolidando-se como espaço permanente de resistência, dignidade
                e transformação social.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary">
            Nosso Impacto
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { label: 'Refeições/Mês', value: '300+' },
              { label: 'Refeições/Ano', value: '3.600+' },
              { label: 'Territórios', value: '2' },
              { label: 'Voluntários', value: '10+' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-lg bg-white p-6 text-center shadow-sm"
              >
                <div className="text-3xl font-bold text-secondary">{value}</div>
                <div className="mt-1 text-sm text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-6 text-center text-2xl font-bold text-primary">
            Territórios de Atuação
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary">
                Madureira — Viaduto
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Coração comercial e cultural do subúrbio carioca. Atendemos
                população em situação de rua, vendedores ambulantes, migrantes e
                população vulnerável. 2x por mês.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary">
                Méier — Quartel dos Bombeiros
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Zona de vulnerabilidade com comunidade organizada e engajada.
                Atendemos crianças, idosos e famílias em insegurança alimentar.
                2x por mês.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-3 text-2xl font-bold text-primary">
            Siga nosso trabalho
          </h2>
          <p className="mb-8 text-gray-600">
            Acompanhe as ações no Instagram
          </p>
          <div className="flex justify-center">
            <InstagramEmbed url={instagramPostUrl} />
          </div>
          <a
            href="https://www.instagram.com/projetoluzdasenzala"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-secondary hover:underline"
          >
            @projetoluzdasenzala
          </a>
        </div>
      </section>
    </div>
  );
}
