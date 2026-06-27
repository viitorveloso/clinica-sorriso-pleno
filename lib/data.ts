import {
  Brush,
  Gem,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import type {
  Depoimento,
  Diferencial,
  HeroStat,
  LinkNav,
  Servico,
} from "@/types";

export const linksNav: LinkNav[] = [
  { href: "/", label: "Início" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#diferenciais", label: "Diferenciais" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/contato", label: "Contato" },
];

export const heroStats: HeroStat[] = [
  { valor: "+5 mil", label: "Pacientes atendidos" },
  { valor: "15 anos", label: "De experiência" },
  { valor: "4.9", label: "Avaliação média" },
];

export const servicos: Servico[] = [
  {
    slug: "clareamento",
    titulo: "Clareamento",
    descricao:
      "Clareamento dental seguro, com gel de última geração, para um sorriso mais branco em poucas sessões.",
    icone: Sparkles,
  },
  {
    slug: "ortodontia",
    titulo: "Ortodontia",
    descricao:
      "Aparelhos fixos, autoligados e alinhadores transparentes para alinhar os dentes com conforto.",
    icone: Smile,
  },
  {
    slug: "implante",
    titulo: "Implante",
    descricao:
      "Reposição de dentes perdidos com implantes de titânio e resultado natural, devolvendo função e estética.",
    icone: ShieldCheck,
  },
  {
    slug: "limpeza",
    titulo: "Limpeza",
    descricao:
      "Profilaxia completa e remoção de tártaro para manter gengivas saudáveis e prevenir problemas futuros.",
    icone: Brush,
  },
  {
    slug: "estetica",
    titulo: "Estética",
    descricao:
      "Lentes de contato dental, facetas e design do sorriso para harmonizar cada detalhe do seu rosto.",
    icone: Gem,
  },
];

export const diferenciais: Diferencial[] = [
  {
    titulo: "Equipe especializada",
    descricao:
      "Profissionais com pós-graduação em cada especialidade, dedicados ao seu tratamento do início ao fim.",
    icone: Stethoscope,
  },
  {
    titulo: "Tecnologia moderna",
    descricao:
      "Radiografia digital, scanner intraoral e equipamentos de ponta para diagnósticos precisos.",
    icone: Microscope,
  },
  {
    titulo: "Atendimento humanizado",
    descricao:
      "Cada paciente é único. Cuidamos de você com acolhimento, transparência e tempo de escuta.",
    icone: HeartHandshake,
  },
  {
    titulo: "Biossegurança rigorosa",
    descricao:
      "Protocolos de esterilização e higienização que seguem as normas mais exigentes da Anvisa.",
    icone: ShieldCheck,
  },
];

export const depoimentos: Depoimento[] = [
  {
    nome: "Ana Beatriz",
    texto:
      "Fiz clareamento e o resultado superou minhas expectativas. Equipe atenciosa e ambiente impecável. Recomendo de olhos fechados!",
    desde: "Paciente desde 2022",
    nota: 5,
  },
  {
    nome: "Carlos Mendes",
    texto:
      "Coloquei dois implantes e voltei a sorrir sem medo. Todo o processo foi tranquilo e bem explicado. Profissionais excelentes.",
    desde: "Paciente desde 2021",
    nota: 5,
  },
  {
    nome: "Juliana Rocha",
    texto:
      "Meu tratamento ortodôntico foi muito mais rápido do que eu imaginava. Atendimento humano e sempre pontual. Virei fã da clínica.",
    desde: "Paciente desde 2023",
    nota: 5,
  },
];
