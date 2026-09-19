import ServerComponent from "./ServerComponent"
import ClientComponent from "./ClientComponent"

export default function Home() {
  return (
    <main className="mt-5 max-w-xl mx-auto">
      <ServerComponent />
      <ClientComponent />
    </main>
  )
}
