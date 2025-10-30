



import React, { useState, useEffect, useRef } from "react";
import { FiSend, FiMessageCircle, FiX } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";

function AiChatModel() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm your FashionHub AI stylist. What can I help you find today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [typingText, setTypingText] = useState("");
  const [isTypingDots, setIsTypingDots] = useState(false);
  const chatEndRef = useRef(null);

  const BACKEND_URL = import.meta.env.VITE_API_URL || "https://ecommerce-backend-y1bv.onrender.com";

  // 🎯 Generate unique session + load saved messages
  useEffect(() => {
    let id = sessionStorage.getItem("fashionhub_session_id");
    if (!id) {
      id = uuidv4();
      sessionStorage.setItem("fashionhub_session_id", id);
    }
    setSessionId(id);

    const saved = localStorage.getItem("fashionhub_chat_history");
    if (saved) {
      const parsed = JSON.parse(saved);
      setMessages(parsed);
      setDisplayedMessages(parsed);
    }
  }, []);

  // 💾 Save to localStorage
  useEffect(() => {
    localStorage.setItem("fashionhub_chat_history", JSON.stringify(messages));
  }, [messages]);

  // 🧭 Scroll to bottom on new message or typing
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [displayedMessages, typingText, isTypingDots]);

  // 🧭 Scroll to bottom when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      // focus input when opened
      setTimeout(() => {
        const el = document.querySelector(".fashionhub-chat-input");
        if (el) el.focus();
      }, 120);
    }
  }, [isOpen]);

  // 📝 Typing animation — first character shown immediately to avoid missing initial char
  const typeText = (text) => {
    return new Promise((resolve) => {
      if (!text || text.length === 0) {
        resolve();
        return;
      }

      // show first character immediately
      setTypingText(text.charAt(0));
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });

      let index = 1;
      const interval = setInterval(() => {
        // append next character
        setTypingText((prev) => prev + text.charAt(index));
        index++;
        // scroll while typing so user always sees new characters
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });

        if (index >= text.length) {
          clearInterval(interval);
          resolve();
        }
      }, 25); // typing speed; keep same as before
    });
  };

  // 🚀 Send Message
  const sendMessage = async () => {
    if (!input.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsg = { sender: "user", text: input, time };
    setMessages((prev) => [...prev, userMsg]);
    setDisplayedMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setIsTypingDots(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/aichat/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, sessionId }),
      });
      const data = await response.json();
      const botReply = data.reply || "Sorry, I couldn’t get a response.";

      setIsTypingDots(false);
      await typeText(botReply);

      const botMsg = {
        sender: "bot",
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setDisplayedMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg = {
        sender: "bot",
        text: "Error connecting to FashionHub AI.",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
      setDisplayedMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
      setTypingText("");
      setIsTypingDots(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) sendMessage();
  };

  // 🗑️ Clear chat
  const clearChat = () => {
    localStorage.removeItem("fashionhub_chat_history");
    const resetMsg = {
      sender: "bot",
      text: "Hi! I'm your FashionHub AI stylist. What can I help you find today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([resetMsg]);
    setDisplayedMessages([resetMsg]);
  };

  return (
    <>
      {/* 🟣 Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 bg-gradient-to-r from-[#002349] to-[#957C3D] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all z-50"
        >
          <FiMessageCircle size={24} />
        </button>
      )}

      {/* 💬 Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 h-[500px] sm:w-96 sm:h-[600px] md:w-[400px] md:h-[500px] lg:w-[400px] lg:h-[500px] bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-pink-200 z-50 sm:bottom-5 sm:right-5 sm:max-h-[80vh]">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#002349] to-[#957C3D] text-white py-3 px-4 font-semibold flex justify-between items-center">
            <span>FashionHub AI</span>
            <div className="flex gap-2">
              <button
                onClick={clearChat}
                className="text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded-full"
              >
                Clear
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition"
              >
                <FiX size={18} />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div
            className="flex-1 p-3 space-y-3 overflow-y-scroll hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {displayedMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl max-w-[80%] leading-relaxed text-sm md:text-base transition-all duration-300 ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-[#002349] to-[#957C3D] text-white rounded-br-none shadow-md animate-fadeIn"
                      : "bg-gray-100 text-gray-800 rounded-bl-none shadow-sm animate-fadeIn"
                  }`}
                >
                  {msg.text}
                </div>
                <span
                  className={`text-[10px] mt-1 ${
                    msg.sender === "user" ? "text-[#957C3D]" : "text-gray-400"
                  }`}
                >
                  {msg.time}
                </span>
              </div>
            ))}

            {/* 💭 Typing dots */}
            {isTypingDots && (
              <div className="flex flex-col items-start">
                <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none shadow-sm px-4 py-2 max-w-[80%] leading-relaxed flex items-center space-x-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}

            {/* Typing Text (live) */}
            {typingText && (
              <div className="flex flex-col items-start">
                <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none shadow-sm px-4 py-2 max-w-[80%] leading-relaxed text-sm md:text-base">
                  {typingText}
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center border-t border-gray-200 bg-white p-2">
            <input
              type="text"
              className="fashionhub-chat-input flex-1 border border-gray-300 rounded-full px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#957C3D] text-sm"
              placeholder="Ask about fashion trends..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="ml-2 bg-gradient-to-r from-[#002349] to-[#957C3D] text-white p-2 rounded-full hover:opacity-90 transition disabled:opacity-50 shadow-md"
            >
              <FiSend size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AiChatModel;
