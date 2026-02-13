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
    text = request.text
    
    # 💡 SYSTEM PROMPT STRATEGY:
    # In a real API call, you would send these instructions:
    # "Transform this English text into Hinglish. 
    # Use 70% Hindi, 30% English. Use Latin script (ABCD).
    # Keep the vibe 'cool' and 'relatable' for Indian Gen-Z."

    # For the Hackathon Demo, we simulate high-quality results:
    return {
        "summary": f"Focus: {text[:40]}...",
        
        "hinglish": (
            "Hey! Toh basically baat yeh hai ki " + text.lower() + 
            ". Yeh kaafi interesting concept hai, haina? Let's see iska impact kya hota hai!"
        ),
        
        "marathi": (
            "नमस्कार! " + text + " या विषयावर हा एक नवीन विचार आहे. "
            "स्थानिक स्तरावर याचा मोठा फायदा होऊ शकतो."
        ),
        
        "cultural_insight": "Used 'conversational fillers' to increase engagement rates for Bharat audience."
    }
