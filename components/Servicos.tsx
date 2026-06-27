import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { servicos } from "@/lib/data";

export default function Servicos() {
  return (
    <section id="servicos" className="bg-white py-20 md:py-28">
      <div className="container-base">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nossos serviços</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl">
            Tratamentos completos para o seu sorriso
          </h2>
          <p className="mt-4 text-base text-navy/60">
            Do cuidado preventivo à estética avançada, oferecemos tudo o que
            você precisa em um só lugar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico) => {
            const Icone = servico.icone;
            return (
              <article
                key={servico.slug}
                className="glass-card group flex h-full flex-col justify-between p-7 transition duration-300 hover:-translate-y-1 hover:border-turquoise/40 hover:shadow-[0_20px_50px_rgba(77,184,196,0.16)]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-turquoise/10 text-turquoise-600 transition group-hover:bg-turquoise group-hover:text-white">
                  <Icone className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy">
                    {servico.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/60">
                    {servico.descricao}
                  </p>
                </div>
              </article>
            );
          })}

          <Link
            href="/contato"
            className="flex flex-col justify-center rounded-[28px] bg-[linear-gradient(135deg,_#1a2e4a_0%,_#243d61_100%)] p-7 text-white shadow-[0_20px_50px_rgba(26,46,74,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(26,46,74,0.24)]"
          >
            <h3 className="font-display text-xl font-semibold">
              Não encontrou o que procura?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Fale com a nossa equipe e monte um plano de tratamento sob medida.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-turquoise">
              Falar com a clínica
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
