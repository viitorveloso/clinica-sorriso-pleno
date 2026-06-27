"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

import { contatoSchema, SERVICOS_CONTATO } from "@/lib/validations";

type Status = "idle" | "loading" | "success" | "error";

interface FormState {
  nome: string;
  email: string;
  telefone: string;
  servico: string;
  mensagem: string;
}

const estadoInicial: FormState = {
  nome: "",
  email: "",
  telefone: "",
  servico: "",
  mensagem: "",
};

const baseInput =
  "w-full rounded-lg border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy outline-none transition focus:border-turquoise focus:ring-2 focus:ring-turquoise/30";

export default function ContatoForm() {
  const [form, setForm] = useState<FormState>(estadoInicial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(campo: K, valor: string) {
    setForm((prev) => ({ ...prev, [campo]: valor }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});

    const parsed = contatoSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const campo = issue.path[0];
        if (typeof campo === "string" && !fieldErrors[campo]) {
          fieldErrors[campo] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contatos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        throw new Error("Falha ao enviar");
      }

      setStatus("success");
      setForm(estadoInicial);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-navy">
            Nome completo
          </label>
          <input
            id="nome"
            type="text"
            value={form.nome}
            onChange={(e) => update("nome", e.target.value)}
            className={baseInput}
            placeholder="Seu nome"
          />
          {errors.nome && (
            <p className="mt-1 text-xs text-red-600">{errors.nome}</p>
          )}
        </div>

        <div>
          <label htmlFor="telefone" className="mb-1.5 block text-sm font-medium text-navy">
            Telefone
          </label>
          <input
            id="telefone"
            type="tel"
            value={form.telefone}
            onChange={(e) => update("telefone", e.target.value)}
            className={baseInput}
            placeholder="(98) 99999-9999"
          />
          {errors.telefone && (
            <p className="mt-1 text-xs text-red-600">{errors.telefone}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={baseInput}
          placeholder="voce@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="servico" className="mb-1.5 block text-sm font-medium text-navy">
          Serviço de interesse
        </label>
        <select
          id="servico"
          value={form.servico}
          onChange={(e) => update("servico", e.target.value)}
          className={baseInput}
        >
          <option value="">Selecione um serviço</option>
          {SERVICOS_CONTATO.map((servico) => (
            <option key={servico} value={servico}>
              {servico}
            </option>
          ))}
        </select>
        {errors.servico && (
          <p className="mt-1 text-xs text-red-600">{errors.servico}</p>
        )}
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-navy">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          rows={5}
          value={form.mensagem}
          onChange={(e) => update("mensagem", e.target.value)}
          className={`${baseInput} resize-none`}
          placeholder="Como podemos ajudar você?"
        />
        {errors.mensagem && (
          <p className="mt-1 text-xs text-red-600">{errors.mensagem}</p>
        )}
      </div>

      {status === "success" && (
        <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
          <p>
            Mensagem enviada com sucesso! Em breve a nossa equipe entrará em
            contato.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <p>Não foi possível enviar a mensagem. Tente novamente em instantes.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Enviar mensagem
          </>
        )}
      </button>
    </form>
  );
}
