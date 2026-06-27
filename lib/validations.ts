import { z } from "zod";

export const SERVICOS_CONTATO = [
  "Clareamento",
  "Ortodontia",
  "Implante",
  "Limpeza",
  "Estética",
  "Outro",
] as const;

export const contatoSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo.")
    .max(120, "Nome muito longo."),
  email: z.string().trim().email("Informe um e-mail válido."),
  telefone: z
    .string()
    .trim()
    .min(8, "Informe um telefone válido.")
    .max(20, "Telefone muito longo."),
  servico: z.enum(SERVICOS_CONTATO, {
    errorMap: () => ({ message: "Selecione um serviço." }),
  }),
  mensagem: z
    .string()
    .trim()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres.")
    .max(2000, "Mensagem muito longa."),
});

export type ContatoInput = z.infer<typeof contatoSchema>;
