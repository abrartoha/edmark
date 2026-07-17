# Edmark Education — Website

A fast, SEO-optimised, conversion-focused website for **Edmark Education**, an Australian education consultancy. Built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**, and wired to deploy on **Vercel** with **Supabase** as the backend.

> _Empowering students for life._

## ✨ Features

- **Aggressive, conversion-first marketing copy** across every page
- **Fully responsive** — looks great on mobile, tablet and desktop
- **SEO-ready**: metadata, Open Graph, `sitemap.xml`, `robots.txt`, JSON-LD structured data (Organization + FAQ)
- **Brand theme** pulled straight from the Edmark business card (teal / emerald / mint gradient)
- **Supabase-ready contact form** — captures leads with graceful fallback before Supabase is connected
- Pages: **Home**, **Services**, **About**, **Contact** (with embedded map)

## 🧱 Tech stack

| Layer      | Tech                          |
| ---------- | ----------------------------- |
| Framework  | Next.js 14 (App Router)       |
| Language   | TypeScript                    |
| Styling    | Tailwind CSS                  |
| Backend    | Supabase (Postgres)           |
| Hosting    | Vercel                        |

## 🚀 Deploy to Vercel

1. Push this repo to GitHub (already done if you're reading this there).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Add environment variables (see below) and click **Deploy**. That's it.

## 🔌 Connect Supabase (for the contact form)

1. Create a project at [supabase.com](https://supabase.com).
2. In the SQL editor, run [`supabase/schema.sql`](supabase/schema.sql) to create the `leads` table.
3. Copy your project URL and anon key into environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_SITE_URL=https://edmark.com.au
```

Add these in **Vercel → Project → Settings → Environment Variables** (and in `.env.local` for local dev — copy `.env.example`).

> Until Supabase is connected, the contact form still works and shows a success state — it just won't persist data yet.

## 🖥️ Local development (optional)

```bash
npm install
npm run dev
# open http://localhost:3000
```

## 🎨 Customising content

Almost all text and business details live in two files — edit these, no component digging required:

- [`lib/site.ts`](lib/site.ts) — business name, phone, email, address, nav
- [`lib/content.ts`](lib/content.ts) — services, process steps, testimonials, FAQs

Brand colours live in [`tailwind.config.ts`](tailwind.config.ts).

## 📁 Structure

```
app/            Routes (home, services, about, contact) + SEO (sitemap, robots)
components/     Reusable UI (Header, Footer, Hero, Services, ContactForm, ...)
lib/            Site config, marketing content, Supabase client
supabase/       Database schema
```

---

Built for Edmark Education · Sunshine VIC 3020
