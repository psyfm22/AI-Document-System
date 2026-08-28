from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # your Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



class QuestionRequest(BaseModel):
    question: str

@app.get("/")
def health_check():
    return {"status": "ok"}



@app.post("/ask")
def ask_question(request: QuestionRequest):
    # placeholder logic — no AI yet, just proving the pipe works
    fake_answer = f"You asked: '{request.question}' — here's a placeholder answer."
    return {"answer": fake_answer}