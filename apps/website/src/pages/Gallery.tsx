const photos = [
  { src: '/assets/gallery/WhatsApp Image 2026-06-28 at 19.48.53.jpeg', alt: 'Ação comunitária' },
  { src: '/assets/gallery/WhatsApp Image 2026-06-28 at 19.47.25.jpeg', alt: 'Preparação das refeições' },
  { src: '/assets/gallery/WhatsApp Image 2026-06-28 at 19.47.21.jpeg', alt: 'Distribuição de alimentos' },
  { src: '/assets/gallery/WhatsApp Image 2026-06-28 at 19.47.20 (1).jpeg', alt: 'Voluntários em ação' },
  { src: '/assets/gallery/WhatsApp Image 2026-06-28 at 19.47.20.jpeg', alt: 'Momento de acolhimento' },
  { src: '/assets/gallery/WhatsApp Image 2026-06-28 at 19.47.19.jpeg', alt: 'Cozinha ancestral' },
  { src: '/assets/gallery/WhatsApp Image 2026-06-28 at 19.47.18.jpeg', alt: 'Partilha e solidariedade' },
  { src: '/assets/gallery/WhatsApp Image 2026-04-25 at 10.24.38.jpeg', alt: 'Evento comunitário' },
  { src: '/assets/gallery/WhatsApp Image 2026-04-14 at 20.48.07.jpeg', alt: 'Registro de encontro' },
];

export function Gallery() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">Galeria</h1>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Imagens que testemunham acolhimento, dignidade, solidariedade ancestral
            e transformação social.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {photos.map(({ src, alt }) => (
              <a
                key={src}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-lg bg-gray-100 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={src}
                    alt={alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
