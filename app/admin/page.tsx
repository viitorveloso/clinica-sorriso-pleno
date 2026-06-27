import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Inbox, MailWarning } from "lucide-react";

import ContatoCard from "@/components/admin/ContatoCard";
import LogoutButton from "@/components/admin/LogoutButton";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Painel Admin",
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  const contatos = await prisma.contato.findMany({
    orderBy: { criadoEm: "desc" },
  });

  const total = contatos.length;
  const naoLidos = contatos.filter((c) => !c.lido).length;

  return (
    <div className="min-h-screen bg-cinza">
      <header className="border-b border-navy/5 bg-white">
        <div className="container-base flex flex-wrap items-center justify-between gap-4 py-5">
          <div>
            <h1 className="font-display text-xl font-bold text-navy">
              Painel de Mensagens
            </h1>
            <p className="text-sm text-navy/50">{session.user.email}</p>
          </div>
          <LogoutButton />
        </div>
      </header>

      <main className="container-base py-10">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
              <Inbox className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold text-navy">{total}</p>
              <p className="text-sm text-navy/50">Mensagens recebidas</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-turquoise/10 text-turquoise-600">
              <MailWarning className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold text-navy">
                {naoLidos}
              </p>
              <p className="text-sm text-navy/50">Não lidas</p>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {contatos.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-navy/15 bg-white p-12 text-center">
              <Inbox className="mx-auto h-10 w-10 text-navy/30" />
              <p className="mt-3 font-medium text-navy">
                Nenhuma mensagem por aqui ainda
              </p>
              <p className="mt-1 text-sm text-navy/50">
                As mensagens enviadas pelo formulário de contato aparecerão nesta
                lista.
              </p>
            </div>
          ) : (
            contatos.map((contato) => (
              <ContatoCard key={contato.id} contato={contato} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
