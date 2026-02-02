# Pokyny pro nasazení (Deployment)

Tato stránka popisuje různé způsoby nasazení vaší portfolio stránky.

## Vercel (Doporučeno)

Vercel je nejjednodušší způsob, jak nasadit Next.js aplikaci.

### Postup:

1. Pushněte kód na GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Jděte na [vercel.com](https://vercel.com)
3. Klikněte na "New Project"
4. Vyberte váš GitHub repository
5. Vercel automaticky detekuje Next.js projekt
6. Klikněte na "Deploy"

### Konfigurujte environment proměnné:

1. Jděte do Project Settings → Environment Variables
2. Přidejte vaše environment proměnné ze `.env.example`
3. Redeploy projekt

## Netlify

1. Pushněte kód na GitHub
2. Jděte na [netlify.com](https://netlify.com)
3. Klikněte na "New site from Git"
4. Vyberte váš repository
5. Nastavte build příkaz na `npm run build`
6. Nastavte publish directory na `.next`
7. Klikněte na "Deploy site"

## Manuální nasazení (VPS/Server)

### Požadavky:
- Node.js 18+
- npm nebo yarn

### Postup:

1. SSH na váš server:
```bash
ssh user@your-server.com
```

2. Klonujte repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

3. Nainstalujte závislosti:
```bash
npm install
```

4. Build aplikace:
```bash
npm run build
```

5. Spusťte server (použijte PM2 pro management):
```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

6. Nastavte Nginx reverse proxy:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

7. Restartněte Nginx:
```bash
sudo systemctl restart nginx
```

## Docker

Vytvořte `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Vytvořte `docker-compose.yml`:
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Spusťte:
```bash
docker-compose up -d
```

## SSL/HTTPS

### Pro Vercel:
Vercel automaticky zajišťuje SSL certifikát.

### Pro ostatní hostitele:
Použijte Let's Encrypt s Certbot:
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d yourdomain.com
```

## Monitoring a Maintenance

### Vercel:
- Monitoring je vestavěný v Vercel Dashboard

### Self-hosted:
```bash
# Kontrola logu
pm2 logs portfolio

# Restart aplikace
pm2 restart portfolio

# Status
pm2 status
```

## Doporučené nastavení

1. **Domain**: Zaregistrujte si doménu (např. na Namecheap, GoDaddy)
2. **Email**: Nastavte si email na vaší doméně (pro kontakt)
3. **Analytics**: Přidejte Google Analytics na portfolio
4. **Backup**: Zálohujte pravidelně váš kód na GitHub

## Troubleshooting

### Build selhává
```bash
npm cache clean --force
rm -rf node_modules .next
npm install
npm run build
```

### Port 3000 je již používán
```bash
lsof -i :3000
kill -9 <PID>
```

### Chyba s environment proměnnými
- Ujistěte se, že máte `.env.local` nebo správně nastavené environment proměnné
- Proměnné s prefixem `NEXT_PUBLIC_` jsou dostupné v prohlížeči
