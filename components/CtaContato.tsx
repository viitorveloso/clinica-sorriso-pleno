import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

export default function CtaContato() {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="container-base">
        <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-[linear-gradient(135deg,_rgba(20,35,57,0.98)_0%,_rgba(26,46,74,0.95)_100%)] px-8 py-14 text-center text-white shadow-[0_20px_60px_rgba(26,46,74,0.22)] sm:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-turquoise/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Pronto para transformar o seu sorriso?
            </h2>
            <p className="mt-4 text-base text-white/70 sm:text-lg">
              Agende a sua avaliação hoje mesmo. Nossa equipe está pronta para
              cuidar de você com todo o carinho que você merece.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contato" className="btn-primary">
                <CalendarCheck className="h-5 w-5" />
                Agendar agora
              </Link>
              <a
                href="tel:+559832321010"
                className="btn-outline inline-flex items-center gap-2 px-6 py-3 text-white"
              >
                <Phone className="h-5 w-5" />
                (98) 3232-1010
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
