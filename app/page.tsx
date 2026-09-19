import ServerComponent from "./ServerComponent"
import ClientComponent from "./ClientComponent"

export default async function Home() {
  const res = await fetch("https://reqres.in/api/users/2")
  const { data } = await res.json()

  return (
    <main className="mt-5 max-w-xl mx-auto">
      <ServerComponent />
      <ClientComponent name={`${data.first_name} ${data.last_name}`} />
    </main>
  )
}
