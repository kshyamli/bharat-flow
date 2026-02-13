# System Design - BharatFlow AI

## 1. System Architecture
BharatFlow uses a **Decoupled Architecture**:
* **Client Layer:** A Next.js (React) application styled with Tailwind CSS. It handles user interactions and displays the AI results.
* **API Layer:** A FastAPI (Python) server that acts as the bridge between the UI and the Transformation Logic.
* **Logic Layer:** A set of Python functions that simulate (or call) LLM endpoints for content transcreation.

## 2. Data Flow
1.  **User Input:** Content is entered in the React `textarea`.
2.  **Request:** On button click, a `POST` request is sent to `http://localhost:8000/transform`.
3.  **Processing:** The Python backend receives the JSON payload, processes the string, and generates regional variations.
4.  **Response:** The backend returns a JSON object containing the summary and localized text.
5.  **Update:** React state is updated, triggering a re-render of the "Results" cards.

## 3. UI/UX Design Decisions
* **Typography:** Using clean, sans-serif fonts for readability in regional scripts.
* **Color Palette:** Indigo and Slate colors to provide a professional, trustworthy "SaaS" feel.
* **Feedback:** Using loading states to inform the user that the "AI is thinking."
