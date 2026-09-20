export interface Chat {
  id: number
  name: string
  email: string
  timestamp: number
}

export interface Message {
  role: "user" | "assistant"
  content: string
}

export interface StoredMessage extends Message {
  id: number
  chat_id: number
}

export interface ChatWithMessages extends Chat {
  messages: StoredMessage[]
}