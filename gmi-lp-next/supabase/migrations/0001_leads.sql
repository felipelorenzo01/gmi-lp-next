-- Tabela de leads capturados pela Landing Page da GMI.
-- Rode no SQL Editor do Supabase (projeto GMI-Dashboard) ou via migration.

create table if not exists public.leads (
  id                uuid primary key default gen_random_uuid(),
  created_at        timestamptz not null default now(),

  nome              text not null,
  whatsapp          text not null,           -- E.164: 5531999998888
  email             text not null,
  email_corporativo boolean not null default false,
  segmento          text default '',
  cidade            text default '',
  solucao           text not null,           -- maquinas | automotivo | fitas | outro
  mensagem          text default '',

  score             int  not null default 0, -- 0..100
  tier              text not null default 'frio', -- quente | morno | frio
  tags              text[] not null default '{}',
  origem            text not null default 'lp-site',

  suri_status       text not null default 'pending', -- pending | sent | error
  suri_contact_id   text,
  suri_error        text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_tier_idx        on public.leads (tier);
create index if not exists leads_suri_status_idx on public.leads (suri_status);

-- RLS: a API usa service_role (bypassa RLS). Mantenha RLS ligada e SEM policies
-- de insert público, para que ninguém grave direto pelo anon key.
alter table public.leads enable row level security;
