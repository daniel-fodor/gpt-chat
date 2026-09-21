"use client"

import { useState, useRef, useEffect } from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { getCompletion } from "@/actions/getCompletion"
import Transcript from "./Transcript"
import type { Message as AIMessage } from "ai"
import { useChat } from "ai/react"
import { updateChat } from "@/actions/updateChat"
import router from "next/router"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function Chat() {
  const [message, setMessage] = useState("")
  const chatId = useRef<number | null>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      initialMessages: initialMessages as unknown as AIMessage[],
    })

  useEffect(() => {
    (async () => {
      if (!isLoading && messages.length) {
        const simplifiedMessages = messages.map((message) => ({
          role: message.role as "user" | "assistant",
          content: message.content,
        }))
        const newChatId = await updateChat(chatId.current, simplifiedMessages)
        if (chatId.current === null) {
          router.push(`/chats/${newChatId}`)
          router.refresh()
        } else {
          chatId.current = newChatId
        }
      }
    })()
  }, [isLoading, messages, router])

  return (
    <div className="flex flex-col">
      <Transcript messages={messages as AIMessage[]} truncate={false} />

      <div className="flex border-t-2 border-t-gray-500 pt-3 mt-3">
        <form className="flex mt-3" onSubmit={handleSubmit}>
          <Input
            className="flex-grow text-xl"
            placeholder="Question"
            value={input}
            onChange={handleInputChange}
            autoFocus
          />
          <Button type="submit" className="ml-3 text-xl">
            Send
          </Button>
        </form>
      </div>
    </div>
  )
}
