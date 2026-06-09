# GMI — Landing Page (Next.js)

Landing page responsiva de captação de leads da **GMI Distribuidora**, com formulário
funcional que **qualifica cada lead** e o envia para a **SURI** (plataforma de atendimento),
com persistência de backup no **Supabase**.

Stack: Next.js 14 (App Router) · TypeScript · Tailwind · Zod · Supabase.

---

## 1. Rodar localmente

```bash
npm install
cp .env.example .env.local   # preencha os valores
npm run dev                  # http://localhost:3000
```

## 2. Deploy (GitHub + Vercel)

1. Suba este projeto para um repositório no GitHub.
2. Vercel → **Add New Project → Import** o repositório (preset Next.js, detectado sozinho).
3. Em **Settings → Environment Variables**, configure as variáveis abaixo.
4. Deploy. Trocar o domínio depois: **Settings → Domains**.

## 3. Variáveis de ambiente

| Variável | Para quê | Obrigatória |
|---|---|---|
| `SURI_API_URL` | Endpoint do chatbot (Portal SURI) **com `/api`** | p/ enviar à SURI |
| `SURI_API_TOKEN` | Bearer token (Portal SURI > Configurações) | p/ enviar à SURI |
| `SUPABASE_URL` | URL do projeto Supabase | p/ salvar leads |
| `SUPABASE_SERVICE_ROLE_KEY` | service_role (somente server-side) | p/ salvar leads |

> O formulário **funciona mesmo sem essas variáveis** (modo preview): o lead é validado e
> qualificado, e a tela de sucesso aparece normalmente. Quando as credenciais entrarem,
> os leads passam a ser gravados e enviados de fato — sem mudar nenhuma linha de código.

## 4. Banco (Supabase)

Rode `supabase/migrations/0001_leads.sql` no SQL Editor do projeto (pode ser o mesmo
`GMI-Dashboard`). Cria a tabela `leads` com score, tier, tags e status de envio à SURI.

## 5. Integração SURI — o que pedir/confirmar

A integração já está pronta e isolada em `lib/suri.ts`. Para ligá-la, você precisa:

1. **No Portal SURI → Configurações**, copiar o **endpoint** do chatbot e o **token** → colar em
   `SURI_API_URL` (lembre do `/api`) e `SURI_API_TOKEN`.
2. **Confirmar no Postman da SURI** (logado na conta da GMI) o método **"Importar contato"**:
   - o **caminho** exato (no código está `POST {URL}/contacts/import` como placeholder);
   - os **nomes dos campos** do corpo (no código: `phone`, `name`, `email`, `observations`, `tags`).
   - Ajuste **somente** a função `buildImportContactBody()` em `lib/suri.ts` se os nomes diferirem.

O lead chega na SURI com nome, WhatsApp (E.164), e-mail e um bloco de **observações**
contendo todos os campos + a qualificação, além de **tags** (`Tier:quente`, `Solucao:maquinas`,
`Origem:LP-Site`, `Score:NN`).

## 6. Régua de qualificação (ajustável)

Tudo fica em **`lib/qualification.ts`**, no objeto `CONFIG` no topo — pesos, listas de
domínios/segmentos/cidades e os cortes de tier. Mexa só ali. Modelo atual:

- E-mail corporativo +25 (genérico +5) · WhatsApp válido +15 · Nome completo +5
- Solução: Máquinas/comodato +30 · Automotivo/Fitas +20 · Outro +10
- Segmento de alto fit +15 (outro +8) · Cidade em MG +10 (fora +5)
- **Tiers:** ≥70 Quente · 40–69 Morno · <40 Frio

Me mande os pesos/cortes que você quer e eu deixo o `CONFIG` calibrado.

## 7. Assets

Todas as imagens, logos das marcas (3M, Sherwin-Williams, GMax, Vonixx, Maxi Rubber, Farben)
e dos clientes (Azul, Carbel, GOL, Grupo Líder, Saritur) foram extraídas do PDF original da
arte e estão em `public/img/`. A faixa de marcas é uma única imagem (`marcas.png`); se quiser
que ela quebre em linhas no mobile, dá pra trocar pelos logos individuais depois.

Único ponto em aberto: a **fonte Averta**. Hoje usamos *Manrope* (livre) como substituta.
Se a GMI tiver a licença web da Averta, é só trocar as importações em `app/layout.tsx`.
