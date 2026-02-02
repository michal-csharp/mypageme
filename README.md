# Frontend Developer Portfolio

Moderní portfolio stránka vytvořená s Next.js 14, TypeScript, Tailwind CSS a Framer Motion.

## 🚀 Funkce

- ✨ Animace s Framer Motion
- 🎨 Moderní design s Tailwind CSS
- 📱 Plně responzivní
- ⚡ Optimalizováno pro výkon
- 🔍 SEO optimalizováno
- 💫 Smooth scrolling
- 🎯 Showcase projektů v Bento grid designu

## 📋 Požadavky

- Node.js 18+
- npm nebo yarn

## ⚙️ Instalace

1. Klonujte projekt:
```bash
git clone <repo>
cd mypageme-2
```

2. Nainstalujte závislosti:
```bash
npm install
```

3. Spusťte vývojový server:
```bash
npm run dev
```

4. Otevřete [http://localhost:3000](http://localhost:3000) v prohlížeči

## 🏗️ Build

```bash
npm run build
npm run start
```

## 📦 Technologie

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS 3
- **Animace:** Framer Motion 11
- **Icons:** Lucide React
- **Language:** TypeScript
- **CSS:** PostCSS + Autoprefixer

## 📁 Struktura projektu

```
mypageme-2/
├── app/
│   ├── layout.tsx         # RootLayout s metadaty
│   ├── page.tsx          # Hlavní stránka s komponentami
│   └── globals.css       # Globální styly
├── public/
│   ├── robots.txt        # SEO robots
│   └── sitemap.xml       # XML sitemap
├── tailwind.config.ts    # Tailwind konfigurace
├── tsconfig.json         # TypeScript konfigurace
├── next.config.js        # Next.js konfigurace
└── package.json          # Projekt Dependencies
```

## 🎨 Sekce stránky

1. **Hero Section** - Uvítací část s CTA tlačítky
2. **About Section** - Bento grid layout s informacemi
3. **Projects Section** - Showcase projektů s responsivním grid
4. **Contact Section** - Sekce pro kontakt a sociální sítě
5. **Footer** - Sociální sítě a copyright

## 🔧 Customizace

### Změna barev

Upravte barvy v `tailwind.config.ts`:
```typescript
colors: {
  background: "#0a0a0a",
  surface: "#141414",
  accent: "#3b82f6",
  // ...
}
```

### Přidání projektů

Upravte pole `projects` v `app/page.tsx` a přidejte nové projekty.

### Sociální sítě

Aktualizujte GitHub a LinkedIn linky v `app/page.tsx`.

## 📝 TODO

- [ ] Přidat formulář pro kontakt s validací
- [ ] Implementovat dark/light mode toggle
- [ ] Přidat blog sekcí
- [ ] Implementovat comment systém
- [ ] Přidat multi-language support

## 📄 Licence

MIT License - volný k použití a úpravám

## 👤 Autor

Frontend Developer
- GitHub: [github.com/yourusername](https://github.com)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com)
