from fastapi import Body
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from transformers import pipeline

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

chatbot = pipeline("text-generation", model="facebook/blenderbot-1B-distill")

@app.post("/chat")
async def chat(request: Request):
    data = await request.json()
    user_message = data.get("message", "")
    history = data.get("history", [])
    conversation = " ".join([msg["content"] for msg in history] + [user_message])
    response = chatbot(conversation, max_length=100, pad_token_id=50256)
    reply = response[0]['generated_text'] if isinstance(response, list) else str(response)
    return {"response": reply}
