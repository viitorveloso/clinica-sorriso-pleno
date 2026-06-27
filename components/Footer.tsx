import Link from "next/link";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import ToothIcon from "@/components/ToothIcon";
import { linksNav } from "@/lib/data";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="container-base grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-xl font-bold text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-turquoise">
              <ToothIcon className="h-5 w-5" />
            </span>
            <span>
              Sorriso <span className="text-turquoise">Pleno</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Odontologia de excelência em São Luís, unindo tecnologia, conforto e
            um time apaixonado pelo seu sorriso.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {linksNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-turquoise"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-turquoise" />
              <span>
                Av. dos Holandeses, 1500 – Sala 504
                <br />
                Calhau, São Luís – MA
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-turquoise" />
              <a href="tel:+559832321010" className="hover:text-turquoise">
                (98) 3232-1010
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-turquoise" />
              <a
                href="mailto:contato@sorrisopleno.com.br"
                className="hover:text-turquoise"
              >
                contato@sorrisopleno.com.br
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Horário
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-turquoise" />
              <span>
                Seg–Sex: 08h às 19h
                <br />
                Sábado: 08h às 13h
                <br />
                Domingo: Fechado
              </span>
            </li>
          </ul>

          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-turquoise hover:text-white"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-turquoise hover:text-white"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-turquoise hover:text-white"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-base flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {ano} Clínica Sorriso Pleno. Todos os direitos reservados.</p>
          <p>CRO-MA fictício • Site de demonstração</p>
        </div>
      </div>
    </footer>
  );
}
