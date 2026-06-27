import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, ShieldCheck, Star } from "lucide-react";

import { heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden text-white"
    >
      {/* 1. IMAGEM DE FUNDO DA SEÇÃO (TEXTURA) */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://res.cloudinary.com/dsokg03zb/image/upload/v1782591268/full-equiped-medical-cabinet_omq9rx.webp" // Exemplo: Consultório desfocado. Troque pela sua.
          alt="Consultório de fundo"
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay escuro mais suave */}
<div className="absolute inset-0 -z-10 bg-navy/60 backdrop-blur-[2px]" />

{/* Gradiente mais discreto */}
<div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy/70 via-navy/35 to-transparent" />


      {/* Efeitos de luz sutil estilo "vidro" */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-turquoise/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 right-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="container-base relative z-10 grid items-center gap-12 pb-20 pt-28 md:pt-36 lg:grid-cols-2 lg:gap-8 lg:pb-28">
        
        {/* COLUNA DA ESQUERDA: Textos e Botões */}
        <div>
          {/* Eyebrow Liquid Glass */}
          <span className="eyebrow inline-block rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium tracking-wide text-turquoise-50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-md">
            Odontologia de excelência
          </span>

          <h1 className="mt-8 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-white drop-shadow-md">
            Seu sorriso é a{" "}
            <span className="bg-gradient-to-r from-turquoise to-teal-300 bg-clip-text text-transparent">
              nossa prioridade
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Na Clínica Sorriso Pleno, unimos tecnologia de ponta, ambiente
            acolhedor e um time apaixonado pelo que faz. Cuidamos da sua saúde
            bucal com a atenção que você merece.
          </p>

          {/* Botões Liquid Glass e Arredondados */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contato"
              className="btn-primary w-full justify-center gap-2 px-8 py-4 text-center sm:w-auto"
            >
              <CalendarCheck className="h-5 w-5" />
              Agendar consulta
            </Link>

            <Link
              href="/#servicos"
              className="btn-outline w-full justify-center px-8 py-4 text-center sm:w-auto"
            >
              Conhecer serviços
            </Link>
          </div>

          {/* Stats em formato de pílula de vidro */}
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-display text-2xl font-bold text-white sm:text-3xl drop-shadow-sm">
                  {stat.valor}
                </dt>
                <dd className="mt-1 text-xs font-medium text-white/60 sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* COLUNA DA DIREITA: Imagem da Paciente e Badges de Vidro */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            
            {/* Efeito 3D da foto - "Vidro" atrás da imagem */}
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-lg" />

            {/* Imagem Principal */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/10">
              <Image
                src="https://res.cloudinary.com/dsokg03zb/image/upload/v1782587287/dentist-smiling-while-examining-patient_diejwu.webp"
                alt="Paciente sorrindo"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </div>

            {/* BADGES LIQUID GLASS */}
            {/* Avaliação Google */}
            <div className="absolute -left-12 top-16 flex items-center gap-4 rounded-full border border-white/30 bg-white/20 px-5 py-3 text-white shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.4)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]">
                <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
              </span>
              <div>
                <p className="text-lg font-bold leading-none">4.9</p>
                <p className="text-xs font-medium text-white/80">Avaliação Google</p>
              </div>
            </div>

            {/* Próxima Vaga */}
            <div className="absolute -right-10 top-1/2 flex -translate-y-1/2 items-center gap-4 rounded-full border border-white/30 bg-white/20 px-5 py-3 text-white shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.4)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]">
                <CalendarCheck className="h-5 w-5 text-white" />
              </span>
              <div>
                <p className="text-sm font-bold leading-none">Hoje 14h30</p>
                <p className="text-xs font-medium text-white/80">Próxima vaga</p>
              </div>
            </div>

            {/* Biossegurança */}
            <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/30 bg-white/20 px-5 py-3 text-white shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.4)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]">
                <ShieldCheck className="h-5 w-5 text-white" />
              </span>
              <div>
                <p className="text-sm font-bold leading-none">Biossegurança</p>
                <p className="text-xs font-medium text-white/80">Protocolos Anvisa</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}