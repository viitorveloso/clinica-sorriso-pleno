import { Quote, Star } from "lucide-react";

import { depoimentos } from "@/lib/data";

function iniciais(nome: string): string {
  return nome
    .split(" ")
    .slice(0, 2)
    .map((parte) => parte.charAt(0))
    .join("")
    .toUpperCase();
}

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-white py-20 md:py-28">
      <div className="container-base">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl">
            Histórias de quem voltou a sorrir
          </h2>
          <p className="mt-4 text-base text-navy/60">
            A confiança dos nossos pacientes é o nosso maior orgulho.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {depoimentos.map((depoimento) => (
            <figure
              key={depoimento.nome}
              className="glass-card relative flex flex-col p-7"
            >
              <Quote className="h-8 w-8 text-turquoise/30" />

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy/70">
                {depoimento.texto}
              </blockquote>

              <div className="mt-5 flex gap-0.5 text-turquoise">
                {Array.from({ length: depoimento.nota }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <figcaption className="mt-5 flex items-center gap-3 border-t border-navy/5 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-turquoise/15 font-semibold text-turquoise-600">
                  {iniciais(depoimento.nome)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">
                    {depoimento.nome}
                  </p>
                  <p className="text-xs text-navy/50">{depoimento.desde}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
