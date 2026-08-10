-- Waitlist emails from the marketing landing.
-- Inserts go through the Next.js Server Action only (server-held key).
-- No public SELECT — list stays private.

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text not null default 'landing',
  created_at timestamptz not null default now(),
  constraint waitlist_email_unique unique (email)
);

create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);

alter table public.waitlist enable row level security;

drop policy if exists waitlist_insert_anon on public.waitlist;
create policy waitlist_insert_anon
  on public.waitlist
  for insert
  to anon
  with check (
    email ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$'
    and char_length(email) <= 320
  );

grant usage on schema public to anon, authenticated, service_role;
grant insert on table public.waitlist to anon, service_role;
revoke select, update, delete on table public.waitlist from anon, authenticated;
grant all on table public.waitlist to service_role;
