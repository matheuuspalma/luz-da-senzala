import { InstagramEmbed } from '@/components/InstagramEmbed';

export function FilhasDaTerra() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">
            Filhas da Terra
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Em breve — conheça mais sobre este braço do Projeto Luz da Senzala.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="mb-12">
            <h2 className="text-xl font-bold text-primary">Siga nosso trabalho</h2>
            <p className="mt-2 text-gray-600">
              Acompanhe as ações do Filhas da Terra no Instagram
            </p>
          </div>
          <div className="flex justify-center">
            <InstagramEmbed url="https://www.instagram.com/reel/DZ8bSx-vCrJ/" />
          </div>
        </div>
      </section>
    </div>
  );
}
