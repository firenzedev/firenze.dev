-- supabase/migrations/20250429195333_events.sql


create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  subtitle text,
  icon text,
  image text,
  abstract text,
  date timestamptz not null,
  place text,
  sponsor text,
  address text,
  eventbrite_id text,
  eventbrite_link text,
  external_link text,
  ticket_tailor_id integer,
  type text,
  hide_sponsor_in_networking boolean default false,
  current boolean default false
);