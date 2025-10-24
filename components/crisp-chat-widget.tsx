"use client"

import type React from "react"
import { useChat } from "@/lib/chat-context"
import { useState, useRef, useEffect } from "react"
import { X, Send, MessageCircle, Loader } from "lucide-react"

export function CrispChatWidget() {
  const { messages, isOpen, setIsOpen, addMessage, handleButtonClick, quoteContext } = useChat()
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const lastMessage = messages[messages.length - 1]
    if (lastMessage?.type === "user") {
      setIsTyping(true)
      const timer = setTimeout(() => setIsTyping(false), 1200)
      return () => clearTimeout(timer)
    }
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    addMessage(inputValue, "user")
    setInputValue("")
  }

  const handleButtonClick_ = (action: string) => {
    handleButtonClick(action)
  }

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gradient-to-br from-primary to-accent hover:shadow-xl scale-100 hover:scale-110"
        }`}
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
      </button>

      {/* Chat Window - Improved responsive design for mobile */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-full sm:w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 h-[80vh] sm:h-[80vh]">
          {/* Header */}
          <div className="bg--r from-primary to-accent p-4 text-white flex-shrink-0">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">Crisp</h3>
                <p className="text-xs opacity-90">New Health Medicals Support</p>
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            {quoteContext.productName && (
              <div className="mt-3 bg-white/20 rounded-lg p-2 text-sm">
                <p className="font-semibold truncate">{quoteContext.productName}</p>
                <p className="text-xs opacity-90">
                  Qty: {quoteContext.quantity || 1} • {quoteContext.price}
                </p>
              </div>
            )}
          </div>

          {/* Messages - Better scrolling and responsive spacing */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-background">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs sm:max-w-sm px-4 py-2 rounded-lg ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none border border-border"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>

                  {message.buttons && message.buttons.length > 0 && (
                    <div className="mt-3 flex flex-col gap-2">
                      {message.buttons.map((button) => (
                        <button
                          key={button.id}
                          onClick={() => handleButtonClick_(button.action)}
                          className="w-full text-left px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-md text-xs font-medium transition-colors border border-primary/30"
                        >
                          {button.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground rounded-lg rounded-bl-none border border-border px-4 py-2 flex items-center gap-1">
                  <Loader size={16} className="animate-spin" />
                  <span className="text-xs text-muted-foreground">Crisp is typing...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input - Better mobile responsiveness */}
          <form onSubmit={handleSendMessage} className="border-t border-border p-3 sm:p-4 bg-white flex-shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 sm:px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
