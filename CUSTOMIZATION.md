# Konfigurace a Customizace

## Personalizace Portfolio

### 1. Změňte osobní informace v `app/page.tsx`

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Váš projekt",
    description: "Popis vašeho projektu",
    tech: ["Tech1", "Tech2"],
    size: "medium",
  },
  // ...
];

const skills = [
  "Vaše dovednosti",
  // ...
];
```

### 2. Upravte social linky v `app/components/ContactSection.tsx`

```typescript
<a href="https://github.com/yourname" ...>
<a href="https://linkedin.com/in/yourname" ...>
```

### 3. Změňte email kontaktu

V `app/components/ContactSection.tsx`:
```typescript
<a href="mailto:your-email@example.com" ...>
```

### 4. Upravte metadata v `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Vaše Jméno | Portfolio",
  description: "Váš popis",
  // ...
};
```

## Styling a Design

### Změna barev

Editujte `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      background: "#0a0a0a",     // Hlavní barva pozadí
      surface: "#141414",         // Sekundární barva
      "surface-light": "#1e1e1e", // Světlejší povrch
      accent: "#3b82f6",          // Accent barva (modré)
      "accent-dark": "#2563eb",   // Tmavší accent
      muted: "#6b7280",           // Ztlumená barva textu
    },
  },
}
```

### Oblíbené barevné schéma

#### Dark Mode (aktuální):
- Background: `#0a0a0a`
- Accent: `#3b82f6` (modrá)

#### Purple Theme:
```typescript
accent: "#a855f7",        // Purple
"accent-dark": "#9333ea", // Dark purple
```

#### Green Theme:
```typescript
accent: "#10b981",        // Emerald
"accent-dark": "#059669", // Dark emerald
```

#### Red Theme:
```typescript
accent: "#ef4444",        // Red
"accent-dark": "#dc2626", // Dark red
```

## Animace

Framer Motion animace jsou настроены v `app/globals.css` a jednotlivých komponentách.

### Úprava animací

V `tailwind.config.ts`:
```typescript
animation: {
  "fade-in": "fadeIn 0.6s ease-in-out",
  "slide-up": "slideUp 0.5s ease-out",
},
keyframes: {
  fadeIn: {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
  slideUp: {
    "0%": { transform: "translateY(20px)", opacity: "0" },
    "100%": { transform: "translateY(0)", opacity: "1" },
  },
},
```

## Font

Aplikace používá font "Inter" od Google Fonts.

### Změna fontu v `app/layout.tsx`:

```typescript
import { Inter, Roboto, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
```

## Přidání Sekcí

### Nová sekce:

1. Vytvořte novou komponentu v `app/components/`:
```bash
touch app/components/NewSection.tsx
```

2. Vytvořte komponentu:
```typescript
"use client";

export default function NewSection() {
  return (
    <section className="px-4 py-20 max-w-7xl mx-auto">
      {/* Váš obsah */}
    </section>
  );
}
```

3. Přidejte do `app/page.tsx`:
```typescript
import NewSection from "./components/NewSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection skills={skills} />
      <NewSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </main>
  );
}
```

## SEO Optimizace

### Meta tagy

Upravte v `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Váš Název | Portfolio",
  description: "Váš popis (max 160 znaků)",
  keywords: "frontend, react, next.js, developer",
  authors: [{ name: "Vaše Jméno" }],
  openGraph: {
    title: "Váš Název | Portfolio",
    description: "Váš popis",
    type: "website",
    url: "https://yourdomain.com",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

### robots.txt a sitemap.xml

Úpravy v `public/robots.txt` a `public/sitemap.xml`

## Performance

### Optimizace obrázků

Přidejte obrázky projektů:

```typescript
import Image from "next/image";

<Image
  src="/images/project.jpg"
  alt="Project"
  width={800}
  height={600}
  priority={false}
/>
```

### Lazy loading

Komponenty s `whileInView` automáticky load pouze když jsou viditelné.

## Accessibility

Projekt již má:
- Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- Alt text pro ikony
- Keyboard navigation
- Color contrast

## Přehled Souborů

```
app/
├── components/
│   ├── HeroSection.tsx       # Úvodní sekce
│   ├── AboutSection.tsx      # O autorovi
│   ├── ProjectsSection.tsx   # Portfolio projektů
│   └── ContactSection.tsx    # Kontakt
├── layout.tsx                 # Layout s metadaty
├── page.tsx                   # Hlavní stránka
├── globals.css                # Globální styly
└── ...
```

## Troubleshooting

### Komponenta se nereloaduje
- Ujistěte se, že máte `"use client"` na začátku souboru
- Restartněte dev server: `npm run dev`

### Tailwind třídy se neuplatňují
- Zkontrolujte, že třídy jsou v `tailwind.config.ts` content
- Vymazat cache: `rm -rf .next`

### Animation se nezobrazuje
- Zkontrolujte, že Framer Motion je nainstalován: `npm install framer-motion`
- Ujistěte se, že komponenta má `"use client"` directive
