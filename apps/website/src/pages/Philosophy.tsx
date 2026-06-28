export function Philosophy() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">
            Filosofia
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            A cozinha como altar, a comida como reza, a solidariedade como
            reparação social e cuidado sagrado.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-primary">
            Os Cinco Pilares da Cozinha Ancestral
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Memória',
                text: 'Resgatar receitas e técnicas dos antepassados africanos, preservando saberes que atravessaram séculos de resistência.',
              },
              {
                title: 'Espiritualidade',
                text: 'Entender a cozinha como práxis sagrada. Cada preparo é uma conversa com os ancestrais, uma oferenda de dignidade.',
              },
              {
                title: 'Sustentabilidade',
                text: 'Usar ingredientes locais, respeitar a natureza, priorizar fornecedores da agricultura familiar e produtores locais.',
              },
              {
                title: 'Comunidade',
                text: 'Cozinha é coletiva, é encontro, é acolhimento. Cada refeição é construída por mãos que se unem em solidariedade.',
              },
              {
                title: 'Resistência',
                text: 'Alimento é direito e reparação histórica. Cozinhar é um ato político de afirmação da identidade e da dignidade.',
              },
            ].map(({ title, text }) => (
              <div
                key={title}
                className="rounded-lg border-l-4 border-secondary bg-card p-5"
              >
                <h3 className="font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-primary">
            Ingredientes Sagrados
          </h2>
          <p className="mt-3 text-gray-600">
            Na cozinha de terreiro, cada ingrediente não é apenas comida. É
            história, é medicina, é espiritualidade. Cada um traz a memória dos
            ancestrais e as propriedades que nossos povos sempre souberam.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                name: 'Arroz',
                origin: 'Antigo Delta do Níger — culturas iorubás',
                meaning:
                  'Base de todas as refeições. Representa vigor, força e continuidade. Símbolo de prosperidade e fartura.',
              },
              {
                name: 'Feijão (preto e carioca)',
                origin: 'Bantu (Angola, Congo)',
                meaning:
                  'Proteína ancestral. O feijão preto é oferecido a Exu em rituais. Representa a terra, a raiz, a ancestralidade.',
              },
              {
                name: 'Raízes e Tubérculos',
                origin: 'Cultivos tradicionais africanos',
                meaning:
                  'Mandioca, batata-doce, inhame. Raízes que alimentam e conectam ao solo. Base nutritiva de força e energia.',
              },
              {
                name: 'Legumes da Terra',
                origin: 'Tradições de cultivo comunitário',
                meaning:
                  'Abóbora, cenoura, couve, quiabo. Vegetais que curam e nutrem. Representam a fartura da terra.',
              },
            ].map(({ name, origin, meaning }) => (
              <div
                key={name}
                className="rounded-lg border border-secondary/20 bg-white p-5"
              >
                <h3 className="font-semibold text-primary">{name}</h3>
                <span className="text-xs italic text-gray-400">{origin}</span>
                <p className="mt-2 text-sm text-gray-600">{meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-lg border-2 border-secondary bg-card p-8 text-center">
            <h2 className="text-xl font-bold text-primary">
              A Cozinha é um Altar
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              No terreiro, a cozinha não é apenas espaço de preparação de
              alimentos. É espaço sagrado de encontro entre o visível e o
              invisível, entre a ancestralidade e o presente, entre a
              necessidade material e a espiritual.
            </p>
            <div className="mt-6 grid gap-4 text-left md:grid-cols-2">
              {[
                'Honrar os ancestrais que resistiram através da cozinha',
                'Oferecer comida como ato de graça e devoção',
                'Praticar cuidado comunitário sagrado',
                'Reparar histórias de fome e abandono',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-0.5 text-secondary">✦</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
