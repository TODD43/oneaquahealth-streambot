# OneAquaHealth StreamBot

A mono-repo for a Telegram-powered water quality monitoring platform.

## Structure

- `bot/` — FastAPI app with Telegram webhook handler
- `dashboard/` — Next.js dashboard with water health alerts
- `docs/` — project documentation

## Quick start

### Bot

```bash
cd bot
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Dashboard

```bash
cd dashboard
npm install
npm run dev
```
