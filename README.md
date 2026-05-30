# 📈 Stock Market Academy — Deployment Guide

A complete stock market education platform with:
- Full trading guide (candlesticks, indicators, strategies, taxes, risk management)
- **AI Tutor** powered by Google Gemini 1.5 Flash (FREE — no credit card)
- **Live Paper Trading** with real NSE stock prices via Yahoo Finance
- 30-question randomised quiz, candlestick chart modal, portfolio builder

---

## 🗂 Project Structure

```
sma-website/
├── api/
│   ├── chat.js       ← AI Tutor backend (calls Google Gemini — FREE)
│   └── stocks.js     ← Live stock prices (calls Yahoo Finance server-side)
├── public/
│   └── index.html    ← The entire frontend (one file)
├── package.json
├── vercel.json       ← Routing config
└── README.md
```

---

## ✅ Step 1 — Get Your Free Gemini API Key

1. Go to **https://aistudio.google.com**
2. Sign in with any Google account
3. Click **"Get API key"** → **"Create API key"**
4. Copy the key (looks like: `AIzaSyXXXXXXXXXXXXXXXXX`)

**Free tier limits:** 1,500 requests/day · 15 requests/minute  
No credit card needed. Ever.

---

## ✅ Step 2 — Push to GitHub

1. Go to **https://github.com** → sign up free
2. Click **"New repository"**
   - Name: `stock-market-academy`
   - Set to **Public**
   - Click **Create repository**
3. On your computer, open a terminal in the `sma-website/` folder:

```bash
git init
git add .
git commit -m "Initial commit — Stock Market Academy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/stock-market-academy.git
git push -u origin main
```

> **No terminal?** Use GitHub's web interface — click "uploading an existing file" and drag all the files in.

---

## ✅ Step 3 — Deploy on Vercel (Free)

1. Go to **https://vercel.com** → sign up with GitHub
2. Click **"Add New Project"**
3. Select your `stock-market-academy` repository → click **Import**
4. Leave all settings as default → click **Deploy**
5. Your site goes live at: `https://stock-market-academy.vercel.app`

---

## ✅ Step 4 — Add Your Gemini API Key to Vercel

This is the most important step — without it the AI won't work.

1. On your Vercel project page, go to **Settings → Environment Variables**
2. Click **"Add New"**
3. Fill in:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** paste your key from Step 1 (`AIzaSy...`)
   - **Environments:** check all three (Production, Preview, Development)
4. Click **Save**
5. Go to **Deployments** → click the three dots on latest deploy → **Redeploy**

Done! The AI Tutor now works completely free.

---

## ✅ Step 5 — Test Everything

Open your live URL and verify:

| Feature | What to check |
|---------|---------------|
| AI Tutor | Ask "What is RSI?" — should get a detailed answer |
| Paper Trading | Header badge should say "🟢 LIVE BASELINE (Yahoo Finance)" |
| Stock prices | Should show realistic NSE prices, not round numbers |
| Charts | Click 📈 on any stock row to see candlestick chart |
| Quiz | Each attempt should show different questions |

---

## 🔄 How Live Stock Data Works

```
Browser → /api/stocks → Vercel server → Yahoo Finance → back to browser
```

The key insight: Yahoo Finance **blocks browser requests** (CORS) but **allows server requests**. By routing through a Vercel serverless function, we bypass this restriction entirely. Free, reliable, and updates every 60 seconds.

**When is data live?**
- NSE market hours: Monday–Friday, 9:15 AM – 3:30 PM IST
- Outside hours: returns last closing prices (still useful as baseline)

---

## 🔄 How the AI Works

```
Browser → /api/chat → Vercel server → Google Gemini 1.5 Flash → back to browser
```

Your Gemini API key stays on the server — users never see it. The AI is tuned specifically for Indian markets, SEBI regulations, NSE/BSE stocks, and Indian tax law.

---

## 🛠 Making Changes

After any edit to your files:

```bash
git add .
git commit -m "Your change description"
git push
```

Vercel automatically redeploys in ~30 seconds.

---

## 🌐 Custom Domain (Optional)

1. Buy a domain at **namecheap.com** or **godaddy.com** (e.g. `stockmarketacademy.in` ≈ ₹800/year)
2. In Vercel: **Settings → Domains → Add** → type your domain
3. Follow the DNS instructions (update your domain's nameservers/CNAME)
4. Takes 10–30 minutes to go live

---

## ❓ Troubleshooting

**AI says "Connection failed"**
→ Check that `GEMINI_API_KEY` is set correctly in Vercel Environment Variables and redeployed.

**Stock prices show round numbers / "SIMULATION MODE"**
→ Market might be closed (outside 9:15 AM–3:30 PM IST weekdays), or Yahoo Finance is temporarily down. This is normal — prices resume on next market open.

**Changes not showing after push**
→ Wait 30 seconds, then hard refresh (Ctrl+Shift+R).

**Vercel says "Function error"**
→ Check Vercel → Functions tab for error logs.

---

## 📊 Free Tier Limits Summary

| Service | Free Limit | Will you hit it? |
|---------|-----------|-----------------|
| Vercel hosting | 100GB bandwidth/month | Almost certainly no |
| Vercel functions | 100,000 invocations/month | No (typical usage: ~500/month) |
| Google Gemini Flash | 1,500 requests/day, 15/min | No for personal/small use |
| Yahoo Finance | Unofficial — no hard limit | No |

**Total monthly cost: ₹0**
