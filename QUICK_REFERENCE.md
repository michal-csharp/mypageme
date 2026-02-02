# 🎬 Quick Reference - Nejčastější Úlohy

## Personalizace (Co Udělat Hned)

### 1. Změní Své Jméno
**Soubor**: `app/page.tsx`
```typescript
// Změň h1 text
<h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
  TVOJE JMÉNO
  <span className="block text-accent">& Tagline</span>
</h1>
```

### 2. Změň Popis (Hero)
**Soubor**: `app/page.tsx`
```typescript
<p className="text-xl md:text-2xl text-muted mb-12 max-w-2xl mx-auto">
  TVŮJ POPIS TADY
</p>
```

### 3. Změň Email
**Soubor**: `app/components/ContactSection.tsx`
```typescript
<a href="mailto:TVŮJ EMAIL">
```

### 4. Změň GitHub & LinkedIn
**Soubor**: `app/components/ContactSection.tsx`
```typescript
<a href="https://github.com/TVOJE USERNAME">
<a href="https://linkedin.com/in/TVŮJ PROFIL">
```

### 5. Přidej Projekty
**Soubor**: `app/page.tsx`
```typescript
const projects: Project[] = [
  {
    id: 5,
    title: "Tvůj Projekt",
    description: "Popis",
    tech: ["React", "Node.js"],
    size: "medium",
  },
  // ...
];
```

### 6. Změň Barvy
**Soubor**: `tailwind.config.ts`
```typescript
accent: "#3b82f6",        // Změní na tvoji barvu
"accent-dark": "#2563eb",
```

---

## Příklady Barev

```typescript
// MODRÁ (aktuální)
accent: "#3b82f6"

// FIALOVÁ
accent: "#a855f7"

// ZELENÁ
accent: "#10b981"

// ČERVENÁ
accent: "#ef4444"

// ORANŽOVÁ
accent: "#f59e0b"

// RŮŽOVÁ
accent: "#ec4899"
```

---

## Spuštění

```bash
# Vývojář server
npm run dev
# Jdi na http://localhost:3000

# Production build
npm run build
npm run start

# Kontrola chyb
npm run lint

# Type check
npm run type-check
```

---

## Struktura Projektů

```typescript
interface Project {
  id: number;              // Unikátní ID
  title: string;          // Název projektu
  description: string;    // Popis
  tech: string[];        // Technologie
  size: "small" | "medium" | "large" | "wide";
}

// Velikost projektů:
// "medium" = 1x1 grid item (normální)
// "wide" = 2x1 grid item (na šířku)
// "large" = 2x2 grid item (velký, trvá 2 místa)
// "small" = malý (reserve)
```

---

## Soubory Struktura

```
Edituj TOHLE:
├── app/
│   ├── page.tsx           ← OBSAH (projektů, skills)
│   ├── layout.tsx         ← METADATA
│   ├── components/
│   │   ├── HeroSection.tsx       ← ÚVOD
│   │   ├── AboutSection.tsx      ← O TOBĚ
│   │   ├── ProjectsSection.tsx   ← PROJEKTY
│   │   └── ContactSection.tsx    ← KONTAKT
│   └── globals.css        ← GLOBÁLNÍ STYLY

Config:
├── tailwind.config.ts     ← BARVY
├── next.config.js         ← NEXT.JS
├── tsconfig.json          ← TYPESCRIPT
├── .prettierrc             ← FORMÁT
└── .env.local             ← PROMĚNNÉ
```

---

## Top 5 Věcí K Změně

1. **Jméno v heroSection** - app/page.tsx (h1)
2. **Email** - app/components/ContactSection.tsx
3. **Projekty** - app/page.tsx (const projects)
4. **Barvy** - tailwind.config.ts (accent: "#...")
5. **Metadata** - app/layout.tsx (title, description)

---

## Operace s Gitem

```bash
# Initialize (pokud nemáš git)
git init
git add .
git commit -m "Initial commit"

# Změny po tom
git add .
git commit -m "Moje změny"
git push origin main

# Nová větev
git checkout -b new-feature
git push origin new-feature
```

---

## Nasazení na Vercel (1-2-3)

1. **Pushni na GitHub**
```bash
git push origin main
```

2. **Jdi na vercel.com**
- Přihlaš se
- Klikni "New Project"
- Vyber repo

3. **Klikni Deploy**
- Vercel sám to build
- Hotovo! 🎉

---

## Deployment Altrenativy

