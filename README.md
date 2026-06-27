# Clínica Sorriso Pleno 🦷

Site institucional completo de uma clínica odontológica fictícia, construído como aplicação **full-stack** com Next.js 14. Inclui site público, formulário de contato persistido em banco de dados e um painel administrativo protegido por autenticação para gerenciar as mensagens recebidas.

> Projeto de demonstração — todos os dados de contato, endereço e depoimentos são fictícios.

---

## ✨ Funcionalidades

- **Home** com hero, serviços, diferenciais, depoimentos e CTA.
- **Página de contato** com formulário validado (Zod) que salva os dados no PostgreSQL.
- **Painel admin** (`/admin`) protegido por login, com listagem das mensagens, contadores e marcação de **lido / não lido**.
- **API Routes** para criar contatos (público) e listar/atualizar (somente admin autenticado).
- Design responsivo (mobile-first), navbar fixa e tipografia com Playfair Display + Inter.

---

## 🛠 Stack

| Camada          | Tecnologia                          |
| --------------- | ----------------------------------- |
| Framework       | Next.js 14 (App Router)             |
| Linguagem       | TypeScript (strict)                 |
| Estilização     | Tailwind CSS                        |
| Banco de dados  | PostgreSQL                          |
| ORM             | Prisma                              |
| Autenticação    | NextAuth.js (Credentials)           |
| Validação       | Zod                                 |
| Ícones          | lucide-react                        |
| Qualidade       | ESLint + Prettier                   |

---

## 📁 Estrutura de pastas

```
app/
├── (site)/                  # Grupo de rotas do site público (com Navbar + Footer)
│   ├── layout.tsx           # Layout com Navbar e Footer
│   ├── page.tsx             # Home
│   └── contato/page.tsx     # Página de contato
├── admin/
│   ├── page.tsx             # Painel admin (protegido)
│   └── login/page.tsx       # Tela de login
├── api/
│   ├── auth/[...nextauth]/route.ts
│   ├── contatos/route.ts            # GET (admin) + POST (público)
│   └── contatos/[id]/route.ts       # PATCH (admin)
├── layout.tsx               # Layout raiz (fontes + metadata)
└── globals.css
components/
├── Navbar.tsx · Footer.tsx · Hero.tsx · Servicos.tsx
├── Diferenciais.tsx · Depoimentos.tsx · CtaContato.tsx
├── ContatoForm.tsx · ToothIcon.tsx
└── admin/ContatoCard.tsx · admin/LogoutButton.tsx
lib/
├── prisma.ts · auth.ts · data.ts · validations.ts
prisma/schema.prisma
types/index.ts · types/next-auth.d.ts
```

> **Sobre o grupo `(site)`:** as páginas públicas ficam dentro do route group `(site)` para compartilharem o layout com Navbar e Footer, enquanto o `/admin` usa um layout próprio, sem essa estrutura. Route groups **não alteram a URL** — a Home continua em `/` e o contato em `/contato`.

---

## ✅ Pré-requisitos

- Node.js 18.17 ou superior
- Um banco de dados PostgreSQL (local, Neon, Supabase, etc.)

---

## 🚀 Rodando localmente

```bash
# 1. Clone o repositório
git clone <url-do-repo>
cd clinica-sorriso-pleno

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# edite o .env com a sua DATABASE_URL e credenciais de admin

# 4. Crie as tabelas no banco
npx prisma migrate dev --name init

# 5. Inicie o servidor de desenvolvimento
npm run dev
```

O site ficará disponível em `http://localhost:3000`.
O painel admin fica em `http://localhost:3000/admin` (você será redirecionado para o login).

> **Login do admin:** as credenciais são definidas pelas variáveis `ADMIN_EMAIL` e `ADMIN_PASSWORD` no `.env`. Não há cadastro de usuários — é um admin único fixo.

> Na **primeira execução**, o Next.js baixa as fontes do Google e o Prisma baixa os _engines_; portanto, é necessário acesso à internet no primeiro `npm install` / `npm run dev`.

---

## 🔑 Variáveis de ambiente

| Variável          | Descrição                                                        |
| ----------------- | ---------------------------------------------------------------- |
| `DATABASE_URL`    | String de conexão do PostgreSQL                                  |
| `NEXTAUTH_SECRET` | Chave secreta do NextAuth (gere com `openssl rand -base64 32`)   |
| `NEXTAUTH_URL`    | URL base da aplicação (ex.: `http://localhost:3000`)             |
| `ADMIN_EMAIL`     | E-mail de acesso ao painel admin                                 |
| `ADMIN_PASSWORD`  | Senha de acesso ao painel admin                                  |

---

## 📜 Scripts

| Comando             | O que faz                                  |
| ------------------- | ------------------------------------------ |
| `npm run dev`       | Inicia o servidor de desenvolvimento       |
| `npm run build`     | Gera o Prisma Client e faz o build de produção |
| `npm run start`     | Sobe a aplicação já buildada               |
| `npm run lint`      | Roda o ESLint                              |
| `npm run format`    | Formata o código com o Prettier            |
| `npm run db:studio` | Abre o Prisma Studio                       |

---

## ☁️ Deploy

Sugestão de stack para produção: **Vercel** (aplicação) + **Neon** ou **Supabase** (PostgreSQL).

1. Crie um banco PostgreSQL no Neon/Supabase e copie a connection string.
2. Importe o repositório na Vercel.
3. Configure as variáveis de ambiente no painel da Vercel (as mesmas do `.env`), usando a URL pública do site em `NEXTAUTH_URL`.
4. Faça o deploy. O script de build já executa `prisma generate`; rode as migrations com `npx prisma migrate deploy` (ou `npm run db:deploy`) apontando para o banco de produção.

---

## 📝 Licença

Uso livre para fins de estudo e portfólio.
