"use client";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    const res = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input, history: messages }),
    });
    const data = await res.json();
    setMessages((msgs) => [...msgs, { role: "assistant", content: data.response }]);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-purple-700 mb-4 text-center drop-shadow">WisePal</h1>
        <div ref={chatRef} className="h-96 overflow-y-auto mb-4 bg-gray-50 rounded p-3 border border-gray-200">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-3 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs shadow ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-purple-200 text-purple-900"
                }`}
              >
                <b>{msg.role === "user" ? "You" : "WisePal"}:</b> {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="mb-3 flex justify-start">
              <div className="px-4 py-2 rounded-lg max-w-xs shadow bg-purple-200 text-purple-900 animate-pulse">
                <b>WisePal:</b> ...
              </div>
            </div>
          )}
        </div>
        <div className="flex">
          <input
            className="flex-1 border-2 border-purple-300 rounded-l p-2 focus:outline-none focus:border-purple-500 placeholder-gray-600 text-gray-800"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            disabled={loading}
          />
          <button
            className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-semibold rounded-r hover:from-purple-600 hover:to-pink-500 transition"
            onClick={sendMessage}
            disabled={loading}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
