"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"

export interface ChatMessage {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  buttons?: ChatButton[]
}

export interface ChatButton {
  id: string
  label: string
  action: string
}

export interface QuoteContext {
  productName?: string
  productId?: string
  quantity?: number
  price?: string
}

interface ChatContextType {
  messages: ChatMessage[]
  isOpen: boolean
  quoteContext: QuoteContext
  addMessage: (content: string, type: "user" | "bot", buttons?: ChatButton[]) => void
  setIsOpen: (open: boolean) => void
  setQuoteContext: (context: QuoteContext) => void
  clearChat: () => void
  handleButtonClick: (action: string) => void
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "bot",
      content: "Welcome to NewHealthMedicals! I'm Crisp, your AI assistant. How can I help you today?",
      timestamp: new Date(),
      buttons: [
        { id: "b1", label: "Browse Products", action: "browse" },
        { id: "b2", label: "Request Quote", action: "quote" },
        { id: "b3", label: "Contact Support", action: "contact" },
      ],
    },
  ])
  const [isOpen, setIsOpen] = useState(false)
  const [quoteContext, setQuoteContext] = useState<QuoteContext>({})

  const handleButtonClick = useCallback((action: string) => {
    switch (action) {
      case "browse":
        addMessage("I'd like to browse your products", "user")
        break
      case "quote":
        addMessage("I'd like to request a quote", "user")
        break
      case "contact":
        addMessage("I need to contact your support team", "user")
        break
      case "confirm_quote":
        addMessage("Yes, please proceed with this quote", "user")
        break
      case "bulk_pricing":
        addMessage("Tell me about bulk pricing options", "user")
        break
      case "delivery":
        addMessage("What are your delivery and installation options?", "user")
        break
      case "specifications":
        addMessage("Can you provide detailed specifications?", "user")
        break
      default:
        break
    }
  }, [])

  const addMessage = useCallback(
    (content: string, type: "user" | "bot", buttons?: ChatButton[]) => {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        type,
        content,
        timestamp: new Date(),
        buttons,
      }
      setMessages((prev) => [...prev, newMessage])

      // Simulate bot response with typing delay
      if (type === "user") {
        setTimeout(() => {
          const { response, responseButtons } = generateBotResponse(content, quoteContext)
          setMessages((prev) => [
            ...prev,
            {
              id: (Date.now() + 1).toString(),
              type: "bot",
              content: response,
              timestamp: new Date(),
              buttons: responseButtons,
            },
          ])
        }, 1200)
      }
    },
    [quoteContext],
  )

  const clearChat = useCallback(() => {
    setMessages([
      {
        id: "1",
        type: "bot",
        content: "Welcome to NewHealthMedicals! I'm Crisp, your AI assistant. How can I help you today?",
        timestamp: new Date(),
        buttons: [
          { id: "b1", label: "Browse Products", action: "browse" },
          { id: "b2", label: "Request Quote", action: "quote" },
          { id: "b3", label: "Contact Support", action: "contact" },
        ],
      },
    ])
    setQuoteContext({})
  }, [])

  return (
    <ChatContext.Provider
      value={{ messages, isOpen, quoteContext, addMessage, setIsOpen, setQuoteContext, clearChat, handleButtonClick }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error("useChat must be used within ChatProvider")
  }
  return context
}

