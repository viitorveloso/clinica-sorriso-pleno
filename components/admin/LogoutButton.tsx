"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/admin/login" })}
      className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2 text-sm font-medium text-navy/70 transition hover:bg-navy/5 hover:text-navy"
    >
      <LogOut className="h-4 w-4" />
      Sair
    </button>
  );
}
