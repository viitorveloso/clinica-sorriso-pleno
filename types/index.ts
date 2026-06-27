import type { LucideIcon } from "lucide-react";

export interface LinkNav {
  href: string;
  label: string;
}

export interface HeroStat {
  valor: string;
  label: string;
}

export interface Servico {
  slug: string;
  titulo: string;
  descricao: string;
  icone: LucideIcon;
}

export interface Diferencial {
  titulo: string;
  descricao: string;
  icone: LucideIcon;
}

export interface Depoimento {
  nome: string;
  texto: string;
  desde: string;
  nota: number;
}
