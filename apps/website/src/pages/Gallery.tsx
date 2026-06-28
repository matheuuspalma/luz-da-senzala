const photos = Array.from({ length: 10 }, (_, i) => ({
  src: `/assets/gallery/photo-${String(i + 1).padStart(2, '0')}.jpeg`,
  alt: `Foto ${i + 1}`,
}));

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
