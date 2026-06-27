import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import ContatoForm from "@/components/ContatoForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Agende a sua consulta na Clínica Sorriso Pleno. Estamos no Calhau, em São Luís – MA. Atendimento de segunda a sábado.",
};

const infos = [
  {
    icone: MapPin,
    titulo: "Endereço",
    linhas: ["Av. dos Holandeses, 1500 – Sala 504", "Calhau, São Luís – MA"],
  },
  {
    icone: Phone,
    titulo: "Telefone",
    linhas: ["(98) 3232-1010"],
  },
  {
    icone: Mail,
    titulo: "E-mail",
    linhas: ["contato@sorrisopleno.com.br"],
  },
  {
    icone: Clock,
    titulo: "Horário",
    linhas: ["Seg–Sex: 08h às 19h", "Sábado: 08h às 13h"],
  },
];

export default function ContatoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy to-slate-950 pb-16 pt-32 text-white md:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-16 h-64 w-64 rounded-full bg-turquoise/15 blur-3xl"
        />
        <div className="container-base relative">
          <span className="eyebrow border border-white/10 bg-white/10 text-turquoise-50">
            Fale conosco
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Vamos cuidar do seu sorriso
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Preencha o formulário abaixo ou use um dos nossos canais de
            atendimento. Responderemos o mais rápido possível.
          </p>
        </div>
      </section>

      <section className="bg-cinza py-16 md:py-20">
        <div className="container-base grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {infos.map((info) => {
                const Icone = info.icone;
                return (
                  <div key={info.titulo} className="glass-card p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-turquoise/10 text-turquoise-600">
                      <Icone className="h-6 w-6" />
                    </span>
                    <h2 className="mt-4 font-display text-lg font-semibold text-navy">
                      {info.titulo}
                    </h2>
                    {info.linhas.map((linha) => (
                      <p key={linha} className="mt-1 text-sm text-navy/60">
                        {linha}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>

            <div className="glass-card overflow-hidden rounded-[28px]">
              <iframe
                title="Mapa da Clínica Sorriso Pleno"
                src="https://www.google.com/maps?q=Av.+dos+Holandeses,+Calhau,+S%C3%A3o+Lu%C3%ADs+-+MA&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="glass-card rounded-[28px] bg-white/95 p-7 shadow-[0_20px_40px_rgba(26,46,74,0.08)] sm:p-9">
            <h2 className="font-display text-2xl font-bold text-navy">
              Envie a sua mensagem
            </h2>
            <p className="mt-2 text-sm text-navy/60">
              Todos os campos são obrigatórios.
            </p>
            <div className="mt-6">
              <ContatoForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
