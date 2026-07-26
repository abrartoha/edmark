-- Edmark Education — Supabase schema
-- Run this in the Supabase SQL editor to enable the contact form.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  interest text,
  message text,
  referral_source text,
  created_at timestamptz not null default now()
);

-- If the table already exists from an earlier version, add the new column:
alter table public.leads add column if not exists referral_source text;

-- Enable Row Level Security
alter table public.leads enable row level security;

-- Allow anonymous visitors to submit an enquiry (insert only).
create policy "Anyone can submit a lead"
  on public.leads
  for insert
  to anon
  with check (true);

-- Note: no select/update/delete policy for anon, so submitted leads stay
-- private and are only visible from the Supabase dashboard or your admin tools.