function generateBotResponse(
  userMessage: string,
  context: QuoteContext,
): { response: string; responseButtons: ChatButton[] } {
  const lowerMessage = userMessage.toLowerCase()

  // If there's a product in context, provide contextual responses
  if (context.productName) {
    if (lowerMessage.includes("confirm") || lowerMessage.includes("yes") || lowerMessage.includes("proceed")) {
      return {
        response: `Perfect! I've noted your interest in ${context.quantity || 1} unit(s) of ${context.productName} (${context.price}). Our sales team will contact you within 24 hours to confirm details and discuss bulk pricing options. Is there anything else you'd like to know?`,
        responseButtons: [
          { id: "b1", label: "Bulk Pricing", action: "bulk_pricing" },
          { id: "b2", label: "Delivery Options", action: "delivery" },
          { id: "b3", label: "Done", action: "done" },
        ],
      }
    }

    if (lowerMessage.includes("bulk") || lowerMessage.includes("discount") || lowerMessage.includes("price")) {
      return {
        response: `Great question! For bulk orders of ${context.productName}, we offer special pricing. The more you order, the better the discount. Our team will provide you with a customized quote based on your specific quantity needs. Would you like to proceed with this quote request?`,
        responseButtons: [
          { id: "b1", label: "Yes, Proceed", action: "confirm_quote" },
          { id: "b2", label: "Ask More Questions", action: "contact" },
        ],
      }
    }

    if (lowerMessage.includes("delivery") || lowerMessage.includes("shipping") || lowerMessage.includes("install")) {
      return {
        response: `Excellent! We provide professional delivery and installation services for ${context.productName}. Delivery times vary by location, typically 5-10 business days. Installation is included for most products. Would you like us to include these services in your quote?`,
        responseButtons: [
          { id: "b1", label: "Yes, Include Services", action: "confirm_quote" },
          { id: "b2", label: "More Details", action: "specifications" },
        ],
      }
    }

    if (lowerMessage.includes("specification") || lowerMessage.includes("spec") || lowerMessage.includes("feature")) {
      return {
        response: `The ${context.productName} comes with comprehensive specifications and features. I can see you're interested in ${context.quantity || 1} unit(s). Our technical team can provide detailed documentation. Shall I add this to your quote request?`,
        responseButtons: [
          { id: "b1", label: "Yes, Request Quote", action: "confirm_quote" },
          { id: "b2", label: "Ask More", action: "contact" },
        ],
      }
    }
  }

  // General responses with contextual buttons
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
    return {
      response:
        "Hello! Welcome to NewHealthMedicals. I'm here to help you find the perfect medical equipment for your needs. What are you looking for today?",
      responseButtons: [
        { id: "b1", label: "Browse Products", action: "browse" },
        { id: "b2", label: "Request Quote", action: "quote" },
      ],
    }
  }

  if (lowerMessage.includes("product") || lowerMessage.includes("equipment")) {
    return {
      response:
        "We offer a wide range of medical equipment including hospital beds, diagnostic tools, surgical instruments, and mobility aids. All products are certified and reliable. Would you like to browse our catalog or discuss a specific product?",
      responseButtons: [
        { id: "b1", label: "Browse Catalog", action: "browse" },
        { id: "b2", label: "Request Quote", action: "quote" },
      ],
    }
  }

  if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
    return {
      response:
        "Our pricing is competitive and transparent. For bulk orders, we offer special discounts. Would you like a quote for specific products? Just let me know the quantity and type of equipment you need.",
      responseButtons: [
        { id: "b1", label: "Request Quote", action: "quote" },
        { id: "b2", label: "Bulk Pricing", action: "bulk_pricing" },
      ],
    }
  }

  if (lowerMessage.includes("contact") || lowerMessage.includes("support")) {
    return {
      response:
        "You can reach our team at:\n📞 Phone: +1 (234) 567-890\n💬 WhatsApp: +1 (234) 567-890\n📧 Email: sales@newhealthmedicals.com\n\nOr I can help you submit a quote request right here!",
      responseButtons: [
        { id: "b1", label: "Request Quote", action: "quote" },
        { id: "b2", label: "Back to Menu", action: "browse" },
      ],
    }
  }

  if (lowerMessage.includes("thank")) {
    return {
      response: "You're welcome! Is there anything else I can help you with today?",
      responseButtons: [
        { id: "b1", label: "Browse Products", action: "browse" },
        { id: "b2", label: "Request Quote", action: "quote" },
      ],
    }
  }

  // Default response
  return {
    response: `Thanks for your message! ${context.productName ? `I see you're interested in ${context.productName}. ` : ""}Our team is here to help. Would you like to request a quote, learn more about our products, or get in touch with our sales team?`,
    responseButtons: [
      { id: "b1", label: "Request Quote", action: "quote" },
      { id: "b2", label: "Browse Products", action: "browse" },
      { id: "b3", label: "Contact Support", action: "contact" },
    ],
  }
}
