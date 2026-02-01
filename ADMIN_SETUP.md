# Nastavení administrace na Vercelu

Administrace používá **Upstash Redis** (úložiště obsahu) a **Vercel Blob** (obrázky). Oba servisy fungují na Vercelu a mají volný tarif.

## 1. Upstash Redis

1. Otevři [Vercel Marketplace](https://vercel.com/marketplace?category=storage&search=redis)
2. Přidej **Upstash Redis** do svého projektu
3. Propoj s projektem `mypageme`
4. Vercel automaticky přidá proměnné prostředí:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

*(Pozn.: Pokud máš starší migrovaný Vercel KV, použijí se `KV_REST_API_URL` a `KV_REST_API_TOKEN`.)*

## 2. Vercel Blob

1. V projektu na Vercelu: **Storage** → **Create Database** → **Blob**
2. Vytvoř Blob store
3. Vercel přidá `BLOB_READ_WRITE_TOKEN`

## 3. Lokální vývoj

Stáhni proměnné z Vercelu:

```bash
vercel env pull .env.local
```

Pak spusť:

```bash
npm run dev
```

Bez Redis/Blob:
- **Obsah** se načítá z `data/content.json` (read-only fallback)
- **Zápis** v adminu nebude fungovat bez Redis
- **Obrázky** se ukládají do `public/images/` (lokální fallback)

## 4. První nasazení

Při prvním deployi je Redis prázdný. Obsah se načte z `data/content.json`. Po prvním uložení v administraci se data zkopírují do Redis a od té chvíle se používá Redis.

---

**Administrace:** `/admin`
