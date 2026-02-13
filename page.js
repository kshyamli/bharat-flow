"use client";
import { useState } from 'react';

export default function BharatDashboard() {
  const [input, setInput] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const processContent = async () => {
    if (!input) return alert("Please enter some content!");
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/transform', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input }),
      });
      const result = await response.json();
      setData(result);
    } catch (err) {
      alert("Backend is not running! Please start main.py");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-indigo-700">BharatFlow AI</h1>
          <p className="text-slate-500 mt-2 text-lg">AI-driven Content Personalization & Distribution</p>
        </header>

        <section className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
          <label className="block text-sm font-semibold mb-2 text-slate-600">Enter English Script / Post</label>
          <textarea 
            className="w-full h-48 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-indigo-500 focus:ring-0 transition-all outline-none text-lg"
            placeholder="Type your content here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
            onClick={processContent}
            disabled={loading}
            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl transition-all transform active:scale-95 shadow-lg shadow-indigo-200"
          >
            {loading ? "AI is Localizing..." : "Generate Regional Content Pack"}
          </button>
        </section>

        {data && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
            <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl border border-indigo-100">
              <h3 className="font-bold text-indigo-900 uppercase text-xs tracking-widest mb-3">Hinglish Transformation</h3>
              <p className="text-slate-700 leading-relaxed">{data.hinglish}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100">
              <h3 className="font-bold text-orange-900 uppercase text-xs tracking-widest mb-3">Marathi Transformation</h3>
              <p className="text-slate-700 leading-relaxed">{data.marathi}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
