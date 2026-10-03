from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

app = FastAPI(title="OneAquaHealth StreamBot")


@app.get("/")
async def health_check():
    return {"status": "ok"}


@app.post("/telegram-webhook")
async def telegram_webhook(request: Request):
    payload = await request.json()
    message = payload.get("message", {})
    photo = message.get("photo", [])

    image_url = None
    if photo:
        image_url = photo[-1].get("file_id")

    return JSONResponse(
        {
            "status": "ok",
            "image_url": image_url,
            "message": "Telegram photo payload accepted",
        },
        status_code=200,
    )
