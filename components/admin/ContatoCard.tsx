"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Calendar,
  Loader2,
  Mail,
  MailOpen,
  Phone,
  Tag,
} from "lucide-react";

import type { Contato } from "@prisma/client";

function iniciais(nome: string): string {
  return nome
    .split(" ")
    .slice(0, 2)
    .map((parte) => parte.charAt(0))
    .join("")
    .toUpperCase();
}

export default function ContatoCard({ contato }: { contato: Contato }) {
  const router = useRouter();
  const [lido, setLido] = useState(contato.lido);
  const [loading, setLoading] = useState(false);

  async function toggle() {
    setLoading(true);
    try {
      const res = await fetch(`/api/contatos/${contato.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lido: !lido }),
      });

      if (res.ok) {
        setLido(!lido);
        router.refresh();
      }
    } finally {
      setLoading(false);
    }
  }

  const dataFormatada = new Date(contato.criadoEm).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <article
      className={`rounded-2xl border bg-white p-6 shadow-sm transition ${
        lido ? "border-navy/5" : "border-turquoise/40 ring-1 ring-turquoise/20"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-turquoise/15 font-semibold text-turquoise-600">
            {iniciais(contato.nome)}
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-navy">{contato.nome}</h3>
              {!lido && (
                <span className="rounded-full bg-turquoise/15 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-turquoise-600">
                  Não lido
                </span>
              )}
            </div>
            <a
              href={`mailto:${contato.email}`}
              className="text-sm text-navy/60 hover:text-turquoise-600"
            >
              {contato.email}
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={toggle}
          disabled={loading}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition disabled:opacity-60 ${
            lido
              ? "bg-cinza text-navy/70 hover:bg-navy/10"
              : "bg-turquoise text-white hover:bg-turquoise-600"
          }`}
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : lido ? (
            <MailOpen className="h-4 w-4" />
          ) : (
            <Mail className="h-4 w-4" />
          )}
          {lido ? "Marcar como não lido" : "Marcar como lido"}
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy/60">
        <span className="inline-flex items-center gap-1.5">
          <Tag className="h-4 w-4 text-turquoise-600" />
          {contato.servico}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Phone className="h-4 w-4 text-turquoise-600" />
          {contato.telefone}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-4 w-4 text-turquoise-600" />
          {dataFormatada}
        </span>
      </div>

      <p className="mt-4 rounded-xl bg-cinza p-4 text-sm leading-relaxed text-navy/80">
        {contato.mensagem}
      </p>
    </article>
  );
}
