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
          <p className="text-center text-gray-500">
            Em breve — fotos das nossas ações, preparos e momentos de partilha.
          </p>
        </div>
      </section>
    </div>
  );
}