| Služba | Ease | Cena | Time |
|---|---|---|---|
| Vercel | ⭐⭐⭐⭐⭐ | FREE | 2 min |
| Netlify | ⭐⭐⭐⭐ | FREE | 3 min |
| Heroku | ⭐⭐⭐ | Plátí | 5 min |
| Own Server | ⭐⭐ | Plátí | 30 min |

**DOPORUČUJI**: Vercel 🚀

---

## Doména

1. **Koupi doménu** (Namecheap, GoDaddy)
2. **Připoj k Vercel**:
   - Jdi do Project Settings
   - Domains
   - Přidej doménu
   - Následuj instrukce DNS

---

## Environment Proměnné

**Soubor**: `.env.local`
```
NEXT_PUBLIC_CONTACT_EMAIL=tvoj@email.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/username
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/username
```

Pokud nasadíš na Vercel:
- Project Settings
- Environment Variables
- Přidej tady (ne v .env.local!)

---

## Troubleshooting

### Server se nespouští
```bash
npm cache clean --force
rm -rf .next node_modules
npm install
npm run dev
```

### Port 3000 je zaujatý
```bash
npm run dev -- -p 3001  # Na portu 3001
```

### Tailwind se neaplikuje
```bash
rm -rf .next
npm run dev
# Refresh prohlížeč (Cmd+Shift+R)
```

### TypeScript errory
```bash
npm run type-check
# Oprav errory v souborech
```

---

## Performance Tips

- ✅ Tailwind CSS = optimální (jen CSS co se používá)
- ✅ Next.js Image = auto komprese
- ✅ Framer Motion = hardware accelerated
- ✅ Vercel = CDN + caching

**Výsledek**: Super rychlé loading!

---

## SEO Tips

- ✅ robots.txt existuje
- ✅ sitemap.xml existuje
- ✅ Meta tagy jsou správné
- ✅ Open Graph existuje
- ✅ Mobile responsive

**Pouze málo oprávnění**:
- Aktualizuj sitemap.xml s vaší doménou
- Odešli Googlu (Search Console)

---

## Bezpečnost

- ✅ TypeScript (type safety)
- ✅ Security headers (X-Frame-Options, atd)
- ✅ No external scripts (jen Next.js)
- ✅ HTTPS auto (Vercel)
- ✅ Content Security Policy ready

---

## TypeScript

Pokud máš TypeScript errory:

```bash
npm run type-check  # Vidí všechny errory

# Poté můžeš opravit
# Nebo ignorovat s @ts-ignore (burr!)
```

---

## CSS Úpravy

Global styles: `app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Tvé custom CSS tady */
```

Component styles: Inline Tailwind klasý!
```tsx
<div className="bg-accent hover:bg-accent-dark">
  <!-- Tailwind klasy -->
</div>
```

---

## Animace Framer Motion

Už existují v komponentách. Chceš-li změnit:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}      // Start
  animate={{ opacity: 1, y: 0 }}       // End
  transition={{ duration: 0.6 }}       // Speed
>
  Obsah
</motion.div>
```

---

## Icons (Lucide React)

Používáno v projektu:
```tsx
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

<Github size={24} />
<Linkedin size={24} />
```

Další ikony: [lucide.dev](https://lucide.dev)

---

## Fonts

Aktuálně: **Inter** (od Google Fonts)

Změna v `app/layout.tsx`:
```tsx
import { Roboto, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

<body className={playfair.className}>
```

---

## Útip: Editor Settings

### VS Code
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

---

## Poslední Tipy

✨ **Refresh prohlížeče** - Pokud se nic nezmění  
⚡ **Restartuj server** - Pokud vidíš divné chyby  
🔧 **Vyčisti cache** - Pokud vše selhalo (rm -rf .next)  
📖 **Čti dokumentaci** - Je obsažena v projektu!  
🚀 **Fuckup a nauč se** - Nejlepší způsob jak se učit!

---

## Zdroje

- [Next.js Docs](https://nextjs.org/docs) - Framework
- [Tailwind Docs](https://tailwindcss.com) - Styling
- [Framer Motion](https://www.framer.com/motion) - Animace
- [React Docs](https://react.dev) - UI Library
- [TypeScript](https://www.typescriptlang.org) - Language

---

# 🚀 HOTOVO!

Tohle je všechno co potřebuješ vědět.

Ostatní věci jsou v:
- [GETTING_STARTED.md](GETTING_STARTED.md)
- [CUSTOMIZATION.md](CUSTOMIZATION.md)
- [DEPLOYMENT.md](DEPLOYMENT.md)

**Líbí se ti? Sdílej to!**

**Máš otázku? Gugluj to!**

**Chceš se zlepšit? Learuj Next.js & React!**

---

**Last Updated**: 2026-02-02
