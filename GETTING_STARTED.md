# Rychlý Start Guide

Vítejte! Tady je vše, co potřebujete vědět, abyste začali se svým nových portfolio projektem.

## 📋 Co máte

Moderní Next.js portfolio s:
- ✨ Hladkými animacemi (Framer Motion)
- 🎨 Responzivním designem (Tailwind CSS)
- ⚡ Optimalizovaným výkonem
- 📱 Mobile-first přístupem
- 🔍 SEO optimalizací

## 🚀 Instalace a Spuštění (První Použití)

### 1. Instalace Node.js
Pokud máte macOS:
```bash
brew install node
```

### 2. Instalace závislostí projektu
```bash
cd /Users/mpmp/mypageme-2
npm install
```

### 3. Spuštění vývojového serveru
```bash
npm run dev
```

### 4. Otevřete prohlížeč
Jděte na [http://localhost:3000](http://localhost:3000)

## ⚙️ Základní Úpravy

### Změna Vašeho Jména a Email

1. Otevřete `app/page.tsx`
2. Najděte `projects` pole a upravte projekty
3. Změňte email v `ContactSection` komponentě

### Změna Barev

1. Otevřete `tailwind.config.ts`
2. Upravte `colors` sekci
3. Server se automaticky restartuje

### Přidání Projektů

V `app/page.tsx`:
```typescript
const projects: Project[] = [
  {
    id: 5,
    title: "Váš Projekt",
    description: "Popis projektu",
    tech: ["React", "Next.js"],
    size: "medium",
  },
];
```

## 📁 Struktura Projektu

```
mypageme-2/
├── app/
│   ├── components/         ← Komponenty (editujte tady!)
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   ├── layout.tsx          ← Metadata a nastavení
│   ├── page.tsx            ← Hlavní obsah
│   └── globals.css         ← Globální styly
├── public/                 ← Obrázky a assets
├── tailwind.config.ts      ← Tailwind nastavení
├── next.config.js          ← Next.js nastavení
└── package.json            ← Závislosti
```

## 🎯 Příští Kroky

1. **Personalizace**: Upravte svou informaci v komponentách
2. **Přidejte projekty**: Rozšiřte `projects` seznam
3. **Změňte barvy**: Vyberte si vaši oblíbenou barvu v `tailwind.config.ts`
4. **Nasaďte**: Pokud je hotovo, nasaďte na Vercel nebo jiný hostitel (viz DEPLOYMENT.md)

## 🔧 Dostupné Příkazy

```bash
npm run dev        # Spuštění vývojového serveru
npm run build      # Build pro produkci
npm run start      # Spuštění produkčního build
npm run lint       # Kontrola kódu
npm run type-check # TypeScript type checking
```

## 📚 Dokumentace

- **Customizace**: Viz [CUSTOMIZATION.md](CUSTOMIZATION.md)
- **Nasazení**: Viz [DEPLOYMENT.md](DEPLOYMENT.md)
- **README**: Viz [README.md](README.md)

## 🆘 Pomoc a Troubleshooting

### Server se nespouští
```bash
npm cache clean --force
rm -rf node_modules .next
npm install
npm run dev
```

### Port 3000 je obsazený
```bash
npm run dev -- -p 3001  # Spusťte na portu 3001
```

### Změny se nezobrazují
- Ujistěte se, že je server spuštěn (`npm run dev`)
- Restartněte prohlížeč (Ctrl+Shift+R nebo Cmd+Shift+R)
- Vyčistěte cache: `rm -rf .next`

## 💡 Tips & Tricks

### Hot Reload
Server automaticky detekuje změny - prostě refreshněte prohlížeč

### Dark Mode (Built-in)
Projekt je již v dark mode - design je tmavý a moderní

### Responsive Design
Všechny komponenty jsou responzivní a fungují na mobilech, tabletech i desktopu

### Performance
- Next.js automaticky optimalizuje obrázky a kód
- Framer Motion dělá animace glatko a efektivně
- Tailwind CSS generuje pouze CSS, který skutečně používáte

## 🎓 Dalším Studium

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [React Docs](https://react.dev)

## 🚀 Nasazení (Nejrychlejší Cesta)

### Vercel (Doporučeno)
1. Pushněte kód na GitHub
2. Jděte na [vercel.com](https://vercel.com)
3. Vyberte váš repo
4. Klikněte Deploy (1 klik!)

Viz [DEPLOYMENT.md](DEPLOYMENT.md) pro více detailů.

## ❓ Otázky?

- Prohlédněte si dokumentaci v projektu (README.md, DEPLOYMENT.md, CUSTOMIZATION.md)
- Zkontrolujte Next.js a Tailwind CSS dokumentaci
- Pokud máte chyby, zkuste vyčistit cache a restartovat server

## 🎉 Hotovo!

Nyní máte funkční, moderní portfolio. Vše co zbývá je:
1. ✏️ Editovat obsah
2. 🎨 Personalizovat design
3. 🚀 Nasadit na internet

Hodně štěstí! 🚀
