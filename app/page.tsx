"use client"
import Chat from "@/components/Chat"
import { Separator } from "@/components/ui/separator"
import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()

  return (
    <main className="mx-auto max-w-xl">
      <h1 className="text-4xl font-bold">Welcome to GPT Chat</h1>
      {!session?.user?.email && (
        <p className="my-5">
          You are not signed in. Please sign in to continue.
        </p>
      )}
      {session?.user?.email && (
        <>
          <Separator className="my-5" />
          <Chat />
        </>
      )}
    </main>
  )
}
