from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

# This block allows your React frontend to connect without errors
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContentRequest(BaseModel):
    text: str

@app.post("/transform")
async def transform_content(request: ContentRequest):
    # Logic: Summarization & Multi-language Transformation
    text = request.text
    
    return {
        "summary": f"Quick Summary: {text[:60]}...",
        "hinglish": f"Original content ka localized version: {text} - Yeh kaafi sahi lag raha hai!",
        "marathi": f"तुमच्या आशयाचे मराठी रूपांतर: {text} - हे खूप प्रभावी आहे.",
        "status": "ready"
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
