import { diferenciais } from "@/lib/data";

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-cinza py-20 md:py-28">
      <div className="container-base">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <span className="eyebrow">Por que nos escolher?</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl">
              Um cuidado que vai além do consultório
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy/60">
              Combinamos experiência clínica, tecnologia e um atendimento que
              coloca você no centro de tudo. Conheça o que torna a Sorriso Pleno
              diferente.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {diferenciais.map((item) => {
              const Icone = item.icone;
              return (
                <div
                  key={item.titulo}
                  className="glass-card p-6 transition duration-300 hover:-translate-y-1"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-turquoise/10 text-turquoise-600">
                    <Icone className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">
                    {item.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
