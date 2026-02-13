# Project Requirements - BharatFlow AI

## 1. Functional Requirements
* **Content Input:** Users must be able to input English text via a multi-line web interface.
* **AI Transformation:** The system must process English text into at least two regional variations (Hinglish and Marathi).
* **Summary Generation:** The system must automatically provide a concise summary of the input content.
* **Real-time Preview:** The dashboard must display generated content variations in a grid-like layout for easy comparison.

## 2. Technical Requirements
* **Frontend:** Must be built with Next.js for high performance and SEO capability.
* **Backend:** Must use a Python-based REST API (FastAPI) to handle AI logic.
* **CORS:** The backend must safely allow requests from the frontend origin.
* **Responsiveness:** The UI must be mobile-friendly to support creators on the go.

## 3. User Experience (UX) Goals
* **Minimalist Design:** Reduce "cognitive load" by focusing only on the input and output.
* **Speed:** AI processing should feel instantaneous or provide a loading state to the user.
